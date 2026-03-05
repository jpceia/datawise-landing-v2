type WorkflowSectionProps = {
  workflow: string[];
};

const stepLabels = ["Upload", "Processamento", "Cobrança"];

export function WorkflowSection({ workflow }: WorkflowSectionProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50/70 p-10 dark:border-white/[0.08] dark:from-zinc-900/90 dark:via-zinc-950/80 dark:to-cyan-950/30 lg:p-14">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-cyan-700/80 uppercase dark:text-cyan-100/70">
            Como funciona
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Fluxo simples,{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
              impacto imediato
            </span>
          </h3>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Sem reinventar o teu processo. A plataforma encaixa no dia a dia da equipa e remove fricção onde hoje ha mais custo operacional.
          </p>
        </div>

        {/* Right - Steps */}
        <ol className="relative space-y-5">
          {/* Connecting line */}
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-cyan-400/30 via-cyan-300/15 to-transparent" />

          {workflow.map((step, index) => (
            <li
              key={step}
            className="group relative flex gap-5 rounded-xl border border-zinc-200 bg-white/80 p-5 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-50/60 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-cyan-200/25 dark:hover:bg-white/[0.04]"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-sm font-bold text-cyan-700 ring-1 ring-cyan-300/30 transition duration-300 group-hover:from-cyan-400/30 group-hover:ring-cyan-300/50 dark:text-cyan-100 dark:ring-cyan-200/20 dark:group-hover:ring-cyan-200/40">
                {index + 1}
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-cyan-700/70 uppercase dark:text-cyan-200/60">
                  {stepLabels[index]}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
                  {step}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
