"use client";

import { useRef, useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { sendGTMEvent } from "@next/third-parties/google";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { ensureCalendlyLoaded } from "@/lib/calendly";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enabled?: boolean;
  title?: string;
  subtitle?: string;
}

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactModal({
  open,
  onOpenChange,
  enabled = true,
  title,
  subtitle,
}: ContactModalProps) {
  const t = useTranslations("ContactForm");
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const lastPartialEmailRef = useRef<string | null>(null);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!enabled || !HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
    return null;
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = t("requiredField");
    if (!form.company.trim()) errs.company = t("requiredField");
    if (!form.email.trim()) {
      errs.email = t("requiredField");
    } else if (!EMAIL_REGEX.test(form.email)) {
      errs.email = t("invalidEmail");
    }
    if (!form.phone.trim()) {
      errs.phone = t("requiredField");
    } else if (!/^\+?[\d\s()-]{7,}$/.test(form.phone)) {
      errs.phone = t("invalidPhone");
    }
    return errs;
  }

  async function submitPartialToHubspot() {
    const email = form.email.trim();
    if (!email || !EMAIL_REGEX.test(email)) return;
    if (lastPartialEmailRef.current === email) return;
    lastPartialEmailRef.current = email;

    try {
      const ok = await submitToHubspot();
      if (ok) {
        sendGTMEvent({ event: "lead_partial", value: 1 });
      } else {
        lastPartialEmailRef.current = null;
      }
    } catch {
      lastPartialEmailRef.current = null;
    }
  }

  async function submitToHubspot(): Promise<boolean> {
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

  async function handleContactSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const ok = await submitToHubspot();
      if (!ok) throw new Error("Submit failed");
      sendGTMEvent({ event: "lead_contact", value: 1 });
      setStatus("success");
      setForm(INITIAL_FORM);
      lastPartialEmailRef.current = null;
    } catch {
      setStatus("error");
    }
  }

  async function handleScheduleSubmit() {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    if (!calendlyUrl) return;

    setStatus("submitting");

    submitToHubspot().catch(() => {
      // Fire-and-forget: don't block scheduling on HubSpot errors.
    });

    try {
      await ensureCalendlyLoaded();
      if (!window.Calendly) {
        setStatus("error");
        return;
      }

      sendGTMEvent({ event: "lead_schedule", value: 1 });

      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        prefill: {
          name: form.name,
          email: form.email,
        },
      });

      setForm(INITIAL_FORM);
      setStatus("idle");
      onOpenChange(false);
    } catch {
      setStatus("error");
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      setStatus("idle");
      setErrors({});
      lastPartialEmailRef.current = null;
    }
    onOpenChange(nextOpen);
  }

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
      errors[field] ? "border-red-400" : "border-gray-300"
    }`;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg border-none bg-white p-0 sm:rounded-2xl">
        <DialogTitle className="sr-only">{title ?? t("title")}</DialogTitle>

        <div className="max-h-[90vh] overflow-y-auto px-6 py-8 sm:px-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                {t("successTitle")}
              </h3>
              <p className="text-sm text-gray-600">{t("successMessage")}</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {title ?? t("title")}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{subtitle ?? t("subtitle")}</p>
              </div>

              <form onSubmit={handleContactSubmit} noValidate className="space-y-5">
                <Field label={t("name")} required error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass("name")}
                  />
                </Field>

                <Field label={t("company")} required error={errors.company}>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className={inputClass("company")}
                  />
                </Field>

                <Field label={t("email")} required error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={submitPartialToHubspot}
                    className={inputClass("email")}
                  />
                </Field>

                <Field label={t("phone")} required error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+351"
                    className={inputClass("phone")}
                  />
                </Field>

                <Field label={t("message")} error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={t("messagePlaceholder")}
                    rows={4}
                    className={inputClass("message")}
                  />
                </Field>

                {status === "error" && (
                  <p className="text-sm text-red-500">{t("errorMessage")}</p>
                )}

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-lg border-2 border-gray-400 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-500 hover:bg-gray-50 hover:shadow-md disabled:opacity-60"
                  >
                    {status === "submitting" ? t("submitting") : t("submitContact")}
                  </button>
                  <button
                    type="button"
                    onClick={handleScheduleSubmit}
                    disabled={status === "submitting" || !calendlyUrl}
                    className="rounded-lg bg-[#EF4444] px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-[#EF4444]/40 transition-all hover:-translate-y-0.5 hover:bg-[#DC2626] hover:shadow-lg hover:shadow-[#DC2626]/50 disabled:opacity-60"
                  >
                    {t("submitSchedule")}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
