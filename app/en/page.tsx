import type { Metadata } from "next"

import { HomePage } from "@/components/pages/home-page"
import { createHomeMetadata } from "@/i18n/site-metadata"

export const generateMetadata = (): Promise<Metadata> => createHomeMetadata("en")

export default function Page() {
  return <HomePage lang="en" />
}
