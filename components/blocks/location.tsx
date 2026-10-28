"use client"

import { useSyncExternalStore } from "react"
import dynamic from "next/dynamic"

import { intlLocales, Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const LocationMap = dynamic(() => import("@/components/blocks/location-map"), { ssr: false })

const COORDINATES = [43.116669, 5.93333]

const TIME_ZONE = "Europe/Paris"

const getLocalTime = (lang: Locale) => {
  const timeFormatter = new Intl.DateTimeFormat(intlLocales[lang], {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
  const offsetFormatter = new Intl.DateTimeFormat(intlLocales[lang], { timeZone: TIME_ZONE, timeZoneName: "shortOffset" })
  const now = new Date()
  const offset = offsetFormatter.formatToParts(now).find((part) => part.type === "timeZoneName")?.value
  return `${timeFormatter.format(now)} (${offset})`
}

const subscribeToClock = (onChange: () => void) => {
  const tick = () => onChange()
  tick()
  const intervalId = setInterval(tick, 1000)
  return () => clearInterval(intervalId)
}

export const Location = ({
  lang,
  location,
  workMode,
  title,
  className,
  ...props
}: CardProps & { lang: Locale; location: string; workMode: string; title: string }) => {
  const time = useSyncExternalStore(
    subscribeToClock,
    () => getLocalTime(lang),
    () => null
  )

  return (
    <Card className={cn("relative p-0 overflow-hidden", className)} {...props}>
      <CardHeader className="p-3.5 absolute z-30">
        <CardTitle>
          <Icons.location className="h-3.5 mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="absolute size-full">
        <div className="flex-1 h-full overflow-hidden relative bg-[radial-gradient(circle_at_50%_60%,#2a292b_0%,transparent_65%)] before:absolute before:inset-0 before:z-10 before:pointer-events-none before:bg-linear-to-t before:from-black/80 before:via-transparent before:to-transparent after:absolute after:inset-x-0 after:top-0 after:z-10 after:h-16 after:pointer-events-none after:bg-linear-to-b after:from-black/90 after:to-transparent">
          <LocationMap latitude={COORDINATES[0]} longitude={COORDINATES[1]} />
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          <div className="flex flex-col p-3.5 text-xs opacity-90">
            <div className="font-semibold">{location}</div>
            <div className="text-muted-foreground">{workMode}</div>
            <div className="font-mono tabular-nums text-muted-foreground">{time ?? "\u00a0"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
