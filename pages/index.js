import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import TransformBusiness from '../components/sections/TransformBusiness';
import SuccessCases from '../components/sections/SuccessCases';
import Recruitment from '../components/sections/Recruitment';
import TechMaturity from '../components/sections/TechMaturity';
import MissionValues from '../components/sections/MissionValues';
import Technologies from '../components/sections/Technologies';

export default function Home() {
  return (
    <>
      <Head>
        <title>DataWise | Consultoria em Ciência de Dados</title>
        <meta name="description" content="Somos especialistas em inteligência artificial para ajudar empresas a automatizar processos e a tomar melhores decisões." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Adicionar font Inter do Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />

        <TransformBusiness />
        <Services />
        <SuccessCases />
        <TechMaturity />
        <MissionValues />
        <Recruitment />
        <Technologies />
      </main>

      <Footer />
    </>
  );
}