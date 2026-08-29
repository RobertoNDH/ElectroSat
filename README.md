# ElectroSat TV

Web corporativa de ElectroSat TV S.L., instalador de telecomunicaciones en el sur de
Tenerife. Sitio estático construido con Astro, en español, inglés y alemán.

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
| Teléfono, WhatsApp, correo, dirección, CIF, registro, municipios | `src/data/empresa.ts` |
| Cualquier texto de la interfaz, en los tres idiomas | `src/i18n/textos.ts` |
| Títulos y descripciones para Google | `src/i18n/seo.ts` |
| Textos de la página Nosotros | `src/i18n/nosotros.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Marcas | `src/data/marcas.ts` |
| Fotos de cada servicio | `src/data/imagenes.ts` y `src/assets/` |
| Fotos de portada, bandas y cabeceras | `src/assets/`, ver `FOTOGRAFIAS.md` |
| Textos de un servicio | `src/content/servicios/<idioma>/<servicio>.md` |
| Secciones de la home | `src/secciones/Home.astro` |
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

## Idiomas

Español, inglés y alemán. El español es el principal y va sin prefijo:

```
/                    /en/                    /de/
/servicios/          /en/servicios/          /de/servicios/
/contacto/           /en/contacto/           /de/contacto/
```

Cada página se escribe una sola vez en `src/secciones/` y recibe el idioma como
propiedad. Las rutas de `src/pages/[...lang]/` solo eligen el idioma. Para cambiar una
frase basta con tocar `src/i18n/textos.ts`, que tiene los tres idiomas juntos.

Las etiquetas `hreflang` y el selector del menú se generan solos a partir de
`src/i18n/config.ts`. Para añadir un cuarto idioma hay que ampliar ese archivo,
`textos.ts`, `seo.ts`, `nosotros.ts`, `faq.ts` y crear la carpeta de servicios.

Los textos legales están solo en español, que es la versión con validez legal en España.
Desde inglés y alemán se enlazan igualmente y el pie lo advierte.

## Añadir un servicio

1. Crear el `.md` en `src/content/servicios/es/`, `en/` y `de/`. El nombre del archivo es
   la URL y debe ser el mismo en los tres idiomas.
2. Añadir la foto en `src/assets/` y registrarla en `src/data/imagenes.ts`.

El esquema de `src/content.config.ts` valida el frontmatter al compilar, así que si falta
un campo el build falla en lugar de publicar una página incompleta.

## Diseño

Base clara con dos bandas oscuras. Los dos colores del logo tienen cada uno su función:

- **Azul**: estructura. Iconos, enlaces, sellos y las bandas de noche, que son ese mismo
  azul llevado casi al negro para que las fotos se fundan con el fondo.
- **Amarillo**: acción y acento. Botón de llamar, numeración de los pasos y estrellas
  de la valoración.

Titulares en Archivo Variable, aprovechando su eje de anchura para que vayan anchos sin
recurrir a una condensada, que en alemán sería ilegible. Texto en Schibsted Grotesk.
Las dos se sirven desde el propio dominio.

### Estructura de la home

Portada con carrusel de cuatro diapositivas (la primera lleva el titular de marca y es
la única que se pinta como `<h1>`, para SEO) → tira de ventajas montada sobre la
portada → rejilla de servicios → bloque de nosotros con fotos solapadas y sello de
años → banda oscura con los cuatro pasos → marquesina de marcas → preguntas frecuentes
→ banda de contacto → mapa → pie oscuro de cuatro columnas.

Las páginas interiores abren todas con `PortadaPagina`: foto con velo, miga de pan y
titular. El detalle de servicio lleva columna lateral pegajosa con el resto de servicios,
las marcas y el teléfono.

### Movimiento

Todo va en JavaScript propio, sin librerías, y se apaga entero con
`prefers-reduced-motion`. Las entradas al hacer scroll se piden con el atributo
`data-anima` (o `data-anima="hijos"` para escalonar los hijos de una rejilla), así que
una sección nueva no obliga a tocar `components/Animaciones.astro`.

### Trampa conocida de las rejillas

Una rejilla de una sola columna sin `grid-template-columns` usa una pista implícita
`auto`, que se dimensiona a `max-content`: un párrafo largo la ensancha por encima del
contenedor y saca barra horizontal en móvil. Por eso todas las rejillas de una columna
de este proyecto declaran `grid-template-columns: minmax(0, 1fr)`.

## Decisiones que conviene conocer

**Sin formulario.** El contacto es teléfono, WhatsApp y correo. La web no trata datos
personales por sí misma.

**Sin cookies.** Ni analítica, ni píxeles, ni iframes, ni tipografías externas. Por eso no
hay banner. Si se añade medición hay que revisar `src/pages/politica-de-cookies.astro` e
implantar consentimiento previo.

**CSP estricta.** Astro calcula el hash de cada script y estilo que emite. Se rompe si se
añade un `style="..."` en el HTML, un `<script>` con `is:inline` o una librería que
inyecte estilos en línea. Por eso el tamaño del logotipo va por clase y no por atributo.
Si algo deja de verse, revisar la consola.

**El contenido no depende de JavaScript.** Si el script no carga, la página se lee entera.
Lo único que se pierde es el trazado animado del diagrama del portal.

**Fotografía provisional.** Las imágenes de `src/assets/` son de Pexels y sirven de
marcador hasta que haya fotos reales de instalaciones. Para sustituirlas basta con
reemplazar el archivo manteniendo el nombre. El listado de qué es cada una y qué recorte
aguanta está en `src/assets/FOTOGRAFIAS.md`.

## Desplegar

`npm run build` genera `dist/` con HTML, CSS, imágenes optimizadas y fuentes. Se sirve
desde cualquier alojamiento estático.

`public/_headers` está en formato Netlify y Cloudflare Pages. En Vercel se traduce a
`vercel.json` y en un servidor propio a directivas `add_header` de nginx.
