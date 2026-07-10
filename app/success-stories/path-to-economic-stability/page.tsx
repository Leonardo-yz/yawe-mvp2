import Image from "next/image";

export const metadata = {
  title: "Path to Economic Stability | YAWE Success Story",
  description:
    "A YAWE success story showing how economic empowerment support helped improve household income, resilience, and livelihood stability.",
};

export default function PathToEconomicStabilityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="mb-4 inline-block bg-[#98027F] px-8 py-1.5 text-2xl font-semibold uppercase tracking-wide text-white">
          Success Story
        </div>

        <h1 className="text-center text-2xl font-semibold uppercase leading-snug tracking-tight md:text-3xl">
          Path to Economic Stability
        </h1>

        <div className="mt-5 grid gap-6 md:grid-cols-[275px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <Image
              src="/stories/zacharia.jpg"
              alt="YAWE beneficiary supported through economic empowerment"
              width={500}
              height={430}
              className="h-auto w-full object-cover"
              priority
            />

            <p className="mt-2 text-base italic leading-6 text-slate-800">
              A YAWE beneficiary working toward improved household income and
              economic stability, Photo by YAWE, 2025
            </p>

            <p className="mt-8 text-base leading-6 text-slate-800">
              The beneficiary shares:
            </p>

            <blockquote className="mt-3 text-base leading-6 text-slate-800">
              “Before receiving support, my income was not stable and it was
              difficult to meet important family needs.
              <br />
              <br />
              Through YAWE’s training and support, I gained skills that helped
              me improve my livelihood, manage income better, and plan for the
              future.
              <br />
              <br />
              Today, I am more confident, my household is more stable, and I can
              continue working toward a better life for my family.”
            </blockquote>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-center text-base leading-6 text-slate-900 md:px-2">
            <p>
              In many communities, women, youth, and vulnerable households face
              limited access to income-generating opportunities, business
              skills, financial knowledge, and resources needed to build stable
              livelihoods.
            </p>

            <p className="mt-5">
              These challenges often make families more vulnerable to poverty,
              economic shocks, food insecurity, and reduced access to essential
              services such as education, health care, and basic household
              needs.
            </p>

            <p className="mt-5">
              YAWE works with vulnerable communities to strengthen economic
              empowerment by providing practical skills, mentorship, business
              development support, and opportunities that help beneficiaries
              improve their livelihoods.
            </p>

            <p className="mt-5">
              Through this support, beneficiaries are able to identify local
              economic opportunities, improve their income-generating
              activities, manage small businesses more effectively, and make
              better financial decisions for their households.
            </p>

            <p className="mt-5">
              The intervention has helped strengthen confidence, improve
              household income, and support families to move toward greater
              economic stability and resilience.
            </p>

            <p className="mt-5">
              For many beneficiaries, this support has created a new pathway to
              independence. It has improved their ability to meet family needs,
              support children, reinvest in small businesses, and participate
              more actively in community development.
            </p>

            <p className="mt-5">
              This success story demonstrates how targeted economic empowerment
              can transform lives by giving vulnerable people the knowledge,
              confidence, and practical tools they need to build sustainable
              livelihoods.
            </p>

            <p className="mt-5">
              YAWE remains committed to supporting women, youth, and vulnerable
              communities to achieve economic stability, dignity, and long-term
              resilience. To learn more and support this initiative, visit
              www.yawe.or.tz
            </p>
          </article>
        </div>
      </section>

      <div className="mt-4 h-10 bg-[#055D5D]" />
    </main>
  );
}