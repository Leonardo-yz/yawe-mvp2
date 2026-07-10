import Image from "next/image";

export const metadata = {
  title:
    "Empowered Youth Driving Climate Solutions in Shinyanga Communities | YAWE",
  description:
    "A YAWE success story about empowered youth leading climate solutions, environmental governance, and tree planting in Shinyanga communities.",
};

export default function DrivingClimateSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-19">
        <h1 className="text-center text-2xl font-semibold uppercase leading-snug tracking-tight md:text-3xl">
          Empowered Youth Driving Climate Solutions in Shinyanga Communities.
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-[300px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <div className="text-left text-base font-bold italic leading-7 text-slate-950">
              <p>
                “Through YAAN, we are not just participants, we are leaders
                shaping the future of our environment,” says Francisca, a young
                leader from Masekelo.
              </p>

              <p className="mt-6">
                “Our vision is to unite young people across communities to take
                action, influence decisions, and ensure sustainable solutions
                that will benefit both current and future generations.”
              </p>
            </div>

            <div className="mt-8">
              <Image
                src="/stories/francisca.jpg"
                alt="Francisca, a young leader from Masekelo, standing near young trees"
                width={520}
                height={760}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-justify text-base leading-7 text-slate-900 md:px-4">
            <p>
              Before the intervention, communities in Ndala and Masekelo faced
              limited youth involvement in environmental decision-making, low
              awareness of climate change, and inadequate access to tree
              seedlings for reforestation. Young people lacked platforms,
              skills, and support to actively contribute to environmental
              governance and community action.
            </p>

            <p className="mt-7">
              To address these challenges, YAWE under the Youth Voice for
              Climate Action Project, provided capacity-building, mentorship,
              and created spaces for dialogue and collaboration.
            </p>

            <p className="mt-7">
              Through this support, young leaders themselves took the initiative
              to form the{" "}
              <strong>Youth Accountability and Advocacy Network (YAAN)</strong>,
              connecting youth across communities to engage in climate action
              and decision-making. YAWE also supported linking young leaders
              with the Tanzania Forest Service and local government authority
              whereby the collaborations and partnership has been strengthened
              accessing tree seedlings for free of charge.
            </p>

            <p className="mt-7">
              As a result, youth are now actively leading environmental
              initiatives, including organizing community campaigns and planting
              over 13,000 tree seedlings in schools and villages. Youth
              participation in governance has increased, and communities have
              better access to seedlings and climate information. This
              demonstrates that when empowered, young people can take ownership
              and drive sustainable environmental change.
            </p>
          </article>
        </div>
      </section>
       {/* BOTTOM YAWE BAR */}
      <div className="mt-5 h-10 bg-[#055D5D]" />
    </main>
  );
}