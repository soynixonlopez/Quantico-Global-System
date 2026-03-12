import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85svh] sm:min-h-[88svh] lg:min-h-[90vh] flex items-center overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-20 pb-12 sm:pb-16 bg-background">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230284c7\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60 dark:opacity-40" />
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-5 py-8 sm:py-12 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
        {/* Móvil: texto arriba (order-1). Desktop: texto izquierda (md:order-1) */}
        <Reveal className="order-1 text-center md:text-left">
          <p className="text-primary font-medium text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Líder en vigilancia en Panamá
          </p>
          <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Soluciones de{" "}
            <span className="text-primary">seguridad</span> que protegen lo que más importa
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Cámaras de seguridad, NVR, sistemas CCTV y control de acceso. Marcas líderes como Tiandy, Vias, Garrett y más. Instalación y soporte técnico en todo Panamá.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/50760707201?text=Hola%2C%20me%20interesa%20cotizar%20cámaras%20de%20seguridad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-primary-foreground active:scale-[0.98] px-5 sm:px-6 py-3 rounded-lg font-medium transition-all w-full sm:w-auto min-h-[48px]"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar por WhatsApp
            </a>
            <Link
              href="#productos"
              className="inline-flex items-center justify-center gap-2 border-2 border-border hover:border-primary hover:text-primary text-foreground px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto min-h-[48px]"
            >
              Ver catálogo
            </Link>
          </div>
        </Reveal>
        {/* Móvil: imagen abajo (order-2). Desktop: imagen derecha (md:order-2) */}
        <Reveal className="relative order-2 flex justify-center" delay={120}>
          <div className="relative w-full max-w-lg md:max-w-none md:h-[380px] lg:h-[460px]">
            <div className="relative h-full w-full rounded-2xl border border-border shadow-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/assets/img/bannermain.png"
                alt="Instalación de sistemas de seguridad - Quantico System Global"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />

              {/* Barra inferior: verde de la marca, texto legible */}
              <div className="absolute inset-x-0 bottom-0 bg-primary text-primary-foreground py-4 sm:py-5 px-4 sm:px-6">
                <p className="font-semibold text-sm sm:text-base text-primary-foreground">
                  Sistemas CCTV profesionales
                </p>
                <p className="text-primary-foreground/90 text-xs sm:text-sm mt-0.5">
                  Instalación y soporte técnico especializado en todo Panamá.
                </p>
              </div>
            </div>

            {/* Íconos flotantes: fondo blanco sólido y sombra para buen contraste */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-2 sm:-top-3 left-4 sm:left-8">
                <div className="rounded-xl bg-white border-2 border-neutral-200 shadow-xl p-2.5 sm:p-3 ring-2 ring-white/50">
                  <Image
                    src="/assets/img/branding/tiandylogo.png"
                    alt="Tiandy"
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                    unoptimized
                  />
                </div>
              </div>

              <div className="absolute top-6 sm:top-8 -right-1 sm:right-2">
                <div className="rounded-xl bg-white border-2 border-neutral-200 shadow-xl p-2.5 sm:p-3 ring-2 ring-white/50">
                  <Image
                    src="/assets/img/branding/viaslogo.png"
                    alt="Vias"
                    width={36}
                    height={36}
                    className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                    unoptimized
                  />
                </div>
              </div>

              <div className="absolute bottom-16 sm:bottom-20 -left-1 sm:left-2">
                <div className="rounded-xl bg-white border-2 border-neutral-200 shadow-xl p-2.5 sm:p-3 ring-2 ring-white/50">
                  <Image
                    src="/assets/img/branding/garretlogo.png"
                    alt="Garrett"
                    width={36}
                    height={36}
                    className="object-contain w-7 h-7 sm:w-9 sm:h-9"
                    unoptimized
                  />
                </div>
              </div>

              <div className="absolute bottom-14 sm:bottom-16 right-4 sm:right-6">
                <div className="rounded-xl bg-white border-2 border-neutral-200 shadow-xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold text-neutral-700">
                    Soporte en línea
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
