import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    title: "Expert Beauty Artists",
    description:
      "Highly trained professionals dedicated to delivering exceptional beauty services.",
  },
  {
    title: "Premium Products",
    description:
      "We use trusted professional brands to ensure healthy skin and beautiful hair.",
  },
  {
    title: "Luxury Experience",
    description:
      "Relax in a calm, elegant environment designed exclusively for women.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="ABOUT U-SHINE"
          title="Where Beauty Meets Elegance"
          description="Every woman deserves to feel confident, beautiful and celebrated."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <img
              src="/about/salon.jpg"
              alt="Luxury Women's Salon"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              Crafted with Elegance, Precision & Care
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              At U-SHINE, beauty is more than a service—it is an experience.
              Designed exclusively for women, our salon blends luxury,
              comfort and expert artistry to create unforgettable
              transformations for every occasion.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-yellow-100 bg-[#faf7f2] p-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </Container>
    </section>
  );
}