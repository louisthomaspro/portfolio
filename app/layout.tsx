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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Louis Thomas",
      },
    ],
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark")} suppressHydrationWarning>
        {children}
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  )
}
