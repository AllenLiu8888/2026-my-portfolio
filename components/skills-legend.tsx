"use client"

import { motion } from "framer-motion"

interface TierMeta {
  label: string
  range: string
}

interface Props {
  tiers: {
    expert: TierMeta
    proficient: TierMeta
    working: TierMeta
    learning: TierMeta
  }
}

const ORDER: Array<keyof Props["tiers"]> = ["expert", "proficient", "working", "learning"]

const DOTS: Record<keyof Props["tiers"], string> = {
  expert: "bg-gradient-to-r from-purple-500 to-pink-500",
  proficient: "bg-purple-500",
  working: "bg-indigo-500",
  learning: "bg-zinc-600",
}

export function SkillsLegend({ tiers }: Props) {
  return (
    <motion.div
      className="mt-8 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {ORDER.map((key) => {
        const t = tiers[key]
        return (
          <div
            key={key}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 text-xs"
          >
            <span className={`h-2 w-2 rounded-full ${DOTS[key]}`}></span>
            <span className="font-medium text-zinc-200">{t.label}</span>
            <span className="text-zinc-500">{t.range}</span>
          </div>
        )
      })}
    </motion.div>
  )
}
