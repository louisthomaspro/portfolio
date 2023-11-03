"use client"

import { useState } from "react"
import Image from "next/image"

import { stack, tags } from "@/config/stack"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Pill } from "@/components/pill"
import { StackCard } from "@/components/stack-card"

export const Stack = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  const [activeTag, setActiveTag] = useState<null | string>(null)

  const handleTagClick = (tagValue: string) => {
    if (activeTag === tagValue) {
      // If the same tag is clicked again, deactivate it
      setActiveTag(null)
    } else {
      // Otherwise, set the clicked tag as active
      setActiveTag(tagValue)
    }
  }

  const filteredStack = activeTag ? stack.filter((item) => item.tags.includes(activeTag)) : stack

  return (
    <Card className={cn("p-0 flex flex-col", className)} {...props}>
      <CardHeader className="p-3.5">
        <CardTitle>
          <Icons.stack className="h-3.5 mr-2" />
          My stack
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y overflow-auto px-3.5">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((item, index) => (
            <Pill
              variant={"active"}
              key={index}
              active={item.value === activeTag}
              onClick={() => handleTagClick(item.value)}
            >
              {item.label}
            </Pill>
          ))}
        </div>
        <div className="flex flex-col divide-y">
          {filteredStack.map((item, index) => (
            <StackCard key={index} stackItem={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
