import { successStories } from "@/lib/successStories";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const story = successStories.find(
    (s) => s.slug === params.slug
  );

  if (!story) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-6">
        {story.title}
      </h1>

      {/* IMAGE PLACEHOLDER */}
      <div className="h-[400px] bg-gray-200 rounded-xl flex items-center justify-center mb-8">
        Image Placeholder
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {story.content}
      </p>

      <div className="mt-10 p-6 bg-green-100 rounded-xl">
        <h3 className="font-bold mb-2">
          Impact
        </h3>

        <p>{story.beneficiaries}+ people benefited</p>
      </div>

    </main>
  );
}