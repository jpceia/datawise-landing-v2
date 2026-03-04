"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 12047, suffix: "+", label: "CVs Processados" },
  { value: 10, suffix: "x", label: "Mais Rápido" },
  { value: 95, suffix: "%", label: "Precisão da IA" },
  { value: 3, suffix: "s", label: "Tempo de Parsing" },
];

function CountUp({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString("pt-PT")}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="landing-section-alt py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-semibold uppercase tracking-widest"
          style={{ color: "var(--landing-accent)" }}
        >
          Números que falam por si
        </motion.p>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-4xl font-bold sm:text-5xl"
                style={{
                  fontFamily: "var(--font-heading), serif",
                  color: "var(--landing-accent)",
                }}
              >
                <CountUp target={metric.value} suffix={metric.suffix} inView={inView} />
              </p>
              <p
                className="mt-2 text-sm font-medium"
                style={{ color: "var(--landing-text-muted)" }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
