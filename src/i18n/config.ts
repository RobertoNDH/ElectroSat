export const IDIOMAS = {
  es: { nombre: 'Español', corto: 'ES', htmlLang: 'es-ES', ogLocale: 'es_ES' },
  en: { nombre: 'English', corto: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
  de: { nombre: 'Deutsch', corto: 'DE', htmlLang: 'de', ogLocale: 'de_DE' },
} as const;

export type Idioma = keyof typeof IDIOMAS;

export const IDIOMA_POR_DEFECTO: Idioma = 'es';

/** Los tres idiomas, con el español primero. */
export const CODIGOS = Object.keys(IDIOMAS) as Idioma[];

/**
 * Prefijo de ruta de cada idioma. El español no lleva prefijo porque es el
 * idioma principal del negocio y sus URL son las que se posicionan.
 */
export const prefijo = (lang: Idioma) => (lang === IDIOMA_POR_DEFECTO ? '' : `/${lang}`);

/**
 * Carpeta desde la que se sirve el sitio, sin barra final.
 * En la raíz de un dominio es cadena vacía; en GitHub Pages, "/ElectroSat".
 * Sale de la opción `base` de astro.config.mjs, así que al pasar al dominio
 * definitivo no hay que tocar nada aquí.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Quita la base para poder razonar siempre sobre rutas limpias. */
export const sinBase = (pathname: string) =>
  BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;

/** Convierte una ruta interna en su versión para un idioma, ya con la base. */
export const ruta = (lang: Idioma, camino = '/') => {
  const limpio = camino.startsWith('/') ? camino : `/${camino}`;
  return `${BASE}${prefijo(lang)}${limpio}`;
};

/** Ruta a un archivo de public/, con la base delante. */
export const publico = (archivo: string) =>
  `${BASE}/${archivo.replace(/^\/+/, '')}`;

/** Idioma a partir de la URL actual. */
export function idiomaDeUrl(url: URL): Idioma {
  const [, primero] = sinBase(url.pathname).split('/');
  return CODIGOS.includes(primero as Idioma) ? (primero as Idioma) : IDIOMA_POR_DEFECTO;
}

/**
 * Páginas que solo existen en español: los textos legales tienen validez legal
 * en España y la 404 no se traduce. Desde ellas, cambiar de idioma lleva a la
 * portada de ese idioma, porque su equivalente traducido no existe.
 */
const SOLO_ES = ['/aviso-legal/', '/politica-de-privacidad/', '/politica-de-cookies/'];

/** Misma página en otro idioma, para el selector y las etiquetas hreflang. */
export function equivalente(url: URL, destino: Idioma): string {
  const actual = idiomaDeUrl(url);
  let camino = sinBase(url.pathname);
  if (actual !== IDIOMA_POR_DEFECTO) camino = camino.slice(`/${actual}`.length) || '/';

  // La 404 no tiene equivalente en ningún idioma: siempre a la portada.
  if (camino.startsWith('/404')) return ruta(destino, '/');

  // Las legales solo existen en español: desde ellas, a la portada del idioma.
  if (destino !== IDIOMA_POR_DEFECTO && SOLO_ES.some((p) => camino.startsWith(p))) {
    return ruta(destino, '/');
  }

  return ruta(destino, camino);
}
