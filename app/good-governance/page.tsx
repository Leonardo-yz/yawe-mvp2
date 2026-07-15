"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

type GalleryItem = {
  image: string
  title: string
  description: string
  fullDescription?: string
  location?: string
  date?: string
  category?: string
  participants?: string
  partner?: string
  impact?: string
}

const galleryImages: GalleryItem[] = [
  {
    image: "/gallery/governance1.jpg",
    title: "Civic Education Workshop",
    description:
      "Citizens learning their rights, responsibilities, and democratic participation.",
  },
  {
    image: "/gallery/governance2.jpg",
    title: "Youth Leadership Training",
    description:
      "Young people developing leadership and civic engagement skills.",
  },
  {
    image: "/gallery/governance3.jpg",
    title: "Public Participation Forum",
    description:
      "Community members contributing ideas to local decision-making processes.",
  },
  {
    image: "/gallery/governance4.jpg",
    title: "Good Governance Awareness",
    description:
      "Citizens learning principles of transparency and accountable leadership.",
  },
  {
    image: "/gallery/governance5.jpg",
    title: "Community Accountability Forum",
    description:
      "Residents engaging leaders on public service delivery and performance.",
  },
  {
    image: "/gallery/governance6.jpg",
    title: "Human Rights Awareness Session",
    description:
      "Participants learning about fundamental rights and freedoms.",
  },
  {
    image: "/gallery/governance7.jpg",
    title: "Inclusive Leadership Workshop",
    description:
      "Leaders building skills for inclusive and participatory governance.",
  },
  {
    image: "/gallery/governance8.jpg",
    title: "Citizen Empowerment Training",
    description:
      "Community members gaining confidence to engage in public affairs.",
  },
  {
    image: "/gallery/governance9.jpg",
    title: "Social Justice Dialogue",
    description:
      "Participants discussing equality, fairness, and community inclusion.",
  },
  {
    image: "/gallery/governance10.jpg",
    title: "Youth Civic Engagement",
    description:
      "Young citizens contributing to positive social and political change.",
  },
  {
    image: "/gallery/governance11.jpg",
    title: "Public Accountability Meeting",
    description:
      "Community leaders responding to questions from local residents.",
  },
  {
    image: "/gallery/governance12.jpg",
    title: "Inclusive Governance",
    description:
      "Sample description about ensuring all groups are included in governance systems.",
  },
  {
    image: "/gallery/governance13.jpg",
    title: "Governance Capacity Building",
    description:
      "Local leaders strengthening governance and management skills.",
  },
  {
    image: "/gallery/governance14.jpg",
    title: "Advocacy Skills Training",
    description:
      "Participants learning effective approaches to influence public policy.",
  },
  {
    image: "/gallery/governance15.jpg",
    title: "Participatory Governance Meeting",
    description:
      "Citizens collaborating with leaders on development decisions.",
  },
]

export default function HealthAndNutritionPage() { 
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null) 
  function closeModal() { setSelectedItem(null) } useEffect(() => { function handleEscape(event: KeyboardEvent) { if (event.key === "Escape") { closeModal() } } if (selectedItem) { document.addEventListener("keydown", handleEscape) 
    document.body.style.overflow = "hidden" } return () => { document.removeEventListener("keydown", handleEscape) 
      document.body.style.overflow = "" } }, [selectedItem]) 
      return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#98027F] via-[#055D5D] to-[#98027F]">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-6xl mx-auto">

          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-14 shadow-2xl">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Good Governance & Democracy
            </h1>

            {/* WHITE LINE */}
            <div className="w-20 h-[2px] bg-white rounded-full transition-all duration-500 group-hover:w-full"></div>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              We strengthen civic participation, transparency, accountability, and inclusive leadership at community and national levels.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Through civic education, youth engagement, policy advocacy, and community dialogues, we empower citizens to actively participate in democratic processes and decision-making.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Our work promotes human rights, social justice, and good governance to foster peaceful, inclusive, and resilient communities in Tanzania.
            </p>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{galleryImages.map((item, index) => (
  <div
    key={index}
    className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#98027F]/40"
  >
    {/* IMAGE */}
    <button
      type="button"
      onClick={() => setSelectedItem(item)}
      className="relative block h-72 w-full overflow-hidden"
      aria-label={`Open details for ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
    </button>

    {/* CONTENT */}
    <div className="relative z-10 p-6">
      <button
        type="button"
        onClick={() => setSelectedItem(item)}
        className="text-left"
      >
        <h2 className="text-xl font-bold text-white transition hover:text-pink-200">
          {item.title}
        </h2>
      </button>

      <div className="mt-2 h-[2px] w-16 rounded-full bg-white transition-all duration-500 group-hover:w-full" />

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        {item.description}
      </p>

      <button
        type="button"
        onClick={() => setSelectedItem(item)}
        className="mt-5 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#055D5D]"
      >
        View details
      </button>
    </div>

    {/* DECORATIVE OVERLAY */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#98027F]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
  </div>
))}



          </div>
        </div>
      </section>

    {/* MODAL POPUP */}
{selectedItem && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-labelledby="gallery-modal-title"
    onClick={closeModal}
  >
    <div
      className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
      onClick={(event) => event.stopPropagation()}
    >
      {/* CLOSE BUTTON */}
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close popup"
        className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition hover:rotate-90 hover:bg-[#98027F]"
      >
        <X size={24} />
      </button>

      {/* FIXED IMAGE SECTION */}
      <div className="relative h-64 w-full shrink-0 md:h-full md:w-[45%]">
        <Image
          src={selectedItem.image}
          alt={selectedItem.title}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="inline-flex rounded-full bg-[#98027F] px-4 py-2 text-sm font-semibold">
            {selectedItem.category ?? "Health & Nutrition"}
          </span>

          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
            {selectedItem.title}
          </h2>
        </div>
      </div>

      {/* SCROLLABLE CONTENT SECTION */}
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="border-b border-gray-200 bg-white px-6 py-5 pr-20 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#98027F]">
            Activity Details
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          <p className="text-base leading-8 text-gray-700 md:text-lg">
            {selectedItem.fullDescription ?? selectedItem.description}
          </p>

          {(
            selectedItem.location ||
            selectedItem.date ||
            selectedItem.participants ||
            selectedItem.partner
          ) && (
            <div className="mt-8 grid gap-5 rounded-2xl bg-gray-50 p-6 sm:grid-cols-2">
              {selectedItem.location && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Location
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.location}
                  </p>
                </div>
              )}

              {selectedItem.date && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Date
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.date}
                  </p>
                </div>
              )}

              {selectedItem.participants && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Participants
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.participants}
                  </p>
                </div>
              )}

              {selectedItem.partner && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Partners
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.partner}
                  </p>
                </div>
              )}
            </div>
          )}

          {selectedItem.impact && (
            <div className="mt-8 rounded-2xl border-l-4 border-[#055D5D] bg-[#055D5D]/10 p-6">
              <h3 className="text-xl font-bold text-[#055D5D]">
                Activity Impact
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                {selectedItem.impact}
              </p>
            </div>
          )}

          {/* Add any additional long content here */}
          <div className="mt-8 space-y-5 text-gray-700">
            
          </div>
        </div>

        {/* FIXED FOOTER */}
        <div className="flex items-center justify-end border-t border-gray-200 bg-white px-6 py-4 md:px-8">
          <button
            type="button"
            onClick={closeModal}
            className="rounded-xl bg-[#98027F] px-7 py-3 font-semibold text-white transition hover:bg-[#7c0268]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </main>
  )
}