export const dynamic = "force-static";

import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      <ProductsSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}