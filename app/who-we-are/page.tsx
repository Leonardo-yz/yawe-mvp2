"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/sections/Hero"
import Link from "next/link"
import FooterBottom from "@/components/FooterBottom"
import Image from "next/image"
import { motion } from "framer-motion"

export default function WhoWeArePage() {
  return (
    <>

    <Navbar />
    <Hero />

    <main className="bg-white text-gray-800">


      {/* INTRO SECTION */}
      <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-1 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#055D5D] mb-6">
            Youth and Women Emancipation (YAWE)
          </h2>

          <p className="leading-relaxed text-gray-700 mb-4">
           YAWE is a grassroots, youth-led development organization committed to promoting sustainable and inclusive development in Tanzania through capacity building, advocacy for policy change, and the promotion of inclusion. It works to empower youth, women, and children by equipping them with the skills, opportunities, and resources they need to actively participate in social, political, environmental, and economic development processes.
YAWE exists because communities, particularly young people, women, and children, continue to face barriers that limit their full participation in development. These challenges include limited access to skills development, unemployment and underemployment, social exclusion, and insufficient representation in decision-making spaces as well as climate change challenges. In many cases, policies and systems do not fully reflect or respond to the needs and voices of these groups.
In response to these gaps, YAWE was established to bridge the divide between communities and opportunities for development. The organization exists to strengthen the capacity of individuals and communities so they can become active agents of change rather than passive recipients of support. Through empowerment, awareness creation, and advocacy, YAWE seeks to promote equality, inclusion, and sustainable development outcomes.
Ultimately, YAWE exists to build a society where youth, women, and children are not left behind, but are fully empowered to shape their own future and contribute meaningfully to the development of Tanzania.
         </p>

          <p className="leading-relaxed text-gray-700">
            Through collaboration, innovation, and a shared commitment to positive change, we empower youth to create a better tomorrow. Join us on this journey of growth, impact, and limitless possibilities.
          </p>
        </div>

</section>

<section className="py-0 px-6 max-w-6xl mx-auto grid md:grid-cols-1 gap-12 items-center">
         {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#055D5D] mb-0">
            Out Theory Of Change
          </h2>
        </div>
        
        {/* IMAGE PLACEHOLDER */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[620px] bg-gray-100 flex items-center justify-center">
          <Image src="/images/theory.png" fill alt="YAWE team" className="object-cover" /> 
          
        </div> 

         {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#055D5D] mb-0">
            Out Core Values
          </h2>
        </div>
        
        {/* IMAGE PLACEHOLDER */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[760px] bg-gray-100 flex items-center justify-center">
          <Image src="/images/core_values.png" fill alt="YAWE team" className="object-cover" /> 
          
        </div> 
</section>
      

      {/* CHALLENGES SECTION */}
      <section className="py-20 bg-[#F7F5F2] px-6">

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#98027F]">
            Why YAWE Exists
          </h2>
          <p className="mt-4 text-gray-600">
            Understanding the challenges we are addressing in Tanzania
          </p>
        </div>

        <div className="bg-[#F7F5F2] grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {[
            "VISION",
            "A Tanzania where empowered women, youth, and children lead independent, dignified lives and drive sustainable development in their communities.",
            "MISSION",
            "To equip youth, women, and children with the skills, resources, and opportunities needed to contribute to sustainable and inclusive development in Tanzania.",
            
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#055D5D]"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* PURPOSE / STORY SECTION */}
      <section className="bg-[#D8F0EE] py-6 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
           <Image src="/about1.jpg" fill alt="Community work" className="object-cover" /> 
          <span className="text-gray-400">Insert Image Here</span>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#055D5D] mb-6">
            Our Purpose
          </h2>

          <p className="leading-relaxed text-gray-700 mb-4">
            YAWE was established to respond to the growing socio-economic, political and environmental concerns in Tanzania that require multi-sectoral involvement and approaches.
          </p>

          <p className="leading-relaxed text-gray-700 mb-4">
            The organization focuses on improving living conditions of underprivileged youth, children, and women through innovative development programs and community-based livelihood initiatives.
          </p>

          <p className="leading-relaxed text-gray-700">
            We emphasize healthcare, nutrition, democracy, good governance, gender equality, child protection, and climate change mitigation using modern technology.
          </p>
        </div>
      </section>

     

      {/* CALL TO ACTION */}
      <section className="py-24 text-center px-6">

        <h2 className="text-3xl md:text-4xl font-black text-[#055D5D]">
          Join Us in Creating Impact
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Be part of a movement transforming lives across Tanzania through innovation, collaboration, and action.
        </p>

          {/* IMAGE */}
        <div className="relative h-[800px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
           <Image src="/about2.jpg" fill alt="Community work" className="object-cover" /> 
          <span className="text-gray-400">Insert Image Here</span>
        </div>

        <button className="mt-8 px-8 py-4 bg-[#98027F] text-white rounded-full hover:scale-105 transition">
           
          Get Involved
          
        </button>
     
      
      </section>

    </main>

    </>
  )
}