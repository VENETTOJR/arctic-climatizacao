export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Arctic Climatização",
    telephone: "+5545998547297",
    url: "https://articclimatizacao.com.br",
    areaServed: {
      "@type": "City",
      name: "Cascavel",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    serviceType: [
      "Higienização de Ar Condicionado",
      "Instalação de Ar Condicionado",
      "Limpeza de Ar Condicionado",
    ],
    sameAs: ["https://instagram.com/arctc_climatizacao"],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
