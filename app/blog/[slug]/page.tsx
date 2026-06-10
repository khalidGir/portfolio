import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { blogPosts } from "@/data/portfolio"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-foreground">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#blog"
          className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-amber-400"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <div className="mb-4 flex items-center gap-3 text-sm text-zinc-500">
          <span>{post.date}</span>
          <span>&middot;</span>
          <Clock size={12} />
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          {post.excerpt}
        </p>

        <div className="mb-12 mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-zinc-800" />

        <div className="mt-8 space-y-6 leading-relaxed text-zinc-300">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  )
}
