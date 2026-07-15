"use client"
import Image from "next/image"
import Link from "next/link"


const partners = [
  "/Donors-Logo/Afriyan.png",
  "/Donors-Logo/climate.png",
  "/Donors-Logo/Coat_of_arms-01.jpg",
  "/Donors-Logo/In-Partnership_GAC.webp",
  "/Donors-Logo/irish.png",
  "/Donors-Logo/cuamm.png",
  "/Donors-Logo/Nipe-fagio.png",
  "/Donors-Logo/Oxfam.png",
  "/Donors-Logo/Pact.png",
  "/Donors-Logo/Restless.png",
  "/Donors-Logo/TECDEN.png",
  "/Donors-Logo/women-fund.png",
  "/Donors-Logo/World_Vision.png",
  "/Donors-Logo/HPSS_Logo.webp",
  "/Donors-Logo/Global-01.png",
  "/Donors-Logo/EU-01-01.jpg",
  "/Donors-Logo/au-01.png",
  "/Donors-Logo/OneMillion-01.png",
  "/Donors-Logo/Yal.png",
  "/Donors-Logo/flavian.png",
  "/Donors-Logo/aics1.png",
  

  
]
export default function Footer() {

  return (

    <footer className="bg-[#FFFFFF] text-[055D5D] py-10 text-center">

  <div className="h-[300px] rounded-xl overflow-hidden max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">



<div className="w-full h-[300px] rounded-xl overflow-hidden max-w-6xl mx-auto gap-8">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.5404737485983!2d33.43664182833872!3d-3.6386275623658126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19cbcb0072832c39%3A0xf4d8f9f56a3c9911!2sYAWE!5e0!3m2!1sen!2stz!4v1779293578086!5m2!1sen!2stz"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

</div>



</div>



 <h3 className="text-center text-2xl font-bold mb-6 py-3">
          Our Donors & Partners
        </h3>
 
 {/* Partners Section */}
      <div className="mb-8">
        

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-12 w-max">

            {/* First Set */}
            {partners.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px]"
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}

  {/* Duplicate Set for Infinite Scroll */}
            {partners.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center min-w-[150px]"
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

    </footer>
  )
}