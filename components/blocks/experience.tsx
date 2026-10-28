"use client"

import { useState } from "react"
import Link from "next/link"
import { Experience as ExperienceEntry, Venture } from "@/types"

import { experiences, ventures } from "@/config/cv"
import { formatYears } from "@/lib/dates"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const order = [
  // "SeaLife",
  "Hinter",
  "Blime",
  "Minea",
  "DBS Bank",
  "Decathlon Singapore",
  "Decathlon France",
]

const byCompany = new Map<string, ExperienceEntry | Venture>(
  [...ventures, ...experiences].map((item) => [item.company, item])
)

const items = order.flatMap((company) => {
  const item = byCompany.get(company)
  return item ? [item] : []
})

export const Experience = ({ className, ...props }: CardProps) => {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>
          <Icons.experience className="h-3.5 mr-2" />
          Expérience
        </CardTitle>
        <Link
          href="/cv"
          className="group flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          CV complet
          <Icons.arrowRight className="ml-1.5 h-2.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </CardHeader>
      <CardContent className="mt-auto flex min-h-0 flex-col divide-y overflow-y-auto">
        {items.map((item) => {
          const isExpanded = expanded === item.company
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
                  {formatYears(item.start, item.end)}
                </span>
              </span>
              {"summary" in item && item.description?.includes("menée jusqu’au stade prototype") ? (
                <span className="text-xs leading-4 text-muted-foreground">Menée jusqu’au stade prototype.</span>
              ) : null}
            </button>
          )
        })}
      </CardContent>
    </Card>
  )
}
