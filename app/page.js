import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ServiceSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import CTASection from "@/components/sections/cta";
import TestimonialSection from "@/components/sections/testimonials";
import BlogSection from "@/components/sections/blogs";
import ClientSection from "@/components/sections/clients";
import WebDevSection from "@/components/sections/web";
import FaqSection from "@/components/sections/faqs";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <ClientSection/>
      <WebDevSection/>
      <CTASection/>
      <TestimonialSection/>
      <BlogSection/>
      <FaqSection/>
      <Footer/>
    </>
  );
}
