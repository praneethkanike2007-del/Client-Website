import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/common/Container";

const services = [
  {
    icon: "💇‍♀️",
    title: "Hair Styling",
    description: "Luxury cuts, styling and hair treatments."
  },
  {
    icon: "✨",
    title: "Facials",
    description: "Premium skin care for radiant beauty."
  },
  {
    icon: "💅",
    title: "Nail Care",
    description: "Elegant manicures and pedicures."
  },
  {
    icon: "👰",
    title: "Bridal Makeup",
    description: "Complete bridal beauty packages."
  },
  {
    icon: "🌸",
    title: "Threading",
    description: "Professional eyebrow and facial threading."
  },
  {
    icon: "🪮",
    title: "Hair Spa",
    description: "Relaxing spa treatments for healthy hair."
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <Container>

        <SectionTitle
          subtitle="OUR SERVICES"
          title="Premium Beauty Services"
          description="Discover luxurious beauty treatments designed to make every visit unforgettable."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="group rounded-3xl border border-yellow-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
            >

              <div className="mb-5 text-5xl">
                {service.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}