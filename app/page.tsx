import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Diferenciais } from "@/components/Diferenciais"
import { ComoFunciona } from "@/components/ComoFunciona"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { CTAFinal } from "@/components/CTAFinal"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Diferenciais />
      <ComoFunciona />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
