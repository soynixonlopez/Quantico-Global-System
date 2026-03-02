import Image from "next/image";

const brands = [
  { name: "Tiandy", logo: "/assets/logo/tiandy.png" },
  { name: "Vias", logo: "/assets/logo/vias.png" },
  { name: "Garrett", logo: "/assets/logo/garret.png" },
  { name: "Global Radio System", logo: "/assets/logo/globalradio.png" },
  { name: "Quantico", logo: "/assets/logo/quanticonegro.png" },
];

export function Brands() {
  return (
    <section id="marcas" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Marcas líderes que distribuimos
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Trabajamos con los mejores fabricantes del mundo para ofrecerte calidad y confiabilidad.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="group w-full flex items-center justify-center min-w-0"
            >
              <div className="relative w-full aspect-square max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
