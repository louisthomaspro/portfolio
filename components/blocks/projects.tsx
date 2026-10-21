import { ventures } from "@/config/cv"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"

export const Projects = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("p-0 flex flex-col", className)} {...props}>
      <CardHeader className="p-3.5 pb-1">
        <CardTitle>
          <Icons.project className="h-3.5 mr-2" />
          Projets
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y overflow-auto px-3.5">
        {ventures.map((item) => (
          <ProjectCard key={item.company} project={item} className="-mx-3.5" />
        ))}
      </CardContent>
    </Card>
  )
}
