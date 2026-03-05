"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const METRICS: Metric[] = [
  { value: 5, suffix: "+", label: "Códigos indexados", description: "CC, CPC, CT, CP, CPP" },
  { value: 100, suffix: "%", label: "Respostas com fonte", description: "Sem excepções" },
  { value: 3, suffix: "s", label: "Tempo de resposta", description: "Média por consulta" },
  { value: 0, suffix: "", label: "Respostas inventadas", description: "Garantia de rigor" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (target === 0) { setCount(0); return; }
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="landing-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="landing-heading text-2xl sm:text-3xl font-bold mb-3">
            Construído sobre legislação real.{" "}
            <span className="landing-gradient-text">Citado na fonte.</span>
          </h2>
          <p className="text-[var(--landing-text-secondary)] max-w-xl mx-auto">
            Cada número reflecte o nosso compromisso com o rigor jurídico.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="landing-card text-center"
            >
              <div className="landing-heading text-4xl sm:text-5xl font-bold landing-gradient-text mb-2">
                <CountUp target={m.value} suffix={m.suffix} active={inView} />
              </div>
              <div className="text-[var(--landing-text-primary)] font-semibold text-sm mb-1">
                {m.label}
              </div>
              <div className="text-[var(--landing-text-muted)] text-xs">{m.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
