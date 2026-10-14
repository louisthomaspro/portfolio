import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types"

import { cn } from "@/lib/utils"
import { Pill } from "@/components/pill"

export const ProjectCard = ({ project, className }: { project: Project; className?: string }) => {
  const content = (
    <>
      <div className="w-12 h-12 flex-none">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={70}
          height={70}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <div className="text-lg font-semibold truncate mb-1">{project.title}</div>
        <div className="opacity-60 text-sm mb-2">{project.description}</div>
        <div className="flex gap-1 flex-wrap">
          {project.tags.map((tag, index) => (
            <Pill key={index}>{tag}</Pill>
          ))}
        </div>
      </div>
    </>
  )

  if (!project.website) {
    return <div className={cn("relative flex gap-3 px-3.5 py-4", className)}>{content}</div>
  }

  return (
    <Link
      href={project.website}
      target="_blank"
      className={cn("relative flex gap-3 px-3.5 py-4 transition-colors hover:bg-accent", className)}
    >
      {content}
    </Link>
  )
}
