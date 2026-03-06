import { MapPin, Clock, Shield, BadgeCheck } from "lucide-react"

const items = [
  {
    icon: MapPin,
    title: "Local em Cascavel",
    desc: "Empresa de Cascavel, atendemos toda a cidade",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    desc: "Agendamento no mesmo dia ou seguinte",
  },
  {
    icon: Shield,
    title: "Produto Certificado",
    desc: "Produtos aprovados e seguros para sua família",
  },
  {
    icon: BadgeCheck,
    title: "Garantia do Serviço",
    desc: "Garantia em todos os serviços realizados",
  },
]

export function Diferenciais() {
  return (
    <section className="py-20 bg-arctic-ice">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-arctic-deep mb-4">
            Por que a Arctic?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Qualidade e confiança de quem é de Cascavel
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 bg-arctic/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-arctic" />
              </div>
              <h3 className="font-bold text-arctic-deep mb-1 text-sm lg:text-base">
                {title}
              </h3>
              <p className="text-slate-500 text-xs lg:text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
