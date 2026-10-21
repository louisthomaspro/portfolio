import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.css"

import { profile } from "@/config/cv"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

const title = `${profile.name} | Lead Dev Fullstack TypeScript`

export const metadata: Metadata = {
  metadataBase: new URL(profile.website.url),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description: profile.pitch,
  authors: [{ name: profile.name, url: profile.website.url }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: profile.headline,
    locale: "fr_FR",
    type: "website",
    url: profile.website.url,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.headline,
  },
}

export const viewport: Viewport = {
  themeColor: "#151415",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={cn(inter.className, "antialiased")} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
