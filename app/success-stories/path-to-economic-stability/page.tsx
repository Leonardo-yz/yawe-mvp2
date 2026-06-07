"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  Leaf,
  TreePine,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function PathToEconomicStabilityPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#055D5D] via-[#055D5D] to-[#98027F] text-white py-28">
        <div className="container mx-auto px-6 max-w-6xl text-center">

          <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm mb-6">
            Success Story • Inclusive Climate Entrepreneurship Project
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Path to Economic Stability
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            How climate-smart entrepreneurship transformed Zakaria's life,
            strengthened his family's future, and inspired environmental
            conservation in his community.
          </p>

        </div>
      </section >

      {/* Main Image */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#055D5D] to-[#98027F] text-white">
        <div className="container mx-auto px-6">

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-[1200px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
             
              <Image
                                       src="/stories/zacharia.jpg"
                                       alt="Zakaria with Beehives"
                                       fill
                                       className="object-cover"
                                     /> 

            </div>
          </div>

        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <Leaf className="mx-auto mb-4 text-green-700" size={40} />
              <h3 className="text-4xl font-bold text-green-700">25</h3>
              <p className="text-gray-600 mt-2">
                Modern Beehives Provided
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <Users className="mx-auto mb-4 text-blue-700" size={40} />
              <h3 className="text-4xl font-bold text-blue-700">15</h3>
              <p className="text-gray-600 mt-2">
                Group Members Trained
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 text-center">
              <TrendingUp
                className="mx-auto mb-4 text-amber-600"
                size={40}
              />
              <h3 className="text-4xl font-bold text-amber-600">1</h3>
              <p className="text-gray-600 mt-2">
                Sustainable Enterprise
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <TreePine
                className="mx-auto mb-4 text-emerald-700"
                size={40}
              />
              <h3 className="text-4xl font-bold text-emerald-700">
                Forest
              </h3>
              <p className="text-gray-600 mt-2">
                Conservation Champion
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Beneficiary Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Meet Zakaria
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">

                <p>
                  Zakaria is one of the beneficiaries of the Inclusive
                  Climate Entrepreneurship Project implemented by YAWE
                  in Shinyanga. The project promotes climate-smart
                  enterprises, forest conservation, and economic
                  resilience among vulnerable communities.
                </p>

                <p>
                  Before joining the project, Zakaria relied on
                  small-scale farming and operating a local passenger
                  transport service (daladala). These activities
                  provided an unreliable source of income, making it
                  difficult to consistently support his family's needs.
                </p>

                <p>
                  Limited income affected access to healthcare,
                  nutritious food, and other essential services while
                  reducing opportunities to invest in the future.
                </p>

              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl flex items-center justify-center text-gray-500">
             
             <Image src="/stories/zacharia1.jpg" 
             alt="Training & Beekeeping Activities" 
             width={800}
             height={400}
             className="object-cover rounded-3xl" />
            </div>

          </div>

        </div>
      </section>

      {/* Before vs After */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Transformation Journey
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-red-50 border border-red-100 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-red-700 mb-8">
                Before the Project
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>• Unstable income sources</li>
                <li>• Dependence on small-scale farming</li>
                <li>• Limited financial security</li>
                <li>• Difficulty meeting family needs</li>
                <li>• Few investment opportunities</li>
                <li>• Vulnerable to climate shocks</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-green-700 mb-8">
                After the Project
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>• Reliable income from honey production</li>
                <li>• Improved household stability</li>
                <li>• Increased self-confidence</li>
                <li>• Greater resilience to climate impacts</li>
                <li>• Better support for family needs</li>
                <li>• Community environmental advocate</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Project Support */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            How the Project Helped
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">
                Skills Training
              </h3>

              <p className="text-gray-600">
                Practical training on modern beekeeping, hive
                management, honey harvesting, and enterprise
                development.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">
                Productive Assets
              </h3>

              <p className="text-gray-600">
                Provision of 25 modern beehives to the Shatimba
                Beekeeping Group to establish sustainable enterprises.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">
                Climate Resilience
              </h3>

              <p className="text-gray-600">
                Access to a livelihood opportunity that is both
                environmentally sustainable and less vulnerable to
                climate-related shocks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto bg-[#055D5D]/80 text-white rounded-3xl p-12 shadow-xl">

            <Quote size={60} className="opacity-30 mb-6" />

            <blockquote className="text-2xl leading-relaxed">
              "Before joining the project, I struggled to earn enough
              income to support my family and plan for the future.
              Through beekeeping, I have gained a reliable source of
              income, greater confidence, and a new understanding of the
              importance of protecting our forests."
            </blockquote>

            <blockquote className="text-2xl leading-relaxed mt-6">
              "Today, I am able to support my family while encouraging
              other young people to embrace opportunities that benefit
              both people and the environment."
            </blockquote>

            <div className="mt-8">
              <p className="font-bold text-xl">
                — Zakaria
              </p>

              <p className="text-green-100">
                Beneficiary, Inclusive Climate Entrepreneurship Project
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Conservation Impact */}
      <section className="bg-[#98027F]/70 text-white py-20">
        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto text-center">

            <ShieldCheck
              size={70}
              className="mx-auto mb-6 text-white"
            />

            <h2 className="text-4xl font-bold mb-8">
              Livelihoods and Conservation Working Together
            </h2>

            <p className="text-xl text- leading-relaxed">
              Today, Zakaria actively contributes to protecting the
              Mwantini Forest by monitoring and reporting activities
              that threaten the ecosystem. His journey demonstrates how
              climate-smart entrepreneurship can simultaneously improve
              incomes, strengthen resilience, and safeguard natural
              resources for future generations.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Creating Sustainable Change Together
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Through skills development, productive assets, and climate
            resilience initiatives, YAWE continues to empower
            communities to build sustainable livelihoods while
            protecting the environment.
          </p>

          <Link
            href="/projects/inclusive-climate-entrepreneurship"
            className="inline-block bg-[#055D5D]/70 hover:bg-[#98027F]/70 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View Project
          </Link>

        </div>
      </section>

    </main>
  );
}