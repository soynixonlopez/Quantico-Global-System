const testimonials = [
  {
    quote: "Excelente atención y productos de primera. Instalaron todo el sistema en nuestra oficina y el soporte post-venta es impecable.",
    author: "Carlos M.",
    role: "Gerente General, Empresa de logística",
  },
  {
    quote: "Las cámaras Tiandy que nos recomendaron cumplen perfectamente. Imagen clara de día y de noche. Muy recomendados.",
    author: "María L.",
    role: "Propietaria, Comercio",
  },
  {
    quote: "Quantico nos asesoró desde el diseño hasta la instalación. Profesionales y con precios justos. Volveremos a contar con ellos.",
    author: "Roberto S.",
    role: "Director de operaciones",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-base sm:text-lg px-2">
            Empresas y hogares en Panamá confían en nosotros para su seguridad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 sm:p-6 lg:p-8 hover:border-primary-500/30 transition-colors"
            >
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 sm:mt-6 pt-4 border-t border-slate-700/50">
                <p className="text-white font-semibold text-sm sm:text-base">{t.author}</p>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
