import type { Metadata } from "next";
import { LandingPage } from "./landing-page";

export const metadata: Metadata = {
  title: "Automação Financeira com IA — Solução à Medida · Datawise",
  description:
    "A Datawise desenvolve soluções que lêem, classificam e cruzam documentos financeiros automaticamente. Menos erros, menos tempo perdido, mais controlo.",
  openGraph: {
    title: "Automação Financeira com IA — Solução à Medida · Datawise",
    description:
      "Solução desenvolvida à medida para leitura automática, classificação inteligente e cruzamento de faturas.",
    type: "website",
  },
};

export default function LandingRoute() {
  return <LandingPage />;
}
