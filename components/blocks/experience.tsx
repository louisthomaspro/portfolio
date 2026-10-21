import Link from "next/link"

import { experiences } from "@/config/cv"
import { formatYears } from "@/lib/dates"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const featured = experiences.find((item) => item.metrics) ?? experiences[0]
const others = experiences.filter((item) => item !== featured)

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
      <CardContent className="grow flex flex-col gap-3">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <div className="font-semibold">{featured.company}</div>
            <div className="text-xs text-muted-foreground tabular-nums">
              {formatYears(featured.start, featured.end)}
            </div>
          </div>
          <div className="text-muted-foreground">{featured.role}</div>
        </div>
        {featured.metrics && (
          <div className="grid grid-cols-2 gap-2">
            {featured.metrics.map((metric) => (
              <div key={metric.label} className="rounded-md border bg-white/2 px-3 py-2">
                <div className="text-xl font-semibold tracking-tight whitespace-nowrap">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        <ul className="mt-auto flex flex-col divide-y">
          {others.slice(0, 3).map((item) => (
            <li key={item.company} className="flex items-baseline justify-between gap-3 py-2 last:pb-0">
              <div className="min-w-0 truncate">
                <span className="font-medium">{item.company}</span>
                <span className="text-muted-foreground"> · {item.role}</span>
              </div>
              <span className="flex-none text-xs text-muted-foreground tabular-nums">
                {formatYears(item.start, item.end)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
