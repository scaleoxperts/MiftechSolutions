import AboutIntro from "@/components/sections/AboutIntro";
import Faq from "@/components/sections/Faq";
import HeroSlider from "@/components/sections/HeroSlider";
import ContactUs from "@/components/sections/ContactUs";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import DocumentsSection from "@/components/DocumentsSection";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";



export default function HomePage() {
  return (
    <>
      <SmoothScrollWrapper>
        <HeroSlider />
        <AboutIntro />
        <ProductShowcase />
        <Stats />
        <DocumentsSection />
        <Faq />
        <Testimonials />
        <ContactUs currentRoute={"/home"} />
      </SmoothScrollWrapper>
    </>
  );
}