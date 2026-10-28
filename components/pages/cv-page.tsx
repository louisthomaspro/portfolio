import Link from "next/link"

import { cvFileNames, Locale, localizedPath } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { DownloadButton } from "@/components/cv/download-button"
import { Resume } from "@/components/cv/resume"
import { Icons } from "@/components/icons"
import { LanguageSwitch } from "@/components/language-switch"

export const CvPage = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang)
  const { profile } = dictionary

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    url: profile.website.url,
    sameAs: [profile.linkedin.url],
    address: { "@type": "PostalAddress", addressLocality: "Toulon", addressCountry: "FR" },
  }

  return (
    <main className="min-h-dvh pb-16 print:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="sticky top-0 z-10 mb-8 border-b bg-background/80 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-[210mm] items-center justify-between gap-4 px-4 py-3 sm:px-0">
          <Link
            href={localizedPath(lang, "/")}
            className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.arrowLeft className="mr-2 h-3 transition-transform group-hover:-translate-x-0.5" />
            {dictionary.ui.home}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitch lang={lang} path="/cv" />
            <DownloadButton cvFileName={cvFileNames[lang]} label={dictionary.ui.downloadPdf} />
          </div>
        </div>
      </nav>
      <Resume lang={lang} dictionary={dictionary} className="animate-enter motion-reduce:animate-none print:animate-none" />
    </main>
  )
}
