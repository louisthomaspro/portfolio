import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import chromium from "@sparticuz/chromium"
import puppeteer from "puppeteer-core"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const port = Number(process.env.CV_PORT ?? 3999)
const origin = process.env.CV_ORIGIN ?? `http://127.0.0.1:${port}`
const output = path.join(root, "public", "cv.pdf")

const LOCAL_CHROME_PATHS = {
  win32: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  linux: "/usr/bin/google-chrome",
}

const launchBrowser = async () => {
  if (process.env.VERCEL) {
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
      defaultViewport: { width: 794, height: 1123 },
    })
  }

  const executablePath = process.env.CHROME_PATH ?? LOCAL_CHROME_PATHS[process.platform]
  if (!executablePath || !existsSync(executablePath)) {
    throw new Error("Set CHROME_PATH to a Chrome executable to generate the CV")
  }

  return puppeteer.launch({
    executablePath,
    headless: true,
    defaultViewport: { width: 794, height: 1123 },
  })
}

const waitFor = async (url) => {
  const deadline = Date.now() + 60_000
  let lastError = "no response"

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url)
      if (response.ok) return
      lastError = `status ${response.status}`
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error)
    }
    await new Promise((resolve) => setTimeout(resolve, 250))
  }

  throw new Error(`Timed out waiting for ${url} (${lastError})`)
}

const startServer = () => {
  const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next")
  return spawn(process.execPath, [nextBin, "start", "-H", "127.0.0.1", "-p", String(port)], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  })
}

const stopServer = async (child) => {
  if (!child || child.exitCode !== null) return

  child.kill()
  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      child.kill("SIGKILL")
      resolve()
    }, 5_000)
    child.once("exit", () => {
      clearTimeout(timer)
      resolve()
    })
  })
}

const generate = async () => {
  const browser = await launchBrowser()

  try {
    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(60_000)
    await page.goto(new URL("/cv", origin).toString(), { waitUntil: "load" })
    await page.emulateMediaType("print")
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(
        [...document.images].map(
          (image) =>
            image.complete ||
            new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true })
              image.addEventListener("error", resolve, { once: true })
            })
        )
      )
    })

    const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true })
    if (pdf.length < 1_000) throw new Error(`Generated CV is unexpectedly small (${pdf.length} bytes)`)

    await mkdir(path.dirname(output), { recursive: true })
    await writeFile(output, pdf)
    console.log(`Wrote ${output} (${pdf.length} bytes)`)
  } finally {
    await browser.close()
  }
}

const main = async () => {
  const server = process.env.CV_ORIGIN ? null : startServer()
  let finished = false

  if (server) {
    server.once("exit", (code) => {
      if (!finished) {
        console.error(`next start exited before the CV was generated (code ${code ?? "null"})`)
        process.exit(1)
      }
    })
  }

  try {
    await waitFor(new URL("/cv", origin).toString())
    await generate()
  } finally {
    finished = true
    await stopServer(server)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
