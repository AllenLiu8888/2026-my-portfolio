import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export interface PostFrontmatter {
  title: string
  date: string
  tags: string[]
  cover?: string
  summary: string
  lang?: "zh" | "en" | "both"
}

export interface Post {
  slug: string
  filename: string
  frontmatter: PostFrontmatter
  content: string
  readingMinutes: number
}

export interface PostSummary {
  slug: string
  frontmatter: PostFrontmatter
  readingMinutes: number
}

function deriveSlug(filename: string): string {
  // e.g. 2026-05-25-why-dark-theme.mdx → why-dark-theme
  const base = filename.replace(/\.mdx?$/, "")
  return base.replace(/^\d{4}-\d{2}-\d{2}-/, "")
}

export function getAllPostFilenames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_") && !f.startsWith("."))
}

function normalizeFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  // gray-matter coerces YAML date values to JS Date objects; force string.
  const rawDate = data.date
  let date = ""
  if (rawDate instanceof Date) {
    date = rawDate.toISOString().slice(0, 10)
  } else if (typeof rawDate === "string") {
    date = rawDate
  }
  return {
    title: String(data.title ?? ""),
    date,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    cover: typeof data.cover === "string" ? data.cover : undefined,
    summary: String(data.summary ?? ""),
    lang: (data.lang as PostFrontmatter["lang"]) ?? undefined,
  }
}

export function getAllPosts(): PostSummary[] {
  const files = getAllPostFilenames()
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8")
    const { data, content } = matter(raw)
    const stats = readingTime(content)
    return {
      slug: deriveSlug(filename),
      frontmatter: normalizeFrontmatter(data),
      readingMinutes: Math.max(1, Math.round(stats.minutes)),
    }
  })
  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  )
}

export function getPostBySlug(slug: string): Post | null {
  const files = getAllPostFilenames()
  const match = files.find((f) => deriveSlug(f) === slug)
  if (!match) return null
  const raw = fs.readFileSync(path.join(BLOG_DIR, match), "utf8")
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  return {
    slug,
    filename: match,
    frontmatter: normalizeFrontmatter(data),
    content,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
  }
}

export function getAllTags(): Array<{ tag: string; count: number }> {
  const posts = getAllPosts()
  const counts = new Map<string, number>()
  posts.forEach((p) => {
    p.frontmatter.tags?.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1))
  })
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): PostSummary[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug)
  // Score = number of overlapping tags
  const scored = all
    .map((p) => ({
      post: p,
      score: p.frontmatter.tags?.filter((t) => tags.includes(t)).length ?? 0,
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.post)
}
