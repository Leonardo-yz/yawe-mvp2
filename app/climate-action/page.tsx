"use client"

import Image from "next/image"

const galleryImages = [
  {
    image: "/gallery/climate1.jpg",
    title: "Climate Awareness Training",
    description:
      "Community members learning about climate change and its impacts locally.",
  },
  {
    image: "/gallery/climate2.jpg",
    title: "Climate Action Dialogue",
    description:
      "Community discussions on local climate challenges and solutions.",
  },
  {
    image: "/gallery/climate3.jpg",
    title: "Sustainable Livelihood Training",
    description:
      "Youth learning eco-friendly income-generating activities.",
  },
  {
    image: "/gallery/climate4.jpg",
    title: "Green Future Campaign",
    description:
      "Campaign promoting long-term environmental sustainability in Shinyanga Tanzania.",
  },
  {
    image: "/gallery/climate5.jpg",
    title: "Climate Resilience Training",
    description:
      "Communities learning how to adapt to climate change challenges.",
  },
  {
    image: "/gallery/climate6.jpg",
    title: "Green Community Initiative",
    description:
      "Villages adopting environmentally friendly development practices.",
  },
  {
    image: "/gallery/climate7.jpg",
    title: "Climate Advocacy Workshop",
    description:
      "Youth building skills to influence environmental policy and decisions.",
  },
  {
    image: "/gallery/climate8.jpg",
    title: "Youth Climate Leadership",
    description:
      "Young leaders trained to advocate for climate justice and action.",
  },
  {
    image: "/gallery/climate9.jpg",
    title: "Tree Planting Activity",
    description:
      "Students planting trees to restore degraded environments and improve air quality.",
  },
  {
    image: "/gallery/climate10.jpg",
    title: "Climate Innovation",
    description:
      "Sample description about innovative solutions for climate resilience.",
  },
  {
    image: "/gallery/climate11.jpg",
    title: "School Environmental Education",
    description:
      "Students learning about protecting nature and climate responsibility.",
  },
  {
    image: "/gallery/climate12.jpg",
    title: "Community Forest Restoration",
    description:
      "Replanting trees to restore damaged forest ecosystems.",
  },
  {
    image: "/gallery/climate13.jpg",
    title: "Young Environmental Advocacy",
    description:
      "Young activists speaking out for stronger environmental protection.",
  },
  {
    image: "/gallery/climate14.jpg",
    title: "Environmental Club Activities",
    description:
      "School clubs engaging students in conservation projects.",
  },
  {
    image: "/gallery/climate15.jpg",
    title: "Clean Energy Promotion",
    description:
      "Community introduced to solar and renewable energy solutions.",
  },
]

export default function ClimateActionPage() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#98027F] via-[#055D5D] to-[#98027F]">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-6xl mx-auto">

          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-14 shadow-2xl">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Climate Action & Environment
            </h1>

            {/* WHITE ANIMATED LINE */}
            <div className="w-20 h-[2px] bg-white rounded-full transition-all duration-500 group-hover:w-full"></div>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              We are committed to building climate-resilient communities by promoting environmental conservation and inclusive climate solutions across Tanzania.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Our initiatives focus on climate awareness, tree planting, waste management, clean energy, water conservation, and sustainable agriculture.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              We empower young people with leadership, advocacy, and civic engagement skills to champion climate justice and hold decision-makers accountable.
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
                className="group relative rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-[#98027F]/40 transition-all duration-500 hover:-translate-y-2"
              >

                {/* IMAGE */}
                <div className="relative h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="text-xl font-bold text-white">
                    {item.title}
                  </h2>

                  {/* WHITE LINE ANIMATION */}
                  <div className="w-16 h-[2px] bg-white mt-2 rounded-full transition-all duration-500 group-hover:w-full"></div>

                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>

                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#055D5D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}