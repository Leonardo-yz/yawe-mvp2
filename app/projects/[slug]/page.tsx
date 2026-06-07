import { programs } from "@/data/program"
import { notFound } from "next/navigation"

export default function ProjectDetails({
  params,
}: {
  params: { slug: string }
}) {
  const program = programs.find((p) => p.slug === params.slug)

  if (!program) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#98027F] via-[#98027F] to-[#055D5D] text-white px-6 py-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold">{program.title}</h1>
        <p className="text-gray-200 mt-2">
          {program.location} • {program.year}
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto mt-12 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
        <p className="text-gray-200 leading-relaxed">
          {program.description}
        </p>

        <div className="mt-6 text-[#98027F] font-semibold">
          More detailed content (impact, gallery, reports, etc.) can be added here.
        </div>
      </div>
    </div>
  )
}