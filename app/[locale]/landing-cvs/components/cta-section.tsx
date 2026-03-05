"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { useHubspotContactModal } from "@/components/providers/HubspotContactModalProvider";

export function CTASection() {
  const { openModal } = useHubspotContactModal();

  return (
    <section className="landing-section-alt py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-12 text-center sm:p-16"
          style={{
            background:
              "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
            style={{ backgroundColor: "white" }}
          />
          <div
            className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-10"
            style={{ backgroundColor: "white" }}
          />

          <div className="relative">
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Pronto para transformar
              <br />a sua gestão de talento?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/80">
              Junte-se a equipas de RH que já reduziram trabalho
              administrativo com base de dados de CVs, gestão de oportunidades
              e matchmaking inteligente.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CalendlyPopupButton className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--landing-gradient-from)] transition-all hover:opacity-90 hover:-translate-y-0.5">
                Marcar Demo
                <ArrowRight size={18} />
              </CalendlyPopupButton>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Pedir acesso
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
