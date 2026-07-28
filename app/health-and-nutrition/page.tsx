"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

type GalleryItem = {
  image: string
  title: string
  description: string
  fullDescription?: string
  location?: string
  date?: string
  category?: string
  participants?: string
  partner?: string
  impact?: string
 
}

const galleryImages: GalleryItem[] = [
  {
  image: "/gallery/health1.jpg",
  title: "Sexual & Reproductive Health",
  description:
    "Sexual and Reproductive Health (SRH) focuses on ensuring that women, men, adolescents, and young people have access to accurate.",

  fullDescription:
    " Sexual and Reproductive Health (SRH) focuses on ensuring that women, men, adolescents, and young people have access to accurate information, quality healthcare services, and the ability to make informed decisions about their reproductive health. In Tanzania, SRH remains a priority due to challenges such as adolescent pregnancy, limited access to family planning services in some communities, sexually transmitted infections (STIs), including HIV, and cultural barriers that affect health-seeking behavior. Our interventions are community-centered, inclusive, and aligned with Tanzania's national health priorities. We work closely with government health facilities, community health workers, schools, local leaders, and development partners to improve access to essential SRH information and services. We promote voluntary, informed, and rights-based family planning services that enable individuals and couples to make informed decisions about the timing and spacing of pregnancies. Our Sexual and Reproductive Health programs prioritize equity, gender equality, youth participation, and community ownership. We work in partnership with local government authorities, healthcare providers, schools, community-based organizations, and traditional and religious leaders to ensure that services are accessible, acceptable, and responsive to the needs of women, men, adolescents, and vulnerable populations across Tanzania. Through education, capacity building, advocacy, and strengthened health systems, we contribute to healthier families and more resilient communities.",
  location: "Shinyanga Region, Tanzania",
  date: "15 May 2026",
  category: "Community Health Education",
  participants: "85 participants",
  partner: "Local health authorities and community health workers",
  impact:
    "Participants improved their understanding of Sexual and Reproductive Health (SRH).",
},
  {
    image: "/gallery/health2.jpg",
    title: "Nutrition",
    description:
      "Good nutrition is fundamental to health, growth, learning, and economic productivity. In Tanzania, malnutrition remains a significant public health..",
    fullDescription:
      "Good nutrition is fundamental to health, growth, learning, and economic productivity. In Tanzania, malnutrition remains a significant public health challenge, particularly among children under five, pregnant and breastfeeding women, and vulnerable households. Poor dietary diversity, food insecurity, micronutrient deficiencies, and limited nutrition knowledge contribute to stunting, wasting, anaemia, and other nutrition-related conditions. Our Nutrition programmes aim to improve the nutritional status of children, women, adolescents, and communities by promoting healthy diets, strengthening community nutrition services, and supporting early identification and management of malnutrition. We work alongside government health facilities, community health workers, schools, local authorities, and development partners to deliver sustainable nutrition interventions. We promote optimal nutrition during the first 1,000 days of life, from pregnancy until a child reaches two years of age, as well as continued healthy growth throughout childhood. Our Nutrition programmes are community-driven, evidence-based, and aligned with Tanzania's national nutrition priorities. We integrate nutrition into maternal and child health, agriculture, education, and community development initiatives to address both the immediate and underlying causes of malnutrition. Through partnerships with government institutions, healthcare providers, community leaders, and development partners, we work to ensure that every child, woman, and family has the opportunity to achieve optimal nutrition and lead healthier, more productive lives.",
  
    location: "Simiyu Region, Tanzania",
    date: "20 March 2025",
    category: "Community Health Education",
    participants: "120 participants",
    partner: "Local health authorities and community health workers",
    impact:
      "Participants improved their understanding of proper nutrition and its impact on health.",
  },
  {
    image: "/gallery/health3.jpg",
     title: "Adolescent & Youth Health",
    description:
      "Adolescents and young people represent a significant proportion of Tanzania's population and are central to the country's future ...",
    fullDescription:
      "Adolescents and young people represent a significant proportion of Tanzania's population and are central to the country's future development. However, many face challenges, including poor nutrition, limited access to accurate health information, substance abuse, unemployment, gender-based violence, and mental health concerns. Our Adolescent and Youth Health programmes empower young people with the knowledge, skills, and opportunities they need to make informed decisions, adopt healthy lifestyles, and reach their full potential. We provide adolescents and young people with age-appropriate, accurate, and culturally sensitive information that enables them to make informed decisions about their sexual and reproductive health. We work in partnership with schools, communities, health facilities, youth groups, local government authorities, and parents to create safe, supportive environments where adolescents can thrive. Our Adolescent and Youth Health programmes are inclusive, gender-responsive, and youth-centred. We work closely with government institutions, schools, healthcare providers, community leaders, and youth networks to ensure that adolescents and young people have access to quality information, essential health services, and opportunities for personal development. Through education, mentorship, advocacy, and community partnerships, we help young people in Tanzania lead healthy, productive, and empowered lives.",
    impact:
      "Participants improved their understanding of adolescent and youth health issues and gained knowledge to make informed decisions.",
  },
  {
    image: "/gallery/health4.jpg",
   title: "Communicable Disease Prevention",
    description:
      "Communicable diseases continue to pose significant public health challenges in Tanzania, particularly among children, pregnant women...",
    fullDescription:
      "Communicable diseases continue to pose significant public health challenges in Tanzania, particularly among children, pregnant women, and vulnerable communities. Diseases such as HIV/AIDS, tuberculosis (TB), malaria, and neglected tropical diseases (NTDs) affect health, education, and livelihoods, while outbreaks of vaccine-preventable diseases remain a concern where immunization coverage is low. Our Communicable Disease Prevention programmes focus on reducing disease transmission, promoting early diagnosis and treatment, strengthening community awareness, and improving access to essential prevention and healthcare services. We work closely with government health facilities, community health workers, schools, local government authorities, and development partners to build healthier and more resilient communities. Our Communicable Disease Prevention programmes emphasize prevention, early detection, timely referral, and community participation. We collaborate with the Ministry of Health, President's Office–Regional Administration and Local Government (PO-RALG), local government authorities, healthcare providers, community health workers, schools, and development partners to strengthen disease surveillance, health education, and access to quality health services. By integrating disease prevention with nutrition, WASH, maternal and child health, and community engagement, we contribute to healthier communities and support Tanzania's efforts to reduce the burden of communicable diseases.",
    impact:
      "Participants improved their understanding of communicable disease prevention and gained knowledge to protect themselves and their communities.",
  },
  {
    image: "/gallery/health5.jpg",
   title: "Water, Sanitation & Hygiene (WASH)",
    description:
      "Access to safe water, adequate sanitation, and good hygiene is essential for improving public health, preventing disease, and promoting..",
    fullDescription:
      "Access to safe water, adequate sanitation, and good hygiene is essential for improving public health, preventing disease, and promoting dignity and well-being. In Tanzania, many rural and underserved communities continue to face challenges in accessing clean drinking water and improved sanitation facilities, contributing to waterborne diseases, poor health outcomes, and reduced school attendance, particularly among girls. Our Water, Sanitation and Hygiene (WASH) programmes improve access to sustainable water and sanitation services while promoting healthy hygiene practices at household, school, and community levels. We work in collaboration with government institutions, local authorities, schools, health facilities, community water committees, and development partners to create healthier and more resilient communities. Our WASH programmes are community-driven, inclusive, and sustainable. We integrate water, sanitation, and hygiene interventions with health, nutrition, education, and community development initiatives to maximize impact. Through working closely with the Ministry of Water, the Ministry of Health, local government authorities, schools, healthcare providers, and community-based organizations, we strengthen local capacity to manage WASH services and promote lasting behaviour change. Our goal is to ensure that every household, school, and healthcare facility has access to safe water, improved sanitation, and the knowledge needed to maintain healthy hygiene practices.",
    impact:
      "Participants improved their understanding of WASH practices and gained knowledge to promote better hygiene and sanitation in their communities.",
  },
  {
    image: "/gallery/health6.jpg",
    title: "Mental Health & Psychosocial Support",
    description:
      "Mental health is an essential component of overall health and well-being. In Tanzania, many individuals and families are affected by stress, anxiety, depression, trauma, substance abuse, gender-based violence",
    fullDescription:
      "Mental health is an essential component of overall health and well-being. In Tanzania, many individuals and families are affected by stress, anxiety, depression, trauma, substance abuse, gender-based violence, chronic illness, poverty, and humanitarian emergencies. However, limited awareness, stigma, and inadequate access to mental health services often prevent people from seeking the support they need. Our Mental Health and Psychosocial Support (MHPSS) programmes promote mental well-being, strengthen community support systems, and improve access to quality mental health services. We work with government health facilities, schools, community health workers, local leaders, and development partners to reduce stigma, increase awareness, and ensure that individuals and families receive appropriate care and support.",
    impact:
      "Participants improved their understanding of mental health issues and gained knowledge to support their own and others' psychological well-being.",
  },
  {
    image: "/gallery/health7.jpg",
    title: "Disease Prevention Education",
    description:
      "Community receiving information on preventing common infectious diseases.",
  },
  {
    image: "/gallery/health8.jpg",
    title: "Health Volunteer Training",
    description:
      "Volunteers trained to support community health and education programs.",
  },
  {
    image: "/gallery/health9.jpg",
    title: "Women Health Empowerment",
    description:
      "Women gaining knowledge to improve personal and family health.",
  },
  {
    image: "/gallery/health10.jpg",
    title: "Wellbeing Awareness Campaign",
    description:
      "Campaign promoting healthy lifestyles across vulnerable communities in Tanzania.",
  },
  {
    image: "/gallery/health11.jpg",
    title: "Youth Empowerment Workshop",
    description:
      "Young participants building knowledge for healthier and productive lives.",
  },
  {
    image: "/gallery/health12.jpg",
    title: "Mental Health Dialogue",
    description:
      "Community members openly discussing emotional wellbeing and mental health.",
  },
  {
    image: "/gallery/health13.jpg",
    title: "Health Screening Camp",
    description:
      "Students attending free health checks and early disease detection.",
  },
  {
    image: "/gallery/health14.jpg",
    title: "Youth Empowerment Training",
    description:
      "Young people gaining knowledge and skills for healthier life decisions.",
  },
  {
    image: "/gallery/health15.jpg",
    title: "School Health Program",
    description:
      "Students learning hygiene, nutrition, and health promotion in school.",
  },
]

