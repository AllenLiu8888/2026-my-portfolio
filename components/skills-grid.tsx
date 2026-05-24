"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { SkillsLegend } from "@/components/skills-legend"

interface Skill {
  name: string
  level: number
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
}

export function SkillsGrid({
  skills,
  defaultVisible = 12,
  showMoreLabel,
  showLessLabel,
  tiers,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? skills : skills.slice(0, defaultVisible)
  const hasMore = skills.length > defaultVisible

  return (
    <>
      <SkillsLegend tiers={tiers} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {visible.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>

      {hasMore && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setExpanded(!expanded)}
            className="border-zinc-700 hover:border-purple-500/50 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 hover:text-white gap-2 px-6"
          >
            {expanded ? showLessLabel : showMoreLabel}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </motion.div>
      )}
    </>
  )
}
