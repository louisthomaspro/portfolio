import Image from "next/image"
import Profile from "@/public/profile.jpg"
import { Experience, Venture } from "@/types"

import { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"
import { formatDuration, formatPeriod } from "@/lib/dates"
import { cn } from "@/lib/utils"

const Section = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <section className={className}>
    <h2 className="mb-3 border-b border-neutral-200 pb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-neutral-500 break-after-avoid">
      {title}
    </h2>
    {children}
  </section>
)

const Period = ({
  start,
  end,
  location,
  lang,
  dates,
}: Pick<Experience, "start" | "end" | "location"> & {
  lang: Locale
  dates: Dictionary["ui"]["dates"]
}) => {
  const duration = end && formatDuration(start, end, lang, dates)

  return (
    <span className="flex-none text-xs text-neutral-500 tabular-nums">
      {location && <span className="text-neutral-400">{location} · </span>}
      {formatPeriod(start, end, lang, dates)}
      {duration && <span className="text-neutral-400"> · {duration}</span>}
    </span>
  )
}

const Highlights = ({ items }: { items?: string[] }) =>
  items?.length ? (
    <ul className="mt-1.5 list-disc space-y-0.5 pl-4 marker:text-neutral-300">
      {items.map((item) => (
        <li key={item} className="pl-0.5 break-inside-avoid">
          {item}
        </li>
      ))}
    </ul>
  ) : null

const StackLine = ({ items, label }: { items?: string[]; label: string }) =>
  items?.length ? (
    <p className="mt-1.5 text-xs text-neutral-500 break-before-avoid">
      <span className="font-medium text-neutral-600">{label}</span> · {items.join(", ")}
    </p>
  ) : null

const ExperienceItem = ({
  item,
  lang,
  dates,
  stackLabel,
}: {
  item: Experience
  lang: Locale
  dates: Dictionary["ui"]["dates"]
  stackLabel: string
}) => (
  <article>
    <header className="flex items-baseline justify-between gap-4 break-after-avoid">
      <h3 className="text-sm font-semibold text-neutral-900">
        {item.company}
        <span className="font-normal text-neutral-600"> · {item.role}</span>
      </h3>
      <Period start={item.start} end={item.end} location={item.location} lang={lang} dates={dates} />
    </header>
    {item.description && <p className="mt-1 text-pretty break-after-avoid">{item.description}</p>}
    <Highlights items={item.highlights} />
    <StackLine items={item.stack} label={stackLabel} />
  </article>
)

const VentureItem = ({
  item,
  lang,
  dates,
  stackLabel,
}: {
  item: Venture
  lang: Locale
  dates: Dictionary["ui"]["dates"]
  stackLabel: string
}) => (
  <article>
    <header className="flex items-baseline justify-between gap-4 break-after-avoid">
      <h3 className="text-sm font-semibold text-neutral-900">
        {item.website ? (
          <a href={item.website} className="underline decoration-neutral-300 underline-offset-2">
            {item.company}
          </a>
        ) : (
          item.company
        )}
        <span className="font-normal text-neutral-600"> · {item.role}</span>
      </h3>
      <Period start={item.start} end={item.end} lang={lang} dates={dates} />
    </header>
    {item.description && <p className="mt-1 text-pretty break-after-avoid">{item.description}</p>}
    <Highlights items={item.highlights} />
    <StackLine items={item.stack} label={stackLabel} />
  </article>
)

export const Resume = ({
  lang,
  dictionary,
  className,
}: {
  lang: Locale
  dictionary: Dictionary
  className?: string
}) => {
  const { profile, ventures, experiences, skills, education, languages, awards, ui } = dictionary
  const contacts = [profile.website, profile.linkedin, profile.phone]
  const sections = ui.sections

  return (
    <article
      className={cn(
        "mx-auto w-full max-w-[210mm] bg-white text-[12px] leading-[1.55] text-neutral-700 shadow-2xl shadow-black/50",
        "px-6 py-8 sm:px-[14mm] sm:py-[12mm] sm:rounded-sm",
        "print:max-w-none print:rounded-none print:p-0 print:shadow-none",
        className
      )}
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={Profile}
            priority
            sizes="72px"
            alt={profile.name}
            className="size-[72px] flex-none rounded-full object-cover ring-1 ring-neutral-200"
          />
          <div>
            <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-neutral-950">{profile.name}</h1>
            <p className="mt-0.5 text-[14px] text-neutral-700">{profile.headline}</p>
            <p className="mt-1 text-xs text-neutral-500">
              {profile.location} · {profile.workMode}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-0.5 text-xs text-neutral-600 sm:items-end">
          {contacts.map((contact) => (
            <li key={contact.url}>
              <a href={contact.url} className="hover:text-neutral-950">
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-6 space-y-6">
        <Section title={sections.profile}>
          <p className="text-pretty">{profile.summary}</p>
          <p className="mt-1.5 text-pretty text-neutral-600">{profile.availabilityDetails}</p>
        </Section>

        <Section title={sections.experience}>
          <div className="space-y-4">
            {experiences
              .filter((item) => !item.end)
              .map((item) => (
                <ExperienceItem key={item.company} item={item} lang={lang} dates={ui.dates} stackLabel={ui.stackLabel} />
              ))}
            {ventures
              .filter((item) => !item.end)
              .map((item) => (
                <VentureItem key={item.company} item={item} lang={lang} dates={ui.dates} stackLabel={ui.stackLabel} />
              ))}
            {ventures
              .filter((item) => item.end)
              .map((item) => (
                <VentureItem key={item.company} item={item} lang={lang} dates={ui.dates} stackLabel={ui.stackLabel} />
              ))}
            {experiences
              .filter((item) => item.end)
              .map((item) => (
                <ExperienceItem key={item.company} item={item} lang={lang} dates={ui.dates} stackLabel={ui.stackLabel} />
              ))}
          </div>
        </Section>

        <Section title={sections.skills} className="break-inside-avoid">
          <dl className="space-y-0.5">
            {skills.map((group) => (
              <div key={group.label} className="flex gap-3">
                <dt className="w-20 flex-none font-semibold text-neutral-900">{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-[1.5fr_1fr_1fr] break-inside-avoid">
          <Section title={sections.education}>
            <ul className="space-y-1.5">
              {education.map((item) => (
                <li key={item.school}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-neutral-900">{item.school}</span>
                    <span className="flex-none text-xs text-neutral-500 tabular-nums">
                      {item.start} – {item.end}
                    </span>
                  </div>
                  <div>{item.degree}</div>
                </li>
              ))}
            </ul>
          </Section>
          <Section title={sections.languages}>
            <ul className="space-y-1.5">
              {languages.map((item) => (
                <li key={item.label}>
                  <div className="font-semibold text-neutral-900">{item.label}</div>
                  <div>{item.level}</div>
                </li>
              ))}
            </ul>
          </Section>
          <Section title={sections.awards}>
            <ul className="space-y-1.5">
              {awards.map((item) => (
                <li key={item.label}>
                  <div className="font-semibold text-neutral-900">{item.label}</div>
                  <div>{item.detail}</div>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </article>
  )
}
