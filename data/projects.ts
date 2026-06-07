export type Project = {
  slug: string
  title: string
  location: string
  year: string
  description: string
  category: "Climate" | "Health" | "Gender" | "Governance"
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "reacts-in",
    title: "REACTS-IN PROJECT",
    location: "Simiyu",
    year: "2023–2030",
    category: "Health",
    featured: true,
    description:
      "Strengthening climate resilience and sustainable community transformation in Simiyu.",
  },
  {
    slug: "youth-voice-climate-action",
    title: "YOUTH VOICE FOR CLIMATE ACTION PROJECT",
    location: "Shinyanga",
    year: "2025–2026",
    category: "Climate",
    featured: true,
    description:
      "Empowering young leaders to advocate for climate action and environmental justice.",
  },
  {
    slug: "inclusive-climate-entrepreneurship",
    title: "INCLUSIVE CLIMATE ENTREPRENEURSHIP PROJECT",
    location: "Shinyanga",
    year: "2024–2026",
    category: "Climate",
    description:
      "Supporting inclusive green entrepreneurship and sustainable economic innovation.",
  },
  {
    slug: "youth-engagement-climate-change",
    title: "YOUTH ENGAGEMENT IN CLIMATE CHANGE PROJECT",
    location: "Shinyanga",
    year: "2023–2024",
    category: "Climate",
    description:
      "Mobilizing youth participation in climate awareness and environmental protection.",
  },
  {
    slug: "hiv-prevention-at-risk-population",
    title: "HIV PREVENTION WITH AT RISK POPULATION PROJECT",
    location: "Shinyanga & Simiyu",
    year: "2018–2021",
    category: "Health",
    description:
      "Promoting HIV prevention, awareness, and health support for vulnerable communities.",
  },
  {
    slug: "kijana-wajibika",
    title: "KIJANA WAJIBIKA PROJECT",
    location: "Shinyanga",
    year: "2021–2025",
    category: "Governance",
    description:
      "Empowering responsible youth leadership and active community participation.",
  },
  {
    slug: "keeping-school-children-safe",
    title: "KEEPING SCHOOL CHILDREN SAFE PROJECT",
    location: "Shinyanga",
    year: "2022–2024",
    category: "Gender",
    description:
      "Creating safer learning environments and protecting children's wellbeing.",
  },
  {
    slug: "guaranteeing-the-future",
    title: "GUARANTEEING THE FUTURE PROJECT",
    location: "Simiyu",
    year: "2021–2022",
    category: "Health",
    description:
      "Building sustainable opportunities and resilience for future generations.",
  },
  {
    slug: "adolescents-and-young-people",
    title: "ADOLESCENTS AND YOUNG PEOPLE AT THE HEART: PREVENTING AND TREATING HIV IN A STIGMA-FREE SOCIETY PROJECT",
    location: "Shinyanga",
    year: "2024–2026",
    category: "Health",
    description:
      "Empowering adolescents living with HIV through peer support, advocacy, and stigma-free community engagement in Shinyanga, Tanzania.",
  },
 
]