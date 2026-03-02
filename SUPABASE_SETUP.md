# Configuración de Supabase para catálogos (PDF / PPT)

Este proyecto usa Supabase para almacenar y servir catálogos en PDF y PPT. Sigue estos pasos para configurarlo.

## 1. Variables de entorno

Copia el archivo de ejemplo y rellena con los datos de tu proyecto en [Supabase](https://app.supabase.com):

```bash
cp .env.local.example .env.local
```

Edita `.env.local` y añade:

- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto (Settings → API → Project URL).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: clave anónima pública (Settings → API → anon public).

## 2. Crear la tabla `catalogs`

En el **SQL Editor** de Supabase, ejecuta:

```sql
-- Tabla de catálogos (metadatos). Los archivos se suben al Storage.
create table if not exists public.catalogs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  file_path text not null,
  file_type text not null check (file_type in ('pdf', 'ppt', 'pptx')),
  created_at timestamptz default now()
);

-- Permitir lectura pública para que la web pueda listar catálogos
alter table public.catalogs enable row level security (rls);

create policy "Permitir lectura pública de catálogos"
  on public.catalogs for select
  using (true);

-- Solo usuarios autenticados (o service role) pueden insertar/actualizar/borrar.
-- Si subes archivos desde el dashboard, puedes usar el SQL Editor para insertar filas.
-- Para permitir inserts desde una app de admin, crea otra policy.
```

## 3. Crear el bucket de Storage `catalogs`

1. En Supabase: **Storage** → **New bucket**.
2. Nombre: `catalogs`.
3. Marca **Public bucket** para que los enlaces de descarga funcionen sin autenticación.
4. Crea el bucket.

### Política de Storage (opcional)

Si quieres que solo tú puedas subir y el público solo leer:

- **Policies** del bucket `catalogs`:
  - **SELECT (read)**: para todos (`true`), para que la URL pública funcione.
  - **INSERT/UPDATE/DELETE**: según tu necesidad (p. ej. solo con service role o usuarios autenticados).

Con bucket público, la URL de descarga es:

```
https://<TU_PROJECT_REF>.supabase.co/storage/v1/object/public/catalogs/<ruta_del_archivo>
```

## 4. Subir archivos y registrar en la tabla

### Opción A: Desde el dashboard de Supabase

1. **Storage** → bucket **catalogs** → **Upload** y sube tu PDF o PPT.
2. **Table Editor** → tabla **catalogs** → **Insert row** y rellena:
   - `name`: nombre que verá el usuario (ej. "Catálogo Tiandy 2024").
   - `description`: (opcional) breve descripción.
   - `file_path`: **ruta exacta del archivo en el bucket** (ej. `tiandy-2024.pdf` o `catalogos/tiandy.pdf`).
   - `file_type`: `pdf`, `ppt` o `pptx`.

### Opción B: Con SQL

Después de subir el archivo al bucket (p. ej. `mi-catalogo.pdf`):

```sql
insert into public.catalogs (name, description, file_path, file_type)
values (
  'Catálogo general 2024',
  'Productos y soluciones de seguridad',
  'mi-catalogo.pdf',
  'pdf'
);
```

## 5. Comportamiento en la web

- La sección **"Catálogos para descargar"** (y enlace **Descargas** en el menú) lista los registros de la tabla `catalogs`.
- Cada ítem muestra nombre, descripción (si existe) y tipo (PDF/PPT/PPTX).
- Al hacer clic en **Descargar**, se abre la URL pública del archivo en Supabase Storage; el navegador puede abrir o descargar el PDF/PPT según su configuración.

## Resumen

| Dónde        | Qué hacer |
|-------------|-----------|
| `.env.local`| `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| SQL Editor  | Ejecutar el `create table` y las policies de `catalogs` |
| Storage     | Bucket `catalogs` público y subir PDF/PPT |
| Table Editor| Insertar filas en `catalogs` con `name`, `file_path`, `file_type` (y opcional `description`) |

Si no configuras Supabase, la sección mostrará un mensaje indicando que faltan las variables de entorno.
