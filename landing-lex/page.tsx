import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LandingPage from "./landing-page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Datawise Lex — IA Jurídica Segura para Advogados e Escritórios",
  description:
    "Construa argumentação jurídica sólida com IA segura. O Datawise Lex responde citando sempre o artigo exato do Código Civil, CPC e mais legislação portuguesa.",
  keywords: [
    "IA jurídica",
    "legislação portuguesa",
    "chatbot jurídico",
    "código civil",
    "código de processo civil",
    "advogados IA",
    "assistente jurídico",
    "argumentação jurídica",
  ],
  openGraph: {
    title: "Datawise Lex — IA Jurídica Segura",
    description:
      "A inteligência artificial jurídica em que pode confiar — fundamentada em legislação, verificável na fonte.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function LandingRoute() {
  return (
    <div className={inter.variable}>
      <LandingPage />
    </div>
  );
}
