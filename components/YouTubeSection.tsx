"use client";

import React from "react";

const videos = [
  {
    id: "grkN_rZZ2F0", // replace with your real YouTube IDs
    title: "Inclusive Climate Entrepreneurship Program",
  },
  {
    id: "M0ycXNEQZdc",
    title: "Inclusive Climate Entrepreneurship Project in Shinyanga",
  },
  {
    id: "MVZqLccb6V8",
    title: "SAFE SCHOOL PROGRAM IN SHINYANGA",
  },
];

export default function YouTubeSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#055D5D] to-[#022f2f] py-20 px-4">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Media
        </h2>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto">
          Watch how we are transforming communities through real stories.
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition-all duration-500"
          >
            {/* YouTube iframe */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Title overlay */}
            <div className="p-4 bg-gradient-to-t from-[#03423F]/90 to-transparent">
              <h3 className="text-white font-semibold group-hover:text-[#98027F] transition-colors duration-300">
                {video.title}
              </h3>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#055D5D]/10 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-14">
        <a
          href="https://www.youtube.com/@yawetanzania"
          target="_blank"
          className="inline-block px-8 py-3 rounded-full bg-[#FFFFFF] text-[#055D5D] font-semibold hover:bg-[#000000] transition-all duration-300 shadow-lg"
        >
          Visit Our YouTube Channel
        </a>
      </div>
    </section>
  );
}