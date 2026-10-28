import { hasLocale, Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/i18n/dictionaries/fr").then((module) => module.dictionary),
  en: () => import("@/i18n/dictionaries/en").then((module) => module.dictionary),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!hasLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`)
  }
  return dictionaries[locale]()
}
