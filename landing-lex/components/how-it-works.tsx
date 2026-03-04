"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PenLine, Search, FileCheck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: PenLine,
    title: "Faça a pergunta",
    description:
      "Escreva a sua questão jurídica em linguagem natural, como faria a um colega experiente.",
  },
  {
    number: "02",
    icon: Search,
    title: "A IA pesquisa a legislação",
    description:
      "O Datawise Lex analisa o corpus legislativo português e identifica os artigos aplicáveis ao seu caso.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Resposta com citação",
    description:
      "Recebe a resposta fundamentada com referência exacta ao artigo, código e número. Pronta a usar.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="landing-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="landing-heading text-3xl sm:text-4xl font-bold mb-4">
            Da dúvida jurídica à resposta fundamentada{" "}
            <span className="landing-gradient-text">em 3 passos</span>
          </h2>
          <p className="text-[var(--landing-text-secondary)] max-w-xl mx-auto text-lg">
            Simples de usar. Rigoroso nos resultados.
          </p>
        </motion.div>

        {/* Desktop: horizontal with connectors */}
        <div
          className="hidden lg:grid items-start"
          style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr" }}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <>
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center px-4"
                >
                  {/* Number + icon */}
                  <div className="flex flex-col items-center mb-5">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--landing-bg-surface)] border border-[var(--landing-border)] flex items-center justify-center mb-3">
                        <Icon size={28} className="text-[var(--landing-accent-gold)]" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--landing-accent-gold)] text-[var(--landing-bg-primary)] text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[var(--landing-text-muted)] tracking-widest">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-semibold text-[var(--landing-text-primary)] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--landing-text-secondary)] leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector between steps */}
                {i < STEPS.length - 1 && (
                  <motion.div
                    key={`connector-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    style={{ originX: 0 }}
                    className="landing-step-connector self-center w-16 xl:w-24"
                  />
                )}
              </>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5"
              >
                {/* Left: number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[var(--landing-bg-surface)] border border-[var(--landing-border)] flex items-center justify-center shrink-0 relative">
                    <Icon size={20} className="text-[var(--landing-accent-gold)]" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[var(--landing-accent-gold)] text-[var(--landing-bg-primary)] text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 my-2 bg-gradient-to-b from-[var(--landing-accent-gold)] to-[var(--landing-accent-teal)] opacity-40 min-h-[40px]" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8">
                  <div className="text-xs font-mono text-[var(--landing-text-muted)] tracking-widest mb-1">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-[var(--landing-text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--landing-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
