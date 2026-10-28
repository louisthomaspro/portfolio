import type { MetadataRoute } from "next"

import { localizedPath, siteUrl } from "@/i18n/config"

const languageAlternates = (path: "/" | "/cv") => ({
  fr: `${siteUrl}${localizedPath("fr", path)}`,
  en: `${siteUrl}${localizedPath("en", path)}`,
  "x-default": `${siteUrl}${localizedPath("fr", path)}`,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: languageAlternates("/") },
    },
    {
      url: `${siteUrl}/cv`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: languageAlternates("/cv") },
    },
  ]
}
