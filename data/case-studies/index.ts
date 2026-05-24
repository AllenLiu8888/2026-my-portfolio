import memoryFutureSimulator from "./memory-future-simulator"
import type { CaseStudyRegistry } from "@/lib/case-studies"

export const caseStudies: CaseStudyRegistry = {
  [memoryFutureSimulator.meta.slug]: memoryFutureSimulator,
}

export const KNOWN_SLUGS = [
  "chemical-trade-dashboard",
  "smart-library-thermal",
  "memory-future-simulator",
  "openclaw-agent-stack",
  "frontier-model-benchmark",
  "xpeng-tianjin-douyin",
] as const

export type KnownSlug = (typeof KNOWN_SLUGS)[number]
