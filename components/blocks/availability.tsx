import type { Dictionary } from "@/i18n/dictionaries/fr"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Availability = ({
  profile,
  availableLabel,
  contactMeLabel,
  className,
  ...props
}: CardProps & { profile: Dictionary["profile"]; availableLabel: string; contactMeLabel: string }) => {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle>
          <span className="relative flex-none mr-2 flex size-2.5">
            <span className="motion-safe:animate-ping absolute inline-flex size-full rounded-full bg-[#3baf4f] opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-[#3baf4f]" />
          </span>
          {availableLabel}
        </CardTitle>
      </CardHeader>
      <CardContent className="grow flex flex-col gap-3 justify-end">
        <p className="text-pretty leading-relaxed">{profile.availability}</p>
        <Button asChild variant={"outline"} size={"sm"} className="group w-full rounded-full">
          <a href={profile.linkedin.url} target="_blank">
            {contactMeLabel}
            <Icons.externalLink className="ml-2 h-3 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] group-focus-visible:translate-y-[-2px] group-focus-visible:translate-x-[2px]" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
