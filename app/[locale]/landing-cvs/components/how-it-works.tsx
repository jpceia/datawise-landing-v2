"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Carregue",
    description:
      "Faça upload dos CVs dos candidatos (PDF ou DOCX) ou cole a descrição da vaga que pretende preencher. Em segundos, a plataforma está pronta para processar.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "A IA Processa",
    description:
      "O motor de OCR extrai o texto e o GPT-4o analisa o conteúdo, estruturando toda a informação — experiência, skills, formação, requisitos e critérios.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Recrute",
    description:
      "Consulte o score de matching entre candidatos e vagas, gira o pipeline visual, exporte CVs profissionais e tome decisões de contratação mais informadas.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="landing-section-alt py-24 px-4 sm:px-6 lg:px-8"
    >
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
            Como Funciona
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Do CV ao candidato ideal
            <br />
            <span className="landing-gradient-text">em 3 passos</span>
          </h2>
        </motion.div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connector line — desktop only, aligned to center of 64px icons */}
          <div
            className="absolute hidden h-px lg:block"
            style={{
              top: "2rem",        /* 32px = half of h-16 icon */
              left: "calc(16.67% + 2rem)",   /* clear of the icon on the left */
              right: "calc(16.67% + 2rem)",  /* clear of the icon on the right */
              background:
                "linear-gradient(90deg, var(--landing-gradient-from), var(--landing-gradient-to))",
              opacity: 0.3,
            }}
          />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
                      }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <span
                      className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{
                        background: "var(--landing-gradient-to)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--landing-text-muted)" }}
                  >
                    {step.description}
                  </p>

                  {/* Vertical connector — mobile only */}
                  {i < steps.length - 1 && (
                    <div
                      className="mt-8 h-12 w-0.5 lg:hidden"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--landing-gradient-from), var(--landing-gradient-to))",
                        opacity: 0.4,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
