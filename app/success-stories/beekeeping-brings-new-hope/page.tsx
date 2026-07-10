import Image from "next/image";

export const metadata = {
  title:
    "Women Leading Climate Resilience Through Beekeeping in Shinyanga | YAWE",
  description:
    "A YAWE success story on how women, youth, and people with disabilities are building climate resilience through beekeeping in Shinyanga.",
};

export default function BeekeepingBringsNewHopePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-6">
        {/* Success Story Label */}
        <div className="mb-4 inline-block bg-[#98027F] px-8 py-1.5 text-2xl font-semibold uppercase tracking-wide text-white">
          Success Story
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-4xl text-center text-2xl font-semibold uppercase leading-snug tracking-wide md:text-3xl">
          Women Leading Climate Resilience Through Beekeeping in Shinyanga
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[270px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="md:border-r-4 md:border-[#055D5D] md:pr-6">
            <div className="overflow-hidden">
              <Image
                src="/stories/eliza33.jpg"
                alt="Elizabeth inspecting a beehive in Mwantino Forest reserve"
                width={500}
                height={360}
                className="h-auto w-full object-cover"
              />
            </div>

            <p className="mt-3 text-center text-sm italic leading-5 text-slate-700">
              Elizabeth inspecting the beehive in Mwantino Forest reserve,
              <br />
              Photo credit: YAWE, 2025
            </p>

            <div className="mt-10 text-center">
              <p className="text-base leading-6 text-slate-800">
                Elizabeth, one of the beneficiaries, shared her experience:
              </p>

              <blockquote className="mt-8 text-base leading-6 text-slate-800">
                “For many years, I wanted to engage in an activity that could
                help me earn income and adapt to climate change, but I lacked
                the skills and the capital to start.
                <br />
                <br />
                Through this project, we received 25 beehives and training in
                modern beekeeping practices. This support has opened a new
                chapter in our lives and given us hope for a better future for
                our families.”
              </blockquote>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-center text-base leading-7 text-slate-800 md:px-2">
            <p>
              In Shinyanga, women, youth, and people with disabilities have
              limited access to resources and opportunities for adapting to
              climate change and engaging in the sustainable economy.
            </p>

            <p className="mt-6">
              To tackle these problems, YAWE launched the Inclusive Climate
              Entrepreneurship Project. This project aims to empower marginalized
              groups through climate-smart beekeeping.
            </p>

            <p className="mt-6">
              The project helps at-risk communities to create sustainable income
              sources while improving their ability to adapt to the impacts of
              climate change. Beneficiaries received hands-on training through a
              group-based learning model that covers financial literacy,
              business skills, and the entire beekeeping value chain.
            </p>

            <p className="mt-6">
              Use of local languages ensured that everyone could meaningfully
              benefit equally. Each group also received 25 modern beehives to
              help them start or grow their climate-smart beekeeping activities.
            </p>

            <p className="mt-6">
              YAWE, in partnership with the Tanzania Forest Service in
              Shinyanga District, has reached 114 beneficiaries, including
              women, youth, and people with disabilities.
            </p>

            <p className="mt-6">
              This accomplishment shows the project’s strong impact on the
              community and its growing reach. One beneficiary, Elizabeth, shared
              her experience:
            </p>

            <p className="mt-6">
              The project has improved technical skills, increased income
              opportunities, and enhanced resilience to climate-related risks
              among beneficiaries.
            </p>

            <p className="mt-8">
              To learn more about supporting this inclusive climate
              entrepreneurship program, visit{" "}
              <span className="font-semibold text-[#055D5D]">
                www.yawe.or.tz
              </span>
              .
            </p>
          </article>
        </div>
      </section>

      <div className="mt-10 h-10 bg-[#055D5D]" />
    </main>
  );
}