"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
}

interface Props {
  projects: Project[]
  defaultVisible?: number
  detailsLabel: string
  codeLabel: string
  showMoreLabel: string
  showLessLabel: string
}

export function ProjectsGrid({
  projects,
  defaultVisible = 6,
  detailsLabel,
  codeLabel,
  showMoreLabel,
  showLessLabel,
}: Props) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projects : projects.slice(0, defaultVisible)
  const hasMore = projects.length > defaultVisible

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {visible.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
            tags={p.tags}
            image={`/projects/${p.slug}.png`}
            detailsLabel={detailsLabel}
            codeLabel={codeLabel}
          />
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
