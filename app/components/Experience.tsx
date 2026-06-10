"use client"

import { motion } from "framer-motion"
import { experience } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import Section from "./Section"

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Where I&apos;ve{" "}
            <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-500/50 via-zinc-700 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-16">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={cn(
                  "relative flex flex-col gap-4 pl-12 md:gap-8",
                  i % 2 === 0 ? "md:flex-row md:pl-0 md:text-right" : "md:flex-row-reverse md:pr-0"
                )}
              >
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-amber-400 bg-black md:left-1/2 md:-translate-x-1.5" />

                <div className="md:w-1/2">
                  <span className="text-xs font-medium text-amber-400/80">
                    {item.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
                  <p className="text-sm text-zinc-500">
                    {item.company} &middot; {item.location}
                  </p>
                </div>

                <div className={cn("md:w-1/2")}>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-zinc-500">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
