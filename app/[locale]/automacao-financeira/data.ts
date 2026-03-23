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
    value: "Upload rápido",
    label: "Carrega documentos e centraliza faturas em poucos cliques.",
  },
  {
    value: "Fluxo claro",
    label: "Acompanha estados de cobrança com visibilidade ponta a ponta.",
  },
  {
    value: "Controlo total",
    label: "Permissões por papel e separação por workspace para equipas.",
  },
];

export const pillars: PillarItem[] = [
  {
    icon: Upload,
    title: "Menos trabalho manual",
    description:
      "OCR + extração automática reduzem tarefas repetitivas e aceleram o fecho financeiro.",
  },
  {
    icon: GitGraph,
    title: "Mais controlo de cashflow",
    description:
      "Pipeline claro de faturas: triagem, outstanding, paid e histórico auditável.",
  },
  {
    icon: ShieldCheck,
    title: "Confiável para equipas",
    description:
      "Multi-workspace com RBAC por organização para operar com segurança e separação de dados.",
  },
];

export const workflow: string[] = [
  "Carrega faturas em segundos e centraliza tudo por workspace.",
  "Extrai, valida e corrige os dados sem perder contexto operacional.",
  "Acompanha cobrança até ao pagamento com trilho claro de estados.",
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
    question: "Posso usar a plataforma com a minha equipa?",
    answer:
      "Sim. Todos os planos incluem multi-utilizador por workspace com controlo de permissões por papel.",
  },
  {
    question: "Os meus dados estão seguros?",
    answer:
      "Sim. Cada workspace tem isolamento completo de dados. Os dados são encriptados e armazenados em servidores na União Europeia.",
  },
  {
    question: "Posso integrar com o meu ERP ou sistema de faturação?",
    answer:
      "Integrações à medida estão disponíveis no plano Enterprise, incluindo ERP, Google Drive, sistemas de faturação e outros.",
  },
];
