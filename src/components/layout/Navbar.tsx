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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold tracking-widest text-yellow-700"
        >
          U-SHINE
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-gray-700 transition hover:text-yellow-700"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Buttons */}

        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-full border border-yellow-700 px-5 py-2 text-sm font-semibold text-yellow-700 transition hover:bg-yellow-700 hover:text-white">
            Call Now
          </button>

                    <Link
  href="/booking"
  className="rounded-full bg-yellow-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-800"
>
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