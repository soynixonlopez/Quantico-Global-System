const stats = [
  { value: "+500", label: "Clientes satisfechos" },
  { value: "5+", label: "Marcas líderes" },
  { value: "100%", label: "Cobertura en Panamá" },
  { value: "24/7", label: "Soporte técnico" },
];

export function Stats() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400">{stat.value}</p>
              <p className="mt-1 sm:mt-2 text-slate-400 font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
