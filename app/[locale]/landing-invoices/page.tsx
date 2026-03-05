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
  title: "Datawise Invoice — Gestão Inteligente de Faturas com IA",
  description:
    "Centralize faturas, automatize extração com OCR e IA, e acompanhe cobrança com visibilidade real. Menos operação manual, mais controlo financeiro.",
  openGraph: {
    title: "Datawise Invoice — Gestão Inteligente de Faturas com IA",
    description:
      "Automatize a gestão de faturas com OCR, classificação inteligente e pipeline de cobrança.",
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
