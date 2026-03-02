const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** URL pública para descargar un archivo del bucket 'catalogs' */
export function getCatalogDownloadUrl(filePath: string): string {
  if (!supabaseUrl) return "#";
  return `${supabaseUrl}/storage/v1/object/public/catalogs/${filePath.replace(/^\//, "")}`;
}

/** Obtiene la lista de catálogos desde Supabase (REST API, sin paquete @supabase/supabase-js) */
export async function fetchCatalogs(): Promise<
  { data: Array<{ id: string; name: string; description: string | null; file_path: string; file_type: string; created_at: string }>; error: string | null }
> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { data: [], error: "Faltan variables de Supabase en .env.local" };
  }
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/catalogs?select=id,name,description,file_path,file_type,created_at&order=created_at.desc`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      const text = await res.text();
      return { data: [], error: text || res.statusText };
    }
    const data = await res.json();
    return { data, error: null };
  } catch (e) {
    return {
      data: [],
      error: e instanceof Error ? e.message : "Error al cargar catálogos",
    };
  }
}
