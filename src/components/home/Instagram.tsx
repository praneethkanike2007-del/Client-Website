import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function Instagram() {
  return (
    <section className="bg-[#faf7f2] py-24">
      <Container>

        <SectionTitle
          subtitle="FOLLOW US"
          title="Instagram Beauty Gallery"
          description="Follow U-SHINE for our latest makeovers, bridal transformations, beauty tips and exclusive offers."
        />

        <div className="mt-16 flex flex-col items-center">

          <div className="flex h-56 w-56 items-center justify-center rounded-3xl border-4 border-yellow-500 bg-white shadow-xl">

            <p className="text-center text-gray-500">
              Instagram QR Code
              <br />
              (We'll add the real QR later)
            </p>

          </div>

          <a
            href="#"
            className="mt-8 rounded-full bg-yellow-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-yellow-700"
          >
            Follow on Instagram
          </a>

        </div>

      </Container>
    </section>
  );
}