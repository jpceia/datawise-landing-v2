'use client';

import Hero from './sections/Hero';
import Services from './sections/Services';
import TransformBusiness from './sections/TransformBusiness';
import SuccessCases from './sections/SuccessCases';
import Recruitment from './sections/Recruitment';
import OurProcess from './sections/OurProcess';
import MissionValues from './sections/MissionValues';
import Technologies from './sections/Technologies';
import CallToAction from './sections/CallToAction';
import ClientLogos from './sections/ClientLogos';
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
