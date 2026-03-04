"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, BookOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background orbs */}
      <div
        className="landing-orb landing-orb-gold"
        style={{ width: 600, height: 600, top: "-10%", right: "-15%", opacity: 0.12 }}
      />
      <div
        className="landing-orb landing-orb-blue"
        style={{ width: 500, height: 500, bottom: "5%", left: "-10%", opacity: 0.1 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="landing-badge landing-badge-gold mb-6 inline-flex">
                <Shield size={13} />
                IA Jurídica Segura
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="landing-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold mb-6 leading-tight"
            >
              A inteligência artificial jurídica{" "}
              <span className="landing-gradient-text">em que pode confiar</span>{" "}
              — fundamentada em legislação, verificável na fonte.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-[var(--landing-text-secondary)] mb-8 leading-relaxed max-w-xl"
            >
              O Datawise Lex ajuda-o a construir argumentação jurídica sólida,
              citando sempre o artigo exato do Código Civil, Código de Processo
              Civil e demais legislação aplicável. Para advogados que não
              aceitam argumentos sem fundamento.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
              <a href="/register" className="landing-btn-primary">
                Experimentar Gratuitamente
                <ArrowRight size={16} />
              </a>
              <a href="#agendar-demo" className="landing-btn-outline">
                Agendar Demo
              </a>
            </motion.div>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-4 text-sm text-[var(--landing-text-muted)]"
            >
              Plano gratuito disponível · 20 mensagens/mês · Sem cartão de crédito
            </motion.p>
          </div>

          {/* Right — chat mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          >
            <div className="landing-chat-mock">
              {/* Header bar */}
              <div className="landing-chat-header">
                <div className="flex gap-1.5">
                  <div className="landing-chat-dot bg-red-500/60" />
                  <div className="landing-chat-dot bg-yellow-500/60" />
                  <div className="landing-chat-dot bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <BookOpen size={14} className="text-[var(--landing-accent-gold)]" />
                  <span className="text-xs text-[var(--landing-text-muted)] font-mono">
                    Datawise Lex — Legislação Portuguesa
                  </span>
                </div>
              </div>

              {/* Chat body */}
              <div className="p-5 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[var(--landing-bg-surface)] border border-[var(--landing-border)] rounded-xl rounded-tr-sm px-4 py-3 max-w-xs text-sm text-[var(--landing-text-primary)]">
                    Quais os prazos de prescrição ordinária no direito civil português?
                  </div>
                </div>

                {/* Assistant message */}
                <div className="flex justify-start">
                  <div className="max-w-sm space-y-3">
                    <div className="bg-[var(--landing-bg-secondary)] border border-[var(--landing-border)] rounded-xl rounded-tl-sm px-4 py-3 text-sm text-[var(--landing-text-primary)] leading-relaxed">
                      O prazo ordinário de prescrição é de{" "}
                      <strong className="text-[var(--landing-accent-gold)]">
                        vinte anos
                      </strong>
                      , conforme estabelece o Código Civil. Existem prazos
                      especiais mais curtos para determinadas situações.
                    </div>

                    {/* Citation card */}
                    <div className="landing-citation">
                      <div className="text-[var(--landing-accent-gold)] text-xs font-semibold mb-1 uppercase tracking-wide">
                        Fonte Legal
                      </div>
                      <div className="text-[var(--landing-text-primary)] text-sm font-medium">
                        Art. 309.º — Código Civil
                      </div>
                      <div className="text-[var(--landing-text-secondary)] text-xs mt-1">
                        «O prazo ordinário de prescrição é de vinte anos.»
                      </div>
                    </div>

                    {/* Second citation */}
                    <div className="landing-citation">
                      <div className="text-[var(--landing-accent-gold)] text-xs font-semibold mb-1 uppercase tracking-wide">
                        Prazo Especial
                      </div>
                      <div className="text-[var(--landing-text-primary)] text-sm font-medium">
                        Art. 310.º — Código Civil
                      </div>
                      <div className="text-[var(--landing-text-secondary)] text-xs mt-1">
                        Prescrevem no prazo de cinco anos as prestações periódicas...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-2 text-xs text-[var(--landing-text-muted)]">
                  <div className="flex gap-1">
                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[var(--landing-accent-gold)] inline-block" />
                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[var(--landing-accent-gold)] inline-block" />
                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-[var(--landing-accent-gold)] inline-block" />
                  </div>
                  <span>A pesquisar legislação adicional...</span>
                </div>
              </div>

              {/* Input bar */}
              <div className="border-t border-[var(--landing-border)] px-4 py-3 flex items-center gap-3">
                <div className="flex-1 bg-[var(--landing-bg-surface)] rounded-lg px-3 py-2 text-sm text-[var(--landing-text-muted)]">
                  Faça a sua questão jurídica...
                </div>
                <button className="landing-btn-primary py-2 px-3 text-xs">
                  Enviar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
