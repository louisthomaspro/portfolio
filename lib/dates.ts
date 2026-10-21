import { YearMonth } from "@/types"

const monthFormatter = new Intl.DateTimeFormat("fr-FR", { month: "short", year: "numeric", timeZone: "UTC" })

const parse = (value: YearMonth) => {
  const [year, month] = value.split("-").map(Number)
  return { year, month: month as number | undefined }
}

export const formatMonth = (value: YearMonth) => {
  const { year, month } = parse(value)
  return month ? monthFormatter.format(Date.UTC(year, month - 1)) : `${year}`
}

export const formatPeriod = (start: YearMonth, end?: YearMonth) =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : "aujourd’hui"}`

export const formatYears = (start: YearMonth, end?: YearMonth) => {
  const from = parse(start)
  if (!end) return from.month ? `Depuis ${formatMonth(start)}` : `Depuis ${from.year}`
  const to = parse(end).year
  return from.year === to ? `${from.year}` : `${from.year} – ${to}`
}

export const formatDuration = (start: YearMonth, end: YearMonth) => {
  const from = parse(start)
  const to = parse(end)
  if (!from.month || !to.month) return null
  const total = (to.year - from.year) * 12 + (to.month - from.month) + 1
  const years = Math.floor(total / 12)
  const months = total % 12
  return [years && `${years} an${years > 1 ? "s" : ""}`, months && `${months} mois`].filter(Boolean).join(" ")
}
