"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Check, ChevronRight } from "lucide-react";
import { useHubspotContactModal } from "@/components/providers/HubspotContactModalProvider";
import styles from "../page.module.css";

const invoiceTiers = [
  { label: "50", value: 50 },
  { label: "100", value: 100 },
  { label: "250", value: 250 },
  { label: "500", value: 500 },
  { label: "1.000", value: 1000 },
];

const standardFeatures = [
  "OCR e extração inteligente de campos",
  "Classificação customizada por categoria",
  "Dashboard e KPIs de cobrança",
  "Multi-utilizador por workspace",
];

const customFeatures = [
  "Tudo incluído no Standard",
  "Volume de faturas ilimitado",
  "Integrações à medida (faturação, drive, ERP, etc)",
  "Reconciliação bancária avançada",
  "Regras automáticas por fornecedor e categoria",
  "Onboarding assistido e suporte customizado",
];

function StandardCard() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const tier = invoiceTiers[selectedIndex];
  const { openModal } = useHubspotContactModal();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col rounded-2xl bg-white/90 p-8 dark:bg-zinc-900/95 ${styles.glowPulse} ${styles.gradientBorder}`}
    >
      <div className="mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-400 dark:text-primary-300">
          Standard
        </h3>
        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Automatize o seu processamento de faturas
        </p>
      </div>

      {/* Volume slider */}
      <div className="mb-6 rounded-xl border border-zinc-200 bg-white/80 p-4 dark:border-white/[0.08] dark:bg-zinc-950/80">
        <div className="mb-3 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
          <span>Faturas processadas / mês</span>
          <span className="rounded-md bg-primary-400/15 px-2 py-0.5 font-bold text-primary-600 dark:text-primary-300">
            {tier.label}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={invoiceTiers.length - 1}
          step={1}
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className={`${styles.slider} w-full cursor-pointer`}
          aria-label="Selecionar volume mensal de faturas"
        />
        <div className="mt-2 flex justify-between text-[10px] text-zinc-500 dark:text-zinc-500">
          <span>50</span>
          <span>1.000</span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {standardFeatures.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 dark:text-primary-300" />
            <span className="text-sm text-zinc-700 dark:text-zinc-200">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={openModal}
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:from-primary-500 hover:to-primary-400 hover:shadow-lg hover:shadow-primary-500/20"
      >
        Pedir uma Demo
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </motion.article>
  );
}

function CustomCard() {
  const { openModal } = useHubspotContactModal();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col rounded-2xl border border-zinc-200 bg-white/85 p-8 transition duration-300 hover:border-zinc-300 dark:border-white/[0.08] dark:bg-zinc-900/80 dark:hover:border-white/15"
    >
      <div className="mb-5">
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
          <Building2 className="h-4 w-4 text-primary-300/70" />
          <h3 className="text-sm font-semibold uppercase tracking-widest">
            Customizado
          </h3>
        </div>
        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Para organizações com volume elevado e necessidades à medida
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {customFeatures.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-300/70" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">{feat}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={openModal}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-500 px-4 py-3 text-sm font-semibold text-primary-600 transition duration-300 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-400/10"
      >
        Falar connosco
        <ChevronRight className="h-4 w-4" />
      </button>
    </motion.article>
  );
}

export function PricingSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-primary-700/80 uppercase dark:text-primary-100/70">
          Preços
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Planos que escalam com a sua operação
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
          Escolha o plano ideal para a sua equipa.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
        <StandardCard />
        <CustomCard />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400"
      >
        Todos os planos incluem segurança de nível empresarial e conformidade RGPD.
      </motion.p>
    </section>
  );
}
