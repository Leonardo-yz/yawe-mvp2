
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Leaf,
  MapPin,
  Quote,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Breaking Barriers, Building Climate Leadership in Shinyanga | YAWE",
  description:
    "Discover how Eunice Zabron and other young leaders are transforming climate governance and inclusion through the Youth Voice for Climate Action project in Shinyanga.",
};

export default function BreakingBarriersPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#055D5D]/70 px-4 py-2 text-sm font-semibold text-white">
                  Youth Voice for Climate Action
                </span>

                <span className="rounded-full bg-[#98027F]/70 px-4 py-2 text-sm font-semibold text-white">
                  Funded by Oxfam Novib
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-[#055D5D] md:text-6xl">
                Breaking Barriers,
                <span className="block text-[#055D5D]">
                  Building Climate Leadership
                </span>
                in Shinyanga
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Empowering youth, women, and people with disabilities to lead
                climate action, influence decision-making, and build resilient
                communities.
              </p>

              <div className="mt-8 flex items-center gap-2 text-slate-600">
                <MapPin className="h-5 w-5 text-emerald-600" />
                Shinyanga Region, Tanzania
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-xl backdrop-blur">
              <div className="flex h-[420px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100">
                <div className="text-center">
                  <p className="font-semibold text-slate-700">
                    Featured Story Image
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Eunice Zabron and fellow youth climate leaders
                  </p>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Users className="mb-4 h-10 w-10 text-emerald-600" />
            <h3 className="text-4xl font-bold">23</h3>
            <p className="mt-2 text-slate-600">Young Leaders Trained</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Award className="mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-4xl font-bold">26%</h3>
            <p className="mt-2 text-slate-600">
              Persons with Disabilities Included
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Leaf className="mb-4 h-10 w-10 text-green-600" />
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="mt-2 text-slate-600">
              Climate Advocacy Capacity Improved
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <CheckCircle2 className="mb-4 h-10 w-10 text-purple-600" />
            <h3 className="text-4xl font-bold">1 Goal</h3>
            <p className="mt-2 text-slate-600">
              Inclusive Climate Leadership
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              The Challenge
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              In Shinyanga, climate change disproportionately affects vulnerable
              groups, particularly young people, women, and persons with
              disabilities. Social inequalities, limited leadership
              opportunities, and exclusion from climate-related decision-making
              bodies increase their vulnerability and reduce their ability to
              influence solutions.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Recognizing these challenges, YAWE implemented the Youth Voice for
              Climate Action project to strengthen leadership, advocacy skills,
              and participation among marginalized groups while promoting
              accountability in climate governance.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-bold">Project Information</h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500">Project</p>
                <p className="font-semibold">
                  Youth Voice for Climate Action
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Funding Partner</p>
                <p className="font-semibold">Oxfam Novib</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold">Shinyanga Region</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Target Groups</p>
                <p className="font-semibold">
                  Youth, Women & Persons with Disabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIARY STORY */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex h-[420px] items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white">
                <div className="text-center">
                  <p className="font-semibold">Beneficiary Photo</p>
                  <p className="text-sm text-slate-500">
                    Eunice Zabron
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Beneficiary Spotlight
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                From Participation to Leadership
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Eunice Zabron is one of the young leaders trained through the
                project. Leadership and climate advocacy training helped unlock
                her potential, build confidence, and strengthen her voice within
                community decision-making spaces.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Today, Eunice actively raises awareness on climate change during
                village meetings and serves as a champion for youth
                participation and climate resilience. Her confidence and
                leadership journey eventually inspired her to contest for a
                councilor position through special seats, where she was
                successfully elected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-r from-[#98027F] to-[#B704A2] p-10 text-white shadow-2xl">
          <Quote className="mb-6 h-14 w-14 opacity-50" />

          <blockquote className="text-xl leading-9 md:text-2xl">
            “I received leadership training conducted by YAWE, and this
            training awakened my leadership potential. Now whenever there is a
            village meeting, I am given time to speak about climate change to
            the community. This opportunity greatly helped me build confidence.
            Today I serve as a councilor and an ambassador for young people on
            climate issues.”
          </blockquote>

          <p className="mt-8 font-semibold">
            — Eunice Zabron, Youth Climate Leader
          </p>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Transformation Journey
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-red-100 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              Before
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>• Limited leadership opportunities</li>
              <li>• Low participation in decision-making</li>
              <li>• Limited climate advocacy skills</li>
              <li>• Exclusion from governance spaces</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-green-100 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              After
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>• Community climate advocate</li>
              <li>• Public speaker in village meetings</li>
              <li>• Elected councilor through special seats</li>
              <li>• Ambassador for youth climate action</li>
            </ul>
          </div>
        </div>
      </section>

    

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Creating Inclusive Climate Leadership
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Through strategic investments in youth leadership, inclusion, and
            climate governance, communities are becoming stronger, more
            resilient, and better prepared to address climate challenges.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#055D5D]/70 px-8 py-4 font-semibold text-white transition hover:bg-[#98027F]/70">
            Learn More About Our Impact
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}