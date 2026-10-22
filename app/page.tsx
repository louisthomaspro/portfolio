import { cn } from "@/lib/utils"
import { About } from "@/components/blocks/about"
import { Availability } from "@/components/blocks/availability"
import { DitherPanel } from "@/components/blocks/dither-panel"
import { Experience } from "@/components/blocks/experience"
import { Location } from "@/components/blocks/location"
import { Stack } from "@/components/blocks/stack"
import { SiteHeader } from "@/components/layouts/site-header"

export default function Home() {
  return (
    <main className="flex flex-col items-center container min-h-dvh">
      <div className="w-full py-10 lg:my-auto content-center">
        <SiteHeader className="mb-10" />
        <div
          className={cn(
            "grid grid-cols-1 gap-4 auto-rows-auto",
            "sm:grid-cols-2",
            "md:grid-cols-4",
            "lg:grid-cols-6 lg:grid-rows-[200px_320px]"
          )}
        >
          <Availability className="col-span-1 max-lg:order-1" delay={50} />
          <About className="col-span-1 md:col-span-2 max-lg:order-2" delay={100} />
          <Location className="col-span-1 sm:col-span-2 md:col-span-1 min-h-50 md:min-h-0 max-lg:order-3" delay={150} />
          <Stack
            className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 lg:row-span-2 lg:min-h-0 lg:overflow-hidden max-lg:order-6"
            delay={200}
          />
          <Experience className="col-span-1 sm:col-span-2 lg:col-span-2 lg:min-h-0 max-lg:order-4" delay={250} />
          <DitherPanel className="col-span-1 sm:col-span-2 lg:col-span-2 lg:min-h-0 max-lg:order-5" delay={300} />
        </div>
      </div>
    </main>
  )
}
