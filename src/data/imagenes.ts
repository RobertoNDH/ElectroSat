// Fotografías por servicio, compartidas entre los tres idiomas.
//
// PROVISIONAL: imágenes de Unsplash (licencia libre, uso comercial permitido
// sin atribución) hasta que el cliente facilite fotos reales. Para cambiarlas
// basta con sustituir el archivo en src/assets/ manteniendo el nombre.
import type { ImageMetadata } from 'astro';

import tdt from '../assets/hero-1-antenas.jpg';
import videovigilancia from '../assets/videovigilancia.jpg';
import porteros from '../assets/porteros-y-videoporteros.jpg';
import internet from '../assets/internet-comunitario.jpg';
import telecomunicaciones from '../assets/telecomunicaciones.jpg';

const POR_SLUG: Record<string, ImageMetadata> = {
  'tdt-y-satelite': tdt,
  videovigilancia: videovigilancia,
  'porteros-y-videoporteros': porteros,
  'internet-comunitario': internet,
  telecomunicaciones: telecomunicaciones,
};

/** Acepta tanto "videovigilancia" como "en/videovigilancia". */
export const fotoDeServicio = (id: string): ImageMetadata =>
  POR_SLUG[id.includes('/') ? id.split('/').pop()! : id];
