"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Pill } from "@/components/pill"

export const ProjectCard = ({ project, className }: { project: Project; className?: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn("relative px-3.5 py-4 hover:bg-accent transition-colors", className)}
      onClick={() => setOpen(!open)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={cn("cursor-pointer flex gap-3 transition-all", open && "opacity-20 blur-sm")}>
        <div className="w-12 h-12 flex-none">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={70}
            height={70}
            className="object-cover w-full h-full rounded-xl"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="text-lg font-semibold truncate mb-1">{project.title}</div>
          <div className="opacity-60 text-sm line-clamp-2 mb-2">{project.description}</div>
          <div className="flex gap-1">
            {project.tags.map((tag, index) => (
              <Pill key={index}>{tag}</Pill>
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "absolute top-0 w-full h-full items-center justify-center opacity-0 hidden transition-opacity -mx-3.5",
          open && "flex opacity-100"
        )}
      >
        <div className="flex gap-1">
          {project.urls.website && (
            <Link
              href={project.urls.website}
              target="_blank"
              aria-label="Website"
              className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.website className="h-[22px] " />
            </Link>
          )}
          {project.urls.plugin && (
            <Link
              href={project.urls.plugin}
              target="_blank"
              aria-label="Github"
              className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.plugin className="h-[22px] " />
            </Link>
          )}
          {project.urls.playStore && (
            <Link
              href={project.urls.playStore}
              target="_blank"
              aria-label="Github"
              className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.playStore className="h-[22px] " />
            </Link>
          )}
          {project.urls.figma && (
            <Link
              href={project.urls.figma}
              target="_blank"
              aria-label="Github"
              className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.figma className="h-[22px] " />
            </Link>
          )}
          {project.urls.github && (
            <Link
              href={project.urls.github}
              target="_blank"
              aria-label="Github"
              className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.github className="h-[22px] " />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
