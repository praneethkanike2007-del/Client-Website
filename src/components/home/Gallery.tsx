"use client";

import { motion } from "framer-motion";




import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const images = [
  {
    src: "/services/bridal-makeup.jpg",
    title: "Bridal Makeup",
  },
  {
    src: "/services/facials.jpg",
    title: "Luxury Facials",
  },
  {
    src: "/services/hair-styling.jpg",
    title: "Hair Styling",
  },
  {
    src: "/services/hair-colour.jpg",
    title: "Hair Colour",
  },
  {
    src: "/services/fashion-colour.jpg",
    title: "Fashion Colour",
  },
  {
    src: "/services/hair-spa.jpg",
    title: "Hair Spa",
  },
  {
    src: "/services/nail-care.jpg",
    title: "Nail Care",
  },
  {
    src: "/services/threading.jpg",
    title: "Threading",
  },
  {
    src: "/services/waxing.jpg",
    title: "Waxing",
  },
  {
    src: "/services/massage.jpg",
    title: "Massage",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#faf7f2] py-24">
      <Container>

        <SectionTitle
          subtitle="OUR GALLERY"
          title="Luxury Beauty Transformations"
          description="Every look is crafted with elegance, precision and premium care."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: index * 0.1,
  }}
  viewport={{ once: true }}
  className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
>
            
              <img
  src={image.src}
  alt={image.title}
  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
/>

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">

  <div className="p-6 text-white">

    <h3 className="text-2xl font-bold">
  {image.title}
</h3>

<p className="mt-2 text-sm tracking-wider">
  U-SHINE Luxury Salon
</p>

    

  </div>

</div>


            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}