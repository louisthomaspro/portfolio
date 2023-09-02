import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export const Terminal = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <CardContent>...</CardContent>
    </Card>
  )
}
