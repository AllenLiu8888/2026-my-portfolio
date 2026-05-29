"use client"

import { motion } from "framer-motion"

export type SkillTier = "expert" | "proficient" | "working" | "learning"
export type SkillCat = "agent" | "model" | "capability" | "stack" | "tool"

interface SkillBadgeProps {
  name: string
  level: number
  cat?: string
  catLabel?: string
}

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

// Category styling — distinct hue per kind so "能力 / 技术栈 / 模型 / 工具 / Agent"
// read at a glance. Kept low-saturation so it doesn't fight the tier bar.
export const CATEGORY_META: Record<SkillCat, { chip: string; dot: string }> = {
  agent: { chip: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30", dot: "bg-fuchsia-400" },
  model: { chip: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30", dot: "bg-cyan-400" },
  capability: { chip: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30", dot: "bg-emerald-400" },
  stack: { chip: "bg-amber-500/15 text-amber-300 border-amber-500/30", dot: "bg-amber-400" },
  tool: { chip: "bg-slate-400/15 text-slate-300 border-slate-400/40", dot: "bg-slate-400" },
}

export const CATEGORY_ORDER: SkillCat[] = ["agent", "model", "capability", "stack", "tool"]

export function SkillBadge({ name, level, cat, catLabel }: SkillBadgeProps) {
  const tier = getSkillTier(level)
  const styles = TIER_STYLES[tier]
  const catStyle = cat && cat in CATEGORY_META ? CATEGORY_META[cat as SkillCat] : null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/50 p-6 backdrop-blur-sm transition-all duration-300 ${styles.border}`}
      >
        {/* Skill name (back to the larger size) */}
        <div className="mb-4 text-center text-lg font-medium leading-snug">{name}</div>

        {/* Progress bar + (tag · %) on the row below it — no extra header row */}
        <div className="mt-auto">
          <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-zinc-700">
            <motion.div
              className={`absolute left-0 top-0 h-full ${styles.bar} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            {/* category tag — left, under the bar */}
            {catStyle && catLabel ? (
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${catStyle.chip}`}
              >
                {catLabel}
              </span>
            ) : (
              <span />
            )}
            {/* proficiency % — right */}
            <span className={`text-sm font-medium ${styles.pct}`}>{level}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
