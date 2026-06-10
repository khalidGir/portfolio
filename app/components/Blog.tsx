"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Clock } from "lucide-react"
import { blogPosts } from "@/data/portfolio"
import Section from "./Section"

export default function Blog() {
  return (
    <Section id="blog">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            Blog
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Latest{" "}
            <span className="gradient-text">writing</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{post.date}</span>
                <span>&middot;</span>
                <Clock size={12} />
                <span>{post.readTime}</span>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug transition-colors group-hover:text-amber-400">
                {post.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-amber-400">
                Read more
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}
