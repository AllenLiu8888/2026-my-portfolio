import { notFound } from "next/navigation"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"
import type { Metadata } from "next"

import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { PostHero } from "@/components/blog/PostHero"
import { PostCard } from "@/components/blog/PostCard"
import { MdxRenderer } from "@/components/blog/MdxRenderer"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { routing } from "@/i18n/routing"

type Params = { locale: string; slug: string }

export function generateStaticParams() {
  const posts = getAllPosts()
  const params: Params[] = []
  for (const locale of routing.locales) {
    for (const p of posts) {
      params.push({ locale, slug: p.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      images: post.frontmatter.cover ? [post.frontmatter.cover] : undefined,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.frontmatter.tags ?? [], 2)
  const t = await getTranslations({ locale, namespace: "blog" })

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />

      <PostHero
        title={post.frontmatter.title}
        summary={post.frontmatter.summary}
        cover={post.frontmatter.cover}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags ?? []}
        readingMinutes={post.readingMinutes}
        backLabel={t("backToList")}
        readMinLabel={t("minRead")}
      />

      <section className="pb-16">
        <div className="container max-w-3xl">
          <MdxRenderer source={post.content} />
        </div>
      </section>

      {related.length > 0 && (
        <RelatedSection related={related} title={t("relatedPosts")} readMin={t("minRead")} />
      )}
    </div>
  )
}

function RelatedSection({
  related,
  title,
  readMin,
}: {
  related: ReturnType<typeof getRelatedPosts>
  title: string
  readMin: string
}) {
  return (
    <section className="pb-32 pt-8 border-t border-zinc-900">
      <div className="container max-w-4xl pt-12">
        <h2 className="text-xl font-semibold text-zinc-300 mb-6">{title}</h2>
        <div className="space-y-4">
          {related.map((p) => (
            <PostCard
              key={p.slug}
              slug={p.slug}
              title={p.frontmatter.title}
              summary={p.frontmatter.summary}
              cover={p.frontmatter.cover}
              date={p.frontmatter.date}
              tags={p.frontmatter.tags ?? []}
              readingMinutes={p.readingMinutes}
              readMinLabel={readMin}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
