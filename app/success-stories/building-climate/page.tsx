import Image from "next/image";

export const metadata = {
  title: "How Edina Evodius is Building Climate Resilience | YAWE",
  description:
    "A YAWE success story about Edina Evodius, a young leader from Ndala Ward who is helping communities strengthen climate resilience, nutrition, sanitation, and environmental conservation.",
};

export default function BuildingClimatePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-6">
        {/* SUCCESS STORY LABEL */}
        <div className="mb-4 inline-block bg-[#98027F] px-8 py-1.5 text-2xl font-semibold uppercase tracking-wide text-white">
          Success Story
        </div>

        {/* PAGE TITLE */}
        <h1 className="mx-auto max-w-4xl text-center text-2xl font-semibold leading-snug tracking-tight text-[#98027F] md:text-3xl">
          How Edina Evodius is Building Climate Resilience
        </h1>

        <div className="mt-7 grid gap-6 md:grid-cols-[275px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <blockquote className="text-left text-base font-semibold italic leading-7 text-[#055D5D]">
              “I watched families struggle to produce enough food because of
              changing weather patterns,” Edina recalls. “At the same time, poor
              sanitation and limited awareness were contributing to preventable
              diseases. I knew our community needed practical solutions, but I
              didn&apos;t know where to start.”
            </blockquote>

            <div className="mt-8 overflow-hidden">
              <Image
                src="/stories/edina.jpg"
                alt="Edina Evodius, a young leader from Ndala Ward in Shinyanga"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <p className="mt-2 text-left text-xs italic leading-5 text-[#98027F]">
              Edina Evodius, A Young Leader From Ndala Ward, In Shinyanga.
              Photo By YAWE May 2026
            </p>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-justify text-base leading-7 text-slate-900 md:px-2">
            <p>
              In Shinyanga Region, the effects of climate change continue to
              threaten the health and livelihoods of vulnerable communities.
              Prolonged dry spells, unpredictable rainfall, and environmental
              degradation have reduced agricultural productivity, increased food
              insecurity, and heightened the risk of disease outbreaks. Young
              people, women, and persons with disabilities are
              disproportionately affected due to limited access to resources,
              knowledge, and opportunities to adapt. The region continues to
              face significant public health challenges, with malnutrition
              affecting 32% of the population, more than 200 cholera-related
              deaths recorded in 2023 (WHO,2024), and malaria prevalence
              standing at 16%, above the national average (TDH-MIS,2022).
            </p>

            <p className="mt-6">
              For <strong>Edina Evodius</strong>, a 27-year-old youth leader from
              Ndala Ward in Shinyanga District, these challenges were more than
              statistics; they were part of her community&apos;s daily reality.
            </p>

            <p className="mt-6">
              That changed when Edina participated in a climate resilience and
              community leadership programme, where she received training on
              climate-smart agriculture, environmental conservation, disaster
              risk reduction, nutrition, hygiene, and community mobilization.
              The programme also strengthened her leadership and advocacy
              skills, equipping her to engage different groups within her
              community, particularly young people and women.
            </p>

            <p className="mt-6">
              Returning to Ndala Ward, Edina immediately put her new knowledge
              into practice. She organized community awareness sessions to
              educate households about the relationship between climate change,
              environmental degradation, nutrition, sanitation, and public
              health. She encouraged residents to establish kitchen gardens to
              improve household nutrition, promoted tree planting and
              environmental conservation, advocated for improved hygiene and
              waste management practices to reduce the risk of waterborne
              diseases, and mobilized youth groups to participate in community
              clean-up campaigns and environmental restoration activities.
            </p>

            <p className="mt-6">
              Introducing these changes was not easy. Some community members
              initially believed climate change was beyond their control, while
              others questioned whether simple household practices could make
              any difference. Rather than becoming discouraged, Edina worked
              alongside local leaders and respected community members, using
              demonstrations, discussions, and practical examples to show how
              small actions could collectively improve livelihoods and
              strengthen resilience.
            </p>

            <p className="mt-6">
              Gradually, attitudes began to shift. More households adopted
              kitchen gardening and improved sanitation practices, while
              increasing numbers of young people volunteered in environmental
              conservation efforts. Community members became more aware of how
              climate change impacts food security, health, and livelihoods, and
              many started implementing practical adaptation measures within
              their own homes.
            </p>

            <p className="mt-6">
              Today, Edina is recognized as a dedicated youth leader and
              advocate for climate resilience in Ndala Ward. Her experience
              proves that equipping young people with knowledge, practical
              skills, and leadership opportunities can catalyze
              community-driven solutions to climate change.
            </p>
          </article>
        </div>
      </section>

      {/* BOTTOM YAWE BAR */}
      <div className="mt-5 h-10 bg-[#055D5D]" />
    </main>
  );
}