import Image from "next/image";
import Link from "next/link";

export default function AdolescentsYoungPeopleHIVPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
            2024–2026 • Health & HIV Prevention
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Adolescents and Young People at the Heart:
            <br />
            Preventing and Treating HIV in a Stigma-Free Society
          </h1>

          <p className="text-xl md:text-2xl text-pink-100">
            Empowering adolescents and young people living with HIV
            through peer support, advocacy, and community action.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Project Image Placeholder
              </div>

              
              <Image
                src="/projects/hiv-stigma-free-society1.jpg"
                alt="Adolescents and Young People HIV Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-[#055D5D]/70 text-white px-4 py-2 rounded-full mb-4">
                Shinyanga Region • Tanzania
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Background
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                This project is implemented through a partnership
                between Doctors with Africa CUAMM and Youth and Women
                Emancipation (YAWE), with funding support from the
                Italian Agency for Development Cooperation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The initiative aims to strengthen HIV prevention and
                treatment efforts while addressing stigma and
                discrimination affecting adolescents and young people
                living with HIV.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Through community engagement and peer support,
                adolescents are empowered to participate actively in
                building a more inclusive and stigma-free society.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Partners
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#055D5D] mb-4">
                Doctors with Africa CUAMM
              </h3>
              <p className="text-gray-600">
                Technical and logistical support for implementation.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#055D5D] mb-4">
                YAWE
              </h3>
              <p className="text-gray-600">
                Community mobilization, advocacy, and youth engagement.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#055D5D] mb-4">
                NACOPHA
              </h3>
              <p className="text-gray-600">
                Collaboration in peer support and community activities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <Image
                src="/projects/hiv-stigma-free-society2.jpg"
                alt="Adolescents and Young People HIV Project"
                fill
                className="object-cover"
              />
          </div>

        </div>
      </section>

      {/* Main Objective */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <h2 className="text-4xl font-bold text-center mb-10">
            Project Objective
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            YAWE leads efforts to strengthen community action aimed at
            eliminating human rights barriers linked to HIV-related
            stigma and discrimination.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The project creates safe and supportive environments where
            adolescents and young people living with HIV can meet,
            share experiences, learn from one another, and build
            confidence through peer engagement.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Through these activities, participants develop leadership,
            advocacy, and activism skills while strengthening their
            ability to positively influence their communities.
          </p>

        </div>
      </section>

      {/* Key Activities */}
      <section className="bg-[#055D5D]/10 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 ">
            Key Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#055D5D] mb-4">
                Peer Support Events
              </h3>

              <p className="text-gray-700">
                Organizing two annual sharing events that bring together
                adolescents and young people living with HIV in safe,
                supportive, and empowering environments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#055D5D] mb-4">
                Advocacy & Activism Training
              </h3>

              <p className="text-gray-700">
                Equipping participants with practical advocacy,
                leadership, and community engagement skills to become
                active agents of change.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Impact */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Reach & Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold mb-3">283</h3>
              <p>Adolescents Engaged</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">15–19</h3>
              <p>Years Age Group</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">4 Days</h3>
              <p>Peer Support Experience</p>
            </div>

          </div>

        </div>
      </section>

      {/* Expected Change */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          <h2 className="text-4xl font-bold mb-8">
            Building a Stigma-Free Society
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            By empowering adolescents and young people living with HIV,
            strengthening peer networks, and promoting human rights,
            this project contributes to a more inclusive society where
            stigma and discrimination are reduced and young people are
            supported to live healthy, confident, and productive lives.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="bg-[#055D5D]/70 text-white px-5 py-2 rounded-full">
              HIV Prevention
            </span>

            <span className="bg-[#055D5D]/70 text-white px-5 py-2 rounded-full">
              Youth Empowerment
            </span>

            <span className="bg-[#055D5D]/70 text-white px-5 py-2 rounded-full">
              Human Rights
            </span>

            <span className="bg-[#055D5D]/70 text-white px-5 py-2 rounded-full">
              Stigma Reduction
            </span>
          </div>

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