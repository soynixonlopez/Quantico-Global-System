import Image from "next/image";
import { Reveal } from "./Reveal";

const brands = [
  {
    name: "Tiandy",
    logo: "/assets/img/branding/tiandylogo.png",
  },
  {
    name: "Vias",
    logo: "/assets/img/branding/viaslogo.png",
  },
  {
    name: "Garrett",
    logo: "/assets/img/branding/garretlogo.png",
  },
  {
    name: "Global Radio System",
    logo: "/assets/img/branding/globalradiologo.png",
  },
];

export function Brands() {
  return (
    <section id="marcas" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Marcas líderes que distribuimos
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Trabajamos con los mejores fabricantes del mundo para ofrecerte calidad y confiabilidad.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" delay={120}>
          {brands.map((brand, i) => (
            <article
              key={i}
              className="group flex items-center justify-center rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 min-h-[120px] sm:min-h-[130px] p-5 sm:p-6"
            >
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
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
