"use client";

import { useEffect, useState } from "react";
import { fetchCatalogs, getCatalogDownloadUrl } from "@/lib/supabase/client";
import type { CatalogRow } from "@/lib/supabase/types";

const FILE_TYPE_LABELS: Record<string, string> = {
  pdf: "PDF",
  ppt: "PPT",
  pptx: "PPTX",
};

export function CatalogDownloads() {
  const [catalogs, setCatalogs] = useState<CatalogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data, error: err } = await fetchCatalogs();
      setCatalogs(data ?? []);
      setError(err);
      setLoading(false);
    }
    load();
  }, []);

  const hasEnv =
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return (
    <section id="catalogos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
            Catálogos para descargar
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
            Descarga nuestros catálogos en PDF o PPT. Haz clic en el que te interese.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" aria-hidden />
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-12 px-4 rounded-xl bg-card border border-border max-w-xl mx-auto">
            <p className="text-muted-foreground text-sm">{error}</p>
            {!hasEnv && (
              <p className="mt-2 text-xs text-muted-foreground">
                Revisa el archivo SUPABASE_SETUP.md para configurar la base de datos y el storage.
              </p>
            )}
          </div>
        )}

        {!loading && !error && catalogs.length === 0 && hasEnv && (
          <div className="text-center py-12 px-4 rounded-xl bg-card border border-border max-w-xl mx-auto">
            <p className="text-muted-foreground">Aún no hay catálogos publicados.</p>
          </div>
        )}

        {!loading && !error && catalogs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogs.map((catalog) => {
              const downloadUrl = getCatalogDownloadUrl(catalog.file_path);
              const label = FILE_TYPE_LABELS[catalog.file_type] ?? catalog.file_type.toUpperCase();
              return (
                <div
                  key={catalog.id}
                  className="rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 transition-colors flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-foreground font-semibold text-lg truncate">
                        {catalog.name}
                      </h3>
                      {catalog.description && (
                        <p className="mt-1.5 text-muted-foreground text-sm line-clamp-2">
                          {catalog.description}
                        </p>
                      )}
                    </div>
                    <span className="flex-shrink-0 text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                      {label}
                    </span>
                  </div>
                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-primary-foreground py-2.5 px-4 rounded-lg text-sm font-medium transition-opacity w-full sm:w-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
