import type { LucideIcon } from "lucide-react";
import { Upload, GitGraph, ShieldCheck } from "lucide-react";

/* ── Types ── */

export type StatItem = {
  value: string;
  label: string;
};

export type PillarItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/* ── Data ── */

export const stats: StatItem[] = [
  {
    value: "Leitura automática",
    label: "Os documentos são analisados assim que chegam — sem copiar, sem reescrever.",
  },
  {
    value: "Classificação inteligente",
    label: "Cada fatura é categorizada e associada ao contexto certo, sem regras manuais.",
  },
  {
    value: "Cruzamento de dados",
    label: "Valores, fornecedores e referências são cruzados automaticamente para detetar inconsistências.",
  },
];

export const pillars: PillarItem[] = [
  {
    icon: Upload,
    title: "Leitura sem esforço",
    description:
      "A equipa intervém apenas em exceções — o restante é processado automaticamente.",
  },
  {
    icon: GitGraph,
    title: "Tudo classificado no lugar certo",
    description:
      "Cada documento é associado ao fornecedor, categoria e estado corretos, independentemente de quem o submeteu.",
  },
  {
    icon: ShieldCheck,
    title: "Deteção de inconsistências",
    description:
      "Duplicados, divergências de valores e faturas em falta são sinalizados automaticamente antes de gerarem problemas.",
  },
];

export const workflow: string[] = [
  "Os documentos são submetidos via upload ou integração direta — a solução lê-os e processa-os automaticamente.",
  "Campos extraídos, fornecedores identificados, valores cruzados com o que já existe.",
  "Visibilidade sobre o estado de cada documento — o que está pendente, pago ou requer atenção.",
];

export const faqs: FaqItem[] = [
  {
    question: "Que tipos de documentos posso carregar?",
    answer:
      "Faturas em PDF, imagens (JPG/PNG) e documentos digitalizados. O OCR extrai automaticamente os campos relevantes como fornecedor, valor, data e referência.",
  },
  {
    question: "Como funciona a extração automática?",
    answer:
      "Utilizamos OCR combinado com modelos de IA para identificar e extrair campos-chave de cada fatura. Os dados extraídos podem ser revistos e corrigidos antes de serem confirmados.",
  },
  {
    question: "Posso usar a solução com a minha equipa?",
    answer:
      "Sim. A solução é multi-utilizador e pode ser configurada com diferentes níveis de acesso por equipa ou departamento.",
  },
  {
    question: "Os meus dados estão seguros?",
    answer:
      "Sim. Cada workspace tem isolamento completo de dados. Os dados são encriptados e armazenados em servidores na União Europeia.",
  },
  {
    question: "Posso integrar com o meu ERP ou sistema de faturação?",
    answer:
      "Sim. Cada solução é desenvolvida à medida e pode incluir integrações com ERP, sistemas de faturação, Google Drive e outros.",
  },
];
