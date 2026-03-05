"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "O que é um crédito?",
    a: "Cada pergunta feita ao chatbot consome um crédito. Uma mensagem equivale a uma interacção completa — pergunta, pesquisa na legislação e resposta com citações incluídas.",
  },
  {
    q: "A IA pode responder incorrectamente?",
    a: "O Datawise Lex só responde com base em legislação efectivamente indexada. Se não encontrar fundamentação legal para a sua questão, informa — nunca inventa artigos ou conteúdo jurídico.",
  },
  {
    q: "Que legislação está disponível?",
    a: "Actualmente está indexado o Código Civil, Código de Processo Civil, Código do Trabalho, Código Penal e Código de Processo Penal. A base está em expansão contínua e os utilizadores registados serão notificados de cada adição.",
  },
  {
    q: "As minhas consultas são confidenciais?",
    a: "Sim. Os dados são processados com total confidencialidade, armazenados em servidores na União Europeia e nunca utilizados para treinar modelos de IA. Cumprimos integralmente o RGPD.",
  },
  {
    q: "Como funciona a gestão de equipa?",
    a: "O administrador convida membros por email e define permissões por papel: admin, advogado ou leitor. Cada membro tem o seu histórico de conversas independente e a gestão é feita num painel centralizado.",
  },
  {
    q: "Quando chegam a jurisprudência e o carregamento de processos?",
    a: "Estamos em versão alfa e estas funcionalidades fazem parte do nosso roadmap prioritário. Os utilizadores registados serão notificados em primeira mão assim que estiverem disponíveis.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, sem compromisso nem taxas de cancelamento. O plano mantém-se activo até ao fim do período pago e não há renovações automáticas surpresa.",
  },
  {
    q: "A Datawise desenvolve integrações personalizadas?",
    a: "Sim. A Datawise é uma empresa de desenvolvimento de software à medida. Se o seu escritório tem necessidades específicas — integrações com sistemas existentes, fluxos de trabalho personalizados ou funcionalidades dedicadas — contacte-nos para discutir o seu caso.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="landing-faq-item"
    >
      <button
        className="landing-faq-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[var(--landing-text-muted)]"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--landing-text-secondary)] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="landing-section" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="landing-heading text-3xl sm:text-4xl font-bold mb-4">
            Perguntas{" "}
            <span className="landing-gradient-text">frequentes</span>
          </h2>
          <p className="text-[var(--landing-text-secondary)] text-lg">
            Não encontra resposta?{" "}
            <a
              href="mailto:hello@datawise.pt"
              className="text-[var(--landing-accent-gold)] hover:underline"
            >
              Fale connosco
            </a>
            .
          </p>
        </motion.div>

        {inView && (
          <div className="border-t border-[var(--landing-border)]">
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
