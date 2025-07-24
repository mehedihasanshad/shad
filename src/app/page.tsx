import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { TabbedVideoPortfolio } from "@/components/tabbed-video-portfolio";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TabbedVideoPortfolio />
      <CTASection />
    </div>
  );
}
