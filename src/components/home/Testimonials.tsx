import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const testimonials = [
  {
    name: "Priya S.",
    service: "Bridal Makeup",
    review:
      "The bridal makeup was absolutely stunning. I felt confident and beautiful throughout my wedding day.",
  },
  {
    name: "Ananya R.",
    service: "Hair Spa",
    review:
      "The ambience is luxurious and the staff are so professional. My hair has never felt this healthy.",
  },
  {
    name: "Sneha K.",
    service: "Facial",
    review:
      "Amazing experience! My skin was glowing after the facial. Highly recommended for anyone looking for premium care.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="TESTIMONIALS"
          title="What Our Clients Say"
          description="The happiness of our clients is the heart of everything we do."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-yellow-100 bg-[#faf7f2] p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-3xl">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-600 leading-7">
                {testimonial.review}
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-yellow-700 font-medium">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}