import {
  ArrowRight,
  BarChart3,
  Leaf,
  Recycle,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

export const metadata = {
  title:
    "Steve’s Climate Entrepreneurship Journey in Shinyanga | YAWE Success Story",
  description:
    "How Isaack Steven transformed agricultural waste into sustainable briquettes, doubling production and creating green jobs through YAWE’s Inclusive Climate Intrapreneurship Programme.",
};

export default function SteveClimateEntrepreneurshipPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* TEXT */}
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#98027F]/70 px-4 py-2 text-sm font-semibold text-white">
                  Climate Entrepreneurship
                </span>
                <span className="rounded-full bg-[#98027F]/70 px-4 py-2 text-sm font-semibold text-white">
                  Circular Economy
                </span>
                <span className="rounded-full bg-[#B704A2]/70 px-4 py-2 text-sm font-semibold text-white">
                  Shinyanga, Tanzania
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#055D5D] md:text-6xl">
                Steve’s Climate
                <span className="block text-[#055D5D]">
                  Entrepreneurship Journey
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Transforming agricultural waste into sustainable briquettes,
                reducing deforestation, creating jobs, and building a circular
                economy in Shinyanga.
              </p>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-xl backdrop-blur">
              <div className="flex h-[420px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 text-center">
                <div>
                  <p className="font-semibold text-slate-700">
                    Featured Image
                  </p>
                  <p className="text-sm text-slate-500">
                    Isaack Steven & Briquette Production
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
            <TrendingUp className="mb-4 h-10 w-10 text-emerald-600" />
            <h3 className="text-3xl font-bold">€770</h3>
            <p className="mt-2 text-slate-600">Startup Capital</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <BarChart3 className="mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-3xl font-bold">400 → 800kg+</h3>
            <p className="mt-2 text-slate-600">Daily Production Growth</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Recycle className="mb-4 h-10 w-10 text-green-600" />
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="mt-2 text-slate-600">Waste-to-Energy Conversion</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Users className="mb-4 h-10 w-10 text-purple-600" />
            <h3 className="text-3xl font-bold">Jobs</h3>
            <p className="mt-2 text-slate-600">Created for Youth & Women</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* CHALLENGE */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              The Challenge
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Isaack Steven, a 38-year-old entrepreneur from Shinyanga,
              developed a sustainable briquette business using agricultural
              waste such as sugarcane bagasse, rice husks, and sawdust. Despite
              the innovation, his business faced major barriers including
              limited machinery, lack of capital, a narrow customer base, and
              minimal marketing capacity.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              As a visually impaired entrepreneur, these challenges made it even
              more difficult to scale his climate solution and expand his
              environmental impact.
            </p>

            {/* INTERVENTION */}
            <h2 className="mt-12 text-3xl font-bold text-slate-900">
              YAWE’s Intervention
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Through the Inclusive Climate Intrapreneurship Programme in
              Shinyanga, Isaack received business management training, digital
              marketing support, mentorship, and startup capital of €770 to
              upgrade his production system.
            </p>
          </div>

          {/* SIDEBAR */}
          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-bold">Project Info</h3>

            <div className="mt-6 space-y-5 text-slate-700">
              <div>
                <p className="text-sm text-slate-500">Programme</p>
                <p className="font-semibold">
                  Inclusive Climate Intrapreneurship
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold">Shinyanga</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Focus</p>
                <p className="font-semibold">
                  Circular Economy & Green Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold">
            Business Transformation
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-red-50 p-8">
              <h3 className="text-2xl font-bold text-red-600">Before</h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• 400kg daily production capacity</li>
                <li>• Limited machinery and tools</li>
                <li>• Small local customer base</li>
                <li>• Low marketing capacity</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-green-50 p-8">
              <h3 className="text-2xl font-bold text-green-600">After</h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Over 800kg daily production capacity</li>
                <li>• Upgraded production machines</li>
                <li>• Expanded market reach</li>
                <li>• Job creation for community members</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-[#055D5D] to-[#98027F] p-10 text-white shadow-2xl">
          <p className="text-xl leading-9 md:text-2xl">
            “I used to sell just half a bag of briquettes a month. I even
            thought of quitting the business. The upgraded machines changed
            everything. Now I can meet demand, expand my business, and hire
            others. This is not just my win — it’s a community win.”
          </p>

          <p className="mt-8 font-semibold">
            — Isaack Steven, Briquette Producer
          </p>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-center text-4xl font-bold">
          Climate & Community Impact
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Leaf className="h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-xl font-bold">Reduced Deforestation</h3>
            <p className="mt-2 text-slate-600">
              Clean briquettes reduce dependency on charcoal.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Recycle className="h-10 w-10 text-emerald-600" />
            <h3 className="mt-4 text-xl font-bold">Circular Economy</h3>
            <p className="mt-2 text-slate-600">
              Agricultural waste converted into energy.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Users className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Job Creation</h3>
            <p className="mt-2 text-slate-600">
              Employment opportunities for youth and women.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Investing in Climate Entrepreneurs
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Supporting green entrepreneurs like Isaack creates cleaner energy,
            stronger economies, and more resilient communities.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#055D5D]/70 px-8 py-4 font-semibold text-white hover:bg-[#98027F]/70">
            Support Climate Innovation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}