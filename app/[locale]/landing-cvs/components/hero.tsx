"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      {/* Background orbs */}
      <div
        className="landing-orb"
        style={{
          width: 600,
          height: 600,
          top: -200,
          right: -200,
          background: "var(--landing-gradient-from)",
        }}
      />
      <div
        className="landing-orb"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -100,
          background: "var(--landing-gradient-to)",
        }}
      />

      <div className="relative mx-auto max-w-5xl pt-12 text-center sm:pt-16">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          Recrute melhor.
          <br />
          <span className="landing-gradient-text">Recrute mais rápido.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl"
          style={{ color: "var(--landing-text-muted)" }}
        >
          A plataforma de recrutamento com IA que automatiza a triagem de CVs,
          gera documentos profissionais e encontra os candidatos ideais para cada
          oportunidade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/register"
            className="landing-btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
          >
            Começar Grátis
            <ArrowRight size={18} />
          </Link>
          <a
            href="mailto:demo@datawise.pt"
            className="landing-btn-outline inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
          >
            Agendar Demo
          </a>
        </motion.div>

        {/* Platform mockup / visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-4xl pt-6"
        >
          <div
            className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "var(--landing-accent-light)",
              color: "var(--landing-accent)",
              border: "1px solid var(--landing-accent)",
            }}
          >
            <Sparkles size={16} />
            Automatização inteligente para RH
          </div>

          <div
            className="landing-card overflow-hidden rounded-2xl p-1"
            style={{
              background:
                "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
            }}
          >
            <div
              className="rounded-xl p-6 sm:p-8"
              style={{ backgroundColor: "var(--landing-bg-card)" }}
            >
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#EF4444" }}
                    />
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#F59E0B" }}
                    />
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#22C55E" }}
                    />
                  </div>
                  <div
                    className="rounded-md px-3 py-1 text-xs"
                    style={{
                      backgroundColor: "var(--landing-bg-alt)",
                      color: "var(--landing-text-muted)",
                    }}
                  >
                    cv.datawise.pt/dashboard
                  </div>
                </div>

                {/* Mock content rows */}
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "CVs Processados", value: "1,247", color: "var(--landing-gradient-from)" },
                    { label: "Taxa de Matching", value: "94.2%", color: "var(--landing-gradient-to)" },
                    { label: "Tempo Médio", value: "< 30s", color: "#22C55E" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-4"
                      style={{ backgroundColor: "var(--landing-bg-alt)" }}
                    >
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--landing-text-muted)" }}
                      >
                        {stat.label}
                      </p>
                      <p
                        className="mt-1 text-2xl font-bold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mock table rows */}
                <div className="space-y-2">
                  {[
                    { name: "Ana Silva", role: "Frontend Developer", score: "92%" },
                    { name: "Marco Santos", role: "Data Engineer", score: "87%" },
                    { name: "Sofia Costa", role: "Product Manager", score: "85%" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between rounded-lg px-4 py-3"
                      style={{ backgroundColor: "var(--landing-bg-alt)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
                          }}
                        >
                          {row.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{row.name}</p>
                          <p
                            className="text-xs"
                            style={{ color: "var(--landing-text-muted)" }}
                          >
                            {row.role}
                          </p>
                        </div>
                      </div>
                      <span
                        className="rounded-md px-2 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: "var(--landing-accent-light)",
                          color: "var(--landing-accent)",
                        }}
                      >
                        {row.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

