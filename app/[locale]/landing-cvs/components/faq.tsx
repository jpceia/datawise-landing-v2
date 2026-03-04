"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
{
    question: "Que formatos de CV são suportados?",
    answer:
      "O Datawise CV suporta PDF e DOCX (Microsoft Word). Para PDFs, utilizamos OCR avançado para uma extração de texto precisa mesmo em documentos digitalizados.",
  },
  {
    question: "A IA funciona bem com CVs em português?",
    answer:
      "Sim. O modelo GPT-4o tem excelente suporte para português de Portugal. O parsing de CVs, extração de competências, e matching de oportunidades funcionam em múltiplos idiomas, incluindo CVs mistos (português e inglês).",
  },
  {
    question: "Posso gerar CVs com o logotipo e branding da minha empresa?",
    answer:
      "Sim. Pode configurar o template com o logotipo, cores e tipografia da sua empresa (ou do seu cliente). Os CVs exportados ficam com uma apresentação profissional e consistente, prontos para enviar.",
  },
  {
    question: "Como funciona o matching de candidatos com oportunidades?",
    answer:
      "O algoritmo de matching analisa as competências, experiência, formação académica, localização e modelo de trabalho do candidato em relação aos requisitos da oportunidade. Cada candidato recebe um score de compatibilidade (0–100) com explicação detalhada dos pontos fortes e lacunas.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem compromissos. Pode cancelar a sua subscrição em qualquer altura através das definições da conta. Continuará a ter acesso às funcionalidades até ao fim do período de faturação. Não há taxas de cancelamento.",
  },
  {
    question: "Os meus dados e os dados dos candidatos são seguros?",
    answer:
      "Absolutamente. Os dados são armazenados em servidores na Europa com encriptação em repouso e em trânsito. Cada workspace é completamente isolado. Cumprimos o RGPD e nunca utilizamos os dados dos seus candidatos para treinar modelos de IA. Pode exportar ou eliminar todos os dados a qualquer momento.",
  },
  {
    question: "Existe um período de teste gratuito?",
    answer:
      "Sim. Ao registar-se, tem acesso a um trial de 14 dias. Pode experimentar todas as funcionalidades sem limitações.",
  },
  {
    question: "Preciso de uma integração ou funcionalidade à medida. É possível?",
    answer:
      "Sim. A DATAWISE é especializada em desenvolvimento de software à medida com IA. Se precisa de uma integração com o seu ATS, ERP, ou qualquer outro sistema, ou de funcionalidades específicas para o seu processo de recrutamento, fale connosco.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "var(--landing-accent)" }}
          >
            FAQs
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full border-t"
            style={{ borderColor: "var(--landing-border)" }}
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="border-b"
                style={{ borderColor: "var(--landing-border)" }}
              >
                <AccordionTrigger
                  className="py-5 text-base font-semibold hover:no-underline md:text-lg"
                  style={{ color: "var(--landing-text)" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed md:text-base"
                  style={{ color: "var(--landing-text-muted)" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
