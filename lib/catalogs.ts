export type CatalogFileType = "pdf" | "ppt" | "pptx";

export interface CatalogItem {
  id: string;
  name: string;
  description: string | null;
  file_path: string;
  file_type: CatalogFileType;
  created_at: string;
}

const CATALOGS_INDEX = "/catalogs/index.json";

/** URL pública para descargar un archivo desde public/catalogs */
export function getCatalogDownloadUrl(filePath: string): string {
  const path = filePath.replace(/^\//, "");
  return `/catalogs/${path}`;
}

/** Obtiene la lista de catálogos desde public/catalogs/index.json */
export async function fetchCatalogs(): Promise<{
  data: CatalogItem[];
  error: string | null;
}> {
  try {
    const res = await fetch(CATALOGS_INDEX);
    if (!res.ok) {
      return { data: [], error: res.statusText || "Error al cargar catálogos" };
    }
    const data: CatalogItem[] = await res.json();
    return { data: Array.isArray(data) ? data : [], error: null };
  } catch (e) {
    return {
      data: [],
      error: e instanceof Error ? e.message : "Error al cargar catálogos",
    };
  }
}
