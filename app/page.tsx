import { Blog } from "@/components/blocks/blog/blog"
import { Location } from "@/components/blocks/location"
import { Projects } from "@/components/blocks/projects"
import { Stack } from "@/components/blocks/stack"
import { Terminal } from "@/components/blocks/terminal"
import { SiteHeader } from "@/components/layouts/site-header"

export default function Home() {
  return (
    <div className="flex flex-col items-center container pt-20 pb-8">
      <SiteHeader />
      <div className="flex flex-col gap-5 pt-8 sm:pt-12 w-full">
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-5 sm:flex-row">
              <Terminal className="aspect-square lg:aspect-auto lg:h-[300px] w-full" />
              <Stack className="aspect-square w-full block lg:hidden" />
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <Blog className="sm:flex-1 aspect-square" />
              <Location className="sm:flex-1 aspect-square" />
            </div>
          </div>
          <Stack className="min-w-[400px] hidden lg:block" />
        </div>
        <Projects />
      </div>
    </div>
  )
}
