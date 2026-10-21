import type { MetadataRoute } from "next"

import { profile } from "@/config/cv"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.website.url, changeFrequency: "monthly", priority: 1 },
    { url: `${profile.website.url}/cv`, changeFrequency: "monthly", priority: 0.8 },
  ]
}
