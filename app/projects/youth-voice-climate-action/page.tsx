import Image from "next/image";
import Link from "next/link";

export default function YouthVoiceClimateActionPage() {
  return (
    <main className="bg-[#dfedec]">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Youth Voice for Climate Action
          </h1>

          <p className="text-xl md:text-2xl text-green-100">
            Empowering young people to lead climate action,
            influence policy, and strengthen community resilience
            in Shinyanga District.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg font-medium">
                Project Photo Here
              </div>

              
              <Image
                src="/projects/youth-climate-action1.jpg"
                alt="Youth Voice for Climate Action"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-4">
                Climate Action Project
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Background
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                Youth and Women Emancipation (YAWE) is implementing the
                <strong> Youth Voice for Climate Action Project</strong>,
                a 12-month initiative in Shinyanga District aimed at
                strengthening youth leadership in climate governance
                and community resilience.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                Shinyanga is increasingly experiencing the effects of
                climate change, including prolonged droughts, floods,
                land degradation, and changing rainfall patterns.
                Despite being among the groups most affected,
                young people—particularly young women and youth with
                disabilities—remain underrepresented in environmental
                decision-making processes.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This project addresses that gap by equipping young
                people with the knowledge, skills, platforms, and
                partnerships needed to influence climate policies
                and lead innovative local solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Project Goal */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          <h2 className="text-4xl font-bold mb-8">
            Project Goal
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed">
            To empower youth, particularly young women and people with
            disabilities, to participate in and drive innovative
            initiatives that address pressing climate challenges while
            promoting accountability and responsiveness from government
            institutions.
          </p>

        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Reach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-green-50 p-10 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-[#98027F] mb-3">
                5,640
              </h3>
              <p className="text-gray-700 font-medium">
                Young People Directly Reached
              </p>
            </div>

            <div className="bg-green-50 p-10 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-[#98027F] mb-3">
                50%
              </h3>
              <p className="text-gray-700 font-medium">
                Young Women Participants
              </p>
            </div>

            <div className="bg-green-50 p-10 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-[#98027F] mb-3">
                10%
              </h3>
              <p className="text-gray-700 font-medium">
                Youth with Disabilities
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Key Project Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Climate Leadership Training
              </h3>
              <p className="text-gray-600">
                Training youth in climate governance, policy engagement,
                advocacy, leadership, and community mobilization.
              </p>
            </div>

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Policy Dialogues
              </h3>
              <p className="text-gray-600">
                Facilitating discussions between youth, local government,
                civil society organizations, and the private sector.
              </p>
            </div>

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Community Climate Campaigns
              </h3>
              <p className="text-gray-600">
                Youth-led awareness campaigns promoting environmental
                sustainability and climate action.
              </p>
            </div>

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Climate-Smart Innovations
              </h3>
              <p className="text-gray-600">
                Supporting initiatives such as reforestation,
                renewable energy adoption, and innovative
                climate-resilient solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Expected Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Youth Participation
              </h3>

              <p className="leading-relaxed">
                Strengthened and meaningful participation of young
                people, particularly women and people with disabilities,
                in climate change adaptation and mitigation
                decision-making bodies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Government Accountability
              </h3>

              <p className="leading-relaxed">
                Improved accountability and commitment among local
                government decision-makers in responding to youth
                voices and priorities on climate action.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <h2 className="text-4xl font-bold mb-8">
            Project Support
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Youth Voice for Climate Action Project is funded by the
            <strong> European Union</strong> through
            <strong> Oxfam International</strong> under the broader
            <strong> AU-EU Youth Action Lab Project</strong>.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Join the Climate Movement
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Together, we can amplify youth voices, strengthen climate
            resilience, and build a sustainable future for communities
            across Shinyanga and beyond.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#98027F] hover:bg-[#7a0160] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}