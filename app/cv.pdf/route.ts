import { NextRequest } from "next/server"
import chromium from "@sparticuz/chromium"
import puppeteer from "puppeteer-core"

import { cvFileName } from "@/config/cv"

export const runtime = "nodejs"
export const maxDuration = 60

const LOCAL_CHROME_PATHS: Partial<Record<NodeJS.Platform, string>> = {
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
      defaultViewport: null,
    })
  }

  const executablePath = process.env.CHROME_PATH ?? LOCAL_CHROME_PATHS[process.platform]
  if (!executablePath) throw new Error("Set CHROME_PATH to generate the CV locally")

  return puppeteer.launch({ executablePath, headless: true, defaultViewport: null })
}

export async function GET(request: NextRequest) {
  const browser = await launchBrowser()

  try {
    const page = await browser.newPage()
    await page.goto(new URL("/cv", request.nextUrl.origin).toString(), { waitUntil: "networkidle0" })
    await page.evaluate(async () => {
      await document.fonts.ready
    })

    const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true })

    return new Response(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${cvFileName}"`,
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } finally {
    await browser.close()
  }
}
