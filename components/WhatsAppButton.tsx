"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/255767783823"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* MAIN BUTTON */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-all duration-300">

        <MessageCircle size={26} className="text-white" />

        {/* PULSE EFFECT */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

      </div>

      {/* TOOLTIP */}
      <div className="absolute right-16 bottom-3 bg-black/80 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </div>
    </a>
  )
}