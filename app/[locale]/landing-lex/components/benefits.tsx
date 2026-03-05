"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Scale, Users, Puzzle } from "lucide-react";

const BENEFITS = [
  {
    icon: Scale,
    title: "Rigor",
    headline: "Nunca mais uma resposta sem fonte",
    description:
      "Todas as respostas incluem referência ao artigo exacto do código aplicável. Copie, cite, confie. O seu trabalho assente em legislação real.",
    visual: (
      <div className="space-y-3">
        <div className="landing-citation">
          <div className="text-[var(--landing-accent-gold)] text-xs font-semibold mb-1 uppercase tracking-wide">
            Fonte Legal
          </div>
          <div className="text-[var(--landing-text-primary)] text-sm font-medium">Art. 483.º — Código Civil</div>
          <div className="text-[var(--landing-text-secondary)] text-xs mt-1">
            «Aquele que, com dolo ou mera culpa, violar ilicitamente o direito
            de outrem...»
          </div>
        </div>
        <div className="landing-citation">
          <div className="text-[var(--landing-accent-gold)] text-xs font-semibold mb-1 uppercase tracking-wide">
            Artigo Relacionado
          </div>
          <div className="text-[var(--landing-text-primary)] text-sm font-medium">Art. 562.º — Código Civil</div>
          <div className="text-[var(--landing-text-secondary)] text-xs mt-1">
            «Quem estiver obrigado a reparar um dano deve reconstituir a situação...»
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Clock,
    title: "Velocidade",
    headline: "Pesquise em segundos o que levaria horas",
    description:
      "Concentre-se no que interessa: a estratégia e o cliente. Deixe a pesquisa de legislação para a IA. Resposta média em menos de 3 segundos.",
    visual: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="text-xs text-[var(--landing-text-secondary)] w-28 text-right shrink-0">Pesquisa manual</div>
          <div className="flex-1 bg-[var(--landing-border)] rounded-full h-7 relative overflow-hidden">
            <div
              className="h-full rounded-full bg-red-500/40 flex items-center justify-end pr-3"
              style={{ width: "85%" }}
            >
              <span className="text-xs text-red-300 font-semibold">~45 min</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-[var(--landing-text-secondary)] w-28 text-right shrink-0">Datawise Lex</div>
          <div className="flex-1 bg-[var(--landing-border)] rounded-full h-7 relative overflow-hidden">
            <div
              className="h-full rounded-full flex items-center justify-end pr-3"
              style={{
                width: "8%",
                background: "linear-gradient(90deg, #2196f3, #90caf9)",
                minWidth: "80px",
              }}
            >
              <span className="text-xs text-[#0b1220] font-bold ml-2">&lt; 3s</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--landing-text-muted)] text-center mt-2">
          Tempo médio de pesquisa por consulta
        </p>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Colaboração",
    headline: "O seu escritório, sincronizado",
    description:
      "Adicione toda a sua equipa, defina quem pode fazer o quê e mantenha todos alinhados. Gestão de permissões por papel para escritórios de qualquer dimensão.",
    visual: (
      <div className="space-y-2.5">
        {[
          { name: "Ana Sousa", role: "Admin", color: "bg-[rgba(66,165,245,0.16)] border-[rgba(66,165,245,0.35)] text-[#90caf9]" },
          { name: "Miguel Costa", role: "Advogado", color: "bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.25)] text-[#60a5fa]" },
          { name: "Inês Martins", role: "Advogado", color: "bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.25)] text-[#60a5fa]" },
          { name: "Pedro Neves", role: "Estagiário", color: "bg-[rgba(13,148,136,0.1)] border-[rgba(13,148,136,0.25)] text-[#2dd4bf]" },
        ].map((member) => (
          <div
            key={member.name}
            className="flex items-center justify-between bg-[var(--landing-bg-surface)] border border-[var(--landing-border)] rounded-lg px-3 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[var(--landing-bg-secondary)] border border-[var(--landing-border)] flex items-center justify-center text-xs font-semibold text-[var(--landing-accent-gold)]">
                {member.name.charAt(0)}
              </div>
              <span className="text-sm text-[var(--landing-text-primary)]">{member.name}</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${member.color}`}>
              {member.role}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Puzzle,
    title: "Personalização",
    headline: "Adaptado ao seu caso",
    description:
      "A Datawise desenvolve funcionalidades à medida do seu escritório. Integrações com os seus sistemas, fluxos personalizados e suporte dedicado.",
    visual: (
      <div className="flex flex-col items-center justify-center h-full gap-4 py-4">
        <div className="w-16 h-16 rounded-2xl bg-[rgba(66,165,245,0.14)] border border-[rgba(66,165,245,0.28)] flex items-center justify-center">
          <Puzzle size={32} className="text-[var(--landing-accent-gold)]" />
        </div>
        <div className="text-center">
          <div className="font-semibold text-[var(--landing-text-primary)] mb-1">
            Software à Medida
          </div>
          <div className="text-sm text-[var(--landing-text-secondary)] max-w-[200px]">
            Integrações personalizadas para o seu escritório
          </div>
        </div>
        <a
          href="https://www.datawise.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-btn-outline text-sm py-2 px-5"
        >
          Saber mais
        </a>
      </div>
    ),
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="landing-section" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="landing-heading text-3xl sm:text-4xl font-bold mb-4">
            Desenhado para profissionais jurídicos{" "}
            <span className="landing-gradient-text">que valorizam rigor</span>
          </h2>
          <p className="text-[var(--landing-text-secondary)] max-w-xl mx-auto text-lg">
            Cada funcionalidade pensada para o contexto real do advogado português.
          </p>
        </motion.div>

        <div className="space-y-10">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                  !isEven ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Text */}
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(66,165,245,0.14)] border border-[rgba(66,165,245,0.28)] flex items-center justify-center">
                      <Icon size={18} className="text-[var(--landing-accent-gold)]" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--landing-accent-gold)] uppercase tracking-wide">
                      {b.title}
                    </span>
                  </div>
                  <h3 className="landing-heading text-2xl sm:text-3xl font-bold mb-4">
                    {b.headline}
                  </h3>
                  <p className="text-[var(--landing-text-secondary)] leading-relaxed text-lg">
                    {b.description}
                  </p>
                </div>

                {/* Visual */}
                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="landing-card p-5 sm:p-6">{b.visual}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
