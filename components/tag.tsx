import React from "react"

import { cn } from "@/lib/utils"

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(({ className, active, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white/10 rounded-full border border-white/10 justify-center items-center px-3 py-1 inline-flex text-sm cursor-pointer select-none",
      active && "bg-white/20",
      className
    )}
    {...props}
  />
))
Tag.displayName = "Tag"

export { Tag }
