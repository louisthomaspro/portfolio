import Image from "next/image"
import Link from "next/link"
import Profile from "@/public/profile.jpg"

import { Locale, localizedPath } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"
import { cn } from "@/lib/utils"
import { LanguageSwitch } from "@/components/language-switch"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const iconLinkClassName =
  "flex items-center justify-center size-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"

export const SiteHeader = ({
  lang,
  profile,
  viewCvLabel,
  className,
}: {
  lang: Locale
  profile: Dictionary["profile"]
  viewCvLabel: string
  className?: string
}) => {
  return (
    <header
      className={cn(
        "animate-enter motion-reduce:animate-none flex items-start md:items-center w-full justify-between flex-col md:flex-row gap-4",
        className
      )}
    >
      <div className="flex items-center gap-4 flex-none">
        <div className="size-12 flex-none">
          <Image
            src={Profile}
            priority
            sizes="48px"
            alt={profile.name}
            className="size-full rounded-full object-cover ring-1 ring-white/10"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-tight">{profile.name}</h1>
          <p className="text-muted-foreground text-sm">{profile.headline}</p>
        </div>
      </div>
      <nav className="flex items-center gap-2 w-full justify-between md:justify-end">
        <div className="flex gap-1 items-center">
          <Link href={profile.linkedin.url} target="_blank" aria-label="LinkedIn" className={iconLinkClassName}>
            <Icons.linkedIn className="h-[18px]" />
          </Link>
          <LanguageSwitch lang={lang} path="/" className="ml-2" />
        </div>
        <Button asChild variant={"outline"} className="group rounded-full">
          <Link href={localizedPath(lang, "/cv")}>
            <Icons.cv className="mr-2 h-3.5" />
            {viewCvLabel}
            <Icons.arrowRight className="ml-2 h-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </nav>
    </header>
  )
}
