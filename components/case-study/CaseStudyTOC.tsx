"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { pickLocale, type CaseStudyMeta, type Locale } from "@/lib/case-studies"

interface Props {
  toc: NonNullable<CaseStudyMeta["toc"]>
  locale: Locale
}

export function CaseStudyTOC({ toc, locale }: Props) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "")

  useEffect(() => {
    if (toc.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Among intersecting sections, pick the one closest to the top
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const top = visible.reduce((best, e) =>
          e.boundingClientRect.top < best.boundingClientRect.top ? e : best,
        )
        setActiveId(top.target.id)
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    )

    toc.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [toc])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
      setActiveId(id)
    }
  }

  return (
    <motion.nav
      className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-30 max-h-[70vh] overflow-y-auto"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      aria-label="Table of contents"
    >
      <div className="relative w-52 rounded-xl bg-zinc-900/70 backdrop-blur-md border border-zinc-800 p-3 shadow-lg">
        <div className="text-[10px] uppercase tracking-widest text-zinc-500 px-2 pb-2 border-b border-zinc-800">
          {locale === "zh" ? "目录" : "Contents"}
        </div>
        <ul className="mt-2 space-y-0.5">
          {toc.map((s) => {
            const isActive = activeId === s.id
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  className={`group flex items-baseline gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/15 text-white"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold tabular-nums ${
                      isActive ? "text-purple-300" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="flex-1 truncate">{pickLocale(s.label, locale)}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}
