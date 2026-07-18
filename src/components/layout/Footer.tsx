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

          {/* Contact */}

<div>
  <h3 className="mb-4 text-xl font-semibold text-yellow-400">
    Contact
  </h3>

  <p className="text-gray-400">
    📞 9014914278
  </p>

  <p className="mt-2 text-gray-400">
    📞 6302969118
  </p>

  <div className="mt-4 space-y-2">

    <a
      href="https://maps.app.goo.gl/mnHKt4QGvrYGLWv39?g_st=aw"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      📍 U-SHINE Branch 1
    </a>

    <a
      href="https://maps.app.goo.gl/zNZxctbbWGja8yAQ8"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      📍 U-SHINE Branch 2
    </a>

  </div>

</div>

          {/* Business Hours */}

          {/* Business Hours */}

<div>
  <h3 className="mb-4 text-xl font-semibold text-yellow-400">
    Working Hours
  </h3>

  <p className="text-gray-400">
    Every Day
  </p>

  <p className="mt-2 text-gray-400">
    10:00 AM – 9:00 PM
  </p>

  <p className="mt-3 text-gray-500">
    Walk-ins & Appointments Welcome
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