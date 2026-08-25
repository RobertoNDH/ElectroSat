# ElectroSat TV

Web corporativa de ElectroSat TV S.L., instalador de telecomunicaciones en Tenerife.

Sitio estático hecho con Astro. Un solo objetivo: que quien entre llame por teléfono
o escriba por WhatsApp.

## Arrancar

```powershell
npm install
npm run dev        # servidor de desarrollo en localhost:4321
npm run build      # genera dist/ con HTML puro
npm run preview    # sirve dist/ para revisarlo antes de subir
npm run check      # tipos y validación de la colección de servicios
```

Requiere Node 22.12 o superior.

## Dónde se toca cada cosa

| Quiero cambiar | Archivo |
|---|---|
| Teléfono, WhatsApp, email, dirección, horario, CIF, registro | `src/data/empresa.ts` |
| Marcas del muro | `src/data/marcas.ts` |
| Preguntas frecuentes de la home | `src/data/faq.ts` |
| Textos de un servicio | `src/content/servicios/<servicio>.md` |
| Secciones y textos de la home | `src/pages/index.astro` |
| Colores, tipografía, espaciado | `src/styles/tokens.css` |
| Logotipo | `src/components/Logotipo.astro` |
| Dominio del sitio | `astro.config.mjs` y `public/robots.txt` |

**`src/data/empresa.ts` es la única fuente de los datos de contacto.** Todos los
enlaces `tel:` y `wa.me` de la web se derivan de ahí, igual que el pie, la barra
móvil, la página de contacto, el aviso legal y el JSON-LD. Nunca escribas un
teléfono directamente en una plantilla.

Los valores pendientes están marcados con `TODO CLIENTE`. Para encontrarlos todos:

```powershell
Select-String -Path src\**\*.ts,src\**\*.astro -Pattern "TODO CLIENTE"
```

## Añadir un servicio

Crea un `.md` nuevo en `src/content/servicios/`. El esquema de
`src/content.config.ts` valida el frontmatter en tiempo de build, así que si falta
un campo el build falla en vez de publicar una página rota. El nombre del archivo
es la URL. Aparece solo en el menú móvil, en el pie, en la home y en la página de
servicios: no hay que darlo de alta en ningún sitio más.

## Decisiones que conviene conocer antes de tocar nada

**No hay formulario.** El contacto es teléfono, WhatsApp y correo. Es lo que más
convierte en este sector y, de paso, la web no trata datos personales por sí misma.
En `src/pages/contacto.astro` hay un comentario que explica qué haría falta si se
decide añadirlo más adelante.

**No hay cookies.** Ni analítica, ni píxeles, ni iframes, ni tipografías externas.
Por eso no hay banner. Si se añade cualquier herramienta de medición, hay que
revisar `src/pages/politica-de-cookies.astro` e implantar consentimiento previo.

**La CSP es estricta.** Astro calcula el hash de cada script y estilo que emite. Eso
se rompe si se añade un `style="..."` en el HTML, un `<script>` con `is:inline` o una
librería que inyecte estilos en línea. Si algo deja de verse, mira primero la consola.

**Nada del contenido depende de JavaScript.** Son 1,6 KB en cuatro módulos. Si el script no carga, la página se lee
entera. El único efecto que se pierde es el dibujado del diagrama del portal, que se
queda quieto y completo.

**Paleta monocroma.** El ámbar `--signal` tiene dos usos y solo dos: el arco interior
del motivo de señal del hero y el punto de "abierto ahora". Si aparece en un tercer
sitio, sobra.

## Desplegar

`npm run build` genera `dist/`, que es HTML, CSS, fuentes y tres ficheros de
JavaScript. Se sirve desde cualquier hosting estático.

`public/_headers` está en formato Netlify y Cloudflare Pages. En Vercel hay que
traducirlo a `vercel.json`, y en un servidor propio a directivas `add_header` de
nginx. Sin esas cabeceras el sitio funciona, pero se pierden HSTS, la protección
contra enmarcado y la política de permisos.

Antes de publicar, repasa `CHECKLIST-ENTREGA.md`.
