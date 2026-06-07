"use client"

import { useEffect, useRef, useState } from "react"
import {
  HeartHandshake,
  Users,
  GraduationCap,
  HandCoins,
  Trees,
} from "lucide-react"

const impactData = [
  {
    id: 1,
    icon: <Users className="w-10 h-10" />,
    number: 128270,
    suffix: "+",
    label: "Total Beneficiaries",
    description: " Vulnerable Communities impacted through our programs",
  },
  {
    id: 2,
    icon: <Trees className="w-10 h-10" />,
    number: 56396,
    suffix: "+",
    label: "Trees Planted",
    description: "Enhanced environmental restoration and resilience",
  },
  {
    id: 3,
    icon: <HeartHandshake className="w-10 h-10" />,
    number: 50172,
    suffix: "%",
    label: "Condoms Distributed",
    description: "Improved reproductive health awareness access",
  },
  {
    id: 4,
    icon: <GraduationCap className="w-10 h-10" />,
    number: 158,
    suffix: "+",
    label: "Young leaders trained",
    description: "Strengthened youth leadership and empowerment",
  },
]

function Counter({
  end,
  duration = 2000,
}: {
  end: number
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
        }
      },
      { threshold: 0.4 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [started, end, duration])

  return <div ref={counterRef}>{count.toLocaleString()}</div>
}

export default function ImpactCounter() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#055D5D] via-[#066f6f] to-[#98027F]">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-[#FFFFFF] font-semibold mb-5">
            Impact At A Glance
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Transforming Communities <br />
            Through Action
          </h2>

          <div className="w-28 h-1 bg-white mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-3xl
                p-8
                hover:-translate-y-3
                transition-all
                duration-500
                shadow-2xl
                overflow-hidden
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-pink-300/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              </div>

              {/* Icon */}
              <div className="
                relative z-10
                w-20 h-20
                rounded-2xl
                bg-white/15
                flex items-center justify-center
                text-white
                mb-6
                group-hover:scale-110
                transition
              ">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="relative z-10 text-4xl font-black text-white mb-3 flex items-end">
                <Counter end={item.number} />
                <span>{item.suffix}</span>
              </h3>

              {/* Label */}
              <h4 className="relative z-10 text-xl font-bold text-white mb-2">
                {item.label}
              </h4>

              {/* Description */}
              <p className="relative z-10 text-gray-200 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-white group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}