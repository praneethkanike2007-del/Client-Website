

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Gallery from "@/components/home/Gallery";
import BridalBanner from "@/components/home/BridalBanner";
import Contact from "@/components/home/Contact";
import SpecialOffer from "@/components/home/SpecialOffer";
import Testimonials from "@/components/home/Testimonials";
import BookingCTA from "@/components/home/BookingCTA";
import Footer from "@/components/layout/Footer";
import PriceList from "@/components/home/PriceList";
import FollowUs from "@/components/home/FollowUs";
import DashboardCards from "@/components/admin/DashboardCards";
import DashboardStats from "@/components/admin/DashboardStats";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <PriceList />
      <Gallery />
      <BridalBanner />
      <SpecialOffer />
      <Testimonials />
      <Contact />
      <BookingCTA />
      <FollowUs />
      <Footer />
      
    </>
  );
}