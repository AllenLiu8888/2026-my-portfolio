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
      className="group"
    >
      <Link
        href={`/blog/${slug}`}
        className="relative block overflow-hidden rounded-xl bg-zinc-800/40 backdrop-blur-sm border border-zinc-800 transition-all duration-300 group-hover:border-purple-500/50"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col md:flex-row gap-0">
          {/* Cover */}
          <div className="md:w-60 md:shrink-0 relative h-44 md:h-auto overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800">
            {cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-xs">
                Cover
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-800/40 md:to-transparent"></div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-7 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-purple-200 transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-3">{summary}</p>

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {String(date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {readingMinutes} {readMinLabel}
              </span>
              <div className="flex flex-wrap gap-1.5 ml-auto">
                {tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300 text-[10px] font-medium px-2 py-0 rounded-md"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
