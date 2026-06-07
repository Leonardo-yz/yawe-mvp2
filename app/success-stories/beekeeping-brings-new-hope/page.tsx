"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BeekeepingStoryPage() {
  const [showInsight, setShowInsight] = useState(false);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Beekeeping Brings New Hope for Climate Resilience and Economic Empowerment
          </h1>

          <p className="mt-4 text-white/90">
            A real-life transformation story from Bugimbagu Village
          </p>

        </div>
      </section>

      {/* IMAGE + INTRO */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* IMAGE PLACEHOLDER */}
          <div className="relative h-[400px] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">

            {/* Replace this later with real image */}
            <span className="text-gray-600 font-medium">
        
                         <Image
                           src="/stories/eliza33.jpg"
                           alt="Guaranteeing the Future Project"
                           fill
                           className="object-cover"
                         /> 

              Image Placeholder (Elizabeth Beekeeping Project)
            </span>

          </div>

          {/* STORY CONTENT */}
          <div className="mt-10 space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>
              Elizabeth, a resident of Bugimbagu Village, spent many years
              struggling to provide for her family. As a housewife dependent on
              subsistence farming, she faced recurring crop failures caused by
              prolonged droughts and changing weather patterns linked to climate change.
            </p>

            <p>
              With limited livelihood options and no reliable source of income,
              meeting her family's basic needs became increasingly difficult.
            </p>

            <p>
              Her situation began to change when she joined a local beekeeping group
              supported through the YAWE project. Through the project, Elizabeth
              received training in modern beekeeping practices and gained access
              to improved beekeeping equipment, including beehives.
            </p>

            <p>
              The initiative introduced her to a climate-resilient livelihood that
              requires fewer natural resources than traditional farming while
              offering new income-generating opportunities.
            </p>

          </div>

          {/* BENEFICIARY HIGHLIGHT */}
          <div className="mt-12 bg-[#055D5D] text-white rounded-3xl p-8 shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              💬 What Elizabeth Says
            </h3>

            <p className="text-white/90 italic text-lg">
              "Today, I speak with renewed confidence and optimism about the future.
              Beekeeping has given me hope. I can now support my family and plan
              for a better future through honey production."
            </p>

          </div>

          {/* CONTINUATION */}
          <div className="mt-10 space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>
              Today, Elizabeth speaks with renewed confidence and optimism about the future.
              The knowledge and skills she has acquired have empowered her to pursue
              an alternative source of income that is less vulnerable to the effects of climate change.
            </p>

            <p>
              She believes that the sale of honey and other hive products will improve her
              household income, strengthen her family's financial security, and reduce her
              dependence on others.
            </p>

            <p>
              The project has not only provided practical skills but has also restored hope
              for a more sustainable future for Elizabeth and other members of her community.
            </p>

          </div>

          {/* INTERACTIVE INSIGHT */}
          <div className="mt-12">

            <button
              onClick={() => setShowInsight(!showInsight)}
              className="bg-[#98027F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a0266] transition"
            >
              {showInsight ? "Hide Impact Insight" : "View Climate Impact Insight"}
            </button>

            {showInsight && (
              <div className="mt-6 bg-gray-100 p-6 rounded-2xl border-l-4 border-[#055D5D]">

                <h4 className="text-xl font-bold mb-3">
                  🌍 Why Beekeeping Matters
                </h4>

                <ul className="space-y-2 text-gray-700">
                  <li>✔ Requires minimal land and water</li>
                  <li>✔ Increases income in drought-prone areas</li>
                  <li>✔ Supports biodiversity and pollination</li>
                  <li>✔ Builds climate resilience for rural households</li>
                </ul>

              </div>
            )}

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">

            <h3 className="text-3xl font-bold mb-4">
              Help Us Empower More Women Like Elizabeth
            </h3>

            <p className="text-gray-600 mb-6">
              Your support can transform lives through climate-smart livelihoods.
            </p>

            <Link
              href="/donate"
              className="inline-block bg-[#055D5D] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#044848]"
            >
              Support This Work
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}