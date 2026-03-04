'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TransformBusiness from '@/components/sections/TransformBusiness';
import SuccessCases from '@/components/sections/SuccessCases';
import Recruitment from '@/components/sections/Recruitment';
import OurProcess from '@/components/sections/OurProcess';
import MissionValues from '@/components/sections/MissionValues';
import Technologies from '@/components/sections/Technologies';
import CallToAction from '@/components/sections/CallToAction';
import ClientLogos from '@/components/sections/ClientLogos';
import {useMultipleScrollDepths} from '@/lib/hooks/useScrollTracking';

export default function HomePageClient() {
  useMultipleScrollDepths([25, 50, 75]);

  return (
    <main>
      <Hero />
      <ClientLogos />
      <TransformBusiness />
      <Services />
      <SuccessCases />
      <OurProcess />
      <MissionValues />
      <Recruitment />
      <Technologies />
      <CallToAction />
    </main>
  );
}
