"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const SiteHeader = ({ className }: { className?: string }) => {
  return (
    <header
      className={cn(`flex items-start md:items-center w-full justify-between flex-col md:flex-row gap-4`, className)}
    >
      <div className="flex space-x-4">
        <div className="h-12 w-12">
          <Image src="/profile.jpg" priority width={50} height={50} alt="logo" className="h-full w-full rounded-full" />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Louis THOMAS</div>
          <div className="opacity-60 text-sm">Remote Fullstack Developer - &#123;NextJS / ReactJS&#125;</div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex gap-1">
          <Link
            href={"https://twitter.com/louisthomaspro"}
            target="_blank"
            className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.twitter className="h-[22px]" />
          </Link>
          <Link
            href={"https://github.com/louisthomaspro"}
            target="_blank"
            className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.github className="h-[22px] " />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/louis-thomas"}
            target="_blank"
            className="flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.linkedIn className="h-[22px]" />
          </Link>
        </div>
        <Link href="/Resume - Louis THOMAS.pdf" target="_blank">
          <Button variant={"outline"} className="group">
            Résumé
            <Icons.externalLink className="ml-2 h-3 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] group-focus-visible:translate-y-[-2px] group-focus-visible:translate-x-[2px]" />
          </Button>
        </Link>
      </div>
    </header>
  )
}
