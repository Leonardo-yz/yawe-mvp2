import Image from "next/image";
import Link from "next/link";

export default function YouthLedClimateActionPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
            Climate Action • Youth Leadership
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Youth-Led Climate Action Project in Shinyanga
          </h1>

          <p className="text-xl md:text-2xl text-green-100">
            Empowering young people to lead climate action, influence
            decision-making, and build sustainable communities.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Project Image Placeholder
              </div>

              
              <Image
                src="/projects/youth-led-climate-action1.jpg"
                alt="Youth-Led Climate Action Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-[#055D5D]/75 text-white px-4 py-2 rounded-full mb-4">
                Shinyanga Municipal
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Background
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                Tanzania has one of the youngest populations in Africa,
                with people aged 15–35 accounting for approximately
                34.9% of the population. Despite being among the groups
                most affected by climate change, young people are often
                excluded from climate decision-making processes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                In Shinyanga, climate challenges continue to intensify
                due to deforestation, unsustainable agricultural
                practices, uncontrolled fires, overgrazing, and
                dependence on biomass energy sources.
              </p>

              <p className="text-gray-700 leading-relaxed">
                YAWE is working to change this by placing young people
                at the center of climate action and empowering them to
                become active leaders in environmental sustainability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <h2 className="text-4xl font-bold text-center mb-12">
            Climate Challenges Facing Shinyanga
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              Shinyanga has experienced increasing deforestation caused
              by agricultural expansion, shifting cultivation,
              uncontrolled bush fires, overgrazing, and unsustainable
              use of natural resources.
            </p>

            <p>
              These environmental changes have reduced biodiversity,
              degraded ecosystems, and contributed to declining
              agricultural productivity and food security.
            </p>

            <p>
              Women and girls are among the most affected groups,
              facing increased burdens related to natural resource
              scarcity and climate-related economic challenges.
            </p>

            <p>
              Livestock production has also suffered significantly.
              According to the National Environmental Master Plan
              for Strategic Interventions (2022–2032), the cattle
              population in Shinyanga has decreased by approximately
              5.6% due to reduced pasture availability.
            </p>

          </div>

        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Youth Climate Activities Image Placeholder
            </div>
            
               <Image
                src="/projects/youth-led-climate-action2.jpg"
                alt="Youth-Led Climate Action Project"
                fill
                className="object-cover"
              />

          </div>

        </div>
      </section>

      {/* YAWE Response */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <h2 className="text-4xl font-bold text-center mb-10">
            YAWE's Response
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            YAWE is implementing the Youth-Led Climate Action Project
            in Shinyanga to engage young people in taking urgent and
            meaningful action against climate change and its impacts.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The project focuses on elevating youth voices within
            climate governance systems while creating opportunities
            for young women and men to become leaders in community-
            driven climate solutions.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Through training, dialogue, advocacy, and community
            engagement, youth are empowered to influence climate
            policies and contribute innovative solutions to local
            environmental challenges.
          </p>

        </div>
      </section>

      {/* Objectives */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Objectives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Youth Participation
              </h3>

              <p className="text-gray-700">
                Strengthen meaningful youth engagement in decision-making
                bodies and processes related to climate change action,
                adaptation, and environmental sustainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Government Accountability
              </h3>

              <p className="text-gray-700">
                Enhance accountability and responsiveness of local
                government leaders to youth priorities, concerns,
                and recommendations regarding climate action.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Beneficiaries */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Reach
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold mb-3">3,022</h3>
              <p>Direct Beneficiaries</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">2</h3>
              <p>Target Wards</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">100%</h3>
              <p>Youth-Led Engagement</p>
            </div>

          </div>

        </div>
      </section>

      {/* Target Areas */}
      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">

          <h2 className="text-4xl font-bold mb-8">
            Project Implementation Areas
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            The project is being implemented in Ndala and Masekelo
            Wards within Shinyanga Municipal, working closely with
            local government authorities, community leaders, and
            youth groups to strengthen climate resilience and
            environmental stewardship.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-[#055D5D]/75 text-white px-5 py-2 rounded-full">
              Ndala Ward
            </span>

            <span className="bg-[#055D5D]/75 text-white px-5 py-2 rounded-full">
              Masekelo Ward
            </span>

            <span className="bg-[#055D5D]/75 text-white px-5 py-2 rounded-full">
              Shinyanga Municipal
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#98027F] hover:bg-[#055D5D] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Learn More
          </Link>

        </div>
      </section>

    </main>
  );
}