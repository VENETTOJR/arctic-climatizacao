import { WhatsAppButton } from "./WhatsAppButton"

export function CTAFinal() {
  return (
    <section className="py-20 bg-arctic-deep">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Seu ar condicionado precisa de cuidados?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Fale com a Arctic agora! Atendemos toda Cascavel com agendamento rápido pelo WhatsApp.
        </p>
        <WhatsAppButton source="cta-final" size="lg" label="Falar com a Arctic agora" />
      </div>
    </section>
  )
}
