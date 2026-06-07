"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Search,
  MapPin,
  Calendar,
  Briefcase,
  Download,
} from "lucide-react"

const opportunities = [
  {
    id: 1,
    type: "career",
    title: "Finance Officer",
    location: "Simiyu",
    department: "Finance Department",
    deadline: "June 20, 2025",
    posted: "2 days ago",
    isNew: false,
    description:
      "We are looking for a passionate and experienced Finance Officer to join our organization.",
    pdf: "/reports/finance-officer.pdf",
  },

  {
    id: 2,
    type: "career",
    title: "Monitoring & Evaluation Specialist",
    location: "Mwanza",
    department: "Programs",
    deadline: "June 28, 2025",
    posted: "5 days ago",
    isNew: false,
    description:
      "Seeking an M&E specialist with strong analytical and reporting skills.",
    pdf: "/reports/me-specialist.pdf",
  },

  {
    id: 3,
    type: "tender",
    title: "Supply of Office Furniture",
    location: "Shinyanga",
    department: "Procurement",
    deadline: "July 10, 2025",
    posted: "1 day ago",
    isNew: false,
    description:
      "Tender for supply and installation of office furniture for organizational offices.",
    pdf: "/reports/furniture-tender.pdf",
  },

  {
    id: 4,
    type: "tender",
    title: "INVITATION FOR TENDER FOR PRINTING BROCHURES AND PROMOTIONAL MATERIALS",
    location: "Shinyanga",
    department: "Procurement",
    deadline: "June 6, 2026",
    posted: "4 week ago",
    isNew: true,
    description:
      "Invitation for qualified companies to provide printing and branding services.",
    pdf: "/reports/YAWE_Invitation for tender_Final Advert.pdf",
  },
]

export default function CareersTendersPage() {
  const [activeTab, setActiveTab] = useState("career")
  const [search, setSearch] = useState("")

  const filteredData = useMemo(() => {
    return opportunities.filter(
      (item) =>
        item.type === activeTab &&
        item.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [activeTab, search])

  const latestItems = opportunities.filter(
    (item) => item.isNew === true
  )

  return (
    <main className="bg-gradient-to-br from-[#036B68] via-[#98027F] to-[#036B68] min-h-screen text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#98027F33,transparent_40%)]"></div>

        <div className="relative max-w-5xl mx-auto">

          <span className="inline-block bg-[#98027F]/20 text-pink-300 px-5 py-2 rounded-full border border-pink-500/30 mb-6 text-sm tracking-wide uppercase">
            Opportunities Center
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Careers &{" "}
            <span className="text-[#FFFFFF]">
              Tenders
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore the latest career opportunities and tenders
            posted by our organization. Stay updated and apply
            before deadlines.
          </p>

        </div>
      </section>

      {/* LATEST OPPORTUNITIES */}
      <section className="px-6 mb-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">

            <h2 className="text-3xl font-bold">
              Latest Opportunities
            </h2>

            <div className="bg-[#FFF200] border border-red-500/30 px-4 py-2 rounded-full text-[#000000] text-sm animate-pulse">
              {latestItems.length} New Posts Available
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {latestItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >

                {/* TOP BAR */}
                <div className="h-2 bg-gradient-to-r from-[#98027F] to-pink-500"></div>

                <div className="p-8">

                  {/* HEADER */}
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

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* DETAILS */}
                  <div className="space-y-3 mb-6">

                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin
                        size={18}
                        className="text-[#98027F]"
                      />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar
                        size={18}
                        className="text-[#98027F]"
                      />
                      <span>
                        Deadline: {item.deadline}
                      </span>
                    </div>

                  </div>

                  {/* FOOTER */}
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
            ))}

          </div>

        </div>

      </section>

      {/* SEARCH + TABS */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          {/* SEARCH */}
          <div className="relative max-w-2xl mx-auto mb-10">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Search careers or tenders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-full py-5 pl-14 pr-6 text-white placeholder-gray-400 outline-none focus:border-[#98027F] transition-all"
            />

          </div>

          {/* TABS */}
          <div className="flex justify-center mb-10">

            <div className="bg-white/10 backdrop-blur-lg p-2 rounded-full flex gap-2 shadow-xl border border-white/10">

              <button
                onClick={() => setActiveTab("career")}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                  activeTab === "career"
                    ? "bg-[#98027F] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Careers
              </button>

              <button
                onClick={() => setActiveTab("tender")}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                  activeTab === "tender"
                    ? "bg-[#98027F] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Tenders
              </button>

            </div>

          </div>

          {/* FILTERED DATA */}
          {filteredData.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >

                  {/* TOP BAR */}
                  <div className="h-2 bg-gradient-to-r from-[#98027F] to-pink-500"></div>

                  <div className="p-8">

                    {/* HEADER */}
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

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* DETAILS */}
                    <div className="space-y-3 mb-6">

                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin
                          size={18}
                          className="text-[#98027F]"
                        />
                        <span>{item.location}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar
                          size={18}
                          className="text-[#98027F]"
                        />
                        <span>
                          Deadline: {item.deadline}
                        </span>
                      </div>

                    </div>

                    {/* FOOTER */}
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
              ))}

            </div>

          ) : (

            <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/10">

              <h3 className="text-3xl font-bold mb-4 text-gray-200">
                No Opportunities Found
              </h3>

              <p className="text-gray-400 max-w-xl mx-auto">
                There are currently no available opportunities
                matching your search.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  )
}