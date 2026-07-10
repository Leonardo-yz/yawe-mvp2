import Image from "next/image";

export const metadata = {
  title:
    "From Climate Vulnerability to Climate Entrepreneurship | YAWE Success Story",
  description:
    "Kashinje's journey to resilience through climate-smart beekeeping, entrepreneurship training, and sustainable livelihoods in Shinyanga.",
};

export default function JourneyToResiliencePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="mb-4 inline-block bg-[#98027F] px-8 py-1.5 text-2xl font-semibold uppercase tracking-wide text-white">
          Success Story
        </div>

        <h1 className="text-center text-2xl font-semibold uppercase leading-snug tracking-tight md:text-3xl">
          From Climate Vulnerability to Climate Entrepreneurship: Kashinje’s
          Journey to Resilience
        </h1>

        <div className="mt-5 grid gap-6 md:grid-cols-[275px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <Image
              src="/stories/kashinje.jpg"
              alt="Kashinje inspecting beehives in Shinyanga"
              width={500}
              height={430}
              className="h-auto w-full object-cover"
              priority
            />

            <p className="mt-2 text-base italic leading-6 text-slate-800">
              Kashinje inspecting beehives in Shitimba Village, Shinyanga,
              Photo by YAWE, 2025
            </p>

            <p className="mt-8 text-base leading-6 text-slate-800">
              He shares:
            </p>

            <blockquote className="mt-3 text-base leading-6 text-slate-800">
              “Before this project, I depended mostly on small farming and
              tailoring, but climate change made farming unreliable and income
              was never stable.
              <br />
              <br />
              Through YAWE’s support, I received training in climate-smart
              beekeeping, entrepreneurship, and business development. I now have
              17 occupied beehives and expect to harvest more than 20 kilograms
              of honey in the first season.
              <br />
              <br />
              This opportunity has helped me build a sustainable source of
              income, protect the environment, and inspire other young people in
              my community.”
            </blockquote>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-center text-base leading-6 text-slate-900 md:px-2">
            <p>
              In Shitimba Village, Shinyanga, climate change has continued to
              affect agricultural productivity and household income, especially
              among young people and vulnerable families who depend on
              climate-sensitive livelihoods.
            </p>

            <p className="mt-5">
              Kashinje, a young entrepreneur and member of the WIZABHUNZUKI
              Group, experienced these challenges directly. His income from
              farming and tailoring was unreliable, and limited livelihood
              opportunities made it difficult to support his family and plan for
              the future.
            </p>

            <p className="mt-5">
              Although he had interest in beekeeping, he lacked technical
              knowledge, modern equipment, startup support, and access to
              business development services that could help him turn the idea
              into a sustainable enterprise.
            </p>

            <p className="mt-5">
              Through the Inclusive Climate Entrepreneurship Project, YAWE
              supported Kashinje with climate-smart beekeeping training,
              entrepreneurship skills, business development support, mentorship,
              and modern beekeeping equipment.
            </p>

            <p className="mt-5">
              With technical support from the Tanzania Forest Services, Kashinje
              established 11 traditional beehives and received 6 modern
              beehives. Today, he has 17 occupied beehives and expects to
              harvest more than 20 kilograms of honey during the first
              production season.
            </p>

            <p className="mt-5">
              This transformation has diversified his household income,
              strengthened his resilience to climate-related shocks, and opened
              a new pathway for sustainable entrepreneurship in his community.
            </p>

            <p className="mt-5">
              Kashinje’s journey demonstrates how climate-smart entrepreneurship
              can protect forests, create income opportunities, promote
              sustainable natural resource management, and inspire young people
              to take part in local climate solutions.
            </p>

            <p className="mt-5">
              YAWE continues to promote inclusive climate entrepreneurship as a
              pathway for building resilient communities and creating
              sustainable livelihoods. To learn more and support this
              initiative, visit www.yawe.or.tz
            </p>
          </article>
        </div>
      </section>

      <div className="mt-4 h-10 bg-[#055D5D]" />
    </main>
  );
}