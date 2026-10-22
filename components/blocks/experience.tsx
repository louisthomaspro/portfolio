"use client"

import { useState } from "react"
import Link from "next/link"

import { experiences, ventures } from "@/config/cv"
import { formatYears } from "@/lib/dates"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Experience as ExperienceEntry } from "@/types"

const order = ["SeaLife", "Hinter", "Blime", "Minea", "DBS Bank", "Decathlon Singapore", "Decathlon France"]

const byCompany = new Map<string, ExperienceEntry>(
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
              className="flex items-baseline justify-between gap-3 py-2 text-left first:pt-0 last:pb-0 cursor-pointer"
            >
              <div className={cn("min-w-0", !isExpanded && "truncate")}>
                <span className="font-medium">{item.company}</span>
                <span className="text-muted-foreground"> · {item.role}</span>
              </div>
              <span className="flex-none text-xs text-muted-foreground tabular-nums">
                {formatYears(item.start, item.end)}
              </span>
            </button>
          )
        })}
      </CardContent>
    </Card>
  )
}
