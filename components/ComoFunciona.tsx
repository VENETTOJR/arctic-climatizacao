import { MessageCircle, Calendar, CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Envie mensagem no WhatsApp",
    subtitle: "Rápido, sem burocracia",
  },
  {
    number: 2,
    icon: Calendar,
    title: "Agendamos no seu horário",
    subtitle: "Você escolhe o melhor dia e hora",
  },
  {
    number: 3,
    icon: CheckCircle2,
    title: "Executamos com qualidade",
    subtitle: "Serviço garantido e sem sujeira",
  },
]

export function ComoFunciona() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-arctic-deep mb-4">
            Como Funciona
          </h2>
          <p className="text-slate-600">Simples, rápido e sem complicação</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-center">
              <div className="flex flex-col items-center text-center max-w-xs px-6">
                <div className="w-14 h-14 rounded-full bg-arctic text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-arctic/10 rounded-xl flex items-center justify-center mb-3">
                  <step.icon className="w-6 h-6 text-arctic" />
                </div>
                <h3 className="font-bold text-arctic-deep mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.subtitle}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-8 h-8 text-arctic/40 mx-2 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
