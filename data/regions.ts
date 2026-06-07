export type RegionName = "Shinyanga" | "Simiyu";

export type RegionData = {
  name: RegionName;
  color: string;
  description: string;
  focus: string[];
  center?: [number, number]; // optional for future map zooming
};

export const regions: Record<RegionName, RegionData> = {
  Shinyanga: {
    name: "Shinyanga",
    color: "#98027F",
    description:
      "YAWE implements community development and resilience programs in Shinyanga Region.",
    focus: [
      "Climate resilience",
      "Youth empowerment",
      "Education",
      "Community development",
    ],
    center: [33.4231, -3.6639],
  },

  Simiyu: {
    name: "Simiyu",
    color: "#055D5D",
    description:
      "YAWE supports sustainable agriculture, climate adaptation, and youth initiatives in Simiyu Region.",
    focus: [
      "Agriculture",
      "Climate adaptation",
      "Youth entrepreneurship",
      "Capacity building",
    ],
    center: [34.2255, -2.8170],
  },
};