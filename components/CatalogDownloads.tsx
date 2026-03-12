"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const CATALOGS: Array<{
  id: string;
  name: string;
  description: string;
  filePath: string;
  image: string;
  imageAlt: string;
}> = [
  {
    id: "alarmas-vias",
    name: "Alarmas Vias",
    description: "Sistemas de alarma y seguridad residencial y comercial.",
    filePath: "ALARMAS VIAS (1).pptx",
    image: "/catalogs/img/vias.png",
    imageAlt: "Vias - Alarmas",
  },
  {
    id: "bullets-torretas",
    name: "Bullets y Torretas Tiandy",
    description: "Cámaras bullet y torreta para interior y exterior.",
    filePath: "BULLETS Y TORRETAS.pptx",
    image: "/catalogs/img/tiandy-bullets.png",
    imageAlt: "Tiandy - Bullets y Torretas",
  },
  {
    id: "garrett",
    name: "Catálogo Garrett",
    description: "Detectores y equipos de seguridad Garrett.",
    filePath: "CATALOGO GARRETT.pptx",
    image: "/catalogs/img/garret4.png",
    imageAlt: "Garrett",
  },
  {
    id: "grs",
    name: "Catálogo GRS",
    description: "Soluciones Global Radio System.",
    filePath: "CATALOGO GRS.pptx",
    image: "/catalogs/img/globalradiosystem.png",
    imageAlt: "Global Radio System",
  },
  {
    id: "nvr-switch",
    name: "NVR - Switch - Discos Duros",
    description: "Grabadores, switches y almacenamiento para CCTV.",
    filePath: "NVR - SWITCH - DISCOS DUROS.pptx",
    image: "/catalogs/img/tiandy-switch.png",
    imageAlt: "NVR y equipos de red",
  },
  {
    id: "wifi-duals",
    name: "WiFi - Duals - Pro",
    description: "Soluciones inalámbricas y equipos profesionales.",
    filePath: "WI FI - DUALS - PRO.pptx",
    image: "/catalogs/img/tiandy-dual.png",
    imageAlt: "WiFi y conectividad",
  },
];

function getDownloadUrl(filePath: string): string {
  return `/catalogs/${encodeURIComponent(filePath)}`;
}

export function CatalogDownloads() {
  return (
    <section id="catalogos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Catálogos para descargar
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Descarga nuestros catálogos por marca y categoría. Haz clic en la tarjeta o en el botón para descargar.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" delay={120}>
          {CATALOGS.map((catalog) => {
            const downloadUrl = getDownloadUrl(catalog.filePath);
            return (
              <a
                key={catalog.id}
                href={downloadUrl}
                download={catalog.filePath}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/10] bg-muted/60 overflow-hidden">
                  <Image
                    src={catalog.image}
                    alt={catalog.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-md bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    PPTX
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                    {catalog.name}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm line-clamp-2 flex-1">
                    {catalog.description}
                  </p>
                  <span className="mt-4 inline-flex items-center justify-center gap-2 text-primary font-medium text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar catálogo
                  </span>
                </div>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
