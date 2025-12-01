import HeroSection from "@/components/sections/HeroSection";
import ProductDemo from "@/components/sections/ProductDemo";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductDemo />
      <FeaturesGrid />
      <CTASection />
    </main>
  );
}
