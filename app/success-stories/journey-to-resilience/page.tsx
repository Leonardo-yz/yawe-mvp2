"use client";

import { useState } from "react";
import Image from "next/image";

import { CheckCircle, TrendingUp, Leaf, Users, Link } from "lucide-react";

export default function JourneyToResiliencePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#055D5D] to-[#055D5D] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            From Climate Vulnerability to Climate Entrepreneurship
          </h1>
          <p className="mt-4 text-lg text-white">
            Kashinje’s Journey to Resilience in Shinyanga, Tanzania
          </p>

          {/* Impact Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 bg-white/20 shadow-md rounded-full text-sm">
              🌾 Climate Adaptation
            </span>
            <span className="px-4 py-2 bg-white/20 shadow-md rounded-full text-sm">
              🐝 Beekeeping Enterprise
            </span>
            <span className="px-4 py-2 bg-white/20 shadow-md rounded-full text-sm">
              👨‍🌾 Youth Empowerment
            </span>
          </div>
        </div>
      </section>

      {/* STORY INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl shadow-xl p-8">
          <p className="text-gray-700 leading-relaxed">
            Climate change continues to threaten rural livelihoods in Shinyanga,
            disproportionately affecting women, youth, and persons with disabilities.
            Recurring droughts and declining agricultural productivity have increased
            poverty and reduced resilience.
          </p>
        </div>
      </section>


    {/* IMAGE PLACEHOLDER */}
          <div className="relative h-[1000px] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">

            {/* Replace this later with real image */}
            <span className="text-gray-600 font-medium">
        
                         <Image
                           src="/stories/kashinje.jpg"
                           alt="Guaranteeing the Future Project"
                           fill
                           className="object-cover"
                         /> 

              Image Placeholder (Kashinje)
            </span>
``
          </div>


      {/* BENEFICIARY QUOTE */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-8 shadow-md">
          <p className="italic text-gray-700 text-lg">
            “It was very difficult for me to cope with the changing climate conditions.
            In the village, opportunities are very limited compared to urban areas.”
          </p>
          <p className="mt-3 font-semibold text-gray-900">
            — Kashinje, WIZABHUNZUKI Group Member
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        {/* BEFORE */}
        <div className="backdrop-blur-xl bg-red-50/60 border border-red-100 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-red-600 mb-4">Before the Project</h3>
          <ul className="space-y-3 text-gray-700">
            <li>🌾 Crop losses due to drought</li>
            <li>🧵 Declining tailoring income</li>
            <li>💸 Unstable household income</li>
            <li>🌍 Limited adaptation options</li>
          </ul>
        </div>

        {/* AFTER */}
        <div className="backdrop-blur-xl bg-green-50/60 border border-green-100 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-green-600 mb-4">After Climate Entrepreneurship Project</h3>
          <ul className="space-y-3 text-gray-700">
            <li>🐝 17 active beehives (11 traditional + 6 modern)</li>
            <li>🍯 Expected +20kg honey harvest</li>
            <li>💰 Diversified income streams</li>
            <li>🌱 Climate-resilient livelihood</li>
          </ul>
        </div>
      </section>

      {/* VISUAL IMPACT STATS */}
      <section className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="backdrop-blur-xl bg-white border rounded-2xl p-6 shadow-md text-center">
          <Users className="mx-auto text-blue-600" />
          <h4 className="text-2xl font-bold mt-2">1 Youth</h4>
          <p className="text-gray-600">Directly transformed</p>
        </div>

        <div className="backdrop-blur-xl bg-white border rounded-2xl p-6 shadow-md text-center">
          <Leaf className="mx-auto text-green-600" />
          <h4 className="text-2xl font-bold mt-2">17 Hives</h4>
          <p className="text-gray-600">Climate-smart beekeeping</p>
        </div>

        <div className="backdrop-blur-xl bg-white border rounded-2xl p-6 shadow-md text-center">
          <TrendingUp className="mx-auto text-orange-500" />
          <h4 className="text-2xl font-bold mt-2">Income Growth</h4>
          <p className="text-gray-600">Diversified livelihood</p>
        </div>
      </section>

      {/* MAIN STORY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-6 leading-relaxed">
        <div className="backdrop-blur-xl bg-white/80 border rounded-2xl shadow-lg p-8">
          <p>
            Through the Climate Entrepreneurship Project implemented by YAWE,
            Kashinje received training in climate-smart beekeeping and modern equipment,
            including beehives and protective gear.
          </p>

          <p className="mt-4">
            With support from the Tanzania Forest Service (TFS), he gained practical skills
            in hive management and honey production, transforming beekeeping into a business opportunity.
          </p>

          <p className="mt-4">
            Today, Kashinje is not only improving his household income but also mentoring
            other young people in his community to adopt sustainable enterprises.
          </p>
        </div>
      </section>

      {/* SECOND QUOTE */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="bg-white border rounded-2xl p-8 shadow-md">
          <p className="italic text-gray-700 text-lg">
            “Beekeeping is one of the best income-generating activities because it does not
            destroy forest resources and works in almost any weather condition.”
          </p>
          <p className="mt-3 font-semibold">— Kashinje</p>
        </div>
      </section>

      {/* DONOR IMPACT MESSAGE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="backdrop-blur-xl bg-blue-50/60 border border-blue-100 rounded-2xl p-10 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3">
            Transforming Lives Through Climate Investment
          </h3>
          <p className="text-gray-700">
            The Climate Entrepreneurship Project demonstrates how targeted investment in
            skills, mentorship, and productive assets enables youth to build resilient
            livelihoods and contribute to sustainable environmental management.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <CheckCircle />
              Sustainable Impact Achieved
            </div>
          </div>
        </div>
      </section>


        {/* CALL TO ACTION */}
    </main>
  );
}