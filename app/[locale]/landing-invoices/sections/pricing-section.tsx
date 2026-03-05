"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import styles from "../page.module.css";

const CURRENCY = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

export function PricingSection() {
  const proInvoiceOptions = [50, 100, 250, 500, 1000];
  const [selectedProIndex, setSelectedProIndex] = useState(2);
  const proInvoices = proInvoiceOptions[selectedProIndex];
  const proBase = 20;
  const proPerInvoice = 0.16;

  const proPrice = useMemo(() => proBase + proInvoices * proPerInvoice, [proInvoices]);

  return (
    <section>
      <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-cyan-700/80 uppercase dark:text-cyan-100/70">Pricing</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Planos para crescer com a tua operação
          </h3>
        </div>
        <span className="shrink-0 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400">
          faturacao mensal
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">
        {/* FREE */}
        <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white/85 p-8 transition duration-300 hover:border-zinc-300 dark:border-white/[0.08] dark:bg-zinc-900/80 dark:hover:border-white/15">
          <p className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">Free</p>
          <p className="mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Gratuito</p>
          <p className="mt-2 text-sm text-zinc-500">ate 10 faturas/mensais</p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <ul className="flex-1 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              OCR base
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              extração de campos essenciais
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              inteligência limitada
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              1 utilizador por workspace
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              historico de 90 dias
            </li>
            <li className="flex items-start gap-2.5 text-zinc-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
              sem automacoes
            </li>
            <li className="flex items-start gap-2.5 text-zinc-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
              sem classificação
            </li>
          </ul>

          <Link
            href="/register"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-800 transition duration-300 hover:border-cyan-300/50 hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-200 dark:hover:border-cyan-200/40 dark:hover:bg-white/[0.05] dark:hover:text-white"
          >
            Comecar grátis
          </Link>
        </article>

        {/* PRO - Featured */}
        <article className={`relative flex flex-col rounded-2xl bg-white/90 p-8 dark:bg-zinc-900/95 ${styles.glowPulse} ${styles.gradientBorder}`}>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold tracking-wide text-cyan-100 uppercase">Pro</p>
            <span className={`rounded-full border border-cyan-100/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-100 ${styles.shimmer}`}>
              recomendado
            </span>
          </div>

          <p className="mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">{CURRENCY.format(proPrice)}</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">estimativa mensal para o volume selecionado</p>

          <div className="mt-6 rounded-xl border border-zinc-200 bg-white/80 p-5 dark:border-white/[0.08] dark:bg-zinc-950/80">
            <div className="mb-3 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
              <span>Volume mensal de faturas</span>
              <span className="rounded-md bg-cyan-400/15 px-2 py-0.5 font-bold text-cyan-100">{proInvoices}</span>
            </div>
            <input
              type="range"
              min={0}
              max={proInvoiceOptions.length - 1}
              step={1}
              value={selectedProIndex}
              onChange={(e) => setSelectedProIndex(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-300 accent-cyan-500 dark:bg-zinc-700 dark:accent-cyan-300"
              aria-label="Selecionar volume mensal de faturas"
            />
            <div className="mt-3 grid grid-cols-5 gap-2 text-center text-[11px] text-zinc-600 dark:text-zinc-500">
              {proInvoiceOptions.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedProIndex(index)}
                  className={`rounded-lg px-1 py-1 font-medium transition duration-200 ${
                    selectedProIndex === index
                      ? "bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-300/20"
                      : "hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-white/[0.05] dark:hover:text-zinc-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

          <ul className="flex-1 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              tudo do FREE
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              IA profissional (extração avancada + sugestoes)
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              classificação customizada
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              multi-utilizador por workspace
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              dashboard e KPIs de cobrança
            </li>
          </ul>

          <Link
            href="/register"
            className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-200 px-4 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:from-cyan-200 hover:to-white hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Comecar grátis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </article>

        {/* ENTERPRISE */}
        <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white/85 p-8 transition duration-300 hover:border-zinc-300 dark:border-white/[0.08] dark:bg-zinc-900/80 dark:hover:border-white/15">
          <div className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
            <Building2 className="h-4.5 w-4.5 text-cyan-200" />
            <p className="text-sm font-semibold tracking-wide uppercase">Enterprise</p>
          </div>
          <p className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Acima de 1000 faturas/mensais</p>
          <p className="mt-2 text-sm text-zinc-500">Preco sob consulta</p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <ul className="flex-1 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              tudo do PRO
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              integrações a medida (faturacao, drive, ERP, etc)
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              reconciliação bancaria avancada
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              regras automáticas por fornecedor e categoria
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              SSO/SAML e auditoria avancada
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              suporte prioritario
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              SLA e CSM dedicado
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/60" />
              onboarding assistido e suporte customizado
            </li>
          </ul>

          <a
            href="mailto:sales@saasinvoice.app?subject=Plano%20Enterprise"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-800 transition duration-300 hover:border-cyan-300/50 hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-200 dark:hover:border-cyan-200/40 dark:hover:bg-white/[0.05] dark:hover:text-white"
          >
            Fale connosco
          </a>
        </article>
      </div>
    </section>
  );
}
