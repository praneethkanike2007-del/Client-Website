import Link from "next/link";

import Container from "@/components/common/Container";

export default function BookingCTA() {
  return (
    <section className="bg-gray-900 py-24">
      <Container>

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            READY TO SHINE?
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Book Your Luxury Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            From bridal makeovers to premium beauty treatments, let us make
            every visit unforgettable.
          </p>

                        <Link
                href="/booking"
                className="mt-10 inline-block rounded-full bg-yellow-500 px-10 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400"
                >
                Book Appointment
                </Link>

        </div>

      </Container>
    </section>
  );
}