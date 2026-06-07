"use client";

import Image from "next/image"
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "About Us",
     submenu: [
      {name: "Who we are", href: "/who-we-are"},
      {name: "Our Team", href: "/team"},
     ],
   },

  {
    name: "What we do",
    submenu: [
      { name: "Health & Nutrition", href: "/health-and-nutrition" },
      { name: "Climate Action & Environment", href: "/climate-action" },
      { name: "Gender Equality & Child Protection", href: "/gender-equality" },
      { name: "Good Governance & Democracy", href: "/good-governance" },
    ],
  },

  { name: "Our Projects", href: "/projects" },
  { name: "Where we work", href: "/where-we-work" },

  {
    name: "News & Publications",
    submenu: [
      { name: "Reports", href: "/reports" },
      { name: "Career & Tenders", href: "/careers-tenders" },
      { name: "Whistleblowing Policy", href: "/whistleblowing" },
      { name: "Latest News", href: "/latest-news" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(name);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 180); // smooth delay
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="backdrop-blur-xl bg-[#055D5D]/75 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-wide" />
          
          <Link
          href="/">
           <Image
          src="/logo.png"
          alt=""
          width={140}
          height={50}
          />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium">

            {navItems.map((item, idx) => {
              const isOpen = openMenu === item.name;

              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.name)}
                  onMouseLeave={handleLeave}
                >
                  {/* MAIN LINK */}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#03423F] transition"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 hover:text-[#03423F] transition">
                      {item.name}
                      <ChevronDown size={16} />
                    </button>
                  )}

                  {/* DROPDOWN */}
                  {item.submenu && isOpen && (
                    <div className="absolute left-0 mt-3 w-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">

                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          className="block px-4 py-3 text-white hover:bg-[#98027F] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}

                    </div>
                  )}
                </div>
              );
            })}

            {/* DONATE BUTTON */}
            <Link
              href="/donate"
              className="
                ml-4 px-6 py-2 rounded
                bg-[#FFFFFF]
                text-[#03514F] font-semibold
                shadow-lg hover:scale-105 transition
              "
            >
              Donate
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden px-5 pb-5 text-white space-y-3">

            {navItems.map((item, idx) => {
              const isOpen = openMenu === item.name;

              return (
                <div key={idx} className="border-b border-white/10 pb-2">

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenMenu(isOpen ? null : item.name)
                        }
                        className="flex items-center justify-between w-full py-2"
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>

                      {isOpen && (
                        <div className="pl-3 space-y-2 mt-2">

                          {item.submenu?.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.href}
                              className="block text-sm text-white/90 hover:text-[#98027F]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}

                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}

            {/* MOBILE DONATE */}
            <Link
              href="/donate"
              className="block text-center text-[#03514F] mt-4 px-5 py-3 rounded-full bg-[#FFFFFF] font-bold"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}