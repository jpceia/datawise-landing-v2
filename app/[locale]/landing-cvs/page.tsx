import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LandingPage } from "./landing-page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Datawise CV — Recrutamento Inteligente com IA",
  description:
    "Plataforma de recrutamento com IA da DATAWISE que automatiza a triagem de CVs, gera documentos profissionais e encontra os candidatos ideais para cada oportunidade.",
  openGraph: {
    title: "Datawise CV — Recrutamento Inteligente com IA",
    description:
      "Automatize o recrutamento com parsing de CVs, matching inteligente e gestão de pipeline.",
    type: "website",
  },
};

export default function LandingRoute() {
  return (
    <div className={inter.variable}>
      <LandingPage />
    </div>
  );
}
