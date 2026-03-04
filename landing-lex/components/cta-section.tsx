"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="landing-section" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d2137 0%, #1a3a54 50%, #0d2137 100%)",
            border: "1px solid rgba(201,165,90,0.2)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #c9a55a 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
          />

          <div className="relative z-10 text-center py-16 px-6 sm:py-20">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="landing-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 max-w-2xl mx-auto"
            >
              Pronto para pesquisar legislação com{" "}
              <span className="landing-gradient-text">rigor e velocidade?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--landing-text-secondary)] text-lg mb-8 max-w-xl mx-auto"
            >
              Junte-se aos profissionais jurídicos que já usam IA para construir
              argumentação fundamentada — com a garantia de que cada resposta
              cita a fonte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <a href="/register" className="landing-btn-primary text-base py-3 px-7">
                Começar Gratuitamente
                <ArrowRight size={18} />
              </a>
              <a
                href="#CALENDLY_URL"
                className="landing-btn-outline text-base py-3 px-7 border-white/20 text-white hover:border-[var(--landing-accent-gold)] hover:text-[var(--landing-accent-gold)]"
              >
                Agendar Demo
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 text-sm text-[var(--landing-text-muted)]"
            >
              Plano gratuito disponível · Sem cartão de crédito · Dados na UE
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
