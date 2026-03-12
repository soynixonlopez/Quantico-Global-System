import { Reveal } from "./Reveal";

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
    <section id="testimonios" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Empresas y hogares en Panamá confían en nosotros para su seguridad.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" delay={120}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-4 sm:p-6 lg:p-8 hover:border-primary/30 transition-colors"
            >
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 sm:mt-6 pt-4 border-t border-border">
                <p className="text-foreground font-semibold text-sm sm:text-base">{t.author}</p>
                <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
