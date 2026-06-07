import {
  HeartPulse,
  BookOpen,
  Users,
  HandHeart,
  Leaf,
  ShieldCheck,
  TreesIcon,
  Scale,
  Speaker,
  SpeakerIcon,
} from "lucide-react"
import { Climate_Crisis } from "next/font/google"

const services = [

  {
    title: "Health and Nutrition",
    description:
    "At YAWE, we work to improve access to quality health and nutrition services for vulnerable communities across Tanzania. Our programs focus on sexual and reproductive health, HIV/AIDS prevention, mental health, hygiene, and nutrition education to promote healthier lives and stronger communities. We empower young people, women, and families with knowledge and practical solutions that support well-being and sustainable development.",
    icon: HeartPulse,
  },

  {
    title: "Climate Action and Environment",
     description:
    "We are committed to building climate-resilient communities by promoting environmental conservation and inclusive climate solutions across Tanzania. Our initiatives focus on climate change awareness, tree planting, waste management, clean energy, water conservation, sustainable agriculture, and promoting access to resources, opportunities, and skills for climate change adaptation. We work closely with young people and youth networks by empowering them with leadership, advocacy, and community engagement skills so they can actively champion and advocate for inclusive climate policies and sustainable development initiatives. Through youth-led action and civic participation, we support young leaders to hold governments and decision-makers accountable for their promises and commitments on climate action, environmental protection, and social inclusion.",
    icon: TreesIcon,
  },

  {
    title: "Gender Equality and Child Protection",
      description:
    "We promote a society where women, girls, boys, and marginalized groups are safe, respected, and empowered to reach their full potential. Through community engagement, advocacy, and capacity building, we address gender-based violence, child abuse, discrimination, early marriage, and unequal access to opportunities. Our work strengthens child protection systems and advances gender equality in families, schools, workplaces, and communities across Tanzania.",
    icon: Scale,
  },

  {
    title: "Good Governance and Democracy",
       description:
    "We strengthen civic participation, transparency, accountability, and inclusive leadership at the community and national levels. Through civic education, youth engagement, policy advocacy, and community dialogues, we empower citizens to actively participate in democratic processes and decision-making. Our work promotes human rights, social justice, and good governance to foster peaceful, inclusive, and resilient communities in Tanzania.",
    icon: SpeakerIcon,
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-[#D8F0EE]/20 backdrop-blur-lg border border-[#FFFFFF]/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-center">
            What We Do
          </h2>

          <p className="mt-4
                        text-lg
                        text-center
                        leading-8
                        ">
            We are committed to transforming communities through
            sustainable programs and impactful initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="
                  group
                  bg-[#F7F5F2]
                  border
                  border-gray-200
                  rounded-3xl
                  p-8
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#055D5D]
                    hover:bg-gradient-to-r
                    from-[#C102B3]
                    to-[#055D5D]
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon className="text-white w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#055D5D] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}