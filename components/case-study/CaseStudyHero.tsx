"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github } from "lucide-react"

import { pickLocale, type CaseStudyMeta, type Locale } from "@/lib/case-studies"

interface Props {
  meta: CaseStudyMeta
  locale: Locale
  labels: {
    back: string
    overview: string
    type: string
    period: string
    team: string
    stack: string
    grade: string
    myRole: string
    sourceCode: string
  }
}

export function CaseStudyHero({ meta, locale, labels }: Props) {
  const t = (key: keyof CaseStudyMeta["overview"]) =>
    meta.overview[key] ? pickLocale(meta.overview[key]!, locale) : ""

  const roles = pickLocale(meta.roles, locale)

  // Split bilingual title on " · " so EN / ZH render on two lines
  const fullTitle = pickLocale(meta.title, locale)
  const titleParts = fullTitle.split(" · ")
  const primaryTitle = titleParts[0]
  const secondaryTitle = titleParts.slice(1).join(" · ")

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href={`/${locale === "en" ? "" : locale + "/"}#projects`}
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {labels.back}
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {primaryTitle}
        </motion.h1>

        {secondaryTitle && (
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {secondaryTitle}
          </motion.h1>
        )}

        <motion.p
          className="text-xl text-zinc-300 leading-relaxed max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pickLocale(meta.tagline, locale)}
        </motion.p>

        {/* Overview Grid */}
        <motion.div
          className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 md:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-50 pointer-events-none"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            <OverviewRow label={labels.type} value={t("type")} />
            <OverviewRow label={labels.period} value={t("period")} />
            <OverviewRow label={labels.team} value={t("team")} />
            <OverviewRow label={labels.grade} value={t("grade")} accent />
            <div className="md:col-span-2">
              <OverviewRow label={labels.stack} value={t("stack")} />
            </div>
          </div>
        </motion.div>

        {/* Roles + GitHub */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">{labels.myRole}</div>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-purple-500/40 bg-zinc-900/70 text-white"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {meta.github && meta.github.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {meta.github.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium border border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-zinc-800/80 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function OverviewRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  if (!value) return null
  return (
    <div className="space-y-1">
      <div className="text-xs uppercase tracking-wider text-zinc-500">{label}</div>
      <div className={`text-base font-medium ${accent ? "text-green-400" : "text-white"}`}>{value}</div>
    </div>
  )
}
