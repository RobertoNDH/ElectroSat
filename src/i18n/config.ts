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

/** Convierte una ruta interna en su versión para un idioma. */
export const ruta = (lang: Idioma, camino = '/') => {
  const limpio = camino === '/' ? '/' : camino;
  return `${prefijo(lang)}${limpio}` || '/';
};

/** Idioma a partir de la URL actual. */
export function idiomaDeUrl(url: URL): Idioma {
  const [, primero] = url.pathname.split('/');
  return CODIGOS.includes(primero as Idioma) ? (primero as Idioma) : IDIOMA_POR_DEFECTO;
}

/** Misma página en otro idioma, para el selector y las etiquetas hreflang. */
export function equivalente(url: URL, destino: Idioma): string {
  const actual = idiomaDeUrl(url);
  let camino = url.pathname;
  if (actual !== IDIOMA_POR_DEFECTO) camino = camino.slice(`/${actual}`.length) || '/';
  return ruta(destino, camino);
}
