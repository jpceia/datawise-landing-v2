"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { useHubspotContactModal } from "@/components/providers/HubspotContactModalProvider";

const CREDIT_TIERS = [
  { label: "100", value: 100 },
  { label: "250", value: 250 },
  { label: "500", value: 500 },
  { label: "1.000", value: 1000 },
];

const STANDARD_FEATURES = [
  "Acesso completo ao Datawise Lex",
  "Respostas sempre fundamentadas com artigos",
  "Historico de conversas e pesquisa",
  "Ate 10 membros por escritorio",
];

const CUSTOM_FEATURES = [
  "Tudo incluido no plano Standard",
  "Mensagens e utilizadores ilimitados",
  "Integracoes e fluxos a medida",
  "Onboarding e configuracao dedicada",
  "Roadmap conjunto de funcionalidades",
  "Suporte prioritario",
];

function StandardCard() {
  const { openModal } = useHubspotContactModal();
  const [selectedIndex, setSelectedIndex] = useState(2);
  const tier = CREDIT_TIERS[selectedIndex];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="landing-card-highlight relative flex flex-col"
    >
      <div className="mb-6">
        <h3 className="landing-heading text-2xl font-bold text-[var(--landing-accent-gold)]">
          Standard
        </h3>
        <p className="mt-3 text-sm text-[var(--landing-text-secondary)]">
          Ideal para escritorios que querem produtividade e rigor juridico no dia a dia.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-[var(--landing-border)] bg-[var(--landing-bg-secondary)] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-[var(--landing-text-muted)]">Creditos por mes</span>
          <span className="text-xs font-bold text-[var(--landing-accent-gold)]">{tier.label}</span>
        </div>
        <input
          type="range"
          min={0}
          max={CREDIT_TIERS.length - 1}
          step={1}
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="landing-slider w-full cursor-pointer"
          aria-label="Selecionar volume mensal de creditos"
        />
        <div className="mt-2 flex justify-between text-[10px] text-[var(--landing-text-muted)]">
          <span>{CREDIT_TIERS[0].label}</span>
          <span>{CREDIT_TIERS[CREDIT_TIERS.length - 1].label}</span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {STANDARD_FEATURES.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--landing-text-secondary)]">
            <Check size={16} className="mt-0.5 shrink-0 text-[var(--landing-accent-teal)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <CalendlyPopupButton className="landing-btn-primary w-full justify-center text-center">
        Marcar Demo
      </CalendlyPopupButton>
    </motion.article>
  );
}

function CustomCard() {
  const { openModal } = useHubspotContactModal();
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="landing-card flex flex-col"
    >
      <div className="mb-6">
        <h3 className="landing-heading text-2xl font-bold text-[var(--landing-text-primary)]">
          Customizado
        </h3>
        <p className="mt-3 text-sm text-[var(--landing-text-secondary)]">
          Para organizacoes com requisitos especificos de escala, seguranca e integracao.
        </p>
      </div>

      <div className="mb-6">
        <span className="landing-heading text-3xl font-bold">Plano adaptado ao seu contexto</span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {CUSTOM_FEATURES.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--landing-text-secondary)]">
            <Check size={16} className="mt-0.5 shrink-0 text-[var(--landing-accent-teal)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={openModal}
        className="landing-btn-outline inline-flex items-center justify-center gap-2 w-full"
      >
        Falar com a equipa
        <ChevronRight size={16} />
      </button>
    </motion.article>
  );
}

export default function Pricing() {
  return (
    <section id="precos" className="landing-section-alt">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--landing-accent-gold)]">
            Planos
          </p>
          <h2 className="landing-heading text-3xl sm:text-4xl font-bold mb-4">
            Planos simples para a sua equipa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--landing-text-secondary)]">
            Escolha entre um plano Standard pronto a usar ou uma opcao Customizada para o seu contexto.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <StandardCard />
          <CustomCard />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 text-center text-sm text-[var(--landing-text-muted)]"
        >
          Todos os planos incluem conformidade RGPD e dados armazenados na UE.
        </motion.p>
      </div>
    </section>
  );
}
