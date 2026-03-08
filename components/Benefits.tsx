"use client";

const benefits = [
  {
    title: "Alta resolución",
    description: "Imágenes nítidas día y noche con tecnología Starlight y visión en baja luz.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Instalación profesional",
    description: "Equipo técnico certificado para diseño, instalación y mantenimiento de tu sistema.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Soporte 24/7",
    description: "Asistencia técnica y garantía en todos nuestros productos. Tu tranquilidad es prioridad.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Precios competitivos",
    description: "Distribuidor oficial con mejores precios del mercado y planes de financiamiento.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Por qué elegirnos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Beneficios de elegir nuestros sistemas
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Tecnología de punta, instalación confiable y soporte continuo para tu negocio o hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="benefit-card relative flex items-start gap-5 p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {/* Barra de acento izquierda */}
              <span
                className="benefit-accent absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full origin-bottom transition-transform duration-300 ease-out"
                style={{ transform: "scaleY(0.6)" }}
                aria-hidden
              />
              <div className="relative flex gap-4 w-full">
                <div className="benefit-icon-wrap flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 ease-out">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-foreground font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
