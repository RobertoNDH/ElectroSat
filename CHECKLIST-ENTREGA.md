# Checklist de pre-entrega — ElectroSat TV

Estado a 25 de agosto de 2026. Marcado `[x]` lo que está verificado con una
comprobación concreta, no de memoria. Lo que sigue en `[ ]` depende de datos que
tiene que aportar el cliente o de la puesta en producción.

Para revalidar todo de una vez:

```powershell
npm run build
npx astro check
npm audit --omit=dev
gitleaks dir . --redact --report-path .security\gitleaks-final.json --exit-code 0
```

---

## Seguridad

- [x] Baseline de gitleaks sobre el repo vacío, sin hallazgos → `.security/gitleaks-baseline.json`
- [x] Escaneo final de gitleaks, sin hallazgos → `.security/gitleaks-final.json`
- [x] `npm audit --omit=dev`: 0 vulnerabilidades
- [x] Sin ficheros `.env` ni claves en el repositorio (no hay ningún secreto que gestionar: el sitio es estático y no llama a ninguna API)
- [x] `.gitignore` cubre `node_modules`, `dist`, `.astro` y `.env*`
- [x] CSP estricta generada por Astro con hash por script y estilo, sin `unsafe-inline` → verificada en `dist/*.html`
- [x] Consola del navegador sin errores ni avisos de CSP en la home
- [x] Sin estilos en línea (`<style>` ni atributos `style=`) en el HTML generado
- [x] Los 76 enlaces externos del sitio llevan `rel="noopener noreferrer"`
- [x] `public/_headers` con HSTS, `nosniff`, `X-Frame-Options: DENY`, `frame-ancestors 'none'`, `Referrer-Policy` y `Permissions-Policy`
- [ ] Cabeceras de `_headers` comprobadas ya servidas en producción (depende del hosting elegido; si no es Netlify o Cloudflare Pages hay que traducirlas)
- [ ] Certificado HTTPS activo y redirección desde HTTP

## Legal

- [x] Aviso legal, política de privacidad y política de cookies publicadas y enlazadas desde el pie
- [x] Ausencia de cookies confirmada: sin analítica, sin píxeles, sin iframes, tipografías autoalojadas
- [x] Sin banner de cookies, porque no se instala ninguna
- [x] Sin opiniones inventadas: los tres testimonios de la home son marcadores entre corchetes
- [x] Sin fotografías: el sitio no usa ninguna imagen de terceros
- [x] Las marcas se muestran como texto, no como logotipo, hasta que el cliente confirme cuáles trabaja
- [ ] CIF, domicilio y datos registrales reales en el aviso legal
- [ ] Número real de inscripción en el Registro de Empresas Instaladoras de Telecomunicación
- [ ] Proveedor de alojamiento y de correo declarados en la política de privacidad
- [ ] Los tres textos legales revisados por un asesor

## Accesibilidad

- [x] Contraste AA verificado por cálculo en todas las combinaciones del sistema
- [x] Borde de controles contorneados a 3.47:1, según WCAG 1.4.11
- [x] Foco visible en todo elemento interactivo, nunca `outline: none`
- [x] Enlace para saltar al contenido, operativo con teclado
- [x] Un solo `<h1>` por página en las 13 páginas
- [x] Menú móvil sobre `<dialog>`: atrapa el foco, cierra con Escape y devuelve el foco al botón
- [x] Acordeón de preguntas sobre `<details>` nativo, accesible por teclado sin JavaScript
- [x] `prefers-reduced-motion` respetado: toda animación vive dentro de `no-preference`
- [x] Áreas táctiles de 44px mínimo en botones y controles
- [x] El diagrama del portal lleva `role="img"`, `<title>` y `<desc>`
- [x] Sin contenido que dependa de JavaScript para verse: si el script falla, la página se lee entera
- [ ] Pasada con un lector de pantalla real (NVDA o VoiceOver)

## Rendimiento

- [x] Salida estática, sin runtime de framework
- [x] JavaScript total del sitio por debajo de 1 KB en tres módulos
- [x] Tipografías variables autoalojadas, subconjunto latino, `font-display: swap`
- [x] Iconos SVG en línea, sin peticiones adicionales ni fuente de iconos
- [x] Sin imágenes en el contenido, por tanto sin CLS por imagen
- [x] Caché inmutable de un año para `/_astro/*` en `_headers`
- [ ] Lighthouse ejecutado contra la URL de producción, 95+ en las cuatro métricas

## SEO

- [x] `<title>` y `<meta description>` únicos en las 13 páginas
- [x] Canonical absoluto en todas
- [x] `sitemap-index.xml` generado y `robots.txt` apuntando a él
- [x] JSON-LD: `LocalBusiness` global, más `Service`, `FAQPage`, `BreadcrumbList`, `ContactPage` y `AboutPage` donde corresponde
- [x] Open Graph con imagen propia de 1200×630
- [x] Páginas legales y 404 marcadas `noindex, follow`
- [x] Una URL por servicio, en español y con barra final consistente
- [ ] Dominio real en `astro.config.mjs` y en `robots.txt`
- [ ] JSON-LD validado en el Rich Results Test de Google, ya en producción
- [ ] Ficha de Google Business Profile enlazada y coherente con el JSON-LD

## Funcional

- [x] Las 13 páginas construyen sin errores ni avisos
- [x] `astro check`: 0 errores, 0 avisos, 0 sugerencias
- [x] Todos los `tel:` y `wa.me` del sitio salen de `src/data/empresa.ts`, ninguno escrito a mano
- [x] Sin desbordamiento horizontal a 375, 768 ni 1440
- [x] Página 404 propia con teléfono y acceso a los servicios
- [x] Barra fija de llamada en móvil, con hueco reservado para no tapar el pie
- [ ] Probado en Safari de iOS y en Chrome de Android sobre un dispositivo real
- [ ] Todos los enlaces revisados una vez sustituidos los datos del cliente

## Datos que faltan del cliente

Todos viven en `src/data/empresa.ts` y están marcados con `TODO CLIENTE`.
Cambiarlos ahí actualiza la web entera.

- [ ] Teléfono fijo, móvil y WhatsApp
- [ ] Correo electrónico
- [ ] Dirección completa y enlace de Google Maps
- [ ] Horario de atención real
- [ ] CIF y datos registrales
- [ ] Número de registro de instalador
- [ ] Año de inicio de actividad
- [ ] Marcas que instala o distribuye realmente (`src/data/marcas.ts`)
- [ ] Opiniones reales de clientes, con su permiso (`src/pages/index.astro`)
- [ ] Historia real de la empresa (`src/pages/nosotros.astro`)
- [ ] Fichero del logotipo, si se prefiere al logotipo tipográfico actual