export default function HealthAndNutritionPage() { 
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null) 
  function closeModal() { setSelectedItem(null) } useEffect(() => { function handleEscape(event: KeyboardEvent) { if (event.key === "Escape") { closeModal() } } if (selectedItem) { document.addEventListener("keydown", handleEscape) 
    document.body.style.overflow = "hidden" } return () => { document.removeEventListener("keydown", handleEscape) 
      document.body.style.overflow = "" } }, [selectedItem]) 
      return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#98027F] via-[#055D5D] to-[#98027F]">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-6xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-14 shadow-2xl">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Health & Nutrition
            </h1>

            {/* WHITE LINE (hover expands) */}
            <div className="w-20 h-[2px] bg-white rounded-full transition-all duration-500 group-hover:w-full"></div>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              At YAWE, we work to improve access to quality health and nutrition
              services for vulnerable communities across Tanzania. Our programs
              focus on sexual and reproductive health, HIV/AIDS prevention,
              mental health, hygiene, and nutrition education to promote
              healthier lives and stronger communities.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              We empower young people, women, and families with knowledge and
              practical solutions that support well-being and sustainable development.
            </p>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{galleryImages.map((item, index) => (
  <div
    key={index}
    className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#98027F]/40"
  >
    {/* IMAGE */}
    <button
      type="button"
      onClick={() => setSelectedItem(item)}
      className="relative block h-72 w-full overflow-hidden"
      aria-label={`Open details for ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
    </button>

    {/* CONTENT */}
    <div className="relative z-10 p-6">
      <button
        type="button"
        onClick={() => setSelectedItem(item)}
        className="text-left"
      >
        <h2 className="text-xl font-bold text-white transition hover:text-pink-200">
          {item.title}
        </h2>
      </button>

      <div className="mt-2 h-[2px] w-16 rounded-full bg-white transition-all duration-500 group-hover:w-full" />

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        {item.description}
      </p>

      <button
        type="button"
        onClick={() => setSelectedItem(item)}
        className="mt-5 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#055D5D]"
      >
        View details
      </button>
    </div>

    {/* DECORATIVE OVERLAY */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#98027F]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
  </div>
))}



          </div>
        </div>
      </section>

    {/* MODAL POPUP */}
{selectedItem && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-labelledby="gallery-modal-title"
    onClick={closeModal}
  >
    <div
      className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
      onClick={(event) => event.stopPropagation()}
    >
      {/* CLOSE BUTTON */}
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close popup"
        className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition hover:rotate-90 hover:bg-[#98027F]"
      >
        <X size={24} />
      </button>

      {/* FIXED IMAGE SECTION */}
      <div className="relative h-64 w-full shrink-0 md:h-full md:w-[45%]">
        <Image
          src={selectedItem.image}
          alt={selectedItem.title}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="inline-flex rounded-full bg-[#98027F] px-4 py-2 text-sm font-semibold">
            {selectedItem.category ?? "Health & Nutrition"}
          </span>

          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
            {selectedItem.title}
          </h2>
        </div>
      </div>

      {/* SCROLLABLE CONTENT SECTION */}
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="border-b border-gray-200 bg-white px-6 py-5 pr-20 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#98027F]">
            Activity Details
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          <p className="text-base leading-8 text-gray-700 md:text-lg">
            {selectedItem.fullDescription ?? selectedItem.description}
          </p>

          {(
            selectedItem.location ||
            selectedItem.date ||
            selectedItem.participants ||
            selectedItem.partner
          ) && (
            <div className="mt-8 grid gap-5 rounded-2xl bg-gray-50 p-6 sm:grid-cols-2">
              {selectedItem.location && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Location
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.location}
                  </p>
                </div>
              )}

              {selectedItem.date && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Date
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.date}
                  </p>
                </div>
              )}

              {selectedItem.participants && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Participants
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.participants}
                  </p>
                </div>
              )}

              {selectedItem.partner && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#98027F]">
                    Partners
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {selectedItem.partner}
                  </p>
                </div>
              )}
            </div>
          )}

          {selectedItem.impact && (
            <div className="mt-8 rounded-2xl border-l-4 border-[#055D5D] bg-[#055D5D]/10 p-6">
              <h3 className="text-xl font-bold text-[#055D5D]">
                Activity Impact
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                {selectedItem.impact}
              </p>
            </div>
          )}

          {/* Add any additional long content here */}
          <div className="mt-8 space-y-5 text-gray-700">
            
          </div>
        </div>

        {/* FIXED FOOTER */}
        <div className="flex items-center justify-end border-t border-gray-200 bg-white px-6 py-4 md:px-8">
          <button
            type="button"
            onClick={closeModal}
            className="rounded-xl bg-[#98027F] px-7 py-3 font-semibold text-white transition hover:bg-[#7c0268]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </main>
  )
}