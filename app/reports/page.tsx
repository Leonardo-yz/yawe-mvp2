"use client"

import { useState } from "react"
import Image from "next/image"
import { reports } from "@/data/reports"

import {
  Search,
  Download,
  FileText,
  CalendarDays,
} from "lucide-react"

export default function ReportsPage() {

  const [search, setSearch] = useState("")

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <main className="bg-gradient-to-br from-[#036B68] via-[#98027F] to-[#036B68] min-h-screen text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-[#055D5D]" />

        <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Reports & Publications
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Explore our annual reports, project reports,
            financial statements and organization publications.
          </p>

        </div>
      </section>

      {/* SEARCH */}

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">

        <div className="bg-white shadow-2xl rounded-3xl p-6 flex items-center gap-4">

          <Search className="text-[#98027F]" size={28} />

          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-lg"
          />

        </div>
      </section>

      {/* REPORTS GRID */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredReports.map((report) => (

            <div
              key={report.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              {/* COVER */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={report.cover}
                  alt={report.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 left-4 bg-[#98027F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {report.category}
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <div className="flex items-center gap-2 text-[#055D5D] mb-4">

                  <FileText size={20} />

                  <span className="font-medium">
                    PDF Document
                  </span>

                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {report.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mb-2">

                  <CalendarDays size={18} />

                  <span>{report.date}</span>

                </div>

                <p className="text-gray-500 mb-6">
                  File Size: {report.size}
                </p>

                {/* BUTTONS */}

                <div className="flex gap-4">

                  <a
                    href={report.file}
                    target="_blank"
                    className="flex-1 bg-[#055D5D] hover:bg-[#044848] text-white py-3 rounded-xl text-center font-semibold transition"
                  >
                    View
                  </a>

                  <a
                    href={report.file}
                    download
                    className="flex items-center justify-center gap-2 flex-1 bg-[#98027F] hover:bg-[#7c0268] text-white py-3 rounded-xl font-semibold transition"
                  >

                    <Download size={18} />

                    Download

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}