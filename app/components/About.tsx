"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/portfolio"
import Section from "./Section"

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            About Me
          </span>
        </motion.div>

        <div className="mt-8 grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Turning complex problems into{" "}
              <span className="gradient-text">elegant solutions</span>
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-400">
              {personalInfo.bio}
            </p>
            <p className="mt-4 leading-relaxed text-zinc-500">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or writing
              about my experiences in web development.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <span className="text-2xl font-bold text-amber-400">3+</span>
                <p className="mt-1 text-sm text-zinc-500">Years Experience</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-amber-400">12+</span>
                <p className="mt-1 text-sm text-zinc-500">Projects Delivered</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-amber-400">8+</span>
                <p className="mt-1 text-sm text-zinc-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="gradient-border overflow-hidden rounded-2xl bg-zinc-900/50">
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8">
                <div className="flex h-full flex-col justify-end">
                  <p className="text-sm leading-relaxed text-zinc-400 italic">
                    &ldquo;Crafting code that feels like art — where every line
                    serves a purpose and every pixel has a reason.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                    <div>
                      <p className="text-sm font-medium">{personalInfo.name}</p>
                      <p className="text-xs text-zinc-500">
                        {personalInfo.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
