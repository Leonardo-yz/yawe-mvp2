"use client";

import TanzaniaMap from "@/components/TanzaniaMap";

export default function WhereWeWorkPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold">
          Where We Work
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg opacity-90">
          YAWE operates across strategic regions in Tanzania,
          empowering communities through health, youth,
          education, climate resilience and social development
          programs.
        </p>
      </section>

      {/* MAP */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <TanzaniaMap />
        </div>
      </section>
    </main>
  );
}