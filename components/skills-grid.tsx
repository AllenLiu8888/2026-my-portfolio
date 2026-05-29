"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SkillBadge, CATEGORY_META, CATEGORY_ORDER } from "@/components/skill-badge"
import { SkillsLegend } from "@/components/skills-legend"

interface Skill {
  name: string
  level: number
  cat?: string
}

interface TierMeta {
  label: string
  range: string
}

interface Props {
  skills: Skill[]
  defaultVisible?: number
  showMoreLabel: string
  showLessLabel: string
  tiers: {
    expert: TierMeta
    proficient: TierMeta
    working: TierMeta
    learning: TierMeta
  }
  categories?: Record<string, string>
  categoryLabel?: string
  tierLabel?: string
}

export function SkillsGrid({
  skills,
  defaultVisible = 12,
  showMoreLabel,
  showLessLabel,
  tiers,
  categories,
  categoryLabel,
  tierLabel,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? skills : skills.slice(0, defaultVisible)
  const hasMore = skills.length > defaultVisible

  return (
    <>
      {/* Legend block: category row (top) + proficiency axis (bottom), each labelled */}
      <motion.div
        className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Category legend */}
        {categories && (
          <div className="flex w-full flex-col items-center gap-2">
            {categoryLabel && (
              <span className="text-[11px] uppercase tracking-wider text-zinc-500">
                {categoryLabel}
              </span>
            )}
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORY_ORDER.filter((key) => categories[key]).map((key) => (
                <div
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs"
                >
                  <span className={`h-2 w-2 rounded-full ${CATEGORY_META[key].dot}`}></span>
                  <span className="font-medium text-zinc-200">{categories[key]}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Proficiency axis */}
        <SkillsLegend tiers={tiers} label={tierLabel} />
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            level={skill.level}
            cat={skill.cat}
            catLabel={skill.cat ? categories?.[skill.cat] : undefined}
          />
        ))}
      </div>

      {hasMore && (
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setExpanded(!expanded)}
            className="gap-2 border-zinc-700 bg-zinc-900/60 px-6 text-zinc-200 hover:border-purple-500/50 hover:bg-zinc-800/80 hover:text-white"
          >
            {expanded ? showLessLabel : showMoreLabel}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </motion.div>
      )}
    </>
  )
}
