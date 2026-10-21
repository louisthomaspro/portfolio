import { StaticImageData } from "next/image"

export type YearMonth = `${number}-${number}` | `${number}`

export type Link = {
  label: string
  url: string
}

export type Metric = {
  value: string
  label: string
}

export type Experience = {
  company: string
  role: string
  location?: string
  start: YearMonth
  end?: YearMonth
  description?: string
  highlights?: string[]
  stack?: string[]
  metrics?: Metric[]
}

export type Venture = Experience & {
  summary: string
  website?: string
  logo?: StaticImageData
}

export type Education = {
  school: string
  degree: string
  start: number
  end: number
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type BrandIcon = {
  path: string
  hex: string
  viewBox?: string
}

export type StackItem = {
  id: string
  title: string
  description: string
  url: string
  icon: BrandIcon | StaticImageData
  tags: string[]
}
