// Fotografías por servicio.
//
// PROVISIONAL: imágenes de Unsplash (licencia libre, uso comercial permitido
// sin atribución) usadas como marcador hasta que el cliente facilite fotos
// reales de sus instalaciones. Sustituir el archivo en src/assets/ manteniendo
// el nombre y no hay que tocar nada más.
import type { ImageMetadata } from 'astro';

import tdt from '../assets/tdt-y-satelite.jpg';
import videovigilancia from '../assets/videovigilancia.jpg';
import porteros from '../assets/porteros-y-videoporteros.jpg';
import internet from '../assets/internet-comunitario.jpg';
import telecomunicaciones from '../assets/telecomunicaciones.jpg';

export const fotoServicio: Record<string, ImageMetadata> = {
  'tdt-y-satelite': tdt,
  videovigilancia: videovigilancia,
  'porteros-y-videoporteros': porteros,
  'internet-comunitario': internet,
  telecomunicaciones: telecomunicaciones,
};
