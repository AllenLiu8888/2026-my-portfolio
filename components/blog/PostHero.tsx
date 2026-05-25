"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/navigation"

interface Props {
  title: string
  summary: string
  cover?: string
  date: string
  tags: string[]
  readingMinutes: number
  backLabel: string
  portfolioLabel: string
  readMinLabel: string
}

export function PostHero({
  title,
  summary,
  cover,
  date,
  tags,
  readingMinutes,
  backLabel,
  portfolioLabel,
  readMinLabel,
}: Props) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 max-w-3xl">
        <motion.div
          className="inline-flex items-center text-sm text-zinc-400 mb-8 gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {portfolioLabel}
          </Link>
          <span className="text-zinc-600">/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            {backLabel}
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {String(date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {readingMinutes} {readMinLabel}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 text-[11px] font-medium px-2 py-0.5 rounded-md"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg text-zinc-300 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {summary}
        </motion.p>

        {cover && (
          <motion.figure
            className="relative rounded-xl overflow-hidden border border-zinc-800 aspect-video bg-zinc-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt={title} className="w-full h-full object-cover" />
          </motion.figure>
        )}
      </div>
    </section>
  )
}
