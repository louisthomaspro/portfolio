"use client"

import { useState } from "react"
import { AnimatePresence, motion, usePresence } from "framer-motion"

import { stack, tags } from "@/config/stack"
import useWindowSize from "@/lib/hooks/use-windows-size"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Pill } from "@/components/pill"
import { StackCard } from "@/components/stack-card"

const PAGINATION_SIZE = 6
const PAGINATION_BREAKPOINT = 1024

export const Stack = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  const [activeTag, setActiveTag] = useState<null | string>(null)
  const [visibleStacks, setVisibleStacks] = useState(PAGINATION_SIZE)
  const { width } = useWindowSize()
  const [isPresent, safeToRemove] = usePresence()

  const transition = { type: "spring", stiffness: 500, damping: 60, mass: 1 }

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
          My stack
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col overflow-auto h-full">
        <div className="flex flex-wrap gap-1.5 mb-2 px-3.5">
          {tags.map((item, index) => (
            <Pill
              variant={"active"}
              key={index}
              active={item.value === activeTag}
              onClick={() => handleTagClick(item.value)}
              className={cn(index === 0 && "data-[state=active]:bg-[#b33e50]")}
            >
              {item.label}
            </Pill>
          ))}
        </div>
        {!!width && (
          <>
            <div className="flex flex-col divide-y overflow-y-auto overflow-x-hidden z-10 px-3.5 h-full">
              <AnimatePresence>
                {filteredStack
                  .slice(0, width >= PAGINATION_BREAKPOINT ? filteredStack.length : visibleStacks)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      className="-mx-3.5"
                      layout={true}
                      initial={"out"}
                      style={{ position: isPresent ? "static" : "absolute" }}
                      animate={isPresent ? "in" : "out"}
                      variants={{
                        in: { opacity: 1 },
                        out: { opacity: 0, zIndex: -1 },
                      }}
                      onAnimationComplete={() => !isPresent && safeToRemove()}
                      transition={transition}
                    >
                      <StackCard stackItem={item} />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
            {visibleStacks < filteredStack.length && width < PAGINATION_BREAKPOINT && (
              <div className="flex justify-center my-4">
                <Button
                  onClick={handleLoadMore}
                  size={"sm"}
                  variant={"secondary"}
                  className="rounded-full max-w-xs w-full"
                >
                  View More
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
