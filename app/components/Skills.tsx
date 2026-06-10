"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skills } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import Section from "./Section"

const categories = Array.from(new Set(skills.map((s) => s.category)))

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory)

  return (
    <Section id="skills" className="bg-zinc-900/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            Skills & Technologies
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            My{" "}
            <span className="gradient-text">toolkit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Technologies I work with daily to bring ideas to life.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
              activeCategory === "All"
                ? "bg-amber-400 text-black"
                : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                activeCategory === cat
                  ? "bg-amber-400 text-black"
                  : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <img
                src={`https://img.shields.io/badge/${skill.badge.label}-${skill.badge.color}?style=for-the-badge&logo=${skill.badge.logo}&logoColor=white`}
                alt={skill.name}
                className="h-7 md:h-8"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
