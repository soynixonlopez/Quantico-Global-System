"use client";

import Image from "next/image";

const CATALOG_DOWNLOAD_URL = "/catalogs/QUANTICO.pptx";

export function CatalogBanner() {
  return (
    <section
      id="banner-catalogo"
      className="relative w-full overflow-hidden py-6 sm:py-8"
      aria-labelledby="banner-catalogo-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg flex flex-col sm:flex-row">
          {/* Imagen: se ajusta al 100% del bloque con object-cover */}
          <a
            href={CATALOG_DOWNLOAD_URL}
            download="Quantico-Catalogo.pptx"
            className="relative block w-full sm:w-[58%] h-[220px] sm:h-[280px] flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            aria-label="Descargar catálogo Quantico"
          >
            <Image
              src="/assets/img/bannersectiontiandy.png"
              alt="Catálogo Quantico"
              fill
              className="object-cover object-center cursor-pointer transition-opacity hover:opacity-95"
              sizes="(max-width: 640px) 100vw, 70vw"
              quality={90}
            />
          </a>

          {/* CTA: compacto y claro */}
          <div className="flex flex-col justify-center p-5 sm:p-6 w-full sm:w-[42%] bg-card border-t sm:border-t-0 sm:border-l border-border">
            <h2 id="banner-catalogo-title" className="text-lg font-bold text-foreground">
              Nuestro catálogo
            </h2>
            <p className="mt-1 text-muted-foreground text-sm">
              Productos y soluciones en un solo archivo.
            </p>
            <a
              href={CATALOG_DOWNLOAD_URL}
              download="Quantico-Catalogo.pptx"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
