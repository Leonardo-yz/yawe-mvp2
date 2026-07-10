import Image from "next/image";

export const metadata = {
  title:
    "Steve’s Climate Entrepreneurship Journey in Shinyanga | YAWE Success Story",
  description:
    "Isaack Steven’s climate entrepreneurship journey in Shinyanga through eco-friendly briquette production and inclusive climate entrepreneurship support.",
};

export default function StevesClimateEntrepreneurshipJourneyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-5 py-5">
        <div className="mb-3 inline-block bg-[#98027F] px-8 py-1 text-2xl font-semibold uppercase tracking-wide text-white">
          Success Story
        </div>

        <h1 className="text-center text-2xl font-semibold uppercase leading-snug tracking-tight md:text-3xl">
          Steve’s Climate Entrepreneurship Journey in Shinyanga
        </h1>

        <div className="mt-4 grid gap-6 md:grid-cols-[285px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <Image
              src="/stories/steve.jpg"
              alt="Isaack Steven, a briquette producer"
              width={520}
              height={390}
              className="h-auto w-full object-cover"
              priority
            />

            <p className="mt-1 text-left text-sm italic leading-5 text-slate-800">
              Picture: Isaack Steven, a briquette producer
            </p>

            <p className="mt-5 text-base leading-6 text-slate-900">
              Isaack Steven, a 38-year-old entrepreneur from Shinyanga,
              Tanzania, has been working to produce sustainable briquettes from
              agricultural waste such as sugarcane bagasse, rice husks, and
              sawdust. His business aims to provide an alternative to charcoal,
              which is a major driver of deforestation and environmental
              degradation. By converting agricultural waste into eco-friendly
              fuel, Isaack’s business reduces waste and contributes to the fight
              against climate change by offering cleaner energy.
            </p>

            <p className="mt-6 text-base leading-6 text-slate-900">
              Isaack has a disability, he is visually impaired but this has not
              deterred him from pursuing his entrepreneurial goals. His
              disability, rather than being a hindrance, has fueled his
              determination to create a successful business that also benefits
              the local community.
            </p>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-center text-base leading-6 text-slate-900 md:px-2">
            <p>
              Isaak’s story is one of resilience and transformation. Before
              joining the Inclusive Climate Intrapreneurship Programme
              implemented by YAWE in Shinyanga, Isaak struggled in running his
              small business of producing eco-friendly briquettes for his
              community including limited access to advanced tools, lack of
              capital, a narrow customer base, and minimal marketing capacity
              held him back from scaling up and making a bigger environmental
              impact.
            </p>

            <p className="mt-6">
              After joining the program, he received training on business
              management including marketing and received a startup capital of
              €770, which he used to upgrade his briquette production plant.
              After upgrading his machines, he managed to double the production
              capacity from maximum 400 kilograms per day to almost over 800
              kilograms per day, allowing him to meet the growing demand for his
              briquettes and reduce operating costs. This investment
              significantly increased his production capacity, enabling him to
              meet growing demand with better quality products.
            </p>

            <p className="mt-6 italic">
              “I used to sell just half a bag of briquettes a month. I even
              thought of quitting the business...“
            </p>

            <p className="mt-6">
              “The upgraded machines changed everything. Now I can meet demand,
              expand my business, and hire others. This is not just my win, it’s
              a community win.“ - Isaack Steven, Briquette Producer, 38
            </p>

            <p className="mt-3">
              Alongside this financial support, Isaak benefited from tailored
              mentorship, training in digital marketing and business management,
              and connections to a wider network of climate entrepreneurs and
              industry experts. These combined supports helped Isaak expand his
              market beyond his local village to serve households and small
              businesses in neighboring towns.
            </p>

            <p className="mt-6">
              His growing business has created jobs for youth and women in the
              community, empowering marginalized groups and fostering
              climate-conscious entrepreneurship. Isaak’s journey highlights how
              targeted financial support and capacity building can turn local
              businesses into engines of environmental change and economic
              opportunity.
            </p>

            <p className="mt-6">
              This project has transformed and changing the narrative of waste
              management to promote circular economy while placing the at-risk
              communities at the heart of climate resilience efforts. For
              supporting this initiative, visit www.yawe.or.tz
            </p>
          </article>
        </div>
      </section>
       {/* BOTTOM YAWE BAR */}
      <div className="mt-5 h-10 bg-[#055D5D]" />
    </main>
  );
}