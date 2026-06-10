"use client"

import { Heart } from "lucide-react"
import { Github, Linkedin, Twitter } from "./Icons"
import { personalInfo } from "@/data/portfolio"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-10">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="font-medium text-zinc-400">{personalInfo.name}</span>
          <Heart size={12} className="text-amber-400" />
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
