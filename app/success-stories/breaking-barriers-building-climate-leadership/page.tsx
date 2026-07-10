import Image from "next/image";

export const metadata = {
  title:
    "Breaking Barriers, Building Climate Leadership in Shinyanga | YAWE",
  description:
    "A YAWE success story on inclusive climate leadership, disability inclusion, and youth climate advocacy in Shinyanga.",
};

export default function BreakingBarriersClimateLeadershipPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="mb-4 inline-block bg-[#98027F] px-8 py-1.5 text-2xl font-semibold uppercase tracking-wide text-white">
          Success Story
        </div>

        <h1 className="text-center text-2xl font-semibold uppercase leading-snug tracking-tight md:text-3xl">
          Breaking Barriers, Building Climate Leadership in Shinyanga
        </h1>

        <div className="mt-5 grid gap-6 md:grid-cols-[275px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <Image
              src="/stories/eunice1.jpg"
              alt="Eunice participating in the advocacy meeting"
              width={500}
              height={430}
              className="h-auto w-full object-cover"
              priority
            />

            <p className="mt-2 text-base italic leading-6 text-slate-800">
              Eunice, a young leader participating in the advocacy meeting
              between young leaders and government authority in Shinyanga,
              Photo by YAWE, 2025
            </p>

            <p className="mt-8 text-base leading-6 text-slate-800">
              She shares:
            </p>

            <blockquote className="mt-3 text-base leading-6 text-slate-800">
              “I am happy to be part of this program. I received leadership
              training conducted by YAWE, and this training awakened my
              leadership potential. Now, whenever there is a village meeting, I
              am given at least five minutes to speak about climate change to
              the community…..
              <br />
              <br />
              This opportunity has greatly helped me build my confidence.
              Additionally, in the last election, I showed my interest in
              contesting for a councilor position through the special seats and
              successfully secured the position. Now, for all matters related to
              climate change, I will be an ambassador for young people.”
            </blockquote>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-center text-base leading-6 text-slate-900 md:px-2">
            <p>
              In Shinyanga, people with disabilities are disproportionately
              affected by the impacts of climate change. These impacts, combined
              with social inequalities, limited knowledge of climate action
              advocacy leadership skills, and exclusion from climate-related
              decision-making bodies, make them more vulnerable.
            </p>

            <p className="mt-5">
              Recognizing these challenges, YAWE sought a solution under the
              Youth Voice for Climate Action project in Shinyanga, funded by
              Oxfam Novib, by working with vulnerable communities, especially
              youth, women, and people with disabilities, to empower them with
              skills, resources, and opportunities.
            </p>

            <p className="mt-5">
              The project enables marginalized youth to actively engage in and
              lead climate initiatives while holding government authorities
              accountable. To-date, the project has trained 23 young leaders, of
              whom 26% are people with disabilities.
            </p>

            <p className="mt-5">
              They have been empowered as community change agents for climate
              action. Through these interventions, young leaders are now
              participating in and leading advocacy efforts for the
              implementation of climate policies and the inclusion of
              marginalized groups in climate-related decision-making bodies
              within their communities.
            </p>

            <p className="mt-5">
              Eunice Zabron is one of the trained young leaders and has become a
              pivotal agent of change in her community.
            </p>

            <p className="mt-5">
              Youth Voice for Climate Action is empowering at-risk communities
              to become strong agents of change in addressing climate change by
              integrating inclusion and intersectionality into decision-making in
              natural resource governance and promoting government
              accountability for long-term climate resilience.
            </p>

            <p className="mt-5">
              YAWE’s plan is to scale-up this best practice model to reach more
              vulnerable communities. To learn more and support this initiative,
              visit www.yawe.or.tz
            </p>
          </article>
        </div>
      </section>

      <div className="mt-4 h-10 bg-[#055D5D]" />
    </main>
  );
}