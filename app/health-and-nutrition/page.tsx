"use client"

import Image from "next/image"

const galleryImages = [
  {
    image: "/gallery/health1.jpg",
    title: "Healthy Community Awareness Session",
    description:
      "Youth and women learning health education in a community gathering.",
  },
  {
    image: "/gallery/health2.jpg",
    title: "Nutrition Education Workshop",
    description:
      "Families receiving guidance on balanced diets and healthy food choices.",
  },
  {
    image: "/gallery/health3.jpg",
    title: "HIV Prevention Outreach",
    description:
      "Health workers sharing HIV prevention information with young people.",
  },
  {
    image: "/gallery/health4.jpg",
    title: "Community Nutrition Training",
    description:
      "Training sessions on preparing healthy and affordable local meals.",
  },
  {
    image: "/gallery/health5.jpg",
    title: "School Health Program",
    description:
      "Students learning hygiene, nutrition, and health promotion in school.",
  },
  {
    image: "/gallery/health6.jpg",
    title: "Safe Motherhood Education",
    description:
      "Pregnant women learning safe pregnancy and maternal health practices.",
  },
  {
    image: "/gallery/health7.jpg",
    title: "Disease Prevention Education",
    description:
      "Community receiving information on preventing common infectious diseases.",
  },
  {
    image: "/gallery/health8.jpg",
    title: "Health Volunteer Training",
    description:
      "Volunteers trained to support community health and education programs.",
  },
  {
    image: "/gallery/health9.jpg",
    title: "Women Health Empowerment",
    description:
      "Women gaining knowledge to improve personal and family health.",
  },
  {
    image: "/gallery/health10.jpg",
    title: "Wellbeing Awareness Campaign",
    description:
      "Campaign promoting healthy lifestyles across vulnerable communities in Tanzania.",
  },
  {
    image: "/gallery/health11.jpg",
    title: "Youth Empowerment Workshop",
    description:
      "Young participants building knowledge for healthier and productive lives.",
  },
  {
    image: "/gallery/health12.jpg",
    title: "Mental Health Dialogue",
    description:
      "Community members openly discussing emotional wellbeing and mental health.",
  },
  {
    image: "/gallery/health13.jpg",
    title: "Health Screening Camp",
    description:
      "Students attending free health checks and early disease detection.",
  },
  {
    image: "/gallery/health14.jpg",
    title: "Youth Empowerment Training",
    description:
      "Young people gaining knowledge and skills for healthier life decisions.",
  },
  {
    image: "/gallery/health15.jpg",
    title: "School Health Program",
    description:
      "Students learning hygiene, nutrition, and health promotion in school.",
  },
]

export default function HealthAndNutritionPage() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#98027F] via-[#055D5D] to-[#98027F]">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-6xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-14 shadow-2xl">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Health & Nutrition
            </h1>

            {/* WHITE LINE (hover expands) */}
            <div className="w-20 h-[2px] bg-white rounded-full transition-all duration-500 group-hover:w-full"></div>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              At YAWE, we work to improve access to quality health and nutrition
              services for vulnerable communities across Tanzania. Our programs
              focus on sexual and reproductive health, HIV/AIDS prevention,
              mental health, hygiene, and nutrition education to promote
              healthier lives and stronger communities.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              We empower young people, women, and families with knowledge and
              practical solutions that support well-being and sustainable development.
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#98027F]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}