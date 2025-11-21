"use client";

import { HeroSection, Hero, ClientLogosSection, SecuritySection } from "@/components/sections";
import FeaturesSection from "@/components/common/LandingFeature";
import ProvenResultsSection from "@/components/common/LandingStats";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import BusinessCom from "@/components/common/BusinessCom";
// import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
    {/* <Navbar> */}
        <Hero/>
        <ClientLogosSection />
        <FeaturesSection />
        <ProvenResultsSection />
        <SecuritySection />
        <TestimonialsSection />
        <BusinessCom />
      {/* </Navbar> */}
    </main>
  );
}

