export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-arctic-ice">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-arctic-deep mb-4">
          Arctic Climatizacao
        </h1>
        <p className="text-lg text-foreground mb-6">
          Higienizacao e Instalacao de Ar Condicionado em Cascavel/PR
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <span className="px-4 py-2 rounded-full bg-arctic text-white text-sm font-semibold">
            Azul Arctic #0EA5E9
          </span>
          <span className="px-4 py-2 rounded-full bg-arctic-deep text-white text-sm font-semibold">
            Azul Profundo #0369A1
          </span>
          <span className="px-4 py-2 rounded-full bg-mint text-white text-sm font-semibold">
            Verde Menta #10B981
          </span>
          <span className="px-4 py-2 rounded-full bg-whatsapp text-white text-sm font-semibold">
            WhatsApp #25D366
          </span>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Setup Story 1.1 ✅ — Proximo: Hero Section (Story 1.2)
        </p>
      </div>
    </main>
  );
}
