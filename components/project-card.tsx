"use client"

import { useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/navigation"

interface ProjectCardProps {
  title: string
  bullets: string[]
  tags: string[]
  image: string
  slug: string
  detailsLabel: string
  codeLabel?: string
  repoUrl?: string
}

export function ProjectCard({
  title,
  bullets,
  tags,
  image,
  slug,
  detailsLabel,
  codeLabel,
  repoUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-purple-500/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <Link href={`/projects/${slug}`} className="block">
            <div className="relative overflow-hidden h-48 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
              />
            </div>
          </Link>

          <div className="p-6 flex-grow flex flex-col">
            <Link href={`/projects/${slug}`}>
              <h3 className="text-xl font-bold mb-2 hover:text-purple-300 transition-colors cursor-pointer">
                {title}
              </h3>
            </Link>
            <ul className="space-y-2 mb-4 flex-grow">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-snug">
                  <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-4 border-t border-zinc-700/50">
              {repoUrl && repoUrl !== "#" ? (
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-700/50" asChild>
                  <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {codeLabel ?? "Code"}
                  </a>
                </Button>
              ) : (
                <span />
              )}
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                asChild
              >
                <Link href={`/projects/${slug}`}>
                  {detailsLabel}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
