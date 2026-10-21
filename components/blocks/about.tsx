import { profile } from "@/config/cv"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const About = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle>
          <Icons.about className="h-3.5 mr-2" />À propos
        </CardTitle>
      </CardHeader>
      <CardContent className="grow flex items-end text-pretty leading-relaxed">{profile.pitch}</CardContent>
    </Card>
  )
}
