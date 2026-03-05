"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, ChevronRight } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { useHubspotContactModal } from "@/components/providers/HubspotContactModalProvider";

const cvTiers = [
  { label: "50", value: 50 },
  { label: "100", value: 100 },
  { label: "250", value: 250 },
  { label: "500", value: 500 },
  { label: "1.000", value: 1000 },
];

const standardFeatures = [
  "Parsing e processamento de CVs",
  "Geração de CVs com branding da empresa",
  "Parsing de oportunidades",
  "Matching com score detalhado",
  "Até 10 membros por workspace",
];

const customFeatures = [
  "Tudo incluído no Standard",
  "Volume de CVs ilimitado",
  "Workspaces e membros ilimitados",
  "Matching customizável (pesos e critérios)",
  "Integração por API",
  "Onboarding e formação dedicada",
  "Suporte dedicado",
];

function StandardCard() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const tier = cvTiers[selectedIndex];
  const { openModal } = useHubspotContactModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      className="landing-card-highlight relative flex flex-col rounded-2xl p-8"
      style={{ backgroundColor: "var(--landing-bg-card)" }}
    >
      {/* Popular badge */}
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold text-white"
        style={{
          background: "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
        }}
      >
        <Zap size={12} />
        Popular
      </div>

      <div className="mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--landing-accent)" }}>
          Standard
        </h3>
        <p className="mt-3 text-sm" style={{ color: "var(--landing-text-muted)" }}>
          Tudo o que precisa para automatizar o seu recrutamento.
        </p>
      </div>

      {/* Volume slider */}
      <div
        className="mb-6 rounded-xl p-4"
        style={{
          backgroundColor: "var(--landing-bg-alt)",
          border: "1px solid var(--landing-border)",
        }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium" style={{ color: "var(--landing-text-muted)" }}>
            CVs processados / mês
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: "var(--landing-accent)" }}
          >
            {tier.label}
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={cvTiers.length - 1}
          step={1}
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="landing-slider w-full cursor-pointer"
          aria-label="Selecionar volume de CVs mensais"
        />

        <div className="mt-2 flex justify-between text-[10px]" style={{ color: "var(--landing-text-muted)" }}>
          <span>50</span>
          <span>1.000</span>
        </div>
      </div>

      {/* Feature list */}
      <ul className="mb-8 flex-1 space-y-3">
        {standardFeatures.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <Check size={16} style={{ color: "var(--landing-accent)" }} className="mt-0.5 shrink-0" />
            <span className="text-sm">{feat}</span>
          </li>
        ))}
      </ul>

      <CalendlyPopupButton className="landing-btn-primary block rounded-xl py-3 text-center text-sm font-semibold transition-all">
        Marcar Demo
      </CalendlyPopupButton>
    </motion.div>
  );
}

function CustomCard() {
  const { openModal } = useHubspotContactModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="landing-card relative flex flex-col rounded-2xl p-8"
      style={{ backgroundColor: "var(--landing-bg-card)" }}
    >
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--landing-text-muted)" }}>
          Custom
        </h3>
        <p className="mt-3 text-sm" style={{ color: "var(--landing-text-muted)" }}>
          Para organizações com necessidades à medida e volume elevado.
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {customFeatures.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <Check size={16} style={{ color: "var(--landing-accent)" }} className="mt-0.5 shrink-0" />
            <span className="text-sm">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={openModal}
        className="landing-btn-outline flex items-center justify-center gap-2 rounded-xl py-3 text-center text-sm font-semibold transition-all"
      >
        Falar com a equipa
        <ChevronRight size={16} />
      </button>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section
      id="precos"
      className="landing-section-alt py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--landing-accent)" }}
          >
            Preços
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Planos que escalam consigo
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-lg"
            style={{ color: "var(--landing-text-muted)" }}
          >
            Escolha o plano ideal para a sua equipa.
          </p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          <StandardCard />
          <CustomCard />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm"
          style={{ color: "var(--landing-text-muted)" }}
        >
          Todos os planos incluem segurança de nível empresarial e conformidade RGPD.
        </motion.p>
      </div>
    </section>
  );
}
