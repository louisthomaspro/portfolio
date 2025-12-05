import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const About = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle>
          <Icons.about className="h-3.5 mr-2" />
          About
        </CardTitle>
      </CardHeader>
      <CardContent className="grow flex items-end">
        I am a dedicated freelance full stack developer specializing in TypeScript. My expertise lies in creating
        efficient, responsive, and visually appealing applications. Let's collaborate and build something awesome.
      </CardContent>
    </Card>
  )
}
