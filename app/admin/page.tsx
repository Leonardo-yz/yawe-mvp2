"use client"

import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Users,
  Upload,
  Download,
  Bell,
  Search,
} from "lucide-react"

export default function AdminDashboard() {

  const stats = [
    {
      title: "Total Reports",
      value: "124",
      icon: FileText,
      color: "bg-[#98027F]",
    },

    {
      title: "Projects",
      value: "32",
      icon: FolderOpen,
      color: "bg-[#055D5D]",
    },

    {
      title: "Downloads",
      value: "8,542",
      icon: Download,
      color: "bg-orange-500",
    },

    {
      title: "Users",
      value: "1,245",
      icon: Users,
      color: "bg-blue-500",
    },
  ]

  const recentReports = [
    {
      title: "Annual Impact Report 2025",
      category: "Annual Reports",
      date: "May 2026",
    },

    {
      title: "HIV Awareness Project Report",
      category: "Projects",
      date: "April 2026",
    },

    {
      title: "Financial Transparency Report",
      category: "Finance",
      date: "March 2026",
    },
  ]

  return (

    <main className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <aside className="w-72 bg-[#055D5D] text-white hidden lg:flex flex-col">

        <div className="p-8 border-b border-white/10">

          <h1 className="text-3xl font-extrabold">
            YAWE Admin
          </h1>

          <p className="text-gray-300 mt-2">
            Dashboard Panel
          </p>

        </div>

        <nav className="flex-1 p-6 space-y-3">

          <button className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/20 transition rounded-2xl px-5 py-4">

            <LayoutDashboard />

            Dashboard

          </button>

          <button className="w-full flex items-center gap-4 hover:bg-white/10 transition rounded-2xl px-5 py-4">

            <FileText />

            Reports

          </button>

          <button className="w-full flex items-center gap-4 hover:bg-white/10 transition rounded-2xl px-5 py-4">

            <FolderOpen />

            Projects

          </button>

          <button className="w-full flex items-center gap-4 hover:bg-white/10 transition rounded-2xl px-5 py-4">

            <Users />

            Users

          </button>

        </nav>

      </aside>

      {/* MAIN CONTENT */}

      <section className="flex-1">

        {/* TOPBAR */}

        <div className="bg-white shadow-sm px-8 py-6 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 mt-1">
              Welcome back, Administrator
            </p>

          </div>

          <div className="flex items-center gap-5">

            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3">

              <Search className="text-gray-500" size={20} />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-3"
              />

            </div>

            <button className="relative bg-gray-100 p-3 rounded-full">

              <Bell className="text-gray-700" />

              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full" />

            </button>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-8">

          {/* STATS */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((item, index) => {

              const Icon = item.icon

              return (

                <div
                  key={index}
                  className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl transition duration-500"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-gray-500 mb-2">
                        {item.title}
                      </p>

                      <h3 className="text-4xl font-extrabold text-gray-800">
                        {item.value}
                      </h3>

                    </div>

                    <div className={`${item.color} p-4 rounded-2xl text-white`}>

                      <Icon size={30} />

                    </div>

                  </div>

                </div>

              )
            })}

          </div>

          {/* GRID */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* UPLOAD SECTION */}

            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-md">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h3 className="text-2xl font-bold text-gray-800">
                    Upload New Report
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Upload PDF reports and publications
                  </p>

                </div>

                <div className="bg-[#98027F] text-white p-4 rounded-2xl">

                  <Upload />

                </div>

              </div>

              {/* FORM */}

              <form className="space-y-6">

                <div>

                  <label className="block mb-2 font-medium text-gray-700">
                    Report Title
                  </label>

                  <input
                    type="text"
                    placeholder="Enter report title"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#98027F]"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium text-gray-700">
                    Category
                  </label>

                  <select
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#055D5D]"
                  >

                    <option>Annual Reports</option>
                    <option>Projects</option>
                    <option>Finance</option>
                    <option>Research</option>

                  </select>

                </div>

                <div>

                  <label className="block mb-2 font-medium text-gray-700">
                    Upload PDF
                  </label>

                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full border border-dashed border-[#98027F] rounded-2xl p-6"
                  />

                </div>

                <button
                  type="submit"
                  className="bg-[#98027F] hover:bg-[#7b0267] transition text-white px-8 py-4 rounded-2xl font-bold"
                >
                  Upload Report
                </button>

              </form>

            </div>

            {/* RECENT REPORTS */}

            <div className="bg-white rounded-3xl p-8 shadow-md">

              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Recent Reports
              </h3>

              <div className="space-y-5">

                {recentReports.map((report, index) => (

                  <div
                    key={index}
                    className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition"
                  >

                    <h4 className="font-bold text-gray-800">
                      {report.title}
                    </h4>

                    <p className="text-sm text-[#98027F] mt-1">
                      {report.category}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      {report.date}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}