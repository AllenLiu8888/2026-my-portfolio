"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Hammer } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/case-studies"

interface Props {
  locale: Locale
  title: string
  description: string
  labels: {
    back: string
    heading: string
    body: string
    contactCta: string
  }
}

export function ComingSoon({ locale, title, description, labels }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href={`/${locale === "en" ? "" : locale + "/"}#projects`}
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {labels.back}
          </Link>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-50 pointer-events-none"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-pink-500/20 border border-yellow-500/40 mb-6">
              <Hammer className="h-3.5 w-3.5 text-yellow-300" />
              <span className="text-xs font-medium text-yellow-200 uppercase tracking-wider">
                {labels.heading}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400">
              {title}
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed mb-6">{description}</p>

            <p className="text-base text-zinc-400 leading-relaxed mb-8">{labels.body}</p>

            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                asChild
              >
                <Link href={`/${locale === "en" ? "" : locale + "/"}#contact`}>{labels.contactCta}</Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 hover:border-purple-500/50 text-zinc-300"
                asChild
              >
                <Link href={`/${locale === "en" ? "" : locale + "/"}#projects`}>
                  {labels.back}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
