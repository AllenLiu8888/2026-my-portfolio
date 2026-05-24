import type { ComponentType, ReactNode } from "react"

export type Locale = "en" | "zh"

export type Bilingual<T = string> = { en: T; zh: T }

export type CaseStudyMeta = {
  slug: string
  cover?: string
  title: Bilingual
  tagline: Bilingual
  highlight?: Bilingual
  overview: {
    type: Bilingual
    period: Bilingual
    team: Bilingual
    stack: Bilingual
    grade?: Bilingual
  }
  roles: Bilingual<string[]>
  github?: Array<{ label: string; href: string }>
  liveDemo?: { label: string; href: string }
  video?: string
  toc?: Array<{ id: string; num: string; label: Bilingual }>
}

export type CaseStudyEntry = {
  meta: CaseStudyMeta
  Content: ComponentType<{ locale: Locale }>
}

export type CaseStudyRegistry = Record<string, CaseStudyEntry>

export function pickLocale<T>(value: Bilingual<T>, locale: Locale): T {
  return value[locale] ?? value.en
}

export const CASE_STUDY_SECTION_COLORS = {
  blue: "from-blue-500/20 to-purple-500/20",
  purple: "from-purple-500/20 to-pink-500/20",
  pink: "from-pink-500/20 to-yellow-500/20",
} as const

export type CaseStudyChildren = { children: ReactNode }
