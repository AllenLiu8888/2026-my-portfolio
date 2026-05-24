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
      className="hidden 2xl:block fixed top-32 z-30 max-h-[calc(100vh-10rem)] overflow-y-auto"
      style={{ left: "max(1rem, calc(50% - 32rem - 15.5rem))" }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      aria-label="Table of contents"
    >
      <div className="relative w-56 rounded-xl bg-zinc-900/70 backdrop-blur-md border border-zinc-800 p-4 shadow-lg">
        <div className="text-[11px] uppercase tracking-widest text-zinc-500 px-2 pb-3 border-b border-zinc-800">
          {locale === "zh" ? "目录" : "Contents"}
        </div>
        <ul className="mt-3 space-y-1">
          {toc.map((s) => {
            const isActive = activeId === s.id
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  className={`group flex items-baseline gap-2.5 px-2.5 py-2 rounded-md text-[15px] transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/15 text-white"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-xs font-bold tabular-nums ${
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
