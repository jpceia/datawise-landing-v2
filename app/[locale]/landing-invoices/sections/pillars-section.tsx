import type { PillarItem } from "../data";

type PillarsSectionProps = {
  pillars: PillarItem[];
};

export function PillarsSection({ pillars }: PillarsSectionProps) {
  return (
    <section>
      <div className="mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-700/80 uppercase dark:text-cyan-100/70">
          Porquê nós
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Três pilares para a tua operação
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article
              key={pillar.title}
              className="group relative rounded-2xl border border-zinc-200 bg-white/80 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-cyan-50/60 hover:shadow-[0_16px_48px_-16px_rgba(14,116,144,0.35)] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-cyan-200/30 dark:hover:bg-cyan-300/[0.04] dark:hover:shadow-[0_16px_48px_-16px_rgba(34,211,238,0.35)]"
            >
              {/* Subtle top accent line */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/10 ring-1 ring-cyan-200/15 transition duration-500 group-hover:scale-110 group-hover:from-cyan-400/25 group-hover:to-blue-500/15 group-hover:ring-cyan-100/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <Icon className="h-5 w-5 text-cyan-700 dark:text-cyan-200" />
              </div>
              <h2 className="text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-cyan-800 dark:group-hover:text-cyan-100">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                {pillar.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
