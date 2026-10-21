"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { stack, tags } from "@/config/stack"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardProps, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Pill } from "@/components/pill"
import { StackCard } from "@/components/stack-card"

const PAGINATION_SIZE = 6

const transition = { type: "spring" as const, stiffness: 500, damping: 45, mass: 1 }

export const Stack = ({ className, ...props }: CardProps) => {
  const [activeTag, setActiveTag] = useState<null | string>(null)
  const [visibleStacks, setVisibleStacks] = useState(PAGINATION_SIZE)

  const handleLoadMore = () => {
    setVisibleStacks((prevVisibleStacks) => prevVisibleStacks + PAGINATION_SIZE)
  }

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
          Ma stack
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col grow min-h-0">
        <div role="group" aria-label="Filtrer la stack" className="flex flex-wrap gap-1.5 mb-2 px-3.5">
          {tags.map((item) => (
            <Pill key={item.value} asChild variant={"active"} active={item.value === activeTag}>
              <button type="button" aria-pressed={item.value === activeTag} onClick={() => handleTagClick(item.value)}>
                {item.label}
              </button>
            </Pill>
          ))}
        </div>
        <ul className="relative flex flex-col grow min-h-0 overflow-y-auto overflow-x-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {filteredStack.map((item, index) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={transition}
                className={cn("border-b last:border-b-0", index >= visibleStacks && "max-lg:hidden")}
              >
                <StackCard stackItem={item} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {visibleStacks < filteredStack.length && (
          <div className="flex justify-center my-4 lg:hidden">
            <Button onClick={handleLoadMore} size={"sm"} variant={"secondary"} className="rounded-full max-w-xs w-full">
              Voir plus
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
