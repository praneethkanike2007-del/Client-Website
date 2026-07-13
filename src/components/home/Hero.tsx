import Link from "next/link";


export default function Hero() {
  return (
    <section
    id = "home"
    className="min-h-screen bg-[#F8F4EC] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-semibold">
          Welcome to U-SHINE
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold text-black leading-tight">
          Luxury Women&apos;s Salon
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8">
          Crafted with elegance, precision, and care. Experience premium
          beauty services designed to make every woman shine with confidence.
        </p>

                 <Link
  href="/booking"
  className="mt-10 inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-yellow-500"
>
  Book Appointment
</Link>
          <button className="px-8 py-4 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-white transition duration-300">
            Call Now
          </button>
        </div>
      
    </section>
  );
}