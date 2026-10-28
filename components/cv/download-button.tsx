import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const DownloadButton = ({
  href,
  cvFileName,
  label,
  className,
}: {
  href: string
  cvFileName: string
  label: string
  className?: string
}) => (
  <Button asChild className={cn("rounded-full", className)}>
    <a href={href} download={cvFileName}>
      <Icons.download className="mr-2 h-3.5" />
      {label}
    </a>
  </Button>
)
