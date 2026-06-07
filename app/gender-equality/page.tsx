"use client"

import Image from "next/image"

const galleryImages = [
  {
    image: "/gallery/gender1.jpg",
    title: "Gender Equality Awareness Session",
    description:
      "Community members learning the importance of equal opportunities for all.",
  },
  {
    image: "/gallery/gender2.jpg",
    title: "Child Protection Training",
    description:
      "Participants strengthening knowledge on safeguarding children's rights and welfare.",
  },
  {
    image: "/gallery/gender3.jpg",
    title: "Ending Gender-Based Violence",
    description:
      "Community dialogue promoting safety, dignity, and respect for everyone.",
  },
  {
    image: "/gallery/gender4.jpg",
    title: "Girls Empowerment Workshop",
    description:
      "Girls building confidence, leadership, and life skills for success.",
  },
  {
    image: "/gallery/gender5.jpg",
    title: "Child Rights Education",
    description:
      "Children learning about their rights, safety, and protection.",
  },
  {
    image: "/gallery/gender6.jpg",
    title: "Safe Childhood Campaign",
    description:
      "Promoting environments where children can grow safely and confidently.",
  },
  {
    image: "/gallery/gender7.jpg",
    title: "Advocacy Against Early Marriage",
    description:
      "Community members raising awareness on the risks of child marriage.",
  },
  {
    image: "/gallery/gender8.jpg",
    title: "Gender Inclusion Workshop",
    description:
      "Encouraging equal participation regardless of gender or background.",
  },
  {
    image: "/gallery/gender9.jpg",
    title: "Child Safety Program",
    description:
      "Students learning how to recognize and report abuse.",
  },
  {
    image: "/gallery/gender16.jpg",
    title: "Girls Education Advocacy",
    description:
      "Encouraging girls to stay in school and pursue opportunities.",
  },
  {
    image: "/gallery/gender11.jpg",
    title: "Girls Education Advocacy",
    description:
      "Encouraging girls to stay in school and pursue opportunities.",
  },
  {
    image: "/gallery/gender12.jpg",
    title: "Protecting Vulnerable Children",
    description:
      "Community efforts focused on supporting at-risk children.",
  },
  {
    image: "/gallery/gender13.jpg",
    title: "Empowered Girls, Strong Communities",
    description:
      "Girls encouraged to realize their potential and aspirations.",
  },
  {
    image: "/gallery/gender14.jpg",
    title: "Children's Voices Platform",
    description:
      "Children expressing concerns and ideas in a safe environment.",
  },
  {
    image: "/gallery/gender15.jpg",
    title: "Child Safety Awareness Campaign",
    description:
      "Educating communities on preventing child abuse and neglect.",
  },
]

export default function GenderEqualityPage() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#98027F] via-[#055D5D] to-[#98027F]">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-6xl mx-auto">

          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-14 shadow-2xl">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Gender Equality & Child Protection
            </h1>

            {/* WHITE LINE */}
            <div className="w-20 h-[2px] bg-white rounded-full transition-all duration-500 group-hover:w-full"></div>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              We promote a society where women, girls, boys, and marginalized groups are safe, respected, and empowered to reach their full potential.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Through community engagement, advocacy, and capacity building, we address gender-based violence, child abuse, discrimination, and early marriage.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Our work strengthens child protection systems and advances gender equality across families, schools, workplaces, and communities in Tanzania.
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

                  {/* WHITE LINE */}
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