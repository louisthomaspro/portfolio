"use client"

import { cn } from "@/lib/utils"
import { About } from "@/components/blocks/about"
import { Album } from "@/components/blocks/album"
import { Availability } from "@/components/blocks/availability"
import { Location } from "@/components/blocks/location"
import { Projects } from "@/components/blocks/projects"
import { Stack } from "@/components/blocks/stack"
import { SiteHeader } from "@/components/layouts/site-header"

export default function Home() {
  return (
    <div className="flex flex-col items-center container h-screen">
      <div className="py-10 lg:my-auto content-center">
        <SiteHeader className="mb-10" />
        <div
          className={cn(
            "grid grid-cols-1 gap-4 auto-rows-[auto]",
            "sm:grid-cols-2",
            "md:grid-cols-4",
            "lg:grid-cols-6 lg:grid-rows-[190px_300px]"
          )}
        >
          <Availability className="col-span-1" transition={{ delay: 0 }} />
          <About className="col-span-1 md:col-span-2" transition={{ delay: 0.05 }} />
          <Location
            className="col-span-1 sm:col-span-2 md:col-span-1 min-h-[200px] md:min-h-0"
            transition={{ delay: 0.05 }}
          />
          <Stack
            className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 lg:row-span-2"
            transition={{ delay: 0.2 }}
          />
          <Album
            className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 aspect-[16/9] lg:aspect-auto"
            transition={{ delay: 0.1 }}
          />
          <Projects className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2" transition={{ delay: 0.15 }} />
        </div>
      </div>
    </div>
  )
}
