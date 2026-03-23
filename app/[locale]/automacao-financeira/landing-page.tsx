"use client";

import { HeroSection } from "./sections/hero-section";
import { PillarsSection } from "./sections/pillars-section";
import { WorkflowSection } from "./sections/workflow-section";
import { PricingSection } from "./sections/pricing-section";
import { RoadmapSection } from "./sections/roadmap-section";
import { FaqSection } from "./sections/faq-section";
import { FinalCtaSection } from "./sections/final-cta-section";
import { stats, pillars, workflow, faqs } from "./data";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#06070b] dark:text-zinc-100">

      <main className="mx-auto max-w-7xl space-y-28 px-4 pb-20 pt-28 sm:px-6 lg:space-y-36 lg:px-8 lg:pt-32">
        <HeroSection stats={stats} />

        <div id="funcionalidades">
          <PillarsSection pillars={pillars} />
        </div>

        <div id="como-funciona">
          <WorkflowSection workflow={workflow} />
        </div>

        <div id="precos">
          <PricingSection />
        </div>

        <RoadmapSection />

        <div id="faq">
          <FaqSection faqs={faqs} />
        </div>

        <FinalCtaSection />
      </main>
    </div>
  );
}
