"use client"

import { useEffect, useState } from "react"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/analytics"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      onClick={() => trackWhatsAppClick("floating")}
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25" />
        <div className="relative w-14 h-14 bg-whatsapp rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 min-w-[56px] min-h-[56px]">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.535 5.856L.057 23.886a.5.5 0 00.602.602l6.167-1.618A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.374l-.36-.214-3.733.979.996-3.648-.235-.374A9.859 9.859 0 012.106 12C2.106 6.535 6.535 2.106 12 2.106S21.894 6.535 21.894 12 17.465 21.894 12 21.894z" />
          </svg>
        </div>
      </div>
    </a>
  )
}
