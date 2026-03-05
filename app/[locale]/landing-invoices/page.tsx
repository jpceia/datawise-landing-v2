import type { Metadata } from "next";
import { LandingPage } from "./landing-page";

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
  return <LandingPage />;
}
