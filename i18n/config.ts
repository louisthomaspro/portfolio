export const locales = ["fr", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "fr"

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale)

export const intlLocales: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
}

export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
}

export const cvFileNames: Record<Locale, string> = {
  fr: "CV-Louis-Thomas.pdf",
  en: "Resume-Louis-Thomas.pdf",
}

export const localizedPath = (lang: Locale, path: "/" | "/cv") =>
  lang === "fr" ? path : path === "/" ? "/en" : `/en${path}`

export const siteUrl = "https://louisthomas.pro"
