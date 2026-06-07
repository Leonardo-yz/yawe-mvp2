"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

const slides = [
  {
    image: "/slides/slide1.jpg",
    title: "Empowering Communities",
    description: "Creating sustainable impact across Tanzania",
  },
  {
    image: "/slides/slide2.jpg",
    title: "Education & Innovation",
    description: "Building opportunities for future generations",
  },
  {
    image: "/slides/slide3.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide4.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide5.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide6.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide7.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide8.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide9.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide10.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide19.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide12.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide13.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide14.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide15.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide16.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide18.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
  {
    image: "/slides/slide22.jpg",
    title: "Together We Rise",
    description: "Partnerships that transform lives",
  },
]

export default function ImageSlider() {
  return (
    <section className="relative w-full h-screen">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative w-full h-screen">

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-6 pb-16 z-10">



               {/* Glassmorphism Box */}

                <div className="bg-[#98027F]/30 backdrop-brur-md border border-white/20 rounded-3xl px-8 py-6 text-center text-white max-w-3xl shadow-2xl">

                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>

                <p className="text-base md:text-xl">
                  {slide.description}
                </p>

                </div>

                <button className="mt-8 bg-[#055D5D] hover:bg-[#98027F] transition-all duration-300 px-8 py-4 rounded-full font-semibold">
                  Learn More
                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}