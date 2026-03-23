import { ArrowRight, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { useHubspotContactModal } from "@/components/providers/HubspotContactModalProvider";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FinalCtaSection() {
  const { openModal } = useHubspotContactModal();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-primary-300/30 bg-gradient-to-br from-primary-50/80 via-white to-primary-100/70 px-8 py-16 text-center dark:border-primary-200/20 dark:from-primary-dark/60 dark:via-primary-900/30 dark:to-primary-dark/40 md:px-12 md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 translate-y-1/2 rounded-full bg-primary-500/10 blur-[80px]" />
      </div>

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-primary-300/40 bg-primary-300/20 px-4 py-1.5 text-xs font-medium text-primary-800 dark:border-primary-100/20 dark:bg-primary-300/10 dark:text-primary-100"
        >
          <Clock3 className="h-3.5 w-3.5" />
          Setup em minutos
        </motion.p>

        <motion.h3
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          Começa hoje.{" "}
          <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-violet-400 bg-clip-text text-transparent">
            Entrega mais previsibilidade financeira
          </span>{" "}
          já neste trimestre.
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg"
        >
          Experimenta com a tua equipa e mede o impacto no teu fluxo real de faturas e cobrança.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
          <CalendlyPopupButton className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-4 text-base font-bold text-white transition duration-300 hover:from-primary-500 hover:to-primary-400 hover:shadow-xl hover:shadow-primary-500/25">
            Marcar demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </CalendlyPopupButton>
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-300 px-8 py-4 text-base font-semibold text-zinc-800 ring-2 ring-inset ring-primary-500 transition duration-300 hover:bg-zinc-100 dark:border-white/20 dark:text-zinc-100 dark:hover:bg-white/[0.05]"
          >
            Pedir acesso
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
