const stats = [
  { value: "+500", label: "Clientes satisfechos" },
  { value: "5+", label: "Marcas líderes" },
  { value: "100%", label: "Cobertura en Panamá" },
  { value: "24/7", label: "Soporte técnico" },
];

export function Stats() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 border-y border-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-items-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-2 opacity-0 animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 sm:mt-2 text-muted-foreground font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
