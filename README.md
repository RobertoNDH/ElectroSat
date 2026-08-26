# ElectroSat TV

Web corporativa de ElectroSat TV S.L., instalador de telecomunicaciones en Tenerife.
Sitio estático construido con Astro.

## Arrancar

```powershell
npm install
npm run dev        # desarrollo en localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/
npm run check      # tipos y validación de contenidos
```

Requiere Node 22.12 o superior.

## Dónde se toca cada cosa

| Para cambiar | Archivo |
|---|---|
| Teléfono, WhatsApp, correo, dirección, horario, CIF, registro | `src/data/empresa.ts` |
| Marcas del muro | `src/data/marcas.ts` |
| Preguntas frecuentes de la home | `src/data/faq.ts` |
| Fotos de cada servicio | `src/data/imagenes.ts` y `src/assets/` |
| Textos de un servicio | `src/content/servicios/<servicio>.md` |
| Secciones de la home | `src/pages/index.astro` |
| Colores, tipografía, espaciado | `src/styles/tokens.css` |
| Logotipo | `src/components/Logotipo.astro` |
| Dominio | `astro.config.mjs` y `public/robots.txt` |

`src/data/empresa.ts` es la única fuente de los datos de contacto: de ahí salen todos los
enlaces `tel:` y `wa.me`, el pie, la barra móvil, la página de contacto, el aviso legal y
los datos estructurados.

Los valores pendientes están marcados con `TODO`:

```powershell
Select-String -Path src -Pattern "TODO" -Recurse
```

## Añadir un servicio

1. Crear un `.md` en `src/content/servicios/`. El nombre del archivo es la URL.
2. Añadir la foto en `src/assets/` y registrarla en `src/data/imagenes.ts`.

El esquema de `src/content.config.ts` valida el frontmatter al compilar, así que si falta
un campo el build falla en lugar de publicar una página incompleta. El servicio aparece
solo en la home, el pie, el menú y el índice de servicios.

## Diseño

Base clara con gris azulado. El azul del logo estructura la interfaz (franja superior,
enlaces, iconos) y el naranja marca la acción: botón de llamada, numeración de pasos y
subrayado de los antetítulos. Tipografías Barlow Condensed para titulares y Barlow para
el resto, servidas desde el propio dominio.

## Decisiones que conviene conocer

**Sin formulario.** El contacto es teléfono, WhatsApp y correo. La web no trata datos
personales por sí misma.

**Sin cookies.** Ni analítica, ni píxeles, ni iframes, ni tipografías externas. Por eso no
hay banner. Si se añade medición hay que revisar `src/pages/politica-de-cookies.astro` e
implantar consentimiento previo.

**CSP estricta.** Astro calcula el hash de cada script y estilo que emite. Se rompe si se
añade un `style="..."` en el HTML, un `<script>` con `is:inline` o una librería que
inyecte estilos en línea. Si algo deja de verse, revisar la consola.

**El contenido no depende de JavaScript.** Si el script no carga, la página se lee entera.
Lo único que se pierde es el trazado animado del diagrama del portal.

**Fotografía provisional.** Las imágenes de `src/assets/` son de Unsplash y sirven de
marcador hasta que haya fotos reales de instalaciones. Para sustituirlas basta con
reemplazar el archivo manteniendo el nombre.

## Desplegar

`npm run build` genera `dist/` con HTML, CSS, imágenes optimizadas y fuentes. Se sirve
desde cualquier alojamiento estático.

`public/_headers` está en formato Netlify y Cloudflare Pages. En Vercel se traduce a
`vercel.json` y en un servidor propio a directivas `add_header` de nginx.
