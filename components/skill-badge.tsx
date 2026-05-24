"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export type SkillTier = "expert" | "proficient" | "working" | "learning"

export function getSkillTier(level: number): SkillTier {
  if (level >= 85) return "expert"
  if (level >= 70) return "proficient"
  if (level >= 55) return "working"
  return "learning"
}

const TIER_STYLES: Record<
  SkillTier,
  { bar: string; pct: string; dot: string; border: string }
> = {
  expert: {
    bar: "bg-gradient-to-r from-purple-500 to-pink-500",
    pct: "text-pink-300",
    dot: "bg-gradient-to-r from-purple-500 to-pink-500",
    border: "hover:border-purple-500/60",
  },
  proficient: {
    bar: "bg-gradient-to-r from-purple-500 to-purple-400",
    pct: "text-purple-300",
    dot: "bg-purple-500",
    border: "hover:border-purple-400/50",
  },
  working: {
    bar: "bg-gradient-to-r from-indigo-500 to-purple-500",
    pct: "text-indigo-300",
    dot: "bg-indigo-500",
    border: "hover:border-indigo-500/50",
  },
  learning: {
    bar: "bg-zinc-600",
    pct: "text-zinc-400",
    dot: "bg-zinc-600",
    border: "hover:border-zinc-600",
  },
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const tier = getSkillTier(level)
  const styles = TIER_STYLES[tier]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 ${styles.border}`}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="text-center mb-4 font-medium text-lg">{name}</div>

          <div className="relative h-2.5 w-full bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className={`absolute top-0 left-0 h-full ${styles.bar} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className={`mt-2 text-right text-sm font-medium ${styles.pct}`}>{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}
