"use client";

import "./landing.css";
import Hero from "./components/hero";
import SocialProof from "./components/social-proof";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import CtaSection from "./components/cta-section";

export default function LandingPage() {
  return (
    <main className="landing-wrapper">
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Faq />
      <CtaSection />
    </main>
  );
}
