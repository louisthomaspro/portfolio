import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Projects = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Icons.project className="h-4 mr-2" />
          Selected projects
        </CardTitle>
      </CardHeader>
      <CardContent>...</CardContent>
    </Card>
  )
}
