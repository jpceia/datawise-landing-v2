import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-cyan-100/80 via-white to-blue-100/70 px-8 py-16 text-center dark:border-cyan-200/20 dark:from-cyan-950/60 dark:via-cyan-900/30 dark:to-blue-950/40 md:px-12 md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 translate-y-1/2 rounded-full bg-blue-400/10 blur-[80px]" />
      </div>

      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/20 px-4 py-1.5 text-xs font-medium text-cyan-800 dark:border-cyan-100/20 dark:bg-cyan-300/10 dark:text-cyan-100">
          <Clock3 className="h-3.5 w-3.5" />
          Setup em minutos
        </p>

        <h3 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Comeca hoje.{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Entrega mais previsibilidade financeira
          </span>{" "}
          já neste trimestre.
        </h3>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
          Experimenta com a tua equipa e mede o impacto no teu fluxo real de faturas e cobrança.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-200 px-8 py-4 text-base font-bold text-slate-950 transition duration-300 hover:from-cyan-200 hover:to-white hover:shadow-xl hover:shadow-cyan-400/25"
          >
            Comecar grátis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="mailto:sales@saasinvoice.app?subject=Pedido%20de%20demo"
            className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-300 px-8 py-4 text-base font-semibold text-zinc-800 transition duration-300 hover:border-cyan-300/60 hover:bg-zinc-100 dark:border-white/20 dark:text-zinc-100 dark:hover:border-cyan-200/40 dark:hover:bg-white/[0.05]"
          >
            Marcar demo
          </a>
        </div>
      </div>
    </section>
  );
}
