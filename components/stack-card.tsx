import Image from "next/image"
import { StackItem } from "@/types"

import { cn } from "@/lib/utils"

export const StackCard = ({ stackItem, className }: { stackItem: StackItem; className?: string }) => (
  <div className={cn("py-2.5 px-3.5 justify-start items-center gap-4 flex hover:bg-accent", className)}>
    <Image className="w-7 h-7 object-contain" width={70} height={70} src={stackItem.imageSrc} alt={stackItem.title} />
    <div className="text-sm">
      <div className="font-semibold">{stackItem.title}</div>
      <div className="line-clamp-1">{stackItem.description}</div>
    </div>
  </div>
)
