"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/navigation"

interface PostCardProps {
  slug: string
  title: string
  summary: string
  cover?: string
  date: string
  tags: string[]
  readingMinutes: number
  readMinLabel: string
}

export function PostCard({
  slug,
  title,
  summary,
  cover,
  date,
  tags,
  readingMinutes,
  readMinLabel,
}: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* hover glow — outside <Link> so it isn't clipped by overflow-hidden */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <Link
        href={`/blog/${slug}`}
        className="relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800/40 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/50 sm:h-52 sm:flex-row"
      >
        {/* Cover — FIXED thumbnail box. Any image size is cropped via object-cover,
            so every card stays exactly the same height. */}
        <div className="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br from-purple-900/40 via-zinc-900 to-pink-900/30 sm:h-full sm:w-64">
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-white/15">{title.slice(0, 1)}</span>
            </div>
          )}
          {/* subtle edge fade so cover blends into the card */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent sm:bg-gradient-to-r"></div>
        </div>

        {/* Content */}
        <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden p-5 sm:p-6">
          <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors line-clamp-2 group-hover:text-purple-200 sm:text-xl">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-2">{summary}</p>

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {String(date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readingMinutes} {readMinLabel}
            </span>
            <div className="ml-auto flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md bg-zinc-700/50 px-2 py-0 text-[10px] font-medium text-zinc-300 hover:bg-zinc-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
