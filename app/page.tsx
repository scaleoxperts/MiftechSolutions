import AboutIntro from "@/components/sections/AboutIntro";
import ContactUs from "@/components/sections/ContactUs";
import Faq from "@/components/sections/Faq";
import HeroSlider from "@/components/sections/HeroSlider";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";



export default function HomePage() {
  return (
    <>
      <SmoothScrollWrapper>
        <HeroSlider />
        <AboutIntro />
        <ProductShowcase />
        <Stats />
        <Faq />
        <Testimonials />
        <ContactUs currentRoute={"/home"} />
      </SmoothScrollWrapper>
    </>
  );
}