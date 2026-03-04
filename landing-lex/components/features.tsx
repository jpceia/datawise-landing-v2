"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, BookCheck, Users, Library, FolderOpen, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Chatbot de Legislação Portuguesa",
    description:
      "Consulte o Código Civil, Código de Processo Civil, Código do Trabalho e muito mais em linguagem natural. Obtenha respostas precisas em segundos.",
    soon: false,
  },
  {
    icon: BookCheck,
    title: "Zero Respostas Sem Fonte",
    description:
      "Cada resposta está ancorada num artigo real. Se a IA não encontrar fundamentação, informa — nunca inventa. Rigor jurídico garantido.",
    soon: false,
  },
  {
    icon: Users,
    title: "Gestão de Escritório",
    description:
      "Adicione colaboradores, defina permissões por papel (admin, membro, leitor) e colabore em equipa. Toda a sua firma sincronizada.",
    soon: false,
  },
  {
    icon: Library,
    title: "Base de Dados de Jurisprudência",
    description:
      "Pesquise acórdãos e decisões judiciais com a mesma precisão da pesquisa legislativa. Construa argumentação com precedentes reais.",
    soon: true,
  },
  {
    icon: FolderOpen,
    title: "Carregamento de Processos",
    description:
      "Importe os seus processos e obtenha análise contextualizada à legislação aplicável. O assistente que conhece o seu caso.",
    soon: true,
  },
  {
    icon: Sparkles,
    title: "Desenvolvido à Medida",
    description:
      "A Datawise desenvolve integrações e funcionalidades adaptadas às necessidades específicas do seu escritório. O software que precisa, exactamente como precisa.",
    soon: false,
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="funcionalidades" className="landing-section" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="landing-heading text-3xl sm:text-4xl font-bold mb-4">
            Tudo o que o seu escritório precisa para{" "}
            <span className="landing-gradient-text">pesquisar com confiança</span>
          </h2>
          <p className="text-[var(--landing-text-secondary)] max-w-2xl mx-auto text-lg">
            Da consulta legislativa à construção de argumentação — uma plataforma completa para profissionais jurídicos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`landing-card relative ${f.soon ? "opacity-75" : ""}`}
              >
                {f.soon && (
                  <span className="landing-badge landing-badge-soon absolute top-4 right-4">
                    Em breve
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-[rgba(201,165,90,0.12)] border border-[rgba(201,165,90,0.2)] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--landing-accent-gold)]" />
                </div>
                <h3 className="font-semibold text-[var(--landing-text-primary)] mb-2 pr-12">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--landing-text-secondary)] leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
