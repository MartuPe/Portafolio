# Portafolio — Martina Abril Perrone

Portafolio personal bilingüe (ES/EN) construido con **React 19 + TypeScript + Vite + Tailwind v4 + Framer Motion**.

## Correr en local

```bash
cd web
npm install
npm run dev
```

Abre en http://localhost:5173

Build de producción:

```bash
npm run build      # genera /dist
npm run preview    # previsualiza el build
```

## Cómo personalizar el contenido

Todo el contenido editable está en `src/`:

| Qué querés cambiar | Archivo |
|---|---|
| Textos de la UI (hero, sobre mí, contacto, etc.) en ES/EN | `src/i18n/translations.ts` |
| Proyectos (FORARIA, blueSoft, YPF Luz, Casino) | `src/lib/projects.ts` |
| Stack técnico, educación, datos de contacto, redes | `src/lib/site.ts` |
| **Recomendaciones de LinkedIn** | `src/lib/site.ts` → `testimonials` |

### Tu foto de perfil
Dejá tu foto en `public/perfil.jpg`. Si no existe, se muestra un monograma "MP" elegante.
Recomendado: retrato vertical (proporción ~4:5), formato JPG, al menos 800×1000 px.

### Recomendaciones (testimonials)
En `src/lib/site.ts`, completá `name` y `quote` (ES y EN) de cada recomendación.
Mientras el `quote` esté vacío, la tarjeta y el link "Recomendaciones" del menú no se muestran
(así el sitio nunca se ve incompleto). Al cargar al menos una, aparece la sección automáticamente.

## Desplegar en Vercel

**Opción A — desde GitHub (recomendada):**
Este repo git ya está inicializado dentro de `web/` (o sea, la raíz del repo es esta carpeta).
1. Creá un repo vacío en GitHub (por ejemplo `MartuPe/portfolio`), **sin** README ni .gitignore.
2. Conectalo y subí:
   ```bash
   git remote add origin https://github.com/MartuPe/portfolio.git
   git push -u origin main
   ```
3. En https://vercel.com → *Add New Project* → importá el repo.
4. Configuración:
   - **Root Directory:** dejar por defecto (`./`)
   - Framework Preset: *Vite* (se detecta solo)
   - Build Command: `npm run build` · Output Directory: `dist`
5. Deploy. Vercel te da una URL `*.vercel.app`. Después podés conectar tu dominio propio.

**Opción B — desde la terminal:**
```bash
npm i -g vercel
cd web
vercel        # seguí los pasos (login + configuración)
vercel --prod # publicar a producción
```

El archivo `vercel.json` ya incluye el rewrite para que la SPA funcione en cualquier ruta.
