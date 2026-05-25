import { useTranslations } from "next-intl"
import { setRequestLocale, getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { PostCard } from "@/components/blog/PostCard"
import { Link } from "@/i18n/navigation"
import { getAllPosts } from "@/lib/blog"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "blog" })
  return {
    title: t("title"),
    description: t("subtitle"),
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />
      <BlogContent posts={posts} />
    </div>
  )
}

function BlogContent({
  posts,
}: {
  posts: ReturnType<typeof getAllPosts>
}) {
  const t = useTranslations("blog")

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToPortfolio")}
          </Link>

          <div className="inline-block mb-3">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="relative z-10">Blog</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Post list */}
      <section className="relative pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10 max-w-4xl">
          {posts.length === 0 ? (
            <div className="text-center text-zinc-500 py-20">{t("empty")}</div>
          ) : (
            <div className="space-y-6">
              {posts.map((p) => (
                <PostCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.frontmatter.title}
                  summary={p.frontmatter.summary}
                  cover={p.frontmatter.cover}
                  date={p.frontmatter.date}
                  tags={p.frontmatter.tags ?? []}
                  readingMinutes={p.readingMinutes}
                  readMinLabel={t("minRead")}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
