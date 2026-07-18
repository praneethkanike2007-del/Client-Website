import Link from "next/link";

import Image from "next/image";


import {
  Scissors,
  Sparkles,
  Palette,
  Brush,
  Flower2,
  Droplets,
  HeartHandshake,
  Crown,
  Waves,
  LucideIcon,
} from "lucide-react";



import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/common/Container";
import { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
};

const services: Service[] = [


   {
  icon: Scissors,
  image: "/services/hair-styling.jpg",
  title: "Hair Styling",
  description: "Luxury cuts, styling and creative haircuts.",
  price: "From ₹200",
  category: "hair-styling",
},


  {
  icon: Sparkles,
  image: "/services/facials.jpg",
  title: "Facials",
  description: "Premium skincare treatments for glowing skin.",
  price: "From ₹600",
  category: "facials",
},

  {
    icon: Palette,
    image: "/services/hair-colour.jpg",
    title: "Hair Colour",
    description: "Professional hair colouring and transformation.",
    price: "From ₹800",
    category: "hair-colour",
  },

  {
    icon: Brush,
    image: "/services/fashion-colour.jpg",
    title: "Fashion Colour",
    description: "Creative colours and stylish hair looks.",
    price: "From ₹200",
    category: "fashion-colour",
  },

  {
    icon: Waves,
    image: "/services/hair-spa.jpg",
    title: "Hair Spa",
    description: "Luxury spa treatments for healthy hair.",
    price: "From ₹800",
    category: "hair-spa",
  },

  {
    icon: Flower2,
    image: "/services/nail-care.jpg",
    title: "Nail Care",
    description: "Elegant manicure and pedicure services.",
    price: "From ₹400",
    category: "nails",
  },

  {
    icon: Sparkles,
    image: "/services/threading.jpg",
    title: "Threading",
    description: "Perfect shaping and facial threading.",
    price: "From ₹20",
    category: "threading",
  },

  {
    icon: Droplets,
    image: "/services/normal-wax.png",
    title: "Normal Wax",
    description: "Smooth and premium waxing treatments.",
    price: "From ₹80",
    category: "normal-wax",
  },

{
  icon: Droplets,
  image: "/services/flavoured-wax.png",
  title: "Flavoured Wax",
  description: "Gentle premium flavoured waxing for smooth and radiant skin.",
  price: "From ₹150",
  category: "flavoured-wax",
},


{
  icon: Droplets,
  image: "/services/brazilian-wax.png",
  title: "Brazilian Wax",
  description: "Professional intimate waxing with complete hygiene and care.",
  price: "From ₹300",
  category: "brazilian-wax",
},


  {
    icon: HeartHandshake,
    image: "/services/oil-massage.jpg",
    title: "Oil Massage",
    description: "Relaxing massage and wellness therapies.",
    price: "From ₹350",
    category: "oil-massage",
  },

  {
    icon: Crown,
    image: "/services/bridal-makeup.jpg",
    title: "Bridal Makeup",
    description: "Luxury bridal and HD makeup services.",
    price: "From ₹4500",
    category: "makeup",
  },



{
  icon: Scissors,
  image: "/services/creative-haircuts.jpg",
  title: "Creative Hair Cuts",
  description: "Modern layer, feather and step cuts crafted by professionals.",
  price: "From ₹700",
  category: "creative-haircuts",
},

{
  icon: Waves,
  image: "/services/blow-dry.png",
  title: "Blow Dry",
  description: "Straight, curls and premium styling finishes.",
  price: "From ₹300",
  category: "blow-dry",
},

{
  icon: Sparkles,
  image: "/services/d-tan.png",
  title: "D-Tan",
  description: "Instant tan removal for brighter and healthier skin.",
  price: "From ₹500",
  category: "d-tan",
},

{
  icon: Brush,
  image: "/services/bleach.jpg",
  title: "Bleach",
  description: "Professional skin brightening bleach treatments.",
  price: "From ₹300",
  category: "bleach",
},

{
  icon: HeartHandshake,
  image: "/services/reflexology.png",
  title: "Reflexology",
  description: "Relaxing hand, leg and back massage therapy.",
  price: "From ₹400",
  category: "reflexology",
},

{
  icon: Droplets,
  image: "/services/moroccan-oil.png",
  title: "Moroccan Oil Spa",
  description: "Deep nourishment and premium Moroccan oil hair therapy.",
  price: "From ₹1200",
  category: "moroccan-oil",
},

{
  icon: Flower2,
  image: "/services/add-on-mask.png",
  title: "Add-On Masks",
  description: "Luxury skin masks and whitening enhancement treatments.",
  price: "From ₹200",
  category: "add-on-mask",
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

          {services.map((service, index) => (

            <div
              key={service.title}
              style={{
  animationDelay: `${index * 0.2}s`,
}}



              className="
group
relative
overflow-hidden
rounded-[32px]
border
border-[#E8D9A8]
bg-white/90
backdrop-blur-md
p-8
text-center
shadow-lg
transition-all
duration-700
hover:-translate-y-4
hover:border-[#C9A227]
hover:shadow-[0_25px_70px_rgba(201,162,39,0.25)]
animate-floating-card
"
            >
              <div
className="
absolute 
left-0 
top-0 
h-1 
w-0 
bg-[#C9A227]
transition-all 
duration-700
group-hover:w-full
"
/>

<div
  className="
  absolute
  inset-0
  opacity-0
  transition-opacity
  duration-700
  group-hover:opacity-100
  bg-gradient-to-br
  from-[#FFF9E6]/20
  via-transparent
  to-[#C9A227]/10
  pointer-events-none
  "
></div>

  <div className="relative mb-6 overflow-hidden rounded-2xl">

  <Image
    src={service.image}
    alt={service.title}
    width={500}
    height={350}
    className="h-64 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
  />

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      transition-transform
      duration-1000
      group-hover:translate-x-full
    "
  />

</div>

              <h3 className="mb-3 text-2xl font-semibold">
                {service.title}
              </h3>

              <>
              <p className="text-gray-600">
                {service.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

  <div>
  <p className="text-xs uppercase tracking-widest text-gray-500">
    Starting From
  </p>

  <p className="text-2xl font-bold text-[#C9A227]">
    {service.price}
  </p>
</div>

  <Link
  href={`/booking?category=${service.category}`}
  className="rounded-full bg-gradient-to-r from-[#C9A227] to-[#E0B84D] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  Book Appointment →
</Link>

</div>
            </>

            </div>

          ))}

        </div>

                

      </Container>
    </section>
  );
}