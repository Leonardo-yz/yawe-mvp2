"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const featuredNews = {
  title:
    "YAWE Launches New Youth Empowerment Initiative Across Tanzania",
  image: "/news/featured.jpg",
  date: "May 24, 2026",
  description:
    "The initiative focuses on youth leadership, health awareness, entrepreneurship, and community transformation.",
};

const news = [
  {
    title: "Community Health Outreach Reaches Over 5,000 Families",
    image: "/news/news1.jpg",
    category: "Health",
    date: "May 20, 2026",
  },
  {
    title: "New Education Support Program for Rural Students",
    image: "/news/news2.jpg",
    category: "Gender",
    date: "May 18, 2026",
  },
  {
    title: "Women Empowerment Workshop Inspires Young Entrepreneurs",
    image: "/news/news3.jpg",
    category: "Gender",
    date: "May 14, 2026",
  },
  {
    title: "Environmental Campaign Plants 10,000 Trees",
    image: "/news/news4.jpg",
    category: "Governance",
    date: "May 11, 2026",
  },
];

const trending = [
  "Youth Innovation Program Expands",
  "Health Awareness Campaign Success",
  "New Digital Learning Centers Opened",
  "Clean Water Project Completed",
];

export default function LatestNewsPage() {
  return (
    <main className="bg-gradient-to-br from-[#055d5d] via-[#F7F5F2] to-[#055d5d] min-h-screen text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[70vh] overflow-hidden">
        
        <Image
          src={featuredNews.image}
          alt={featuredNews.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022f2f]/95 via-[#055D5D]/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            
            <span className="inline-block bg-[#98027F] px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              BREAKING NEWS
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {featuredNews.title}
            </h1>

            <div className="flex items-center gap-2 mt-6 text-white/80">
              <CalendarDays size={18} />
              <span>{featuredNews.date}</span>
            </div>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              {featuredNews.description}
            </p>

            <button className="mt-8 px-8 py-4 bg-[#98027F] hover:bg-[#7a0263] rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
              Read Full Story
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* NEWS GRID */}
        <div className="lg:col-span-3">
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#055D5D]">
              Latest Updates
            </h2>

            <button className="flex items-center gap-2 text-[#98027F] font-semibold hover:gap-4 transition-all duration-300">
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-4 left-4 bg-[#055D5D]/90 text-white text-sm px-4 py-2 rounded-full backdrop-blur-md">
                    {item.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <CalendarDays size={16} />
                    {item.date}
                  </div>

                  <h3 className="text-2xl font-bold text-[#03423F] group-hover:text-[#98027F] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-[#055D5D] font-semibold hover:text-[#98027F] transition-all duration-300"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          
          {/* TRENDING */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-[#98027F]" />
              <h3 className="text-2xl font-bold text-[#055D5D]">
                Trending
              </h3>
            </div>

            <div className="space-y-5">
              {trending.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-4 last:border-none group cursor-pointer"
                >
                  <p className="font-medium text-[#03423F] group-hover:text-[#98027F] transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="bg-gradient-to-br from-[#055D5D] to-[#022f2f] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to Updates
            </h3>

            <p className="text-white/80 mb-6">
              Get the latest organization news delivered directly to your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 outline-none placeholder:text-white/60"
            />

            <button className="w-full mt-4 py-4 rounded-full bg-[#98027F] hover:bg-[#7a0263] transition-all duration-300 font-semibold">
              Subscribe Now
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}