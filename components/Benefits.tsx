import Image from "next/image";

const benefits = [
  {
    title: "Alta resolución",
    description: "Imágenes nítidas día y noche con tecnología Starlight y visión en baja luz.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
  },
  {
    title: "Instalación profesional",
    description: "Equipo técnico certificado para diseño, instalación y mantenimiento de tu sistema.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
  },
  {
    title: "Soporte 24/7",
    description: "Asistencia técnica y garantía en todos nuestros productos. Tu tranquilidad es prioridad.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  },
  {
    title: "Precios competitivos",
    description: "Distribuidor oficial con mejores precios del mercado y planes de financiamiento.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
            Beneficios de elegir nuestros sistemas
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-base sm:text-lg px-2">
            Tecnología de punta, instalación confiable y soporte continuo para tu negocio o hogar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/30 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70" />
                <span className="absolute bottom-3 left-3 text-white font-semibold text-sm sm:text-base">{item.title}</span>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
