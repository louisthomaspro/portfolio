import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.css"

import { siteUrl } from "@/i18n/config"
import { getRequestLocale } from "@/i18n/request-locale"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
}

export const viewport: Viewport = {
  themeColor: "#151415",
  colorScheme: "dark",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getRequestLocale()

  return (
    <html lang={lang} className="dark">
      <body className={cn(inter.className, "antialiased")} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
