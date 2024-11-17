import Hero from '@/components/Hero'
import MVVPreview from '@/components/MissionValuesSection'
import ServicesSection from '@/components/ServicesSection'
import SiteInfoSection from '@/components/SiteInfoSection'
import SuccessCasesSection from '@/components/SuccessCasesSection'
import TechStackSection from '@/components/TechStackSection'
import TransformSection from '@/components/TransformBusinessSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TransformSection />
      <SuccessCasesSection />
      <MVVPreview />
      <TechStackSection />
      <SiteInfoSection />
    </>
  )
}
