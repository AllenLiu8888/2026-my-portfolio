"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Props {
  id?: string
  num?: string
  title: string
  children: ReactNode
  className?: string
}

export function CaseStudySection({ id, num, title, children, className = "" }: Props) {
  return (
    <motion.section
      id={id}
      className={`relative py-12 md:py-16 scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container max-w-5xl">
        <div className="flex items-baseline gap-3 mb-8 pb-4 border-b border-zinc-800">
          {num && (
            <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400">
              {num}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400">
            {title}
          </h2>
        </div>
        <div className="prose-cs">{children}</div>
      </div>
    </motion.section>
  )
}

export function SubHeading({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="mt-8 mb-4 flex items-center gap-2">
      {label && (
        <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/40 text-purple-200">
          {label}
        </span>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-white">{children}</h3>
    </div>
  )
}

export function Callout({
  variant = "insight",
  children,
}: {
  variant?: "insight" | "decision" | "tip"
  children: ReactNode
}) {
  const colors = {
    insight: "from-blue-500/10 to-purple-500/10 border-blue-500/30",
    decision: "from-purple-500/10 to-pink-500/10 border-purple-500/30",
    tip: "from-yellow-500/10 to-pink-500/10 border-yellow-500/30",
  }
  return (
    <div
      className={`relative my-6 rounded-xl border bg-gradient-to-br ${colors[variant]} p-5 backdrop-blur-sm`}
    >
      <div className="text-zinc-200 leading-relaxed">{children}</div>
    </div>
  )
}

export function Quote({ children, source }: { children: ReactNode; source?: string }) {
  return (
    <blockquote className="my-5 border-l-4 border-purple-500 pl-5 italic text-zinc-300 leading-relaxed">
      <p>{children}</p>
      {source && <footer className="mt-2 text-sm not-italic text-zinc-500">— {source}</footer>}
    </blockquote>
  )
}

export function TwoCol({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">{children}</div>
}

export function ImagePlaceholder({ caption, ratio = "video" }: { caption?: string; ratio?: "video" | "square" | "wide" }) {
  const ratios = { video: "aspect-video", square: "aspect-square", wide: "aspect-[21/9]" }
  return (
    <figure className="my-4">
      <div
        className={`relative ${ratios[ratio]} rounded-xl border border-dashed border-zinc-700 bg-zinc-900/40 flex items-center justify-center text-zinc-600 text-sm overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        <div className="relative text-center px-4">
          <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Image</div>
          <div className="text-zinc-400">{caption || "Coming soon"}</div>
        </div>
      </div>
      {caption && <figcaption className="mt-2 text-xs text-zinc-500 text-center">{caption}</figcaption>}
    </figure>
  )
}

export function CaseImage({
  src,
  alt,
  caption,
  contain,
}: {
  src: string
  alt?: string
  caption?: string
  contain?: boolean
}) {
  return (
    <figure className="my-4">
      <div className="relative rounded-xl border border-zinc-800 overflow-hidden bg-zinc-950/60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || caption || ""}
          loading="lazy"
          className={`w-full h-auto ${contain ? "object-contain" : "object-cover"}`}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-zinc-500 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: (string | ReactNode)[][]
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-sm">
        <thead className="bg-zinc-800/60">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 font-semibold text-zinc-200 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-zinc-300 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="my-3 text-zinc-300 leading-relaxed">{children}</p>
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-3 space-y-2 list-none">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 text-zinc-300 leading-relaxed">
          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></span>
          <span className="flex-1">{it}</span>
        </li>
      ))}
    </ul>
  )
}
