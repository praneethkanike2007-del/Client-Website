import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import {
  Crown,
  Sparkles,
  Gem,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Professionals",
    description:
      "Our beauty experts deliver personalized services with precision and care.",
    icon: Crown,
  },
  {
    title: "Premium Products",
    description:
      "We use trusted salon-grade products for healthier skin and beautiful hair.",
    icon: Gem,
  },
  {
    title: "Luxury Ambience",
    description:
      "Relax in a peaceful and elegant environment designed exclusively for women.",
    icon: Sparkles,
  },
  {
    title: "Affordable Luxury",
    description:
      "Premium beauty experiences at prices that offer exceptional value.",
    icon: ShieldCheck,
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
              className="group rounded-[32px] border border-[#E8D8A8] bg-white/90 p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A227] hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#F8E8B8] to-[#C9A227] p-4 shadow-lg">

  <reason.icon
    size={34}
    className="text-white"
  />

</div>

              <h3 className="text-2xl font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#C9A227]">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}