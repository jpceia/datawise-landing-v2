"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface HubspotContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enabled?: boolean;
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

export default function HubspotContactModal({
  open,
  onOpenChange,
  enabled = true,
}: HubspotContactModalProps) {
  const t = useTranslations("ContactForm");
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!enabled || !HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
    return null;
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = t("requiredField");
    if (!form.company.trim()) errs.company = t("requiredField");
    if (!form.email.trim()) {
      errs.email = t("requiredField");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t("invalidEmail");
    }
    if (!form.phone.trim()) {
      errs.phone = t("requiredField");
    } else if (!/^\+?[\d\s()-]{7,}$/.test(form.phone)) {
      errs.phone = t("invalidPhone");
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
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

      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      setForm(INITIAL_FORM);
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
        <DialogTitle className="sr-only">{t("title")}</DialogTitle>

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
                  {t("title")}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{t("subtitle")}</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-lg bg-[#F87171] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EF4444] disabled:opacity-60"
                  >
                    {status === "submitting" ? t("submitting") : t("submit")}
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
