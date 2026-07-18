"use client";

import { useState } from "react";






import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { services } from "@/data/services";


const categories = [
  ...new Set(
    services.map((service) => service.category)
  ),
];




export default function PriceList() {

    const [openCategory, setOpenCategory] = useState<string | null>(null);
  return (
    <section id="prices" className="bg-[#faf7f2] py-24">
      <Container>

        <SectionTitle
          subtitle="PRICE LIST"
          title="Complete Salon Services"
          description="Explore all our premium beauty services with transparent pricing."
        />

        <div className="mt-16 space-y-6">

  {categories.map((category) => (

    <div
      key={category}
      className="overflow-hidden rounded-3xl border border-[#E8D9A8] bg-white shadow-lg"
    >

      <button
        onClick={() =>
          setOpenCategory(
            openCategory === category ? null : category
          )
        }
        className=" group flex w-full items-center justify-between p-8 text-left transition hover:bg-[#FFF8E7]"
      >

       <div>
  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
    U-SHINE SERVICES
  </p>

  <h3 className="mt-2 text-3xl font-bold tracking-wide text-[#C9A227] transition-all duration-300 group-hover:translate-x-2">
  {category}
</h3>
</div>

        <span className="text-3xl">

          {openCategory === category ? "−" : "+"}

        </span>

      </button>

      {openCategory === category && (

  <div className="border-t bg-[#FFFCF5] p-6">

    <div className="space-y-3">

      <div className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-white transition">

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

{services
  .filter(
    (service) =>
      service.category === category
  )
  .map((service) => (

    <div
      key={service.name}
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-[#F1E3B3]
      bg-white
      p-6
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-xl
      "
    >

      {/* Gold shine effect */}

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-1
        bg-[#C9A227]
        scale-x-0
        transition-transform
        duration-500
        group-hover:scale-x-100
        "
      />

      
      <h4
        className="
        text-xl
        font-semibold
        text-gray-800
        "
      >
        {service.name}
      </h4>


      <div
        className="
        mt-6
        flex
        items-center
        justify-between
        "
      >

        <span
          className="
          text-sm
          uppercase
          tracking-wider
          text-gray-400
          "
        >
          Starting From
        </span>


        <span
          className="
          text-2xl
          font-bold
          text-[#C9A227]
          "
        >
          {service.price}
        </span>


      </div>


    </div>

))}
</div>

        <span className="font-bold text-[#C9A227]">
          ₹---
        </span>

      </div>

    </div>

  </div>

)}

    </div>

  ))}

</div>

      </Container>
    </section>
  );
}