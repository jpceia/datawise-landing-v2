"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Zap, Building2, User } from "lucide-react";

const PRO_TIERS = [
  { mensagens: 100, monthly: 39, annual: 31 },
  { mensagens: 200, monthly: 59, annual: 47 },
  { mensagens: 500, monthly: 129, annual: 103 },
  { mensagens: 1000, monthly: 219, annual: 175 },
];

const FREE_FEATURES = [
  "20 mensagens por mês",
  "Código Civil + CPC",
  "1 utilizador",
  "Citações em cada resposta",
  "Histórico de 7 dias",
];

const PRO_FEATURES = [
  "Toda a legislação indexada",
  "Até 10 membros",
  "Gestão de permissões",
  "Histórico de 90 dias",
];

const ENTERPRISE_FEATURES = [
  "Mensagens ilimitadas",
  "Membros ilimitados",
  "Integrações à medida",
  "Jurisprudência (em breve)",
  "Carregamento de processos (em breve)",
  "Onboarding dedicado",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(true);
  const [tierIndex, setTierIndex] = useState(1); // default: 200 mensagens

  const tier = PRO_TIERS[tierIndex];
  const price = annual ? tier.annual : tier.monthly;

  return (
    <section id="precos" className="landing-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="landing-heading text-3xl sm:text-4xl font-bold mb-4">
            Planos que crescem{" "}
            <span className="landing-gradient-text">com o seu escritório</span>
          </h2>
          <p className="text-[var(--landing-text-secondary)] max-w-xl mx-auto text-lg mb-8">
            Comece grátis. Escale quando precisar.
          </p>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                !annual ? "text-[var(--landing-text-primary)]" : "text-[var(--landing-text-muted)]"
              }`}
            >
              Mensal
            </span>
            <button
              onClick={() => setAnnual((a) => !a)}
              className={`landing-toggle ${annual ? "active" : ""}`}
              aria-label="Toggle annual billing"
            >
              <div className="landing-toggle-thumb" />
            </button>
            <span
              className={`text-sm font-medium flex items-center gap-2 transition-colors duration-200 ${
                annual ? "text-[var(--landing-text-primary)]" : "text-[var(--landing-text-muted)]"
              }`}
            >
              Anual
              <motion.span
                animate={{ scale: annual ? [1, 1.15, 1] : 1 }}
                transition={{ duration: 0.3 }}
                className="landing-badge landing-badge-teal text-xs py-0.5 px-2"
              >
                -20%
              </motion.span>
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landing-card"
          >
            <div className="flex items-center gap-2 mb-4">
              <User size={18} className="text-[var(--landing-text-secondary)]" />
              <span className="font-semibold text-[var(--landing-text-secondary)]">Free</span>
            </div>
            <div className="mb-2">
              <span className="landing-heading text-4xl font-bold">€0</span>
              <span className="text-[var(--landing-text-muted)] ml-1">/mês</span>
            </div>
            <p className="text-sm text-[var(--landing-text-muted)] mb-6">
              Para advogados a descobrir a plataforma.
            </p>
            <a
              href="/register"
              className="block w-full text-center mb-6 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Começar Grátis
            </a>
            <ul className="space-y-2.5">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--landing-text-secondary)]">
                  <Check size={15} className="text-[var(--landing-accent-teal)] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="landing-card-highlight relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="landing-badge landing-badge-gold text-xs py-1 px-3">
                Mais Popular
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 mt-2">
              <Zap size={18} className="text-[var(--landing-accent-gold)]" />
              <span className="font-semibold text-[var(--landing-accent-gold)]">Pro</span>
            </div>

            {/* Animated price */}
            <div className="mb-1 flex items-end gap-1">
              <span className="landing-heading text-4xl font-bold landing-gradient-text">
                €
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={`${price}-${annual}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "inline-block" }}
                  >
                    {price}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-[var(--landing-text-muted)] mb-1">/mês</span>
            </div>

            <p className="text-xs text-[var(--landing-text-muted)] mb-4 min-h-[18px]">
              até {tier.mensagens} mensagens/mês
              <AnimatePresence>
                {annual && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-[var(--landing-accent-teal)] ml-2"
                  >
                    · faturado anualmente
                  </motion.span>
                )}
              </AnimatePresence>
            </p>

            {/* Volume slider */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-[var(--landing-text-muted)] mb-2">
                <span>Volume de mensagens</span>
                <span className="text-[var(--landing-accent-gold)] font-semibold">
                  {tier.mensagens}/mês
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={PRO_TIERS.length - 1}
                step={1}
                value={tierIndex}
                onChange={(e) => setTierIndex(Number(e.target.value))}
                className="landing-slider w-full"
              />
              <div className="flex justify-between text-xs text-[var(--landing-text-muted)] mt-1">
                {PRO_TIERS.map((t) => (
                  <span key={t.mensagens}>{t.mensagens}</span>
                ))}
              </div>
            </div>

            <a href="/register" className="landing-btn-primary w-full justify-center mb-6 block text-center">
              Subscrever Pro
            </a>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-[var(--landing-text-secondary)]">
                <Check size={15} className="text-[var(--landing-accent-teal)] mt-0.5 shrink-0" />
                Tudo do plano Free
              </li>
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--landing-text-secondary)]">
                  <Check size={15} className="text-[var(--landing-accent-teal)] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="landing-card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={18} className="text-[var(--landing-text-secondary)]" />
              <span className="font-semibold text-[var(--landing-text-secondary)]">Enterprise</span>
            </div>
            <div className="mb-2">
              <span className="landing-heading text-4xl font-bold">Custom</span>
            </div>
            <p className="text-sm text-[var(--landing-text-muted)] mb-6">
              Para grandes escritórios e departamentos jurídicos.
            </p>
            <a
              href="#CALENDLY_URL"
              className="block w-full text-center mb-6 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Falar com a Equipa
            </a>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-[var(--landing-text-secondary)]">
                <Check size={15} className="text-[var(--landing-accent-teal)] mt-0.5 shrink-0" />
                Tudo do plano Pro
              </li>
              {ENTERPRISE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--landing-text-secondary)]">
                  <Check size={15} className="text-[var(--landing-accent-teal)] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-[var(--landing-text-muted)] mt-8"
        >
          Conformidade RGPD garantida · Dados armazenados na UE · Sem custos ocultos · Cancele a qualquer momento
        </motion.p>
      </div>
    </section>
  );
}
