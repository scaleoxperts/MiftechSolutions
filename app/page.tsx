import AboutIntro from "@/components/sections/AboutIntro";
import Faq from "@/components/sections/Faq";
import HeroSlider from "@/components/sections/HeroSlider";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";
import Certificates from "../components/Certificates";
import GstAndOther from "../components/Gst_and_Other";




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
        <Certificates />
        <GstAndOther />
      </SmoothScrollWrapper>
    </>
  );
}