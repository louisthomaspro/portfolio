import { NextRequest, NextResponse } from "next/server"

import { cvFileNames, hasLocale, localizedPath } from "@/i18n/config"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  const langParam = request.nextUrl.searchParams.get("lang") ?? "fr"
  if (!hasLocale(langParam)) {
    return NextResponse.json({ error: "Invalid lang" }, { status: 400 })
  }

  if (process.env.NODE_ENV !== "development") {
    return NextResponse.redirect(new URL(`/${cvFileNames[langParam]}`, request.url))
  }

  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (!host) {
    return NextResponse.json({ error: "Missing host" }, { status: 400 })
  }

  const protocol =
    request.headers.get("x-forwarded-proto") ??
    (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https")
  const origin = `${protocol}://${host}`
  const pathname = localizedPath(langParam, "/cv")

  try {
    const { renderCvPdf } = await import("@/lib/cv-pdf")
    const pdf = await renderCvPdf(origin, pathname)

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${cvFileNames[langParam]}"`,
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "PDF generation failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
