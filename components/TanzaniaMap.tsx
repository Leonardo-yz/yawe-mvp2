"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const regions = [
  {
    id: "shinyanga",
    name: "Shinyanga",
    beneficiaries: 21420,
    districts: 2,
    projects: 7,
    color: "#98027F",
  },
  {
    id: "simiyu",
    name: "Simiyu",
    beneficiaries: 33490,
    districts: 5,
    projects: 2,
    color: "#055D5D",
  },
];

export default function TanzaniaMap() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* SVG MAP */}
      <div className="bg-white rounded-3xl shadow-xl p-6">

        <svg
          viewBox="0 0 700 700"
          className="w-full h-auto"
        >

          {/* Tanzania silhouette */}
          <path
            d="M140 120
               L550 120
               L620 280
               L560 520
               L320 620
               L120 500
               L90 260
               Z"
            fill="#E5E7EB"
            stroke="#9CA3AF"
            strokeWidth="2"
          />

          {/* SHINYANGA */}
          <motion.path
            d="M180 180 L310 180 L320 290 L170 300 Z"
            fill="#98027F"
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedRegion(regions[0])}
          />

          {/* SIMIYU */}
          <motion.path
            d="M330 190 L470 190 L480 310 L330 300 Z"
            fill="#055D5D"
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedRegion(regions[1])}
          />

          <text
            x="210"
            y="250"
            fill="white"
            fontSize="18"
          >
            Shinyanga
          </text>

          <text
            x="370"
            y="250"
            fill="white"
            fontSize="18"
          >
            Simiyu
          </text>

        </svg>

      </div>

      {/* DATA CARD */}
      <motion.div
        key={selectedRegion.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8"
      >
        <div
          className="w-16 h-16 rounded-full mb-5"
          style={{
            backgroundColor: selectedRegion.color,
          }}
        />

        <h2 className="text-3xl font-bold text-gray-800">
          {selectedRegion.name} Region
        </h2>

        <p className="text-gray-600 mt-3">
          YAWE is implementing community-driven
          development programs in this region.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-bold text-2xl">
              {selectedRegion.projects}
            </h3>
            <p>Projects</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-bold text-2xl">
              {selectedRegion.districts}
            </h3>
            <p>Districts</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-bold text-2xl">
              {selectedRegion.beneficiaries.toLocaleString()}
            </h3>
            <p>Beneficiaries</p>
          </div>

        </div>

        <button
          className="mt-8 px-6 py-3 rounded-full text-white font-semibold"
          style={{
            backgroundColor: selectedRegion.color,
          }}
        >
          View Programs
        </button>
      </motion.div>

    </div>
  );
}