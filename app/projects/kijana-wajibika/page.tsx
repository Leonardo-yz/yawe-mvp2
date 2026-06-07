import Image from "next/image";
import Link from "next/link";

export default function KijanaWajibikaPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
            2021 – 2024 Programme
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kijana Wajibika Project
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 font-medium">
            Young people at the center of development and governance accountability (SDG 16.7)
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-lg">
                Project Image Here
              </div>

              
              <Image
                src="/projects/kijana-wajibika1.jpg"
                alt="Kijana Wajibika Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-[#055D5D]/75 text-white px-4 py-2 rounded-full mb-4 font-medium">
                Youth Governance & Accountability
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About the Programme
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                Kijana Wajibika SDG 16.7 is a youth-led accountability
                programme that places young people at the center of
                development and governance processes in Tanzania.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The programme empowers young people to use data-driven
                approaches to hold government accountable for its
                commitments and ensure responsiveness in public service
                delivery.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It focuses on strengthening youth participation in
                governance, policy influence, and civic engagement
                processes.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          <h2 className="text-4xl font-bold mb-8">
            Shaping Youth Accountability Advocates
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The programme aims to shape a generation of youth
            accountability advocates who are empowered to influence
            governance systems, demand transparency, and ensure
            that development processes reflect the needs of young people.
          </p>

        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Programme Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Gender Inclusion
              </h3>
              <p className="text-gray-700">
                Mainstreaming gender equality in youth leadership
                and governance participation.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Disability Inclusion
              </h3>
              <p className="text-gray-700">
                Ensuring meaningful participation of youth with
                disabilities in governance processes.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Data-Driven Advocacy
              </h3>
              <p className="text-gray-700">
                Using evidence and data to influence government
                accountability and decision-making.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Civic Engagement
              </h3>
              <p className="text-gray-700">
                Strengthening youth participation in policy-making
                and democratic processes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
              Youth Advocacy Activity Image Here
            </div>

            <Image
                src="/projects/kijana-wajibika2.jpg"
                alt="Kijana Wajibika Project"
                fill
                className="object-cover"
              />

          </div>

        </div>
      </section>

      {/* Objectives */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Youth Empowerment
              </h3>
              <p className="text-gray-700">
                Empower youth to exercise civic rights and engage
                meaningfully in governance systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Accountability Systems
              </h3>
              <p className="text-gray-700">
                Strengthen systems that enable youth to hold government
                accountable using data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Leadership Development
              </h3>
              <p className="text-gray-700">
                Build leadership skills among young people for
                sustainable civic engagement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Implementation */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <h2 className="text-4xl font-bold mb-8">
            Implementation & Partners
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            YAWE implements the Kijana Wajibika SDG 16.7 programme
            in Shinyanga with support from <strong>Restless Development</strong>
            and funding from the <strong>Ford Foundation</strong>.
          </p>

        </div>
      </section>

      {/* Impact Section */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">
            Programme Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-5xl font-bold mb-3">↑</h3>
              <p>Increased youth participation in governance</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">✔</h3>
              <p>Improved government responsiveness</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">📊</h3>
              <p>Data-driven youth accountability systems strengthened</p>
            </div>

          </div>

        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">

          <h2 className="text-4xl font-bold mb-8">
            Building a Generation of Active Citizens
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Kijana Wajibika Project is transforming young people
            into informed, empowered, and active citizens who can
            influence governance systems and demand accountability
            for better service delivery.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#055D5D] hover:bg-[#98027F] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Join the Movement
          </Link>

        </div>
      </section>

    </main>
  );
}