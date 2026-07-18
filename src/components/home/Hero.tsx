"use client";


import Link from "next/link";
import { motion } from "framer-motion";


export default function Hero() {
return (
  <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F8F4EC] to-[#F3E7C4]"
>

  {/* Luxury Background */}

<div className="absolute inset-0 overflow-hidden">

  <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-[#C9A227]/15 blur-[120px]" />

  <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#F5D76E]/15 blur-[120px]" />

  <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[100px]" />

</div>
    <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

      {/* LEFT */}

              <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
>

                    <motion.p
            className="mb-4 uppercase tracking-[0.4em] text-yellow-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to U-SHINE
          </motion.p>

           <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#111111] md:text-6xl lg:text-7xl">
  Luxury
  <span className="block text-[#C9A227]">Beauty</span>
  Experience
</h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
          Crafted with elegance, precision and care.
          Experience premium salon services designed to
          make every woman shine with confidence.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/booking"
            className=" premium-button rounded-full bg-yellow-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-yellow-700"
          >
            Book Appointment
          </Link>

          <a
  href="tel:+919014914278"
  className="rounded-full border-2 border-yellow-600 px-8 py-4 font-semibold text-yellow-600 transition-all duration-300 hover:scale-105 hover:bg-yellow-600 hover:text-white"
>
  📞 Call Now
</a>
        </div>

      </motion.div>

{/* RIGHT */}

      {/* RIGHT */}

                <motion.div
            className="relative hidden lg:flex lg:w-1/2 items-center justify-center"
           initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
>         <div className="absolute h-[450px] w-[450px] rounded-full bg-[#C9A227]/20 blur-3xl"></div>
        <img
          src="/hero-salon.jpg"
          alt="Salon"
          className="relative z-10 w-[500px] rounded-[40px] shadow-2xl"
        />
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="absolute -bottom-8 -left-6 z-20 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl"
>
  <div className="flex items-center gap-3">
    <div className="text-3xl">⭐</div>

    <div>
      <h3 className="text-xl font-bold text-[#111111]">
        4.9/5 Rating
      </h3>

      <p className="text-sm text-gray-600">
        Trusted by thousands of happy clients
      </p>
    </div>
  </div>

  <div className="mt-5 flex justify-between gap-8">

    <div>
      <h4 className="text-2xl font-bold text-[#C9A227]">
        5000+
      </h4>

      <p className="text-sm text-gray-600">
        Happy Clients
      </p>
    </div>

    <div>
      <h4 className="text-2xl font-bold text-[#C9A227]">
        10+
      </h4>

      <p className="text-sm text-gray-600">
        Years Experience
      </p>
    </div>

  </div>
</motion.div>

      </motion.div>

    </div>
  </section>
);
}