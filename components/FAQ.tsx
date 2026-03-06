"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Com que frequência devo higienizar o ar condicionado?",
    answer:
      "A cada 6 meses para uso residencial normal. Em ambientes com muita poeira ou com animais de estimação, a cada 3 meses. A higienização regular evita o acúmulo de fungos e bactérias.",
  },
  {
    question: "Quanto tempo leva o serviço de higienização?",
    answer:
      "O serviço de higienização leva em média 1 hora por unidade. A instalação varia entre 2 a 4 horas dependendo do tipo de aparelho e do local de instalação.",
  },
  {
    question: "Vocês atendem qual região de Cascavel?",
    answer:
      "Atendemos toda a cidade de Cascavel e todos os seus bairros. Entre em contato pelo WhatsApp para verificar a disponibilidade de agenda na sua região.",
  },
  {
    question: "Quais marcas de ar condicionado vocês instalam?",
    answer:
      "Instalamos todas as marcas: Samsung, LG, Midea, Electrolux, Springer, Carrier, Daikin e outras. Se tiver dúvida sobre alguma marca específica, pergunte pelo WhatsApp.",
  },
  {
    question: "O serviço tem garantia?",
    answer:
      "Sim! Todos os nossos serviços têm garantia. Em caso de qualquer problema relacionado ao serviço prestado, retornamos sem custo adicional para você.",
  },
]

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${id}`}
        className="w-full flex justify-between items-center py-5 text-left font-semibold text-arctic-deep hover:text-arctic transition-colors"
      >
        {question}
        <ChevronDown
          className={`w-5 h-5 shrink-0 ml-4 text-arctic transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`faq-${id}`}
        role="region"
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-arctic-deep mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">Tudo o que você precisa saber</p>
        </div>
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 lg:p-8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              id={String(index)}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
