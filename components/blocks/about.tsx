import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const About = ({
  pitch,
  title,
  className,
  ...props
}: CardProps & { pitch: string; title: string }) => {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle>
          <Icons.about className="h-3.5 mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="grow flex items-end text-pretty leading-relaxed">{pitch}</CardContent>
    </Card>
  )
}
