

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Gallery from "@/components/home/Gallery";
import SpecialOffer from "@/components/home/SpecialOffer";
import Testimonials from "@/components/home/Testimonials";
import Instagram from "@/components/home/Instagram";
import BookingCTA from "@/components/home/BookingCTA";
import Footer from "@/components/layout/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Gallery />
      <SpecialOffer />
      <Testimonials />
      <Instagram />
      <BookingCTA />
      <Footer />
  
    </>
  );
}