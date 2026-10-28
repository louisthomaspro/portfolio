import Link from "next/link"

import { Locale, localizedPath, locales } from "@/i18n/config"
import { cn } from "@/lib/utils"

const labels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
}

export const LanguageSwitch = ({
  lang,
  path,
  className,
}: {
  lang: Locale
  path: "/" | "/cv"
  className?: string
}) => (
  <nav aria-label="Language" className={cn("flex items-center gap-1 text-xs", className)}>
    {locales.map((locale, index) => (
      <span key={locale} className="flex items-center gap-1">
        {index > 0 ? <span className="text-muted-foreground/50">/</span> : null}
        {locale === lang ? (
          <span className="font-medium text-foreground" lang={locale}>
            {labels[locale]}
          </span>
        ) : (
          <Link
            href={localizedPath(locale, path)}
            hrefLang={locale}
            className="text-muted-foreground hover:text-foreground transition-colors"
            lang={locale}
          >
            {labels[locale]}
          </Link>
        )}
      </span>
    ))}
  </nav>
)
