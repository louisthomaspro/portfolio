"use client"

import { cn } from "@/lib/utils"
import { Card, CardProps } from "@/components/ui/card"
import Dither from "@/components/Dither"

export const DitherPanel = ({ className, ...props }: CardProps) => {
  return (
    <Card
      className={cn("h-80 overflow-hidden p-0 lg:h-full", className)}
      {...props}
    >
      <Dither
        className="h-full"
        waveColor="#bcbcbc"
        backgroundColor="transparent"
        enableMouseInteraction={false}
        clickRipple={false}
      />
    </Card>
  )
}
