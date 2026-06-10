"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { personalInfo } from "@/data/portfolio"
import Section from "./Section"

export default function Contact() {
  return (
    <Section id="contact" className="bg-zinc-900/30">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-amber-400">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s{" "}
            <span className="gradient-text">connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Have a project in mind or just want to say hello? Reach out anytime.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <motion.a
            href={`tel:${personalInfo.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex w-full max-w-md items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
              <Phone size={20} className="text-amber-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-zinc-400">Call me</p>
              <p className="text-lg font-semibold">{personalInfo.phone}</p>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex w-full max-w-md items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-600 hover:bg-zinc-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
              <Mail size={20} className="text-amber-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-zinc-400">Email</p>
              <p className="text-lg font-semibold">{personalInfo.email}</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex w-full max-w-md items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
              <MapPin size={20} className="text-amber-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-zinc-400">Location</p>
              <p className="text-lg font-semibold">{personalInfo.location}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
