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
    value: "Upload rapido",
    label: "Carrega documentos e centraliza faturas em poucos cliques.",
  },
  {
    value: "Fluxo claro",
    label: "Acompanha estados de cobranca com visibilidade ponta a ponta.",
  },
  {
    value: "Controlo total",
    label: "Permissoes por papel e separacao por workspace para equipas.",
  },
];

export const pillars: PillarItem[] = [
  {
    icon: Upload,
    title: "Menos trabalho manual",
    description:
      "OCR + extracao automatica reduzem tarefas repetitivas e aceleram o fecho financeiro.",
  },
  {
    icon: GitGraph,
    title: "Mais controlo de cashflow",
    description:
      "Pipeline claro de faturas: triagem, outstanding, paid e historico auditavel.",
  },
  {
    icon: ShieldCheck,
    title: "Confiavel para equipas",
    description:
      "Multi-workspace com RBAC por organizacao para operar com seguranca e separacao de dados.",
  },
];

export const workflow: string[] = [
  "Carrega faturas em segundos e centraliza tudo por workspace.",
  "Extrai, valida e corrige os dados sem perder contexto operacional.",
  "Acompanha cobranca ate ao pagamento com trilho claro de estados.",
];

export const faqs: FaqItem[] = [
  {
    question: "Que tipos de documentos posso carregar?",
    answer:
      "Faturas em PDF, imagens (JPG/PNG) e documentos digitalizados. O OCR extrai automaticamente os campos relevantes como fornecedor, valor, data e referencia.",
  },
  {
    question: "Como funciona a extracao automatica?",
    answer:
      "Utilizamos OCR combinado com modelos de IA para identificar e extrair campos-chave de cada fatura. Os dados extraidos podem ser revistos e corrigidos antes de serem confirmados.",
  },
  {
    question: "Posso usar a plataforma com a minha equipa?",
    answer:
      "Sim. No plano Pro tens multi-utilizador por workspace com controlo de permissoes. No Enterprise, tens RBAC completo com SSO/SAML e auditoria avancada.",
  },
  {
    question: "Quanto custa o plano Pro?",
    answer:
      "O plano Pro tem uma base de 20€/mes mais 0,16€ por fatura processada. Podes simular o custo com o slider na seccao de precos. O plano Free permite ate 10 faturas/mes sem custo.",
  },
  {
    question: "Os meus dados estao seguros?",
    answer:
      "Sim. Cada workspace tem isolamento completo de dados. No plano Enterprise oferecemos SSO/SAML, auditoria avancada e SLA dedicado.",
  },
  {
    question: "Posso integrar com o meu ERP ou sistema de faturacao?",
    answer:
      "Integracoes a medida estao disponiveis no plano Enterprise, incluindo ERP, Google Drive, sistemas de faturacao e outros.",
  },
];
