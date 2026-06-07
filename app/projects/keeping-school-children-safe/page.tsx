import Image from "next/image";
import Link from "next/link";

export default function KeepingSchoolChildrenSafePage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Keeping School Children Safe Project
          </h1>

          <p className="text-xl md:text-2xl text-pink-100 font-medium">
            Promoting safe learning environments and ending violence
            against children in Shinyanga, Tanzania
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
                src="/projects/school-safety1.jpg"
                alt="Keeping School Children Safe Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-[#055D5D]/70 text-white px-4 py-2 rounded-full mb-4 font-medium">
                Child Protection & Education
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Background
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                Violence against children, particularly girls, remains a
                serious challenge in Tanzania. Nearly 3 in 10 females aged
                13–24 report experiencing sexual violence before age 18.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                A significant proportion of children also experience
                physical and sexual abuse at school and at home,
                often without reporting or receiving support.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Harmful cultural norms, limited awareness of child rights,
                and weak protection systems continue to expose children
                to violence and exploitation.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <h2 className="text-4xl font-bold text-center mb-10">
            The Reality Facing School Children
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              According to national reports, up to 87.9% of school
              children have experienced some form of physical violence,
              while over 40% report sexual abuse in schools.
            </p>

            <p>
              Most children do not report abuse due to fear of family
              separation, stigma, or lack of trust in protection systems.
            </p>

            <p>
              Weak parent-child relationships, corporal punishment,
              and lack of life skills education further worsen the
              situation.
            </p>

            <p>
              Limited access to youth-friendly SRH services and lack
              of awareness about child rights expose children to
              early sexual activity, exploitation, and abuse.
            </p>

          </div>

        </div>
      </section>

      {/* Objectives */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Project Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Gender Awareness
              </h3>
              <p className="text-gray-700">
                Empower individuals to challenge harmful gender norms
                and roles within families and communities.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Strong Collaboration
              </h3>
              <p className="text-gray-700">
                Strengthen cooperation between parents, teachers,
                and local government leaders in child protection.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Child Protection Systems
              </h3>
              <p className="text-gray-700">
                Improve reporting, referral systems, and children’s
                councils to address violations early.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Implementation Areas
          </h2>

          <div className="max-w-4xl mx-auto text-center text-gray-700">

            <p className="text-lg">
              The project is implemented in three administrative wards:
              <strong> Puni, Nyida, and Didia</strong> in Shinyanga District Council.
            </p>

          </div>

        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
              School Child Protection Activity Image Here
            </div>

            <Image
                src="/projects/school-safety2.jpg"
                alt="Keeping School Children Safe Project"
                fill
                className="object-cover"
              />

          </div>

        </div>
      </section>

      {/* Activities */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Key Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Child Protection Desks
              </h3>
              <p className="text-gray-600">
                Establishment of 16 school-based child protection
                and safety desks and junior councils.
              </p>
            </div>

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Peer Mentorship Programs
              </h3>
              <p className="text-gray-600">
                Strengthening self-esteem, confidence, and leadership
                among school peer activists.
              </p>
            </div>

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                Community Dialogues
              </h3>
              <p className="text-gray-600">
                Dialogues between parents, teachers, and leaders
                addressing violence and child protection.
              </p>
            </div>

            <div className="border-l-4 border-[#98027F] pl-6">
              <h3 className="font-bold text-xl mb-3">
                SRHR & Life Skills Education
              </h3>
              <p className="text-gray-600">
                Monthly sessions for adolescents focusing on rights,
                health, and safe behaviors.
              </p>
            </div>

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
              <h3 className="text-5xl font-bold mb-3">16</h3>
              <p>School Protection Desks Established</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">↑</h3>
              <p>Increased reporting of child abuse cases</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">✔</h3>
              <p>Stronger child protection awareness</p>
            </div>

          </div>

        </div>
      </section>

      {/* Outcome */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">

          <h2 className="text-4xl font-bold mb-8">
            Strengthening Safe Learning Environments
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The project is creating safer schools by improving awareness,
            strengthening child protection systems, and empowering children
            to speak up against violence. Increased reporting shows
            growing trust in protection mechanisms.
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