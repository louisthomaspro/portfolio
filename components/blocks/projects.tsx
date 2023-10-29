import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Projects = ({ className }: { className?: string }) => {
  // const projects: IProject[] = [
  //   {
  //     url: "https://sea-life.vercel.app/",
  //     title: "Sea Life - Explore la vie marine",
  //     imageUrl: "https://github.com/louisthomaspro/sea-life/raw/main/public/screenshots/preview.jpg",
  //     description: "Explore the marine life of many places with more than 1000 cards of common or unusual species.",
  //     tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  //   },
  //   {
  //     url: "https://sea-life.vercel.app/",
  //     title: "Sea Life - Explore la vie marine",
  //     imageUrl: "https://github.com/louisthomaspro/sea-life/raw/main/public/screenshots/preview.jpg",
  //     description: "Explore the marine life of many places with more than 1000 cards of common or unusual species.",
  //     tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  //   },
  //   {
  //     url: "https://sea-life.vercel.app/",
  //     title: "Sea Life - Explore la vie marine",
  //     imageUrl: "https://github.com/louisthomaspro/sea-life/raw/main/public/screenshots/preview.jpg",
  //     description: "Explore the marine life of many places with more than 1000 cards of common or unusual species.",
  //     tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
  //   },
  // ]

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Icons.project className="h-3.5 mr-2" />
          Selected projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        Projects
        {/* <div className={"flex gap-2"}>
          {projects.map((item, index) => (
            <ProjectCard key={index} blog={item} />
          ))}
        </div> */}
      </CardContent>
    </Card>
  )
}
