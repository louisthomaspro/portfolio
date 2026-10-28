import type { Metadata } from "next"

import { Locale, localizedPath, ogLocales, siteUrl } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { languageAlternates, openGraphUrl } from "@/i18n/metadata"

export const createHomeMetadata = async (lang: Locale): Promise<Metadata> => {
  const dictionary = await getDictionary(lang)
  const { profile } = dictionary
  const title = `${profile.name} · ${profile.headline}`

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s · ${profile.name}`,
    },
    description: profile.pitch,
    authors: [{ name: profile.name, url: profile.website.url }],
    alternates: {
      canonical: localizedPath(lang, "/"),
      ...languageAlternates("/"),
    },
    openGraph: {
      title,
      description: profile.pitch,
      locale: ogLocales[lang],
      type: "website",
      url: openGraphUrl(lang, "/"),
      siteName: profile.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.pitch,
    },
  }
}

export const createCvMetadata = async (lang: Locale): Promise<Metadata> => {
  const dictionary = await getDictionary(lang)
  const { profile, ui } = dictionary
  const description =
    lang === "fr"
      ? `CV de ${profile.name}, ${profile.headline}. ${profile.availability}`
      : `Resume for ${profile.name}, ${profile.headline}. ${profile.availability}`

  return {
    title: ui.cvPageTitle,
    description,
    alternates: {
      canonical: localizedPath(lang, "/cv"),
      ...languageAlternates("/cv"),
    },
    openGraph: {
      title: `${ui.cvPageTitle} · ${profile.name}`,
      description,
      url: openGraphUrl(lang, "/cv"),
    },
  }
}
