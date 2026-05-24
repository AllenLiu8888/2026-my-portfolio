"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Indie AI Product Manager",
    company: "One-Person AI Studio · Hohhot",
    period: "2026.03 — Present",
    description:
      "Building production multi-agent systems on Coze, Dify, and Claude Code. Shipping AI-native tools, benchmarking frontier models, and writing about the AI PM craft on Xiaohongshu / Zhihu.",
  },
  {
    title: "Master of Human-Computer Interaction",
    company: "The University of Queensland · Brisbane",
    period: "2024.06 — 2026.02",
    description:
      "Specialized in mixed-method UX research, design systems, and emerging interaction paradigms. Capstone — an IoT thermal-perception system for smart libraries — received a 7/7 High Distinction.",
  },
  {
    title: "North China Marketing Operations Lead",
    company: "XPENG Motors · Beijing",
    period: "2022.07 — 2024.05",
    description:
      "Owned regional marketing operations for the largest EV market in North China. Ran campaigns end-to-end, managed local agencies, and drove a 30% lift in test-drive conversion across 12 cities.",
  },
  {
    title: "B.S. in Computer Science",
    company: "Inner Mongolia University · Hohhot",
    period: "2017.09 — 2021.06",
    description:
      "First-class honours. Foundations in algorithms, distributed systems, and HCI. Active in entrepreneurship competitions and the campus design society.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
