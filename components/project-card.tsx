import Image from "next/image"
import Link from "next/link"
import { Venture } from "@/types"

import { formatYears } from "@/lib/dates"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export const ProjectCard = ({ project, className }: { project: Venture; className?: string }) => {
  const content = (
    <>
      <div className="size-10 flex-none overflow-hidden rounded-xl border bg-white/3">
        {project.logo ? (
          <Image src={project.logo} alt={project.company} sizes="40px" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-sm font-semibold text-muted-foreground">
            {project.company.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-col min-w-0 grow">
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-center min-w-0 gap-1.5">
            <span className="font-semibold truncate">{project.company}</span>
            {project.website && (
              <Icons.externalLink className="h-2.5 flex-none text-muted-foreground transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
            )}
          </div>
          <span className="flex-none text-xs text-muted-foreground tabular-nums">
            {formatYears(project.start, project.end)}
          </span>
        </div>
        <div className="text-xs text-muted-foreground mb-1">{project.role}</div>
        <p className="text-muted-foreground/90 line-clamp-2 text-pretty">{project.summary}</p>
      </div>
    </>
  )

  if (!project.website) {
    return <div className={cn("relative flex gap-3 px-3.5 py-3", className)}>{content}</div>
  }

  return (
    <Link
      href={project.website}
      target="_blank"
      className={cn("group relative flex gap-3 px-3.5 py-3 transition-colors hover:bg-accent", className)}
    >
      {content}
    </Link>
  )
}
