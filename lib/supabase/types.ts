export type CatalogFileType = "pdf" | "ppt" | "pptx";

export interface CatalogRow {
  id: string;
  name: string;
  description: string | null;
  file_path: string;
  file_type: CatalogFileType;
  created_at: string;
}
