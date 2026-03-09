import Image from "next/image";
import { Reveal } from "./Reveal";

const CATALOGS = [
  {
    id: "alarmas-vias",
    name: "Alarmas Vias",
    category: "Alarmas",
    description: "Sistemas de alarma y seguridad residencial y comercial.",
    filePath: "ALARMAS VIAS (1).pptx",
    image: "/catalogs/img/vias.png",
    imageAlt: "Vias - Alarmas",
  },
  {
    id: "bullets-torretas",
    name: "Bullets y Torretas Tiandy",
    category: "Cámaras",
    description: "Cámaras bullet y torreta para interior y exterior.",
    filePath: "BULLETS Y TORRETAS.pptx",
    image: "/catalogs/img/tiandy-bullets.png",
    imageAlt: "Tiandy - Bullets y Torretas",
  },
  {
    id: "garrett",
    name: "Catálogo Garrett",
    category: "Detectores",
    description: "Detectores y equipos de seguridad Garrett.",
    filePath: "CATALOGO GARRETT.pptx",
    image: "/catalogs/img/garret4.png",
    imageAlt: "Garrett",
  },
  {
    id: "grs",
    name: "Catálogo GRS",
    category: "Comunicación",
    description: "Soluciones Global Radio System.",
    filePath: "CATALOGO GRS.pptx",
    image: "/catalogs/img/globalradiosystem.png",
    imageAlt: "Global Radio System",
  },
  {
    id: "nvr-switch",
    name: "NVR - Switch - Discos Duros",
    category: "Grabación",
    description: "Grabadores, switches y almacenamiento para CCTV.",
    filePath: "NVR - SWITCH - DISCOS DUROS.pptx",
    image: "/catalogs/img/tiandy-switch.png",
    imageAlt: "NVR y equipos de red",
  },
  {
    id: "wifi-duals",
    name: "WiFi - Duals - Pro",
    category: "Conectividad",
    description: "Soluciones inalámbricas y equipos profesionales.",
    filePath: "WI FI - DUALS - PRO.pptx",
    image: "/catalogs/img/tiandy-dual.png",
    imageAlt: "WiFi y conectividad",
  },
];

function getDownloadUrl(filePath: string): string {
  return `/catalogs/${encodeURIComponent(filePath)}`;
}

export function ProductCatalog() {
  return (
    <section id="productos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Catálogo de productos
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Cámaras, NVR, accesorios y kits. Descarga los catálogos por marca y categoría.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" delay={120}>
          {CATALOGS.map((catalog) => {
            const downloadUrl = getDownloadUrl(catalog.filePath);
            return (
              <a
                key={catalog.id}
                href={downloadUrl}
                download={catalog.filePath}
                className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted/50">
                  <Image
                    src={catalog.image}
                    alt={catalog.imageAlt}
                    fill
                    className="object-cover object-[center_62%] group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    quality={90}
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                    {catalog.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="text-foreground font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
                    {catalog.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-2 line-clamp-2 flex-1">
                    {catalog.description}
                  </p>
                  <div className="mt-3 sm:mt-4">
                    <span className="inline-flex items-center justify-center gap-2 text-primary font-medium text-sm sm:text-base">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Descargar catálogo
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </Reveal>
        <Reveal className="mt-8 sm:mt-12 text-center px-2" delay={180}>
          <a
            href="https://wa.me/50760707201?text=Hola%2C%20quiero%20más%20información%20sobre%20los%20catálogos%20y%20productos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-primary-foreground px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto max-w-xs sm:max-w-none min-h-[48px]"
          >
            Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
