import digitalSalesMap from "./digital-sales-map"
import frontierModelBenchmark from "./frontier-model-benchmark"
import memoryFutureSimulator from "./memory-future-simulator"
import openclawAgentStack from "./openclaw-agent-stack"
import smartLibraryThermal from "./smart-library-thermal"
import xpengTianjinDouyin from "./xpeng-tianjin-douyin"
import type { CaseStudyRegistry } from "@/lib/case-studies"

export const caseStudies: CaseStudyRegistry = {
  [smartLibraryThermal.meta.slug]: smartLibraryThermal,
  [memoryFutureSimulator.meta.slug]: memoryFutureSimulator,
  [openclawAgentStack.meta.slug]: openclawAgentStack,
  [frontierModelBenchmark.meta.slug]: frontierModelBenchmark,
  [digitalSalesMap.meta.slug]: digitalSalesMap,
  [xpengTianjinDouyin.meta.slug]: xpengTianjinDouyin,
}

export const KNOWN_SLUGS = [
  "smart-library-thermal",
  "memory-future-simulator",
  "openclaw-agent-stack",
  "frontier-model-benchmark",
  "digital-sales-map",
  "xpeng-tianjin-douyin",
] as const

export type KnownSlug = (typeof KNOWN_SLUGS)[number]
