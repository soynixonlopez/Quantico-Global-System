import Image from "next/image";

const brands = [
  {
    name: "Tiandy",
    image: "/assets/img/branding/tiandy.png",
    logo: "/assets/img/branding/tiandylogo.png",
  },
  {
    name: "Vias",
    image: "/assets/img/branding/vias.png",
    logo: "/assets/img/branding/viaslogo.png",
  },
  {
    name: "Garrett",
    image: "/assets/img/branding/garret.png",
    logo: "/assets/img/branding/garretlogo.png",
  },
  {
    name: "Global Radio System",
    image: "/assets/img/branding/globalradio.png",
    logo: "/assets/img/branding/globalradiologo.png",
  },
];

export function Brands() {
  return (
    <section id="marcas" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Marcas líderes que distribuimos
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Trabajamos con los mejores fabricantes del mundo para ofrecerte calidad y confiabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {brands.map((brand, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] bg-muted/60 flex items-center justify-center p-4 sm:p-5">
                <Image
                  src={brand.image}
                  alt={`Productos o soluciones ${brand.name}`}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  quality={90}
                />
              </div>
              <div className="flex flex-col items-center justify-center p-5 sm:p-6 min-h-[100px] border-t border-border bg-card">
                <div className="relative w-full max-w-[120px] h-12 sm:max-w-[140px] sm:h-14">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    fill
                    className="object-contain object-center opacity-90 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 120px, 140px"
                    quality={90}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
