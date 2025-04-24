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
import CallToAction from '../components/sections/CallToAction';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DATAWISE | Consultoria em Ciência de Dados</title>
        <meta
          name="description"
          content="Datawise ajuda empresas a transformar dados em decisões estratégicas. Soluções de ciência de dados, machine learning e IA para otimizar o seu negócio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Datawise | Consultoria em Ciência de Dados" />
        <meta property="og:description" content="Transformamos dados em decisões estratégicas para o seu negócio" />
        <meta property="og:image" content="/images/web-app-manifest-512x512.png" />
        <meta property="og:url" content="https://datawise.pt" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <Hero />

        <TransformBusiness />
        <Services />
        <SuccessCases />
        <TechMaturity />
        <MissionValues />
        <Recruitment />
        <Technologies />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
