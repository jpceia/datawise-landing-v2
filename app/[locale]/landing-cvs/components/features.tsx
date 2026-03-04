"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FileOutput,
  BrainCircuit,
  Target,
  KanbanSquare,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Parsing de CVs com IA",
    description:
      "Faça upload de CVs em PDF ou DOCX e obtenha dados estruturados em segundos — nome, experiência, skills, formação e muito mais, sem esforço manual.",
  },
  {
    icon: FileOutput,
    title: "Geração de CVs com Template",
    description:
      "Exporte CVs formatados com o branding da sua empresa. Apresente candidatos de forma profissional e consistente a cada cliente.",
  },
  {
    icon: BrainCircuit,
    title: "Parsing de Oportunidades",
    description:
      "Cole a descrição da vaga e a IA extrai automaticamente requisitos, competências obrigatórias e critérios de seleção estruturados.",
  },
  {
    icon: Target,
    title: "Matching Inteligente",
    description:
      "O algoritmo cruza candidatos com oportunidades e gera um score de compatibilidade detalhado. Identifique o candidato ideal sem ler centenas de CVs.",
  },
  {
    icon: KanbanSquare,
    title: "Pipeline Visual (Kanban)",
    description:
      "Acompanhe cada candidato no processo com um pipeline drag-and-drop intuitivo. Da prospeção à contratação, tudo num só lugar.",
  },
  {
    icon: Building2,
    title: "Multi-workspace & Equipa",
    description:
      "Gerencie múltiplas empresas com workspaces isolados. Convide a sua equipa, defina roles e colabore em tempo real com segurança.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--landing-accent)" }}
          >
            Funcionalidades
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Tudo o que precisa para
            <br />
            <span className="landing-gradient-text">recrutar com excelência</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg"
            style={{ color: "var(--landing-text-muted)" }}
          >
            Uma plataforma completa que combina inteligência artificial com uma
            experiência de utilizador desenhada para equipas de RH e Talento.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="landing-card group rounded-2xl p-6"
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
                  }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "var(--landing-text)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--landing-text-muted)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
