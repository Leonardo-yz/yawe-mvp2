import Image from "next/image";
import Link from "next/link";

export default function HIVPreventionAtRiskPopulationsPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
            2018 – 2021 Programme
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            HIV Prevention with At-Risk Populations
          </h1>

          <p className="text-xl md:text-2xl text-pink-100 font-medium">
            Community-based HIV prevention, linkage, and retention services in Shinyanga and Simiyu
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
                src="/projects/hiv-prevention1.jpg"
                alt="HIV Prevention Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-[#055D5D]/75 text-white px-4 py-2 rounded-full mb-4 font-medium">
                HIV & Key Populations Programme
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                YAWE, as a sub-partner with Doctors with Africa – CUAMM,
                implemented a comprehensive community-based HIV prevention,
                linkage, and retention programme targeting key populations
                and adolescent girls and young women.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The project was implemented in Shinyanga and Simiyu regions
                of Tanzania under the Test & Treat initiative.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It focused on expanding access to HIV services, strengthening
                community systems, and improving health outcomes for vulnerable groups.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          <h2 className="text-4xl font-bold mb-8">
            Project Goal
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            To accelerate, expand, and improve the quality of
            comprehensive community-based HIV prevention services
            for key and priority populations in order to achieve
            epidemic control in Tanzania.
          </p>

        </div>
      </section>

      {/* Key Populations */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Target Groups
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-pink-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Female Sex Workers
              </h3>
              <p className="text-gray-700">
                Groups at elevated behavioral risk requiring targeted
                HIV prevention services.
              </p>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                People Who Inject Drugs
              </h3>
              <p className="text-gray-700">
                High-risk populations needing harm reduction and
                health services.
              </p>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Men Who Have Sex with Men
              </h3>
              <p className="text-gray-700">
                Key populations requiring stigma-free HIV prevention
                and care services.
              </p>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Adolescent Girls & Young Women
              </h3>
              <p className="text-gray-700">
                Vulnerable group aged 15–29 requiring prevention
                and empowerment interventions.
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
              HIV Community Outreach Activity Image Here
            </div>

                  <Image
                src="/projects/hiv-prevention2.jpg"
                alt="HIV Prevention Project"
                fill
                className="object-cover"
              />

          </div>

        </div>
      </section>

      {/* Implementation */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Implementation Approach
          </h2>

          <div className="max-w-5xl mx-auto text-gray-700 space-y-6 leading-relaxed">

            <p>
              YAWE collaborated with the Government of Tanzania at
              regional, district, and community levels to deliver
              HIV prevention and care services.
            </p>

            <p>
              The project worked closely with healthcare providers,
              implementing partners, and community volunteers to
              ensure effective service delivery and continuity of care.
            </p>

            <p>
              Services included HIV testing, linkage to treatment,
              retention support, and community-based outreach programs.
            </p>

          </div>

        </div>
      </section>

      {/* Impact */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">
            Project Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-5xl font-bold mb-3">↑</h3>
              <p>Improved HIV service access in communities</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">✔</h3>
              <p>Stronger linkage to treatment and care</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">🤝</h3>
              <p>Enhanced collaboration with government & partners</p>
            </div>

          </div>

        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">

          <h2 className="text-4xl font-bold mb-8">
            Strengthening Community HIV Response
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The HIV Prevention with At-Risk Populations Project
            strengthened community-based HIV services, improved
            access for key populations, and contributed to
            epidemic control efforts in Shinyanga and Simiyu.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#055D5D] hover:bg-[#98027F] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}