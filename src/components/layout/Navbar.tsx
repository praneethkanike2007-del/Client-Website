"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Offers", href: "#offers" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-xl border-b border-white/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <a
  href="#home"
  className="text-4xl font-extrabold tracking-[0.35em] text-[#C9A227] transition-all duration-300 hover:scale-105"
>
  U-SHINE
</a>

        {/* Desktop Menu */}

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold tracking-wide text-gray-700 transition-all duration-300 hover:text-[#C9A227] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Buttons */}

        <div className="hidden items-center gap-4 md:flex">
          <a
  href="tel:+919014914278"
  className="rounded-full border border-yellow-700 px-5 py-2 text-sm font-semibold text-yellow-700 transition-all duration-300 hover:scale-105 hover:bg-yellow-700 hover:text-white"
>
  📞 Call Now
</a>

                    <Link
  href="/booking"
className=" premium-button rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#B8921C] hover:shadow-2xl active:scale-95">
  Book Appointment
</Link>
        </div>

        {/* Mobile */}

        <button className="text-3xl md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}