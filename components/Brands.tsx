const brands = [
  { name: "Tiandy", desc: "Cámaras IP, NVR, PTZ y soluciones AI" },
  { name: "Vias", desc: "Sistemas de vigilancia y control" },
  { name: "Garrett", desc: "Detección y seguridad avanzada" },
  { name: "Global Radio System", desc: "Comunicaciones y monitoreo" },
  { name: "Quantico", desc: "Soluciones integradas propias" },
];

export function Brands() {
  return (
    <section id="marcas" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
            Marcas líderes que distribuimos
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-base sm:text-lg px-2">
            Trabajamos con los mejores fabricantes del mundo para ofrecerte calidad y confiabilidad.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="rounded-lg sm:rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 sm:p-5 md:p-6 text-center hover:border-primary-500/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-lg bg-primary-600/20 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-primary-400 font-bold text-lg sm:text-xl">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base truncate" title={brand.name}>{brand.name}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 line-clamp-2">{brand.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
