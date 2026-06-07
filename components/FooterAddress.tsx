"use client"
import Link from "next/link"

import {
  Mail,
  Phone,
} from "lucide-react"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative text-white bg-gradient-to-br from-[#055D5D] via-[#98027F] to-[#055D5D]">

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ABOUT + ADDRESS */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold mb-4">YAWE Tanzania</h2>

            <p className="text-gray-200 text-sm leading-relaxed">
              YAWE works to empower communities through health, climate action,
              gender equality, and good governance programs across Tanzania.
            </p>

            <div className="mt-6 text-sm text-gray-300">
              <p className="font-semibold text-white mb-2">P.O Box 578</p>
              <p>Shinyanga, Tanzania</p>
            </div>

          </div>

          {/* IMPORTANT LINKS */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold mb-4">Important Links</h2>

            <div className="flex flex-col gap-3 text-sm">

              <Link href="/" className="hover:text-[#98027F] transition">
                Home
              </Link>

              <Link href="/who-we-are" className="hover:text-[#98027F] transition">
                Who We Are
              </Link>

              <Link href="/health-and-nutrition" className="hover:text-[#98027F] transition">
                Health & Nutrition
              </Link>

              <Link href="/climate-action" className="hover:text-[#98027F] transition">
                Climate Action & Environment
              </Link>

              <Link href="/gender-equality" className="hover:text-[#98027F] transition">
                Gender Equality & Child Protection
              </Link>

              <Link href="/good-governance" className="hover:text-[#98027F] transition">
                Good Governance & Democracy
              </Link>

              <Link href="/contact" className="hover:text-[#98027F] transition">
                Contact Us
              </Link>

            </div>

          </div>

          {/* CONTACT + SOCIALS */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

            <div className="flex flex-col gap-4 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+255 767 783 823</span>
                <span>+255 753 674 848</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@yawe.or.tz</span>
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://facebook.com/Yawetanzania"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-[#98027F] transition"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://instagram.com/Yawetanzania"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-[#98027F] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-[#98027F] transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:info@yawe.or.tz"
                className="p-3 rounded-full bg-white/10 hover:bg-[#98027F] transition"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 text-center text-sm text-gray-300 border-t border-white/20 pt-6">
          © {new Date().getFullYear()} YAWE Tanzania. All rights reserved.
        </div>

      </div>
    </footer>
  )
}