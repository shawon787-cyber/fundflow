import Image from "next/image";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import ExploreByCategory from "@/components/ExploreByCategory";
import ImpactSection from "@/components/ImpactSection";
import TrendingCampaigns from "@/components/TrendingCampaigns";
import StartCampaignCTA from "@/components/StartCampaignCTA";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCampaigns />
      <ExploreByCategory />
      <ImpactSection />
      <HowItWorks />
      <TrendingCampaigns />
      <Testimonials />
      <StartCampaignCTA />
      <FAQSection />
    </div>
  );
}
