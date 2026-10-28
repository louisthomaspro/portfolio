import type { Metadata } from "next"

import { CvPage } from "@/components/pages/cv-page"
import { createCvMetadata } from "@/i18n/site-metadata"

export const generateMetadata = (): Promise<Metadata> => createCvMetadata("en")

export default function Page() {
  return <CvPage lang="en" />
}
