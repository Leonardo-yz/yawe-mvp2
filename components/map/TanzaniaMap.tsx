"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { regions, RegionName } from "@/data/regions";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/tanzania/tanzania-regions.json";

type GeoFeature = {
  rsmKey: string;
  properties: {
    name: string;
  };
};

export default function TanzaniaMap() {
  const [selected, setSelected] = useState<RegionName | null>(null);

  const selectedRegion = selected ? regions[selected] : null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      {/* MAP */}
      <ComposableMap
        projectionConfig={{ scale: 2500 }}
        width={800}
        height={800}
      >
        <ZoomableGroup center={[34.8888, -6.3690]} zoom={2}>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeoFeature[] }) =>
              geographies.map((geo) => {
                const name = geo.properties.name as RegionName;

                const isHighlighted =
                  name === "Shinyanga" || name === "Simiyu";

                const region = regions[name];

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo as any}
                    onClick={() => setSelected(name)}
                    onMouseEnter={() => setSelected(name)}
                    style={{
                      default: {
                        fill: isHighlighted ? region.color : "#E5E7EB",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.6,
                        outline: "none",
                        transition: "all 0.2s ease",
                      },
                      hover: {
                        fill: isHighlighted ? region.color : "#CBD5E1",
                        cursor: "pointer",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#111827",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* INFO PANEL */}
      <div className="mt-6">
        {selectedRegion ? (
          <div className="p-5 rounded-2xl bg-gray-50 border">
            <h2 className="text-xl font-bold text-gray-800">
              {selectedRegion.name} Region
            </h2>

            <p className="text-gray-600 mt-2">
              {selectedRegion.description}
            </p>

            <h3 className="mt-4 font-semibold text-gray-700">
              Focus Areas
            </h3>

            <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
              {selectedRegion.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="p-5 rounded-2xl bg-gray-50 border text-gray-500">
            Click a region to view details
          </div>
        )}
      </div>

      {/* LEGEND */}
      <div className="flex gap-6 justify-center mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#98027F] rounded-full" />
          Shinyanga
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#055D5D] rounded-full" />
          Simiyu
        </div>
      </div>
    </div>
  );
}