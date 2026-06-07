"use client"

import { useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import { projects, type Project } from "@/data/projects"

const categories = ["All", "Climate", "Health", "Gender", "Governance"]

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)

  const featured: Project[] = projects.filter((p) => p.featured)

  return (
    <div className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white px-6 py-20">

      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mt-38">OUR PROJECTS</h1>
        <p className="text-gray-300">
          Driving impact through climate action, health, Gender & Good governance & Democracy
        </p>
      </div>
   

     {/* FILTER BAR */}
<div className="fixed top-30 left-0 w-full z-10 bg-[7F2074]/70 backdrop-blur-xl border-b border-white/10">

  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3 justify-center">

    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActive(cat)}
        className={`px-4 py-2 rounded-full transition ${
          active === cat
            ? "bg-[#98027F] text-white shadow-lg"
            : "bg-white/10 text-gray-300"
        }`}
      >
        {cat}
      </button>
    ))}

  </div>

</div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filtered.map((project: Project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}