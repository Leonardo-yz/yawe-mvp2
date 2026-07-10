import Image from "next/image";

export const metadata = {
  title:
    "From Water Scarcity to a Thriving Orange-Fleshed Sweet Potato Nursery | YAWE",
  description:
    "How REACTS-IN transformed Masunga Nasi's livelihood through orange-fleshed sweet potato farming, improved nutrition, and sustainable income generation.",
};

export default function WaterScarcityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-19">
        <h1 className="text-center text-2xl font-semibold uppercase leading-snug tracking-tight md:text-3xl">
          From Water Scarcity to a Thriving Orange-Fleshed Sweet Potato Nursery:
          <br />
          How REACTS-IN Transformed Masunga Nasi&apos;s Livelihood
        </h1>

        <div className="mt-8 grid gap-7 md:grid-cols-[310px_1fr]">
          {/* LEFT COLUMN */}
          <aside className="text-center md:border-r-4 md:border-[#055D5D] md:pr-5">
            <blockquote className="text-left text-sm font-bold italic leading-6 text-[#0B3157]">
              “Before joining the REACTS-IN Project, I struggled to produce
              enough from my small garden because I spent so much time fetching
              water and lacked the knowledge to improve my farming. The training
              and OFSP vines changed everything. I established my own nursery,
              sold vines to fellow farmers and the local government, and earned
              enough income to buy two goats. My family now eats orange-fleshed
              sweet potatoes regularly, and we prepare nutritious porridge that
              has improved our diet. I want to continue expanding my nursery so
              that many more farmers can benefit from quality planting materials
              and improved nutrition.”
            </blockquote>

            <p className="mt-6 text-sm font-bold italic text-[#0B3157]">
              Masunga Nasi
            </p>

            <p className="mt-4 text-sm font-bold italic text-[#0B3157]">
              Model Farmer, Meatu District
            </p>

            <div className="mt-8">
              <Image
                src="/stories/masunga1.jpg"
                alt="Masunga Nasi standing in his orange-fleshed sweet potato nursery"
                width={520}
                height={430}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <article className="text-justify text-sm leading-7 text-slate-900 md:px-3">
            <p>
              At 58 years old, Masunga Nasi had long aspired to become a model
              farmer in his village. Like many smallholder farmers in Meatu
              District, he relied on cultivating vegetables and tomatoes on a
              small garden to support his family&apos;s livelihood. However,
              limited technical knowledge, poor access to quality planting
              materials, and inadequate irrigation water constrained his
              productivity.
            </p>

            <p className="mt-5">
              Every day, he spent considerable time fetching water from distant
              sources, limiting the size of his cultivated area and reducing the
              time available for other productive activities. As a result, his
              harvests generated little income and were insufficient to
              consistently meet his household&apos;s food and financial needs.
            </p>

            <p className="mt-5">
              Recognizing the potential of committed farmers to catalyse change
              within their communities, the REACTS-IN Project selected Masunga
              as a model farmer. Through the project, he received orange-fleshed
              sweet potato (OFSP) planting vines and practical, hands-on training
              delivered by the Agricultural Extension Officer.
            </p>

            <p className="mt-5">
              The training focused on improved crop production techniques,
              nursery establishment, vine multiplication, water management, and
              sustainable farming practices. Equipped with new knowledge and
              improved planting materials, Masunga was determined to put his
              skills into practice.
            </p>

            <p className="mt-5">
              Inspired by the training and recognizing the growing demand for
              quality OFSP vines, Masunga invested his own resources to construct
              an artificial well in his garden. This initiative significantly
              reduced the time and labour previously required to fetch water,
              enabling him to irrigate his crops more efficiently and maintain a
              healthy nursery throughout the growing season.
            </p>

            <p className="mt-5">
              Applying the techniques learned through the project, Masunga
              established a healthy OFSP nursery and successfully multiplied
              quality planting vines. His nursery quickly became a trusted source
              of planting materials within the community, attracting farmers from
              his village and neighbouring communities seeking quality vines for
              cultivation.
            </p>

            <p className="mt-5">
              During the season, Masunga supplied quality OFSP vines to more
              than 20 farming households, enabling other families to establish
              their own OFSP fields and improve access to this nutritious crop.
              The Local Government Authority also purchased vines from his
              nursery for wider community distribution.
            </p>

            <p className="mt-5">
              Sales from the nursery generated TZS 300,000 during the season—an
              income stream that did not previously exist for Masunga. He
              invested these earnings in purchasing two goats, strengthening his
              household&apos;s asset base and improving resilience to future
              economic shocks.
            </p>

            <p className="mt-5">
              Beyond increased income, the intervention has significantly
              improved household nutrition. Orange-fleshed sweet potatoes have
              become a regular part of the family&apos;s diet, providing an
              affordable source of vitamin A and other essential nutrients.
            </p>

            <p className="mt-5">
              Masunga&apos;s achievements have also inspired other farmers to
              adopt improved agricultural practices. As a model farmer, he now
              serves as a practical demonstration of how improved technologies,
              farmer initiative, and extension support can increase productivity,
              improve nutrition, and generate new economic opportunities.
            </p>

            <p className="mt-5">
              His outstanding performance has attracted recognition from local
              leadership. The District Commissioner for Meatu District visited
              Masunga&apos;s farm to observe the results firsthand and encouraged
              wider promotion of orange-fleshed sweet potato production
              throughout the district.
            </p>

            <p className="mt-5">
              Looking ahead, Masunga plans to expand his nursery to meet the
              growing demand for quality planting materials. With improved
              irrigation infrastructure, such as a small irrigation pump, he
              believes he could produce substantially more vines, reach many more
              farmers, and contribute to climate-resilient and
              nutrition-sensitive agriculture across the district.
            </p>

            <p className="mt-5">
              His journey demonstrates that when smallholder farmers receive
              appropriate knowledge, quality inputs, and technical support, they
              can become agents of change who improve not only their own
              livelihoods but also those of their communities.
            </p>
          </article>
        </div>
      </section>
       {/* BOTTOM YAWE BAR */}
      <div className="mt-5 h-10 bg-[#055D5D]" />
    </main>
  );
}