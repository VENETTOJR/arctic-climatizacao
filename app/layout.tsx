import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { Analytics } from "@/components/Analytics"
import { MetaPixel } from "@/components/MetaPixel"
import { SchemaMarkup } from "@/components/SchemaMarkup"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://articclimatizacao.com.br"),
  title: "Arctic Climatização — Higienização e Instalação de Ar Condicionado em Cascavel/PR",
  description:
    "Higienização e instalação de ar condicionado em Cascavel/PR. Serviço rápido, produto certificado e garantia. Solicite orçamento pelo WhatsApp! (45) 99854-7297",
  openGraph: {
    title: "Arctic Climatização — Cascavel/PR",
    description:
      "Higienização e instalação de ar condicionado em Cascavel. Fale no WhatsApp!",
    type: "website",
    locale: "pt_BR",
    url: "https://articclimatizacao.com.br",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arctic Climatização — Cascavel/PR",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-foreground`}>
        <Analytics />
        <MetaPixel />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
