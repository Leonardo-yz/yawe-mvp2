"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import type { Project } from "@/data/projects"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative rounded-2xl p-6 cursor-pointer overflow-hidden 
        bg-white/5 backdrop-blur-xl border border-white/10 
        hover:border-[#98027F]/50 shadow-lg transition-all"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#98027F]/10 to-[#055D5D]/10 opacity-60" />

        <div className="relative z-10">

          {/* CATEGORY BADGE */}
          <span className="text-xs px-3 py-1 rounded-full bg-[#98027F]/20 text-white">
            {project.category}
          </span>

          {/* TITLE */}
          <div className="flex items-center gap-2 mt-3">
            <Globe className="text-[#98027F]" size={18} />
            <h2 className="font-bold text-lg leading-snug">
              {project.title}
            </h2>
          </div>

          {/* LOCATION + YEAR */}
          <p className="text-sm text-gray-300 mt-1">
            {project.location} • {project.year}
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-400 mt-3 line-clamp-3">
            {project.description}
          </p>

          {/* CTA */}
          <div className="mt-4 text-[#98027F] font-semibold">
            Explore Project →
          </div>
        </div>
      </motion.div>
    </Link>
  )
}