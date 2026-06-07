import Image from "next/image";
import Link from "next/link";

export default function InclusiveClimateEntrepreneurshipPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
            2024–2025 • Climate Entrepreneurship
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Inclusive Climate Entrepreneurship Project
          </h1>

          <p className="text-xl md:text-2xl text-green-100">
            Empowering youth, women, and people with disabilities to lead
            climate innovation and sustainable economic transformation.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                Project Image Here
              </div>

              
              <Image
                src="/projects/inclusive-climate-entrepreneurship1.jpg"
                alt="Inclusive Climate Entrepreneurship Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-medium">
                Climate Innovation & Economic Inclusion
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Background
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                The Shinyanga Region is experiencing increasing climate
                challenges including prolonged droughts, deforestation,
                declining agricultural productivity, food insecurity,
                and water scarcity.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                These challenges disproportionately affect women,
                young people, and persons with disabilities, limiting
                economic opportunities and increasing vulnerability.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Through this project, YAWE is creating opportunities
                for marginalized groups to become climate entrepreneurs,
                innovators, and leaders of sustainable community solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Challenges */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Climate Challenges in Shinyanga
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Over the last four decades, Shinyanga has become
              increasingly semi-arid, resulting in lower agricultural
              productivity and growing food insecurity.
            </p>

            <p>
              Approximately 28% of children under five suffer from
              malnutrition, while women and girls spend increasing
              amounts of time collecting water, reducing opportunities
              for education and income generation.
            </p>

            <p>
              Deforestation continues to threaten ecosystems, with
              significant tree cover loss contributing to carbon
              emissions and environmental degradation.
            </p>

            <p>
              Young climate innovators often struggle to access
              financing, mentorship, markets, and business support
              needed to scale their ideas.
            </p>
          </div>
        </div>
      </section>

      {/* DEI & GESI */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-green-50 rounded-3xl p-10 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Diversity, Equity & Inclusion at the Core
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-center">
              The project integrates Diversity, Equity and Inclusion (DEI)
              and Gender Equality and Social Inclusion (GESI) principles
              throughout all activities. This ensures climate action not
              only protects the environment but also addresses social and
              economic inequalities by amplifying voices that are often
              excluded from climate decision-making processes.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
              Climate Innovation Hub Image Here
            </div>

            <Image
                src="/projects/inclusive-climate-entrepreneurship2.jpg"
                alt="Inclusive Climate Entrepreneurship Project"
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
            Key Objectives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl text-green-700 mb-4">
                Build Capacity
              </h3>
              <p className="text-gray-700">
                Train and mentor youth, women, and marginalized groups
                in climate entrepreneurship, clean energy, sustainable
                agriculture, and eco-innovation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl text-green-700 mb-4">
                Foster Innovation
              </h3>
              <p className="text-gray-700">
                Provide grants and establish innovation hubs that
                support climate-resilient technologies and green enterprises.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl text-green-700 mb-4">
                Strengthen Networks
              </h3>
              <p className="text-gray-700">
                Connect entrepreneurs with government institutions,
                private sector actors, investors, and community leaders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl text-green-700 mb-4">
                Promote Climate Justice
              </h3>
              <p className="text-gray-700">
                Ensure equity, inclusion, and climate justice are
                embedded in every project activity and partnership.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Expected Outcomes
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold mb-3">50+</h3>
              <p>Underrepresented entrepreneurs supported</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">✔</h3>
              <p>Climate innovation hubs established</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">↑</h3>
              <p>Market access for climate-smart products</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">5+</h3>
              <p>Public-private partnerships created</p>
            </div>

          </div>
        </div>
      </section>

      {/* Long Term Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">

          <h2 className="text-4xl font-bold mb-8">
            Long-Term Impact
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            YAWE envisions a sustainable climate innovation ecosystem
            that is inclusive, community-driven, and responsive to
            local challenges. Through entrepreneurship, partnerships,
            advocacy, and capacity building, this project contributes
            to climate resilience, green jobs, economic empowerment,
            and long-term systemic change across Tanzania.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-[#055D5D]/75 text-white">
              Climate Action
            </span>
            <span className="px-4 py-2 rounded-full bg-[#055D5D]/75 text-white">
              Entrepreneurship
            </span>
            <span className="px-4 py-2 rounded-full bg-[#055D5D]/75 text-white">
              Innovation
            </span>
            <span className="px-4 py-2 rounded-full bg-[#055D5D]/75 text-white">
              Inclusion
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#98027F] hover:bg-[#7a0160] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Learn More
          </Link>

        </div>
      </section>
    </main>
  );
}