"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Languages, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Props {
  slug: string
  summary: string
  label: {
    badge: string
    body: string
    cta: string
    back: string
  }
}

export function ENStub({ slug, summary, label }: Props) {
  return (
    <motion.div
      className="my-12 relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 mb-4">
        <Languages className="h-3.5 w-3.5 text-purple-200" />
        <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">
          {label.badge}
        </span>
      </div>
      <p className="text-zinc-200 leading-relaxed mb-4">{summary}</p>
      <p className="text-sm text-zinc-400 leading-relaxed mb-6">{label.body}</p>
      <div className="flex flex-wrap gap-3">
        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
          asChild
        >
          <Link href={`/zh/projects/${slug}`}>
            {label.cta}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        <Button variant="outline" className="border-zinc-700 hover:border-purple-500/50 text-zinc-300" asChild>
          <Link href="/#projects">{label.back}</Link>
        </Button>
      </div>
    </motion.div>
  )
}
