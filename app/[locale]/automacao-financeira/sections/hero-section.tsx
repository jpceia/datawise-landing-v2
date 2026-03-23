import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { useHubspotContactModal } from "@/components/providers/HubspotContactModalProvider";
import type { StatItem } from "../data";

type HeroSectionProps = {
  stats: StatItem[];
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HeroSection({ stats }: HeroSectionProps) {
  const { openModal } = useHubspotContactModal();

  return (
    <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      {/* Left - Copy */}
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-primary-300/30 bg-primary-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-800 dark:border-primary-200/20 dark:bg-primary-300/10 dark:text-primary-100"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-400" />
          Feito para equipas financeiras (AR/AP)
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Menos operação manual.
          <span className="mt-2 block bg-gradient-to-r from-primary-400 via-primary-300 to-violet-400 bg-clip-text text-transparent">
            Mais tempo para decisões financeiras.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl"
        >
          Centralize faturas, automatize extração e acompanhe cobrança com visibilidade real. Um fluxo único para reduzir erro, acelerar recebimentos e aumentar controlo.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
          <CalendlyPopupButton className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-7 py-3.5 text-base font-semibold text-white transition duration-300 hover:from-primary-500 hover:to-primary-400 hover:shadow-xl hover:shadow-primary-500/25">
            Marcar demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </CalendlyPopupButton>
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-300 px-7 py-3.5 text-base font-semibold text-zinc-800 ring-2 ring-inset ring-primary-500 transition duration-300 hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/[0.05]"
          >
            Pedir acesso
          </button>
        </motion.div>
      </motion.div>

      {/* Right - Stats card */}
      <motion.div
        className="rounded-3xl border border-zinc-200 bg-white/75 p-7 shadow-xl shadow-primary-100/40 backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-950/60 dark:shadow-2xl dark:shadow-black/40 xl:p-9"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="mb-6 text-xs font-medium tracking-[0.18em] text-primary-700/80 uppercase dark:text-primary-100/70">
          Como ajudamos a tua operação
        </p>
        <div className="space-y-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.value + item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
              className="group rounded-2xl border border-zinc-200 bg-white/90 p-5 transition duration-300 hover:border-primary-300/50 hover:bg-primary-50/60 hover:shadow-lg hover:shadow-primary-200/40 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-primary-200/30 dark:hover:bg-white/[0.05] dark:hover:shadow-primary-900/10"
            >
              <p className="text-4xl font-bold tracking-tight text-primary-700 dark:text-primary-100">{item.value}</p>
              <p className="mt-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
