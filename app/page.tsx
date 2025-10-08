import AboutIntro from "@/components/sections/AboutIntro";
import Faq from "@/components/sections/Faq";
import HeroSlider from "@/components/sections/HeroSlider";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import DocumentsSection from "@/components/DocumentsSection";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Miftech Solutions | Heat pump manufacturers | Buy heat pumps",
  description:
    "We are leading heat pump manufacturers, offering a range of commercial heat pump and industrial heat pump solutions. Experience efficient heating with us.",
  keywords: "mifetch solutions, heat pump manufacturers, heat pumps, commercial heat pumps, industrial heat pumps"
};

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
      </SmoothScrollWrapper>
    </>
  );
}
