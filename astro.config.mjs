// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO CLIENTE: sustituir por el dominio definitivo antes de publicar.
// Este valor alimenta las URL canonicas, el sitemap y el JSON-LD.
export const SITE = 'https://www.electrosattv.es';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [sitemap()],

  markdown: {
    // No hay bloques de codigo en el contenido y el resaltador de Shiki emite
    // estilos en linea que romperian la CSP.
    syntaxHighlight: false,
  },

  build: {
    // El CSS sale a ficheros externos para que style-src pueda ser 'self'.
    inlineStylesheets: 'never',
  },

  security: {
    // Astro calcula el hash de cada script y estilo que emite y publica la
    // politica en una etiqueta meta por pagina. Asi no hace falta
    // 'unsafe-inline' en ningun sitio.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
        "manifest-src 'self'",
        // El mapa solo se carga si el visitante pulsa el boton.
        "frame-src https://maps.google.com https://www.google.com",
      ],
    },
  },
});
