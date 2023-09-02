"use client"

import { useState } from "react"
import Image from "next/image"
import vercelImg from "@/public/stack/vercel.svg"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Tag } from "@/components/tag"

const stack = [
  {
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    logo: vercelImg,
    tags: ["favorite", "framework", "hosting"],
  },
  {
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    logo: vercelImg,
    tags: ["framework", "hosting"],
  },
  {
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    logo: vercelImg,
    tags: ["design"],
  },
]

// Add prismic
const tags = [
  {
    label: "♥",
    value: "favorite",
  },
  {
    label: "Web framework",
    value: "framework",
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Hosting",
    value: "hosting",
  },
  {
    label: "Productivity",
    value: "productivity",
  },
  {
    label: "Database",
    value: "database",
  },
]

export const Stack = ({ className }: { className?: string }) => {
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
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Icons.stack className="h-4 mr-2" />
          My stack
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((item, index) => (
            <Tag key={index} active={item.value === activeTag} onClick={() => handleTagClick(item.value)}>
              {item.label}
            </Tag>
          ))}
        </div>
        <div className="flex flex-col px-2 bg-neutral-800 rounded-2xl border border-white/10">
          {filteredStack.map((item, index) => (
            <div key={index} className="py-2.5 border-b border-white/10 justify-start items-center gap-4 inline-flex">
              <Image className="w-8 h-8" src={item.logo} alt={item.title} />
              <div className="text-sm">
                <div className="font-semibold">NextJS</div>
                <div>Framework built on top of React</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
