import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://louisthomas.pro"),
  openGraph: {
    title: "Louis Thomas | Freelance Next.js",
    description:
      "I am a dedicated freelance full stack developer specializing in Next.js. My expertise lies in creating efficient, responsive, and visually appealing applications. Let's collaborate and build something awesome.",
    locale: "en_US",
    type: "website",
    url: "https://louisthomas.pro",
    siteName: "Louis Thomas | Freelance Next.js",
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className)} suppressHydrationWarning>
        {children}
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  )
}
