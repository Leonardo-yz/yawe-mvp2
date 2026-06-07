import { MapPin, Calendar, Briefcase, Download } from "lucide-react"
import Link from "next/link"

interface Props {
  item: {
    id: number
    type: string
    title: string
    location: string
    department: string
    deadline: string
    posted: string
    isNew: boolean
    description: string
    pdf: string
  }
}

export default function CareersTenderCard({ item }: Props) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-[#98027F] to-pink-500"></div>

      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#98027F] transition">
              {item.title}
            </h2>

            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <Briefcase size={18} />
              <span>{item.department}</span>
            </div>
          </div>

          {item.isNew && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse font-semibold shadow-md">
              NEW
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={18} className="text-[#98027F]" />
            <span>{item.location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Calendar size={18} className="text-[#98027F]" />
            <span>Deadline: {item.deadline}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">
            Posted {item.posted}
          </span>

          <Link
            href={item.pdf}
            target="_blank"
            className="flex items-center gap-2 bg-[#98027F] hover:bg-[#7a0267] text-white px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download size={18} />
            Download PDF
          </Link>
        </div>
      </div>
    </div>
  )
}