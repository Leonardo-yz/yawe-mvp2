import Image from "next/image";
import Link from "next/link";

export default function ReactsInPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
            2023 – 2029 Programme
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            REACTS-IN Project
          </h1>

          <p className="text-2xl text-pink-100 font-medium mb-4">
            Realizing Gender Equality, Attitudinal Change and
            Transformative Systems in Nutrition
          </p>

          <p className="max-w-4xl mx-auto text-lg text-pink-50">
            Accelerating nutrition and gender equality for women,
            adolescent girls and children in Tanzania, Kenya,
            Somalia and India.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image Placeholder */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                Project Image Here
              </div>

              
              <Image
                src="/projects/reacts-in-1.jpg"
                alt="REACTS-IN Project"
                fill
                className="object-cover"
              />
              
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">
                REACTS-IN
              </h2>

              <p className="text-gray-700 mb-5 leading-relaxed">
                REACTS-IN supports the strengthening of nutrition and
                health systems while addressing the gender dimensions
                of malnutrition. The project contributes toward the
                World Health Assembly's Global Nutrition Targets by
                implementing integrated, multisectoral, evidence-based
                interventions.
              </p>

              <p className="text-gray-700 mb-5 leading-relaxed">
                The programme addresses key determinants of nutrition,
                gender inequality, and sexual and reproductive health
                rights (SRHR) to improve the health and nutrition of
                women, adolescent girls and children under five.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The initiative is implemented across Tanzania,
                Kenya, Somalia and India between 2023 and 2029.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Need */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            The Need
          </h2>

          <div className="max-w-5xl mx-auto text-gray-700 space-y-6 leading-relaxed">

            <p>
              COVID-19, conflict, climate change, economic shocks,
              and food insecurity have threatened years of development
              gains. These crises continue to increase malnutrition,
              gender inequality, and vulnerability among women and
              adolescent girls.
            </p>

            <p>
              Food insecurity has increased exposure to sexual and
              gender-based violence, early pregnancies, school dropout,
              and poor health outcomes. Millions of people across
              Tanzania, Kenya, Somalia, and India remain at risk of
              moderate to severe food insecurity.
            </p>

            <p>
              Anaemia remains a major public health challenge,
              particularly among women and children under five,
              significantly affecting growth, development and
              productivity.
            </p>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Action is Needed
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-pink-50 p-10 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-[#98027F]">
                942,000
              </h3>
              <p className="mt-4 text-gray-700">
                Children affected by acute malnutrition in Kenya
              </p>
            </div>

            <div className="bg-pink-50 p-10 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-[#98027F]">
                1.5M
              </h3>
              <p className="mt-4 text-gray-700">
                Children under five facing acute malnutrition
                in Somalia
              </p>
            </div>

            <div className="bg-pink-50 p-10 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-[#98027F]">
                56.1%
              </h3>
              <p className="mt-4 text-gray-700">
                Anaemia prevalence among children under five
                in Tanzania
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Solution */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Solution
          </h2>

          <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed">

            <p>
              REACTS-IN combines the expertise of World Vision Canada,
              Nutrition International, HarvestPlus, the Canadian
              Association for Global Health and McGill University
              to implement integrated interventions that address
              nutrition, gender inequality, and SRHR barriers.
            </p>

            <p>
              The project promotes gender-transformative,
              evidence-based approaches that remove obstacles
              preventing women and girls from accessing nutrition,
              health services, and reproductive health rights.
            </p>

          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
              Project Activity Image Here
            </div>
                      
                       <Image
                src="/projects/reacts-in-2.jpg"
                alt="REACTS-IN Project"
                fill
                className="object-cover"
              />

          </div>

        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Led by World Vision Canada, the Project Will
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-green-100 p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Nutrition & Health Access
              </h3>
              <p className="text-gray-600">
                Ensure equitable access to nutrition, health,
                WASH and SRHR services.
              </p>
            </div>

            <div className="bg-green-100 p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Quality Services
              </h3>
              <p className="text-gray-600">
                Improve availability and responsiveness of
                nutrition and health services.
              </p>
            </div>

            <div className="bg-green-100 p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Local Capacity
              </h3>
              <p className="text-gray-600">
                Strengthen local stakeholders to realize
                nutrition and SRHR rights.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* YAWE Role */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            YAWE's Contribution
          </h2>

          <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">

            <p>
              YAWE promotes gender-equitable decision-making,
              control over household resources, and prevention
              of sexual and gender-based violence.
            </p>

            <p>
              The organization equips men and boys to identify
              and overcome social and cultural barriers affecting
              nutrition, SRHR and WASH practices.
            </p>

            <p>
              YAWE strengthens demand and utilization of
              community-based health services, family planning,
              and contraceptive methods while implementing
              gender-responsive nutrition and health packages
              for adolescents.
            </p>

            <p>
              Teachers and student leaders are actively engaged
              to improve access to nutrition and health services
              for adolescent girls and boys.
            </p>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg text-white py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Progress & Achievements
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">

            <div className="bg-[#055D5D]/70 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                October 2023 – June 2024
              </h3>

              <p>
                YAWE trained school teachers and community
                health workers on SRHR, gender equality,
                and child protection using Program M & H
                Methodology.
              </p>
            </div>

            <div className="bg-[#055D5D]/70 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Evidence-Based Results
              </h3>

              <p>
                Program M & H has demonstrated improved
                gender-equitable attitudes, increased SRHR
                knowledge, improved communication,
                higher condom use, reduced sexual harassment,
                and stronger community engagement.
              </p>
            </div>

            <div className="bg-[#055D5D]/70 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                International Recognition
              </h3>

              <p>
                Program H has been recognized by the World Bank,
                WHO, UNICEF, UNDP, UNFPA and other global
                institutions as a best practice for promoting
                gender equality and preventing gender-based violence.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">

          <h2 className="text-4xl font-bold mb-8">
            Long-Term Impact
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed">
            REACTS-IN is contributing toward ending malnutrition,
            improving health outcomes for women, adolescent girls
            and children under five, promoting gender equality,
            and advancing the empowerment of women and girls
            across participating countries.
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