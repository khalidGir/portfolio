"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/data/portfolio"
import Section from "./Section"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            What people{" "}
            <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        <div className="relative mt-12">
          <Quote className="mx-auto h-8 w-8 text-amber-400/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="h-12 w-12 rounded-full border border-zinc-700"
                />
                <div className="text-left">
                  <p className="font-medium">{testimonials[current].name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-amber-400"
                      : "w-1.5 bg-zinc-700"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
