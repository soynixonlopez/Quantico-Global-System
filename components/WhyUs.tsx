const reasons = [
  {
    title: "Distribuidor oficial",
    description: "Somos distribuidores autorizados de Tiandy, Vias, Garrett y más. Productos originales con garantía.",
    icon: "✓",
  },
  {
    title: "Experiencia en Panamá",
    description: "Conocemos el mercado local. Asesoramos desde el diseño hasta la instalación y mantenimiento.",
    icon: "✓",
  },
  {
    title: "Precios y financiamiento",
    description: "Ofertas competitivas y opciones de pago que se adaptan a tu presupuesto.",
    icon: "✓",
  },
  {
    title: "Soporte post-venta",
    description: "Garantía, repuestos y técnicos disponibles para que tu inversión esté siempre protegida.",
    icon: "✓",
  },
];

export function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
            ¿Por qué elegir Quantico System Global?
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-base sm:text-lg px-2">
            Confianza, calidad y servicio en cada proyecto de seguridad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 sm:p-5 md:p-6 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
