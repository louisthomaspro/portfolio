"use client"

import { useState } from "react"
import Link from "next/link"
import { Experience as ExperienceEntry, Venture } from "@/types"

import { Locale, localizedPath } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"
import { formatYears } from "@/lib/dates"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const order = ["Hinter", "Blime", "Minea", "DBS Bank", "Decathlon"]

export const Experience = ({
  lang,
  ventures,
  experiences,
  experienceLabel,
  fullCvLabel,
  dates,
  className,
  ...props
}: CardProps & {
  lang: Locale
  ventures: Venture[]
  experiences: ExperienceEntry[]
  experienceLabel: string
  fullCvLabel: string
  dates: Dictionary["ui"]["dates"]
}) => {
  const [expanded, setExpanded] = useState<string | null>(null)

  const byCompany = new Map<string, ExperienceEntry | Venture>(
    [...ventures, ...experiences].map((item) => [item.company, item])
  )

  const items = order.flatMap((company) => {
    const item = byCompany.get(company)
    return item ? [item] : []
  })

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>
          <Icons.experience className="h-3.5 mr-2" />
          {experienceLabel}
        </CardTitle>
        <Link
          href={localizedPath(lang, "/cv")}
          className="group flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {fullCvLabel}
          <Icons.arrowRight className="ml-1.5 h-2.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </CardHeader>
      <CardContent className="mt-auto flex min-h-0 flex-col divide-y overflow-y-auto">
        {items.map((item) => {
          const isExpanded = expanded === item.company
          const note = "note" in item ? item.note : undefined
          return (
            <button
              key={item.company}
              type="button"
              aria-expanded={isExpanded}
              onClick={() => setExpanded(isExpanded ? null : item.company)}
              className="flex flex-col py-2 text-left first:pt-0 last:pb-0 cursor-pointer"
            >
              <span className="flex items-baseline justify-between gap-3">
                <span className={cn("min-w-0", !isExpanded && "truncate")}>
                  <span className="font-medium">{item.company}</span>
                  {item.location && <span className="text-muted-foreground"> · {item.location}</span>}
                  <span className="text-muted-foreground"> · {item.role}</span>
                </span>
                <span className="flex-none text-xs text-muted-foreground tabular-nums">
                  {formatYears(item.start, item.end, lang, dates)}
                </span>
              </span>
              {note ? (
                <span className="text-xs leading-4 text-muted-foreground">{note}</span>
              ) : null}
            </button>
          )
        })}
      </CardContent>
    </Card>
  )
}
