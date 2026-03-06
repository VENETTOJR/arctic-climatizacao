import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Arctic Climatizacao — Higienizacao e Instalacao de Ar Condicionado em Cascavel/PR",
  description: "Higienizacao e instalacao de ar condicionado em Cascavel/PR. Servico rapido, produto certificado e garantia. Solicite orcamento pelo WhatsApp!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased bg-white text-foreground`}>
        {children}
      </body>
    </html>
  );
}
