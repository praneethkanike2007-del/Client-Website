import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const reasons = [
  {
    title: "Experienced Professionals",
    description:
      "Our beauty experts deliver personalized services with precision and care.",
    icon: "💎",
  },
  {
    title: "Premium Products",
    description:
      "We use trusted salon-grade products for healthier skin and beautiful hair.",
    icon: "🌸",
  },
  {
    title: "Luxury Ambience",
    description:
      "Relax in a peaceful and elegant environment designed exclusively for women.",
    icon: "✨",
  },
  {
    title: "Affordable Luxury",
    description:
      "Premium beauty experiences at prices that offer exceptional value.",
    icon: "💖",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#faf7f2] py-24">
      <Container>
        <SectionTitle
          subtitle="WHY CHOOSE US"
          title="Experience Beauty Without Compromise"
          description="Every visit to U-SHINE is designed to leave you feeling confident, refreshed, and radiant."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{reason.icon}</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {reason.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}