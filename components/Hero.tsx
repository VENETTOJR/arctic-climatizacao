import { WhatsAppButton } from "./WhatsAppButton"

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-arctic to-arctic-deep flex items-center">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              📍 Cascavel, Paraná
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Higienização e Instalação de{" "}
              <span className="text-arctic-ice">Ar Condicionado</span>{" "}
              em Cascavel
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Ar limpo, fresco e saudável para sua família. Serviço profissional,
              produto certificado e garantia em tudo que fazemos.
            </p>
            <WhatsAppButton source="hero" size="lg" />
            <div className="mt-8 flex flex-wrap gap-6 text-white/80 text-sm">
              <span>✓ Atendimento Rápido</span>
              <span>✓ Produto Certificado</span>
              <span>✓ Garantia do Serviço</span>
            </div>
          </div>

          {/* Placeholder visual — substituir por imagem real */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80 lg:h-96 bg-white/10 rounded-2xl border-2 border-white/20 flex flex-col items-center justify-center text-white/60 backdrop-blur-sm">
              <div className="text-6xl mb-4">❄️</div>
              <p className="text-sm font-medium">Foto da equipe / serviço</p>
              <p className="text-xs mt-1">Substituir por imagem real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
