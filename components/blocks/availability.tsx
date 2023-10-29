import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Availability = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle>
          <span className="flex-none mr-2 rounded-full h-3 w-3 bg-[#cb9349]"></span>
          Availability
        </CardTitle>
      </CardHeader>
      <CardContent className="grow flex flex-col gap-3 items-end">
        <p>Temporarily unavailable for new projects due to current workload.</p>
        <Button variant={"outline"} size={"sm"} className="group w-full rounded-full">
          Contact me
          <Icons.externalLink className="ml-2 h-3 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] group-focus-visible:translate-y-[-2px] group-focus-visible:translate-x-[2px]" />
        </Button>
      </CardContent>
    </Card>
  )
}
