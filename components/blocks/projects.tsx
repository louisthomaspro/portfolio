import { MotionProps } from "framer-motion"

import { projects } from "@/config/projects"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"

type CardProps = React.ComponentPropsWithoutRef<"div"> & MotionProps

export const Projects = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("p-0 flex flex-col", className)} {...props}>
      <CardHeader className="p-3.5">
        <CardTitle>
          <Icons.project className="h-3.5 mr-2" />
          Selected side projects
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y overflow-auto px-3.5">
        {projects.map((item, index) => (
          <div key={index}>
            <ProjectCard project={item} className="-mx-3.5" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
