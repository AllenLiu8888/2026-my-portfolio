import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"

interface Props {
  source: string
}

export function MdxRenderer({ source }: Props) {
  return (
    <article className="prose prose-invert prose-zinc max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
      prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-zinc-800
      prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:bg-gradient-to-r prose-h2:from-purple-300 prose-h2:via-pink-300 prose-h2:to-purple-400
      prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-zinc-100
      prose-p:text-zinc-300 prose-p:leading-relaxed
      prose-a:text-purple-300 prose-a:no-underline hover:prose-a:text-pink-300 prose-a:transition-colors
      prose-strong:text-white prose-strong:font-semibold
      prose-blockquote:border-l-purple-500 prose-blockquote:text-zinc-300 prose-blockquote:not-italic prose-blockquote:bg-zinc-900/40 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r
      prose-code:text-pink-300 prose-code:bg-zinc-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:hidden prose-code:after:hidden prose-code:font-normal
      prose-pre:bg-zinc-950/80 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl
      prose-li:text-zinc-300 prose-li:marker:text-purple-400
      prose-hr:border-zinc-800
      prose-table:text-sm
      prose-thead:border-b prose-thead:border-zinc-800
      prose-th:text-zinc-200 prose-th:font-semibold prose-th:text-left prose-th:py-2
      prose-td:text-zinc-300 prose-td:py-2 prose-td:align-top
      prose-tr:border-b prose-tr:border-zinc-900
      prose-img:rounded-xl prose-img:border prose-img:border-zinc-800">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
              [
                rehypePrettyCode,
                {
                  theme: "github-dark-dimmed",
                  keepBackground: false,
                },
              ],
            ],
          },
        }}
      />
    </article>
  )
}
