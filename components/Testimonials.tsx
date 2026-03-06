import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    neighborhood: "Bairro Cancelli",
    text: "Serviço excelente! O ar condicionado ficou como novo. Super recomendo a Arctic! Equipe pontual e muito profissional.",
  },
  {
    name: "João P.",
    neighborhood: "Centro",
    text: "Rápidos, pontuais e muito profissionais. Fizeram a instalação em menos de 2 horas. Ficou perfeito!",
  },
  {
    name: "Ana L.",
    neighborhood: "Parque São Paulo",
    text: "Higienização impecável. Percebi a diferença na qualidade do ar imediatamente. Com certeza chamarei de novo!",
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-arctic-deep mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-slate-600">Satisfação garantida em cada serviço</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border-l-4 border-arctic rounded-xl p-6 shadow-sm"
            >
              <Stars />
              <p className="text-slate-600 mb-4 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-arctic-deep">{t.name}</p>
                <p className="text-sm text-slate-400">{t.neighborhood} — Cascavel/PR</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
