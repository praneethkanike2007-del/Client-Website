import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>

        <div className="grid gap-12 py-16 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-yellow-500">
              U-SHINE
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Luxury Women's Salon offering premium beauty,
              bridal makeup, hair styling and skincare services.
            </p>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-4 text-xl font-semibold text-yellow-400">
              Contact
            </h3>

            <p className="text-gray-400">
              📍 Hyderabad, India
            </p>

            <p className="mt-2 text-gray-400">
              📞 +91 XXXXXXXXXX
            </p>

            <p className="mt-2 text-gray-400">
              ✉ hello@ushine.com
            </p>
          </div>

          {/* Business Hours */}

          <div>
            <h3 className="mb-4 text-xl font-semibold text-yellow-400">
              Business Hours
            </h3>

            <p className="text-gray-400">
              Monday - Saturday
            </p>

            <p className="text-gray-400">
              10:00 AM - 8:00 PM
            </p>

            <p className="mt-3 text-gray-500">
              Sunday Closed
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} U-SHINE Luxury Women's Salon. All Rights Reserved.
        </div>

      </Container>
    </footer>
  );
}