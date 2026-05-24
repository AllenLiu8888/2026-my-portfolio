import { notFound } from "next/navigation"
import { useTranslations } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"

import { CaseStudyHero } from "@/components/case-study/CaseStudyHero"
import { ComingSoon } from "@/components/case-study/ComingSoon"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { caseStudies, KNOWN_SLUGS } from "@/data/case-studies"
import { pickLocale, type Locale } from "@/lib/case-studies"
import { routing } from "@/i18n/routing"

type Params = { locale: string; slug: string }

export function generateStaticParams() {
  const params: Params[] = []
  for (const locale of routing.locales) {
    for (const slug of KNOWN_SLUGS) {
      params.push({ locale, slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const entry = caseStudies[slug]

  if (!entry) {
    const projects = (
      await import(`@/messages/${locale === "zh" ? "zh" : "en"}.json`)
    ).default.projects.items as Array<{ title: string; slug: string }>
    const card = projects.find((p) => p.slug === slug)
    return { title: card?.title ?? "Project" }
  }

  return {
    title: pickLocale(entry.meta.title, locale as Locale),
    description: pickLocale(entry.meta.tagline, locale as Locale),
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { locale, slug } = await params
  if (!routing.locales.includes(locale as Locale)) notFound()
  if (!KNOWN_SLUGS.includes(slug as (typeof KNOWN_SLUGS)[number])) notFound()

  setRequestLocale(locale)
  const entry = caseStudies[slug]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />
      {entry ? (
        <CaseStudyPage entry={entry} locale={locale as Locale} />
      ) : (
        <ComingSoonPage slug={slug} locale={locale as Locale} />
      )}
    </div>
  )
}

function CaseStudyPage({
  entry,
  locale,
}: {
  entry: NonNullable<(typeof caseStudies)[string]>
  locale: Locale
}) {
  const t = useTranslations("caseStudy")
  const Content = entry.Content

  return (
    <>
      <CaseStudyHero
        meta={entry.meta}
        locale={locale}
        labels={{
          back: t("back"),
          overview: t("overview"),
          type: t("type"),
          period: t("period"),
          team: t("team"),
          stack: t("stack"),
          grade: t("grade"),
          myRole: t("myRole"),
          sourceCode: t("sourceCode"),
        }}
      />
      <Content locale={locale} />
      <div className="container max-w-5xl py-16 text-center">
        <a
          href={`/${locale === "en" ? "" : locale + "/"}#projects`}
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors"
        >
          {t("backBottom")}
        </a>
      </div>
    </>
  )
}

function ComingSoonPage({ slug, locale }: { slug: string; locale: Locale }) {
  const t = useTranslations()

  const projects = t.raw("projects.items") as Array<{
    slug: string
    title: string
    description: string
  }>
  const card = projects.find((p) => p.slug === slug)

  return (
    <ComingSoon
      locale={locale}
      title={card?.title ?? t("comingSoon.fallbackTitle")}
      description={card?.description ?? t("comingSoon.fallbackDescription")}
      labels={{
        back: t("caseStudy.back"),
        heading: t("comingSoon.heading"),
        body: t("comingSoon.body"),
        contactCta: t("comingSoon.contactCta"),
      }}
    />
  )
}
