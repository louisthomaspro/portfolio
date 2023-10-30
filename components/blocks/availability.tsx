import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Availability = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle>
          <span className="flex-none mr-2 rounded-full h-2.5 w-2.5 bg-[#af3b3b]"></span>
          Availability
        </CardTitle>
      </CardHeader>
      <CardContent className="grow flex flex-col gap-3 justify-end">
        <p>Temporarily unavailable for new projects due to current workload.</p>
        <Button variant={"outline"} size={"sm"} className="group w-full rounded-full">
          Contact me
          <Icons.externalLink className="ml-2 h-3 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] group-focus-visible:translate-y-[-2px] group-focus-visible:translate-x-[2px]" />
        </Button>
      </CardContent>
    </Card>
  )
}
