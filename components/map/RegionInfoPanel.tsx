"use client";

import { RegionData } from "@/data/regions";

type Props = {
  region: RegionData | null;
  onClose?: () => void;
};

export default function RegionInfoPanel({ region, onClose }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border p-6">

      {/* EMPTY STATE */}
      {!region && (
        <div className="text-gray-500 text-sm">
          Select a region on the map to view implementation details.
        </div>
      )}

      {/* REGION CONTENT */}
      {region && (
        <>
          {/* HEADER */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {region.name} Region
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                {region.description}
              </p>
            </div>

            {/* CLOSE BUTTON */}
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            )}
          </div>

          {/* FOCUS AREAS */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Focus Areas
            </h3>

            <div className="flex flex-wrap gap-2">
              {region.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* IMPACT NOTE (DONOR STYLE SECTION) */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 text-sm text-gray-600">
            YAWE works with local communities in{" "}
            <span className="font-semibold">{region.name}</span> to strengthen
            resilience, improve livelihoods, and support sustainable development
            initiatives.
          </div>
        </>
      )}
    </div>
  );
}