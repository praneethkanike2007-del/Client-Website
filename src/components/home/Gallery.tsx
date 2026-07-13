import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const images = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
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
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:scale-[1.03]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-80 w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}