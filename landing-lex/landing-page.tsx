"use client";

import "./landing.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SocialProof from "./components/social-proof";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import CtaSection from "./components/cta-section";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
