import { WHATSAPP_URL } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-bold text-lg mb-2">Arctic Climatização — Cascavel/PR</p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-slate-300">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-whatsapp transition-colors"
          >
            (45) 99854-7297
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://instagram.com/arctc_climatizacao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-arctic transition-colors"
          >
            @arctc_climatizacao
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © 2025 Arctic Climatização. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
