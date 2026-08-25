/**
 * Marcas con las que trabaja ElectroSat.
 *
 * TODO CLIENTE: confirmar cuales instala o distribuye realmente y eliminar el
 * resto. Publicar el logotipo de una marca con la que no se trabaja es un
 * problema legal, no un detalle de diseno. Mientras no haya ficheros de logo
 * autorizados se muestran como texto, que en Archivo expandido queda bien.
 */
export const marcas = [
  { nombre: 'Televes', para: 'Cabeceras, amplificadores y antenas' },
  { nombre: 'Fermax', para: 'Porteros y videoporteros' },
  { nombre: 'Comelit', para: 'Videoporteros y control de acceso' },
  { nombre: 'Golmar', para: 'Porteros automaticos' },
  { nombre: 'Hikvision', para: 'Videovigilancia' },
  { nombre: 'Dahua', para: 'Videovigilancia' },
  { nombre: 'Ajax', para: 'Alarmas y deteccion' },
  { nombre: 'Ubiquiti', para: 'Redes y WiFi' },
  { nombre: 'Coaxdata', para: 'Internet comunitario por coaxial' },
  { nombre: 'Promax', para: 'Medida y certificacion de senal' },
] as const;
