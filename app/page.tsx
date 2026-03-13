import CtaSection from "@/components/cta-section";
import FeaturesSection from "@/components/features-section";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import LocationSection from "@/components/location-section";
import Navbar from "@/components/navbar";
import PropertyType from "@/components/property-type";
import SpecificationsTable from "@/components/specifications-table";
import UnitInfoSection from "@/components/unit-info-section";
import AccessibilitySection from "@/components/accessibility-section";
import FinancingSection from "@/components/financing-section";
import BuyingProcessSection from "@/components/buying-process-section";
import AgentContactSection from "@/components/agent-contact-section";
import FacilitiesSection from "@/components/facilities-section";
import InvestmentTipsSection from "@/components/investment-tips-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <PropertyType />
      <SpecificationsTable />
      <LocationSection />
      <UnitInfoSection />
      <AccessibilitySection />
      <FinancingSection />
      <BuyingProcessSection />
      <AgentContactSection />
      <FacilitiesSection />
      <InvestmentTipsSection />
      <CtaSection />
    </main>
  );
}