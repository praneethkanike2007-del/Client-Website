"use client";

import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#faf7f2] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600">
            CONTACT US
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Visit U-SHINE Salon
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            We'd love to welcome you. Book your appointment or contact us
            using the details below.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}

          <a
            href="tel:9014914278"
            className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Phone className="h-10 w-10 text-yellow-600" />

            <h3 className="mt-6 text-2xl font-bold">
              Call Us
            </h3>

            <p className="mt-4 text-gray-600">
              9014914278
            </p>

            <p className="text-gray-600">
              6302969118
            </p>

          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/919014914278"
            target="_blank"
            className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <MessageCircle className="h-10 w-10 text-green-600" />

            <h3 className="mt-6 text-2xl font-bold">
              WhatsApp
            </h3>

            <p className="mt-4 text-gray-600">
              Chat with us instantly
            </p>

          </a>

          {/* Address */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <MapPin className="h-10 w-10 text-red-500" />

  <h3 className="mt-6 text-2xl font-bold">
    Our Branches
  </h3>

  <div className="mt-5 space-y-5">

    <a
      href="https://maps.app.goo.gl/mnHKt4QGvrYGLWv39?g_st=aw"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-yellow-200 p-4 transition hover:border-yellow-500 hover:bg-yellow-50"
    >
      <p className="font-semibold">
        📍 U-SHINE Branch 1
      </p>

      <p className="mt-2 text-sm text-gray-600">
        Open in Google Maps →
      </p>
    </a>

    <a
      href="https://maps.app.goo.gl/zNZxctbbWGja8yAQ8"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-yellow-200 p-4 transition hover:border-yellow-500 hover:bg-yellow-50"
    >
      <p className="font-semibold">
        📍 U-SHINE Branch 2
      </p>

      <p className="mt-2 text-sm text-gray-600">
        Open in Google Maps →
      </p>
    </a>

  </div>

</div>

          {/* Hours */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Clock className="h-10 w-10 text-blue-600" />

            <h3 className="mt-6 text-2xl font-bold">
              Working Hours
            </h3>

            <p className="mt-4 text-gray-600">
              Every Day
            </p>

            <p className="text-gray-600">
              9:00 AM – 9:00 PM
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}