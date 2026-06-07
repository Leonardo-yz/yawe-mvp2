import Image from "next/image";
import Link from "next/link";

export default function GuaranteeingTheFuturePage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Guaranteeing the Future Project
          </h1>

          <p className="text-xl md:text-2xl text-sky-100 font-medium">
            Improving child nutrition and maternal health in Simiyu Region, Tanzania
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
                src="/projects/guaranteeing-future1.jpg"
                alt="Guaranteeing the Future Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <span className="inline-block bg-[#055D5D]/70 text-white px-4 py-2 rounded-full mb-4 font-medium">
                Nutrition & Health Project
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Background
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                Malnutrition remains a significant challenge in Tanzania,
                with high rates of stunting, wasting, and underweight
                among children under five. Stunting alone affects about
                32% of children, reflecting chronic malnutrition.
              </p>

              <p className="text-gray-700 leading-relaxed mb-5">
                The causes are multifaceted, including poverty, poor
                breastfeeding practices, inadequate sanitation, limited
                access to nutritious food, and unequal healthcare access
                between rural and urban areas.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Deficiencies in vitamin A, iron, and iodine remain
                widespread, affecting child growth and cognitive
                development.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <h2 className="text-4xl font-bold mb-8">
            Partnership Approach
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            In partnership with <strong>Doctors with Africa – CUAMM</strong>,
            YAWE implemented the <strong>Guaranteeing the Future Project</strong>
            in Bariadi District, Simiyu Region, to improve nutrition outcomes
            for children under five and women of reproductive age through
            high-impact nutrition and health interventions.
          </p>

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
                Treatment Access
              </h3>
              <p className="text-gray-700">
                Ensure access to quality treatment for acute malnutrition
                for children under five in Bariadi District.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Early Detection
              </h3>
              <p className="text-gray-700">
                Strengthen community capacity to identify and prevent
                acute malnutrition early.
              </p>
            </div>

            <div className="bg-[#055D5D]/10 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-[#055D5D]">
                Nutrition Awareness
              </h3>
              <p className="text-gray-700">
                Promote hygiene, early child development, and balanced
                diets for children and pregnant women.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <h2 className="text-4xl font-bold text-center mb-10">
            The Nutrition Challenge in Simiyu
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              Malnutrition in Simiyu is driven by interconnected factors
              including poverty, poor sanitation, limited healthcare access,
              and low awareness of nutrition practices.
            </p>

            <p>
              Rural communities face greater barriers to accessing
              healthcare services, resulting in delayed treatment and
              poor child health outcomes.
            </p>

            <p>
              Micronutrient deficiencies such as vitamin A, iron, and iodine
              contribute significantly to poor growth and development
              among children and mothers.
            </p>

          </div>

        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="relative h-[500px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
              Community Nutrition Activity Image Here
            </div>

             <Image
                src="/projects/guaranteeing-future2.jpg"
                alt="Guaranteeing the Future Project"
                fill
                className="object-cover"
              />

          </div>

        </div>
      </section>

      {/* Impact */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Expected Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-5xl font-bold mb-3">↓</h3>
              <p>Reduction in child malnutrition rates</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">↑</h3>
              <p>Improved maternal nutrition knowledge</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-3">✓</h3>
              <p>Stronger community health systems</p>
            </div>

          </div>

        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <h2 className="text-4xl font-bold mb-8">
            Building Healthier Futures
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            The Guaranteeing the Future Project is strengthening
            nutrition systems in Simiyu by improving access to
            treatment, enhancing community awareness, and promoting
            sustainable health and hygiene practices for mothers
            and children.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#055D5D] hover:bg-[#98027F] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Get Involved
          </Link>

        </div>
      </section>

    </main>
  );
}