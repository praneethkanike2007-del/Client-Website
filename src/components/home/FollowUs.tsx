import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { Camera } from "lucide-react";

export default function FollowUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="FOLLOW US"
          title="Stay Connected with U-SHINE"
          description="Scan the QR code to explore our latest beauty transformations, offers and updates on Instagram."
        />

        <div className="mt-16 mx-auto max-w-5xl rounded-[40px] border border-[#E8D9A8] bg-gradient-to-br from-[#FFFDF8] to-[#F8F4EC] p-10 shadow-2xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}

            <div className="flex justify-center">

              <div className="rounded-3xl bg-white p-5 shadow-xl">

                <img
                  src="/images/instagram-qr.png"
                  alt="Instagram QR"
                  className="h-72 w-72 rounded-2xl"
                />

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-[#C9A227]/10 p-4">
                  <Camera
  className="text-[#C9A227]"
  size={34}
/>
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-[#111111]">
                    Follow Us
                  </h3>

                  <p className="text-gray-500">
                    Instagram
                  </p>

                </div>

              </div>

              <h2 className="mt-8 text-4xl font-bold text-[#C9A227]">
                @swathimua55
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover premium bridal makeovers, luxury salon
                transformations, exclusive offers and daily beauty
                inspiration directly from U-SHINE.
              </p>

              <div className="mt-10 rounded-2xl bg-[#FFF7E3] p-5">

                <p className="font-semibold text-[#C9A227]">
                  📱 Scan the QR Code with your phone camera
                </p>

                <p className="mt-2 text-gray-600">
                  It will instantly open our official Instagram profile.
                </p>

              </div>

              <a
  href="https://www.instagram.com/swathimua55/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-full bg-[#C9A227] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#B58F1F]"
>
  Follow on Instagram
</a>



            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}