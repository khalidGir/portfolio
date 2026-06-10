"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { personalInfo } from "@/data/portfolio"
import Section from "./Section"

export default function ResumeSection() {
  return (
    <Section id="resume">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-border rounded-3xl bg-zinc-900/30 p-10 md:p-16"
        >
          <FileText size={40} className="mx-auto text-amber-400" />
          <h2 className="mt-6 text-2xl font-bold md:text-3xl">
            Want to know more?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            Download my resume for a complete overview of my experience, skills,
            and past projects.
          </p>
          <a
            href={personalInfo.resumeUrl}
            download
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:opacity-90"
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
