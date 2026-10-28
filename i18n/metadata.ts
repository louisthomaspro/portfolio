import { Locale, localizedPath, siteUrl } from "@/i18n/config"

export const languageAlternates = (path: "/" | "/cv") => ({
  languages: {
    fr: localizedPath("fr", path),
    en: localizedPath("en", path),
    "x-default": localizedPath("fr", path),
  },
})

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString()

export const openGraphUrl = (lang: Locale, path: "/" | "/cv") => absoluteUrl(localizedPath(lang, path))
