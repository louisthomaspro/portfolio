import { intlLocales, Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"
import { YearMonth } from "@/types"

const parse = (value: YearMonth) => {
  const [year, month] = value.split("-").map(Number)
  return { year, month: month as number | undefined }
}

export const formatMonth = (value: YearMonth, lang: Locale) => {
  const { year, month } = parse(value)
  const formatter = new Intl.DateTimeFormat(intlLocales[lang], { month: "short", year: "numeric", timeZone: "UTC" })
  return month ? formatter.format(Date.UTC(year, month - 1)) : `${year}`
}

export const formatPeriod = (start: YearMonth, end: YearMonth | undefined, lang: Locale, dates: Dictionary["ui"]["dates"]) =>
  `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : dates.present}`

export const formatYears = (start: YearMonth, end: YearMonth | undefined, lang: Locale, dates: Dictionary["ui"]["dates"]) => {
  const from = parse(start).year
  if (!end) return `${dates.since} ${from}`
  const to = parse(end).year
  return from === to ? `${from}` : `${from} – ${to}`
}

export const formatDuration = (start: YearMonth, end: YearMonth, lang: Locale, dates: Dictionary["ui"]["dates"]) => {
  const from = parse(start)
  const to = parse(end)
  if (!from.month || !to.month) return null
  const total = (to.year - from.year) * 12 + (to.month - from.month) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  const yearLabel = years === 1 ? dates.year : dates.years
  return [years && `${years} ${yearLabel}`, months && `${months} ${dates.month}`].filter(Boolean).join(" ")
}
