"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BridalBanner() {
  return (
    <section className="py-24 px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F4E7B5] p-16 text-center shadow-2xl"
      >

        <p className="uppercase tracking-[0.4em] text-white">
          Bridal Collection
        </p>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Your Dream Wedding Look
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
          From elegant bridal makeup to HD luxury looks,
          let our expert artists make your special day
          unforgettable.
        </p>

        <Link
          href="/booking"
          className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-bold text-yellow-700 transition-all duration-300 hover:scale-105"
        >
          Book Bridal Consultation
        </Link>

      </motion.div>

    </section>
  );
}