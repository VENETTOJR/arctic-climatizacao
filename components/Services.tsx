import { Wind, Wrench } from "lucide-react"
import { ServiceCard } from "./ServiceCard"

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-arctic-deep mb-4">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Soluções completas em ar condicionado para sua casa ou empresa em Cascavel
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceCard
            title="Higienização e Limpeza"
            description="Serviço completo de limpeza e higienização do seu ar condicionado, eliminando contaminantes e garantindo um ar puro para você e sua família."
            benefits={[
              "Elimina fungos, bactérias e ácaros",
              "Melhora a qualidade do ar que você respira",
              "Prolonga a vida útil do equipamento",
            ]}
            icon={Wind}
            bgColor="bg-mint-light"
            whatsappSource="servicos-higienizacao"
          />
          <ServiceCard
            title="Instalação de Ar Condicionado"
            description="Instalação profissional de aparelhos split e multi-split com acabamento perfeito, sem danos às paredes e com total segurança elétrica."
            benefits={[
              "Instalação rápida e sem sujeira",
              "Todas as marcas e modelos",
              "Garantia no serviço realizado",
            ]}
            icon={Wrench}
            bgColor="bg-white border border-slate-100"
            whatsappSource="servicos-instalacao"
          />
        </div>
      </div>
    </section>
  )
}
