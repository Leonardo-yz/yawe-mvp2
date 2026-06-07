"use client"

import Image from "next/image"

const galleryImages = [
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

export default function GoodGovernancePage() {
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#055D5D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}