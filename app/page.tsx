import { About } from "@/components/blocks/about"
import { Availability } from "@/components/blocks/availability"
import { Blog } from "@/components/blocks/blog/blog"
import { Location } from "@/components/blocks/location"
import { Projects } from "@/components/blocks/projects"
import { Stack } from "@/components/blocks/stack"
import { SiteHeader } from "@/components/layouts/site-header"

export default function Home() {
  return (
    <div className="flex flex-col items-center container pt-20 pb-8">
      <SiteHeader className="mb-10" />
      <div className="grid grid-cols-6 gap-4">
        <Availability className="" />
        <About className="col-span-2" />
        <Location className="" />
        <Stack className="col-span-2 row-span-3" />
        <Blog className="col-span-2 row-span-2" />
        <Projects className="col-span-2 row-span-2" />
      </div>
    </div>
  )
}
