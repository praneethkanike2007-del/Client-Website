import Container from "@/components/common/Container";

export default function SpecialOffer() {
  return (
    <section className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-24">
      <Container>
        <div className="rounded-[32px] bg-white/10 p-12 text-center backdrop-blur-sm border border-yellow-300">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white">
            Limited Time Offer
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            25% OFF
          </h2>

          <p className="mt-4 text-xl text-yellow-100">
            Enjoy 25% off your first appointment and experience luxury beauty
            services crafted just for you.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-yellow-700 transition duration-300 hover:scale-105 hover:bg-yellow-50">
            Book Appointment
          </button>

        </div>
      </Container>
    </section>
  );
}