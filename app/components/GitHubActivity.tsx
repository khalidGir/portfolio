"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "./Section"

export default function GitHubActivity() {
  const [loaded, setLoaded] = useState(false)

  return (
    <Section id="github">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            Open Source
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Contribution{" "}
            <span className="gradient-text">calendar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Real commit activity from my GitHub profile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
        >
          {!loaded && (
            <div className="flex items-center justify-center py-16">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" />
            </div>
          )}
          <img
            src="https://github.com/users/khalidGir/contributions"
            alt="GitHub contribution graph"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className="mx-auto"
            style={{ display: loaded ? "block" : "none" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/khalidGir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-800 px-5 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
          >
            View full profile
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
