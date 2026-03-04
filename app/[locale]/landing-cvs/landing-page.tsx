"use client";

import "./landing.css";
import { Hero } from "./components/hero";
import { SocialProof } from "./components/social-proof";
import { Features } from "./components/features";
import { HowItWorks } from "./components/how-it-works";
import { Benefits } from "./components/benefits";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq";
import { CTASection } from "./components/cta-section";

export function LandingPage() {
  return (
      <main  className="landing min-h-screen">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
  );
}
