import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pillVariants = cva("block truncate", {
  variants: {
    variant: {
      default:
        "bg-accent border-[#424242] rounded-full border justify-center items-center px-2 py-0.5 inline-flex text-sm",

      active:
        "bg-accent/40 border-input rounded-full border justify-center items-center px-2 py-0.5 inline-flex text-sm cursor-pointer select-none data-[state=active]:bg-accent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface PillProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pillVariants> {
  asChild?: boolean
  active?: boolean
}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, active, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(pillVariants({ variant, className }))}
        data-state={active ? "active" : undefined}
        ref={ref}
        {...props}
      />
    )
  }
)
Pill.displayName = "Pill"

export { Pill, pillVariants }

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
}
