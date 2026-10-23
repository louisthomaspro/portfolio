import { cvFileName } from "@/config/cv"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const DownloadButton = ({ className }: { className?: string }) => (
  <Button asChild className={cn("rounded-full", className)}>
    <a href={`/${cvFileName}`} download={cvFileName}>
      <Icons.download className="mr-2 h-3.5" />
      Télécharger en PDF
    </a>
  </Button>
)
