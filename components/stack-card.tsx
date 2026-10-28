import Image from "next/image"
import Link from "next/link"
import { StackItem } from "@/types"

import { cn } from "@/lib/utils"

export type StackCardItem = Omit<StackItem, "description" | "tags"> & {
  description: string
}

export const StackCard = ({ stackItem, className }: { stackItem: StackCardItem; className?: string }) => (
  <Link
    href={stackItem.url}
    target="_blank"
    className={cn("py-2.5 px-3.5 justify-start items-center gap-4 flex hover:bg-accent transition-colors", className)}
  >
    {"path" in stackItem.icon ? (
      <svg
        viewBox={stackItem.icon.viewBox ?? "0 0 24 24"}
        className="size-7 flex-none"
        fill={`#${stackItem.icon.hex}`}
        aria-hidden
      >
        <path d={stackItem.icon.path} />
      </svg>
    ) : (
      <Image className="size-7 flex-none object-contain" width={28} height={28} src={stackItem.icon} alt="" />
    )}
    <div className="text-sm min-w-0">
      <div className="font-semibold">{stackItem.title}</div>
      <div className="line-clamp-1 text-muted-foreground">{stackItem.description}</div>
    </div>
  </Link>
)
