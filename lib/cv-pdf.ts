import { existsSync } from "node:fs"
import puppeteer from "puppeteer-core"

const LOCAL_CHROME_PATHS: Partial<Record<NodeJS.Platform, string>> = {
  win32: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  linux: "/usr/bin/google-chrome",
}

const launchBrowser = async () => {
  const executablePath = process.env.CHROME_PATH ?? LOCAL_CHROME_PATHS[process.platform]
  if (!executablePath || !existsSync(executablePath)) {
    throw new Error("Set CHROME_PATH to a Chrome executable to generate the CV PDF")
  }

  return puppeteer.launch({
    executablePath,
    headless: true,
    defaultViewport: { width: 794, height: 1123 },
  })
}

export const renderCvPdf = async (origin: string, pathname: string) => {
  const browser = await launchBrowser()
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(60_000)

  try {
    await page.goto(new URL(pathname, origin).toString(), { waitUntil: "load" })
    await page.emulateMediaType("print")
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(
        [...document.images].map(
          (image) =>
            image.complete ||
            new Promise<void>((resolve) => {
              image.addEventListener("load", () => resolve(), { once: true })
              image.addEventListener("error", () => resolve(), { once: true })
            })
        )
      )
    })

    const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true })
    if (pdf.length < 1_000) {
      throw new Error(`Generated CV is unexpectedly small (${pdf.length} bytes)`)
    }
    return pdf
  } finally {
    await page.close()
    await browser.close()
  }
}
