import Link from "next/link"

import { experiences, ventures } from "@/config/cv"
import { formatYears } from "@/lib/dates"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Experience as ExperienceEntry } from "@/types"

const order = ["Hinter", "Blime", "Minea", "DBS Bank", "Decathlon Singapore", "Decathlon France"]

const byCompany = new Map<string, ExperienceEntry>(
  [...ventures, ...experiences].map((item) => [item.company, item])
)

const items = order.flatMap((company) => {
  const item = byCompany.get(company)
  return item ? [item] : []
})

export const Experience = ({ className, ...props }: CardProps) => {
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
      <CardContent className="mt-auto flex flex-col divide-y">
        {items.map((item) => (
          <div key={item.company} className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
            <div className="min-w-0 truncate">
              <span className="font-medium">{item.company}</span>
              <span className="text-muted-foreground"> · {item.role}</span>
            </div>
            <span className="flex-none text-xs text-muted-foreground tabular-nums">
              {formatYears(item.start, item.end)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
