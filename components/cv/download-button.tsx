"use client"

import { useState } from "react"

import { cvFileName } from "@/config/cv"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const DownloadButton = ({ className }: { className?: string }) => {
  const [pending, setPending] = useState(false)

  const handleDownload = async () => {
    setPending(true)
    try {
      const response = await fetch("/cv.pdf")
      if (!response.ok || response.headers.get("content-type") !== "application/pdf") {
        throw new Error(`PDF generation failed with status ${response.status}`)
      }
      const url = URL.createObjectURL(await response.blob())
      const link = document.createElement("a")
      link.href = url
      link.download = cvFileName
      link.click()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch {
      window.print()
    } finally {
      setPending(false)
    }
  }

  return (
    <Button onClick={handleDownload} disabled={pending} className={cn("rounded-full", className)}>
      {pending ? <Icons.spinner className="mr-2 h-3.5 animate-spin" /> : <Icons.download className="mr-2 h-3.5" />}
      {pending ? "Génération…" : "Télécharger en PDF"}
    </Button>
  )
}
