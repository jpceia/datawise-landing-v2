"use client";

import { motion } from "framer-motion";
import { Clock, Award, BarChart3, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    tag: "Eficiência",
    title: "Reduza o tempo de triagem em 80%",
    description:
      "Chega de passar horas a ler CVs manualmente. A IA faz a triagem inicial e apresenta-lhe apenas os candidatos que realmente correspondem ao perfil. O seu tempo vale mais do que isso.",
    visual: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-24 text-right text-xs" style={{ color: "var(--landing-text-muted)" }}>
            Antes
          </span>
          <div className="h-4 flex-1 rounded-full" style={{ backgroundColor: "var(--landing-border)" }}>
            <div className="h-4 w-full rounded-full" style={{ backgroundColor: "#EF4444", opacity: 0.7 }} />
          </div>
          <span className="w-12 text-xs font-semibold" style={{ color: "#EF4444" }}>4h/dia</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-24 text-right text-xs" style={{ color: "var(--landing-text-muted)" }}>
            Com Datawise CV
          </span>
          <div className="h-4 flex-1 rounded-full" style={{ backgroundColor: "var(--landing-border)" }}>
            <div className="h-4 w-1/5 rounded-full" style={{ background: "linear-gradient(90deg, var(--landing-gradient-from), var(--landing-gradient-to))" }} />
          </div>
          <span className="w-12 text-xs font-semibold" style={{ color: "var(--landing-accent)" }}>48min</span>
        </div>
      </div>
    ),
  },
  {
    icon: Award,
    tag: "Imagem Profissional",
    title: "Apresente candidatos com a imagem da empresa",
    description:
      "CVs gerados automaticamente com o template e branding do seu cliente. Consistência visual, identidade profissional e muito menos trabalho de formatação.",
    visual: (
      <div
        className="rounded-xl p-4"
        style={{ backgroundColor: "var(--landing-bg)" }}
      >
        <div className="mb-3 flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-lg"
            style={{
              background: "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))",
            }}
          />
          <div>
            <div className="h-2.5 w-24 rounded-full" style={{ backgroundColor: "var(--landing-text)", opacity: 0.8 }} />
            <div className="mt-1 h-2 w-16 rounded-full" style={{ backgroundColor: "var(--landing-text-muted)", opacity: 0.5 }} />
          </div>
        </div>
        <div className="space-y-1.5">
          {[80, 60, 70, 45].map((w, i) => (
            <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, backgroundColor: "var(--landing-border)" }} />
          ))}
        </div>
        <div
          className="mt-3 rounded-md px-3 py-1.5 text-center text-xs font-semibold text-white"
          style={{ background: "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))" }}
        >
          Exportar CV Profissional
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    tag: "Data-Driven",
    title: "Decisões baseadas em dados",
    description:
      "Dashboard com métricas de pipeline, scores de matching e analytics de recrutamento. Tome decisões fundamentadas e melhore continuamente o seu processo.",
    visual: (
      <div className="space-y-2">
        {[
          { label: "Ana Silva", score: 92 },
          { label: "Marco Santos", score: 87 },
          { label: "Sofia Costa", score: 75 },
          { label: "Pedro Neves", score: 63 },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-24 truncate text-xs" style={{ color: "var(--landing-text-muted)" }}>
              {row.label}
            </span>
            <div className="h-3 flex-1 rounded-full" style={{ backgroundColor: "var(--landing-border)" }}>
              <motion.div
                className="h-3 rounded-full"
                style={{ background: "linear-gradient(90deg, var(--landing-gradient-from), var(--landing-gradient-to))" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${row.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <span className="w-8 text-right text-xs font-bold" style={{ color: "var(--landing-accent)" }}>
              {row.score}%
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Users,
    tag: "Colaboração",
    title: "Colaboração em equipa sem fricção",
    description:
      "Convide colegas, defina roles (admin, member, viewer) e trabalhem em conjunto no mesmo workspace. Multi-empresa com isolamento total de dados.",
    visual: (
      <div className="flex flex-wrap gap-2">
        {[
          { name: "Rita M.", role: "Admin" },
          { name: "João P.", role: "Member" },
          { name: "Carla S.", role: "Member" },
          { name: "Tiago R.", role: "Viewer" },
        ].map((user) => (
          <div
            key={user.name}
            className="flex items-center gap-2 rounded-lg px-3 py-2"
            style={{ backgroundColor: "var(--landing-bg)", border: "1px solid var(--landing-border)" }}
          >
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg, var(--landing-gradient-from), var(--landing-gradient-to))" }}
            >
              {user.name[0]}
            </div>
            <div>
              <p className="text-xs font-medium">{user.name}</p>
              <p className="text-xs" style={{ color: "var(--landing-text-muted)" }}>{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--landing-accent)" }}
          >
            Benefícios
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Desenhado para equipas
            <br />
            <span className="landing-gradient-text">de Talento & RH</span>
          </h2>
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-24">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text */}
                <div className="space-y-6">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--landing-accent-light)",
                      color: "var(--landing-accent)",
                    }}
                  >
                    <Icon size={14} />
                    {benefit.tag}
                  </div>
                  <h3
                    className="text-2xl font-bold sm:text-3xl"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--landing-text-muted)" }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Visual */}
                <div
                  className="landing-card rounded-2xl p-8"
                  style={{ backgroundColor: "var(--landing-bg-alt)" }}
                >
                  {benefit.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
