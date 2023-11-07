import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Pill } from "@/components/pill"

export const ProjectCard = ({ project, className }: { project: Project; className?: string }) => {
  return (
    <Link
      className={cn("flex px-3.5 py-2 gap-3 hover:bg-accent transition-colors cursor-pointer", className)}
      href={project.url}
      target="_blank"
    >
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
      <div className="flex items-center">
        <Icons.chevronRight className="h-3.5 mr-2" />
      </div>
    </Link>
  )
}
