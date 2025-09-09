import AboutIntro from "@/components/sections/AboutIntro";
import Faq from "@/components/sections/Faq";
import HeroSlider from "@/components/sections/HeroSlider";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutIntro />
      <ProductShowcase />
      <Faq />
      <Stats />
      <Testimonials />
    </>
  );
}