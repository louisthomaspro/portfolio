import { getLocalizedStack, getStackTags } from "@/config/stack"
import { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { cn } from "@/lib/utils"
import { About } from "@/components/blocks/about"
import { Availability } from "@/components/blocks/availability"
import { DitherPanel } from "@/components/blocks/dither-panel"
import { Experience } from "@/components/blocks/experience"
import { Location } from "@/components/blocks/location"
import { Stack } from "@/components/blocks/stack"
import { SiteHeader } from "@/components/layouts/site-header"

export const HomePage = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang)
  const { profile, ventures, experiences, ui } = dictionary

  return (
    <main className="flex flex-col items-center container min-h-dvh">
      <div className="w-full py-10 lg:my-auto content-center">
        <SiteHeader lang={lang} profile={profile} viewCvLabel={ui.viewCv} className="mb-10" />
        <div
          className={cn(
            "grid grid-cols-1 gap-4 auto-rows-auto",
            "sm:grid-cols-2",
            "md:grid-cols-4",
            "lg:grid-cols-6 lg:grid-rows-[200px_320px]"
          )}
        >
          <Availability
            className="col-span-1 max-lg:order-1"
            delay={50}
            profile={profile}
            availableLabel={ui.available}
            contactMeLabel={ui.contactMe}
          />
          <About className="col-span-1 md:col-span-2 max-lg:order-2" delay={100} pitch={profile.pitch} title={ui.about} />
          <Location
            className="col-span-1 sm:col-span-2 md:col-span-1 min-h-50 md:min-h-0 max-lg:order-3"
            delay={150}
            lang={lang}
            location={profile.location}
            workMode={profile.workMode}
            title={ui.location}
          />
          <Stack
            className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 lg:row-span-2 lg:min-h-0 lg:overflow-hidden max-lg:order-6"
            delay={200}
            stackItems={getLocalizedStack(lang)}
            tags={getStackTags(lang)}
            title={ui.myStack}
            loadMoreLabel={ui.loadMore}
            filterLabel={ui.filterStack}
          />
          <Experience
            className="col-span-1 sm:col-span-2 lg:col-span-2 lg:min-h-0 max-lg:order-4"
            delay={250}
            lang={lang}
            ventures={ventures}
            experiences={experiences}
            experienceLabel={ui.experience}
            fullCvLabel={ui.fullCv}
            dates={ui.dates}
          />
          <DitherPanel className="col-span-1 sm:col-span-2 lg:col-span-2 lg:min-h-0 max-lg:order-5" delay={300} />
        </div>
      </div>
    </main>
  )
}
