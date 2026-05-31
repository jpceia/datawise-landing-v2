"use client";

import { useState, type FormEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  Check,
  CheckCircle,
  FileText,
  UserPlus,
  MessagesSquare,
  Target,
  Receipt,
  BarChart3,
} from "lucide-react";
import { ensureCalendlyLoaded } from "@/lib/calendly";

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const PHONE_REGEX = /^\+?[\d\s()-]{7,}$/;

type UseCase = {
  icon: typeof FileText;
  area: string;
  title: string;
  metric: string;
  description: string;
};

const useCases: UseCase[] = [
  {
    icon: FileText,
    area: "Financeiro",
    title: "Automação de orçamentos",
    metric: "De 2 horas para 5 minutos por proposta",
    description:
      "O sistema lê o briefing do cliente, puxa preços do catálogo e gera o PDF pronto a enviar.",
  },
  {
    icon: UserPlus,
    area: "RH",
    title: "Onboarding de colaboradores",
    metric: "De 3 dias para 2 horas",
    description:
      "Criação de contas, envio de equipamento, agendamento de formações e assinaturas digitais — tudo encadeado.",
  },
  {
    icon: MessagesSquare,
    area: "Suporte interno",
    title: "Chatbot sobre documentação",
    metric: "Respostas em segundos, 24/7",
    description:
      "Colaboradores perguntam em linguagem natural sobre políticas, processos e manuais — sem abrir tickets.",
  },
  {
    icon: Target,
    area: "Comercial",
    title: "Qualificação de leads",
    metric: "80% dos leads triados automaticamente",
    description:
      "Enriquecimento com dados públicos, score de fit e atribuição ao comercial certo no CRM.",
  },
  {
    icon: Receipt,
    area: "Operações",
    title: "Processamento de facturas",
    metric: "De 15 minutos para 30 segundos",
    description:
      "Extracção de dados, validação contra encomenda e lançamento automático no ERP.",
  },
  {
    icon: BarChart3,
    area: "Marketing",
    title: "Relatórios semanais",
    metric: "De 4 horas para automático",
    description:
      "Consolidação de Google Analytics, Meta Ads e CRM — dashboard pronto na segunda de manhã.",
  },
];

export function LpExemploClient() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
  const hubspotEnabled = Boolean(HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID);

  function isValid() {
    return (
      form.name.trim() &&
      form.company.trim() &&
      form.email.trim() &&
      EMAIL_REGEX.test(form.email) &&
      form.phone.trim() &&
      PHONE_REGEX.test(form.phone)
    );
  }

  async function submitToHubspot(): Promise<boolean> {
    if (!hubspotEnabled) return false;
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: form.name },
            { name: "company", value: form.company },
            { name: "email", value: form.email },
            { name: "phone", value: form.phone },
            { name: "message", value: form.message },
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      }
    );
    return res.ok;
  }

  async function handleContactSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isValid()) return;
    setStatus("submitting");
    try {
      const ok = await submitToHubspot();
      if (!ok) throw new Error("submit failed");
      sendGTMEvent({ event: "lead_contact", value: 1 });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  async function handleScheduleSubmit() {
    if (!isValid() || !calendlyUrl) return;
    setStatus("submitting");
    submitToHubspot().catch(() => {});
    try {
      await ensureCalendlyLoaded();
      if (!window.Calendly) {
        setStatus("error");
        return;
      }
      sendGTMEvent({ event: "lead_schedule", value: 1 });
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        prefill: { name: form.name, email: form.email },
      });
      setForm(INITIAL_FORM);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero / Teaser */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-primary-dark to-primary">
        <div
          aria-hidden
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4 pb-20 pt-36 text-center sm:pb-24 sm:pt-40">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Automação de Workflows
          </span>

          <p className="mx-auto mt-8 max-w-2xl text-base italic text-white/70 sm:text-lg">
            Copiar dados. Perseguir aprovações. <br className="hidden sm:block" />
            Gerar o mesmo relatório todas as semanas.
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl font-sans text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
            Quantas horas a sua equipa  <br className="hidden md:block" />perde
            em trabalho que{" "}
            <span className="text-primary-200">um sistema podia fazer?</span>
          </h1>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all hover:scale-105 hover:bg-white/90"
            >
              Falar com especialista
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-transparent px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-white/10"
            >
              Ver exemplos
            </a>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section
        id="casos"
        className="relative overflow-hidden bg-gray-50 py-16 sm:py-20"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-primary-light/10 px-3 py-1 text-sm font-medium text-primary">
              Casos de aplicação
            </div>
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Exemplos reais, por área da sua empresa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Processos do dia-a-dia que já automatizámos, com tempos e
              resultados concretos.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="group h-full overflow-hidden rounded-xl bg-gradient-to-r from-primary/80 to-primary-light/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="p-6 text-white">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      {useCase.area}
                    </span>
                    <h3 className="mt-1 text-xl font-bold">{useCase.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {useCase.metric}
                    </p>
                    <p className="mt-3 text-sm opacity-90">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form embutido — compacto, com 2 botões */}
      <section
        id="contacto"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="grid gap-10 rounded-3xl border border-gray-100 bg-gradient-to-br from-primary/95 to-primary-700 p-8 text-white shadow-xl sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Vamos identificar o seu primeiro processo a automatizar?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Numa conversa curta, ajudamos a perceber onde está a maior
              oportunidade de retorno na sua operação — sem compromisso.
            </p>

            <ul className="mt-7 space-y-3 text-base text-white/90">
              {[
                "Diagnóstico gratuito do seu processo",
                "Estimativa de horas e custo poupados",
                "Proposta de piloto em 2 a 4 semanas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/15">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-900 shadow-lg">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-8 text-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
                <h3 className="text-lg font-semibold">Obrigado!</h3>
                <p className="text-sm text-gray-600">
                  Recebemos o seu contacto. Entraremos em contacto nas próximas
                  24 horas úteis.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                noValidate
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Empresa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+351"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Mensagem <span className="text-gray-400">(opcional)</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={2}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500">
                    Ocorreu um erro. Por favor tente novamente.
                  </p>
                )}

                <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-lg border-2 border-gray-400 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-gray-500 hover:bg-gray-50 disabled:opacity-60"
                  >
                    {status === "submitting" ? "A enviar..." : "Quero ser contactado"}
                  </button>
                  <button
                    type="button"
                    onClick={handleScheduleSubmit}
                    disabled={status === "submitting" || !calendlyUrl}
                    className="rounded-lg bg-[#EF4444] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#DC2626] disabled:opacity-60"
                  >
                    Agendar reunião
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
