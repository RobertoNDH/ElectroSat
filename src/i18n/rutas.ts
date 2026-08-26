import { CODIGOS, IDIOMA_POR_DEFECTO } from './config';

/**
 * Una ruta por idioma. El español va sin prefijo, así que su parámetro es
 * undefined y Astro genera la URL raíz.
 */
export const rutasIdioma = () =>
  CODIGOS.map((lang) => ({
    params: { lang: lang === IDIOMA_POR_DEFECTO ? undefined : lang },
    props: { lang },
  }));
