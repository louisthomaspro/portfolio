import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.includes(".")) return NextResponse.next()

  if (pathname === "/fr") {
    return NextResponse.redirect(new URL("/", request.url), 308)
  }

  if (pathname === "/fr/cv") {
    return NextResponse.redirect(new URL("/cv", request.url), 308)
  }

  const headers = new Headers(request.headers)
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr"
  headers.set("x-lang", lang)

  return NextResponse.next({ request: { headers } })
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
}
