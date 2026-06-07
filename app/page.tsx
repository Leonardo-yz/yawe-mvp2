import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/sections/Hero"
import WhoWeAre from "@/sections/WhoWeAre"
import WhatWeDo from "@/sections/WhatWeDo"
import Projects from "@/sections/Projects"
import WhereWeWork from "@/sections/WhereWeWork"
import News from "@/sections/News"
import ImageSlider from "@/components/ImageSlider"
import ImpactCounter from "@/components/ImpactCounter"
import ContactForm from "@/components/ContactForm"
import FooterAddress from "@/components/FooterAddress"
import YouTubeSection from "@/components/YouTubeSection";
export default function Home() {

  return (

    <main>

      <Navbar />

      <ImageSlider/>


      <ImpactCounter />


      <YouTubeSection />

      <ContactForm />

      <Footer />



    </main>
  )
}

