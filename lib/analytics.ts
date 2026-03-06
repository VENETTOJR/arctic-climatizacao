declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return

  window.gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: source,
    source,
  })

  window.fbq?.("track", "Contact", { source })

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] whatsapp_click: ${source}`)
  }
}
