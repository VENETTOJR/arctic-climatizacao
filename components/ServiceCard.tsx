import { WhatsAppButton } from "./WhatsAppButton"
import { CheckCircle2, type LucideProps } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  benefits: string[]
  icon: React.ComponentType<LucideProps>
  bgColor: string
  whatsappSource: string
}

export function ServiceCard({
  title,
  description,
  benefits,
  icon: Icon,
  bgColor,
  whatsappSource,
}: ServiceCardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-8 shadow-sm flex flex-col gap-5`}>
      <div className="w-14 h-14 bg-arctic/10 rounded-xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-arctic" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-arctic-deep mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
      <WhatsAppButton source={whatsappSource} label="Falar no WhatsApp" size="sm" />
    </div>
  )
}
