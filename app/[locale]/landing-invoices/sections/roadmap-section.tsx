import { ArrowLeftRight, Brain, Bot, Building2, MessageSquare, Tag, TrendingUp } from "lucide-react";

/* ── Mockup illustrations (pure JSX/CSS) ── */

function BankReconciliationMockup() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/85 p-5 dark:border-white/[0.06] dark:bg-zinc-950/80">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-cyan-300/70" />
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Reconciliação Bancaria</span>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
          3 matched
        </span>
      </div>

      {/* Bank statement rows */}
      <div className="space-y-2">
        {[
          { desc: "PAG REF 2024-0892", amount: "-€ 1.240,00", status: "matched" },
          { desc: "TRF FORNEC ALPHA LDA", amount: "-€ 890,50", status: "matched" },
          { desc: "PAG REF 2024-0901", amount: "-€ 2.100,00", status: "pending" },
        ].map((row) => (
          <div
            key={row.desc}
            className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  row.status === "matched" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                }`}
              />
              <span className="text-xs text-zinc-300">{row.desc}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-zinc-400">{row.amount}</span>
              {row.status === "matched" ? (
                <ArrowLeftRight className="h-3 w-3 text-emerald-400/60" />
              ) : (
                <span className="text-[9px] font-semibold text-amber-400/80">REVIEW</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Matching indicator */}
      <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-dashed border-cyan-300/15 bg-cyan-950/20 py-2">
        <TrendingUp className="h-3.5 w-3.5 text-cyan-300/50" />
        <span className="text-[10px] text-cyan-200/50">Matching assistido por IA</span>
      </div>
    </div>
  );
}

function ClassificationMockup() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/85 p-5 dark:border-white/[0.06] dark:bg-zinc-950/80">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-violet-300/70" />
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Categorias Custom</span>
        </div>
        <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold text-violet-400">
          workspace
        </span>
      </div>

      {/* Category tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {[
          { label: "Material Escritorio", color: "bg-blue-500/20 text-blue-300 border-blue-400/20" },
          { label: "Software & SaaS", color: "bg-violet-500/20 text-violet-300 border-violet-400/20" },
          { label: "Telecomunicacoes", color: "bg-amber-500/20 text-amber-300 border-amber-400/20" },
          { label: "Servicos Externos", color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/20" },
        ].map((tag) => (
          <span
            key={tag.label}
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium ${tag.color}`}
          >
            <Tag className="h-2.5 w-2.5" />
            {tag.label}
          </span>
        ))}
      </div>

      {/* Rule example */}
      <div className="space-y-2">
        <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-zinc-500 uppercase">Regra automatica</span>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
              ATIVA
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-300">
            Se fornecedor contém <span className="font-semibold text-violet-300">&quot;Microsoft&quot;</span> → Software & SaaS
          </p>
        </div>
        <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-zinc-500 uppercase">Regra automatica</span>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
              ATIVA
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-300">
            Se valor &gt; <span className="font-semibold text-amber-300">€5.000</span> → Requer aprovacao
          </p>
        </div>
      </div>
    </div>
  );
}

function ChatbotMockup() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/85 p-5 dark:border-white/[0.06] dark:bg-zinc-950/80">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-cyan-300/70" />
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Assistente IA</span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          online
        </span>
      </div>

      {/* Chat messages */}
      <div className="space-y-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md bg-cyan-500/15 px-3.5 py-2">
            <p className="text-xs text-cyan-100">Quantas faturas estao outstanding este mes?</p>
          </div>
        </div>

        {/* Bot response */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5">
            <p className="text-xs leading-relaxed text-zinc-300">
              Este mes tens <span className="font-semibold text-cyan-200">23 faturas outstanding</span> no valor total de{" "}
              <span className="font-semibold text-cyan-200">€ 18.450,00</span>. A mais antiga tem 12 dias.
            </p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-md bg-cyan-500/15 px-3.5 py-2">
            <p className="text-xs text-cyan-100">Quais estao perto do vencimento?</p>
          </div>
        </div>

        {/* Bot typing indicator */}
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2">
        <MessageSquare className="h-3.5 w-3.5 text-zinc-600" />
        <span className="text-[11px] text-zinc-600">Pergunta sobre faturas, estados, fornecedores...</span>
      </div>
    </div>
  );
}

/* ── Feature data ── */

const features = [
  {
    badge: "Reconciliação",
    badgeColor: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
    badgeIcon: Building2,
    title: "Reconciliação bancaria automatizada",
    description:
      "Importacao de extratos bancarios com matching assistido por IA entre movimentos e faturas. Identifica correspondencias, sinaliza discrepancias e reduz o tempo de fecho mensal.",
    mockup: BankReconciliationMockup,
  },
  {
    badge: "Classificação",
    badgeColor: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    badgeIcon: Brain,
    title: "Classificação custom por workspace",
    description:
      "Categorias e regras configuraveis sem fricção técnica. Define categorias proprias, cria regras automáticas por fornecedor ou valor, e mantem consistencia na classificação de despesas.",
    mockup: ClassificationMockup,
  },
  {
    badge: "Assistente IA",
    badgeColor: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
    badgeIcon: Bot,
    title: "Chatbot inteligente para operações",
    description:
      "Perguntas em linguagem natural sobre faturas, estados, fornecedores e estatisticas operacionais. Respostas instantaneas com contexto do teu workspace, sem navegar menus.",
    mockup: ChatbotMockup,
  },
];

/* ── Main component ── */

export function RoadmapSection() {
  return (
    <section>
      <div className="mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-700/80 uppercase dark:text-cyan-100/70">
          Em desenvolvimento
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Funcionalidades{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Alpha
          </span>
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
          Estamos a construir estas capacidades. Cada uma sera lancada de forma incremental e validada com utilizadores reais.
        </p>
      </div>

      <div className="space-y-20 lg:space-y-28">
        {features.map((feature, index) => {
          const Mockup = feature.mockup;
          const BadgeIcon = feature.badgeIcon;
          const isReversed = index % 2 === 1;

          return (
            <div
              key={feature.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Mockup */}
              <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                <Mockup />
              </div>

              {/* Text */}
              <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold ${feature.badgeColor}`}
                >
                  <BadgeIcon className="h-3 w-3" />
                  {feature.badge}
                </span>

                <h4 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                  {feature.title}
                </h4>

                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
