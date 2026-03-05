import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "../data";

type FaqSectionProps = {
  faqs: FaqItem[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section>
      <div className="mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-700/80 uppercase dark:text-cyan-100/70">FAQs</p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 md:text-4xl">
          Perguntas frequentes
        </h3>
      </div>

      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-4xl"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="border-b border-zinc-200 transition-colors duration-300 hover:border-zinc-300 dark:border-white/[0.08] dark:hover:border-white/15"
          >
            <AccordionTrigger className="py-6 text-left text-base font-semibold text-zinc-800 transition-colors duration-300 hover:text-cyan-700 hover:no-underline dark:text-zinc-200 dark:hover:text-cyan-100 md:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
