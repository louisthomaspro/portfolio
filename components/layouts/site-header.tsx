"use client"

import Image from "next/image"
import Link from "next/link"
import profile from "@/public/profile.jpg"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const SiteHeader = () => {
  return (
    <header className={`flex items-start md:items-center w-full justify-between flex-col md:flex-row gap-4`}>
      <div className="flex space-x-4">
        <Image src={profile} alt="logo" className="h-14 w-14 rounded-full" />
        <div className="flex flex-col">
          <div className="text-xl font-semibold">Louis THOMAS</div>
          <div className="opacity-60">Remote Fullstack Developer - &#123;NextJS / ReactJS&#125;</div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex space-x-3">
          <Link href={"https://twitter.com/louisthomaspro"} target="_blank">
            <Icons.twitter className="h-6" />
          </Link>
          <Link href={"https://github.com/louisthomaspro"} target="_blank">
            <Icons.github className="h-6" />
          </Link>
          <Link href={"https://www.linkedin.com/in/louis-thomas"} target="_blank">
            <Icons.linkedIn className="h-6" />
          </Link>
        </div>
        <Button variant={"outline"} className="group">
          Résumé
          <Icons.externalLink className="ml-2 h-3 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] group-focus-visible:translate-y-[-2px] group-focus-visible:translate-x-[2px]" />
        </Button>
      </div>
    </header>
  )
}
