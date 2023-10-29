import React from "react"

import { cn } from "@/lib/utils"

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(({ className, active, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-accent/40 border-input rounded-full border justify-center items-center px-2 py-0.5 inline-flex text-sm cursor-pointer select-none",
      active && "bg-accent",
      className
    )}
    {...props}
  />
))
Tag.displayName = "Tag"

export { Tag }
