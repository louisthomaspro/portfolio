import { headers } from "next/headers"

import { defaultLocale, hasLocale, Locale } from "@/i18n/config"

export const getRequestLocale = async (): Promise<Locale> => {
  const value = (await headers()).get("x-lang")
  if (value && hasLocale(value)) return value
  return defaultLocale
}
