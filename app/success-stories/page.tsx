import Link from "next/link";
import Image from "next/image";
import { successStories } from "@/lib/successStories";
import {
  Heart,
  Users,
  GraduationCap,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function SuccessStoriesPage() {
  const featuredStory = successStories[2];
  const stories = successStories;

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white">
        <div className="container mx-auto px-6 py-24">

          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm mb-6">
              Real Stories. Real Impact.
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Success Stories
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover inspiring stories of Health & Nutrition, Climate Action & Environment,
              Gender Equality & Child Protection, and Good Governance that show real community impact.
            </p>

          </div>

        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-gray-100 -mt-15 relative z-10">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-100 shadow-xl rounded-2xl p-8 text-center">
              <Users className="mx-auto mb-3 text-[#055D5D]" size={40} />
              <h2 className="text-4xl font-bold">128K+</h2>
              <p className="text-gray-600">Total Beneficiaries</p>
            </div>

            <div className="bg-gray-100 shadow-xl rounded-2xl p-8 text-center">
              <Heart className="mx-auto mb-3 text-red-500" size={40} />
              <h2 className="text-4xl font-bold">50K+</h2>
              <p className="text-gray-600">Health Services Delivered</p>
            </div>

            <div className="bg-gray-100 shadow-xl rounded-2xl p-8 text-center">
              <GraduationCap className="mx-auto mb-3 text-green-600" size={40} />
              <h2 className="text-4xl font-bold">158+</h2>
              <p className="text-gray-600">Young Leaders Trained</p>
            </div>

            <div className="bg-gray-100 shadow-xl rounded-2xl p-8 text-center">
              <Leaf className="mx-auto mb-3 text-emerald-600" size={40} />
              <h2 className="text-4xl font-bold">56K+</h2>
              <p className="text-gray-600">Trees Planted</p>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="py-20 bg-gradient-to-br from-[#F2D6EC] via-slate-50 to-slate-100">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 bg-gray-50 rounded-3xl overflow-hidden shadow-lg">

            {/* IMAGE */}
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-14">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                Featured Success Story
              </span>

              <h2 className="text-4xl font-bold mt-6 mb-6">
                {featuredStory.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                {featuredStory.excerpt}
              </p>

              <Link
                href={`/success-stories/${featuredStory.slug}`}
                className="inline-flex items-center gap-2 bg-[#055D5D] text-white px-6 py-3 rounded-xl hover:bg-[#044848]"
              >
                Read Story
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* STORIES GRID */}
      <section className="bg-gradient-to-br from-[#BFE8E3] via-slate-50 to-slate-100 py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Stories of Transformation
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Every story reflects real community change created through youth empowerment and development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {stories.map((story) => (
              <div
                key={story.slug}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                {/* IMAGE */}
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {story.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-4 mb-3">
                    {story.title}
                  </h3>

                  <p className="text-gray-600 mb-5">
                    {story.excerpt}
                  </p>

                  <div className="flex justify-between items-center">

                    <span className="text-sm text-gray-500">
                      {story.beneficiaries}+ Beneficiaries
                    </span>

                    <Link
                      href={`/success-stories/${story.slug}`}
                      className="text-[#055D5D] font-semibold"
                    >
                      Read More →
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#055D5D] text-white py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Be Part of the Next Success Story
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Together we can empower more young people, strengthen communities,
            and create lasting positive change.
          </p>

          <Link
            href="/donate"
            className="bg-white text-[#055D5D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
          >
            Support Our Work
          </Link>

        </div>
      </section>

    </main>
  );
}