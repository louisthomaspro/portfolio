import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freelance Full Stack Developer | Next.js Expert",
  description:
    "I am a dedicated freelance full stack developer specializing in Next.js. My expertise lies in creating efficient, responsive, and visually appealing applications. Let's collaborate and build something awesome.",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark")} suppressHydrationWarning>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
