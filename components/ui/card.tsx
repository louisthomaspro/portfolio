import * as React from "react"

import { cn } from "@/lib/utils"

export type CardProps = React.ComponentPropsWithoutRef<"div"> & { delay?: number }

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, delay = 0, style, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms`, ...style }}
      className={cn(
        "animate-enter motion-reduce:animate-none rounded-lg border text-card-foreground shadow-xs p-3.5 bg-linear-to-tr from-[#21202236] to-[#212022d0]",
        "hover:bg-[#212022]/50 hover:border-[#2d2d2d] transition-colors duration-300",
        // "bg-card",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 pb-3.5", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("flex items-center text-sm leading-none", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("text-sm", className)} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
