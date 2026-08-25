/**
 * FUENTE UNICA de los datos de contacto de ElectroSat TV.
 *
 * Todo `tel:`, todo `wa.me`, el footer, la barra movil, la pagina de contacto,
 * el aviso legal y el JSON-LD salen de aqui. No escribas un telefono a mano en
 * ninguna plantilla: si aparece duplicado, tarde o temprano uno se queda viejo.
 *
 * Los valores marcados con TODO CLIENTE son marcadores. Sustituyelos por los
 * reales antes de publicar y revisa el CHECKLIST-ENTREGA.md.
 */

type Telefono = { display: string; e164: string };

export const empresa = {
  nombre: 'ElectroSat TV',
  razonSocial: 'ElectroSat TV S.L.',
  reclamo: 'Instalador de telecomunicaciones en Tenerife',
  descripcion:
    'Instalacion y mantenimiento de TDT y satelite, videovigilancia, porteros y videoporteros e internet comunitario para comunidades, hoteles y viviendas en toda la isla de Tenerife.',

  // TODO CLIENTE: telefono fijo real.
  telefono: { display: '922 00 00 00', e164: '+34922000000' } satisfies Telefono,
  // TODO CLIENTE: movil real. Es el mismo numero que se usa para WhatsApp.
  movil: { display: '600 00 00 00', e164: '+34600000000' } satisfies Telefono,
  // TODO CLIENTE: numero de WhatsApp en formato internacional sin + ni espacios.
  whatsapp: '34600000000',
  // TODO CLIENTE: email real.
  email: 'info@electrosattv.es',

  direccion: {
    // TODO CLIENTE: direccion completa.
    calle: 'Calle pendiente de confirmar, 0',
    cp: '38000',
    municipio: 'Santa Cruz de Tenerife',
    provincia: 'Santa Cruz de Tenerife',
    comunidad: 'Canarias',
    pais: 'ES',
  },

  // TODO CLIENTE: enlace de Google Maps de la ubicacion real.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tenerife',

  /** Tramos de atencion. dias usa el indice de Date#getDay: 0 domingo, 1 lunes. */
  horario: [
    { dias: [1, 2, 3, 4, 5], desde: '08:30', hasta: '13:30' },
    { dias: [1, 2, 3, 4, 5], desde: '15:30', hasta: '18:00' },
  ],
  horarioTexto: 'Lunes a viernes, de 8:30 a 13:30 y de 15:30 a 18:00',

  // TODO CLIENTE: CIF real. Obligatorio en el aviso legal (LSSI-CE).
  cif: 'B00000000',
  // TODO CLIENTE: numero de inscripcion en el Registro de Empresas Instaladoras
  // de Telecomunicacion. Es la prueba de confianza mas fuerte de toda la web.
  registroInstalador: '00000',
  // TODO CLIENTE: ano de inicio de actividad.
  anioFundacion: 2005,

  /** Municipios de Tenerife donde se presta servicio. */
  cobertura: [
    'Santa Cruz de Tenerife',
    'La Laguna',
    'Tacoronte',
    'El Sauzal',
    'La Matanza',
    'La Victoria',
    'Santa Ursula',
    'La Orotava',
    'Puerto de la Cruz',
    'Los Realejos',
    'San Juan de la Rambla',
    'Icod de los Vinos',
    'Garachico',
    'Buenavista del Norte',
    'Santiago del Teide',
    'Guia de Isora',
    'Adeje',
    'Arona',
    'San Miguel de Abona',
    'Granadilla de Abona',
    'Arico',
    'Fasnia',
    'Guimar',
    'Candelaria',
    'El Rosario',
  ],

  // TODO CLIENTE: perfiles reales. Borra los que no existan.
  redes: {
    facebook: '',
    instagram: '',
  },
} as const;

/** Anos de actividad, calculados. No hay que tocarlos cada enero. */
export const aniosActividad = new Date().getFullYear() - empresa.anioFundacion;

export const direccionUnaLinea = `${empresa.direccion.calle}, ${empresa.direccion.cp} ${empresa.direccion.municipio}`;

export const telHref = (t: Telefono = empresa.telefono) => `tel:${t.e164}`;

const MENSAJE_WA =
  'Hola, he visto su web y me gustaria consultarles sobre una instalacion.';

export const waHref = (mensaje: string = MENSAJE_WA) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const emailHref = `mailto:${empresa.email}`;

const DIAS_SCHEMA = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/** Horario en el formato que espera schema.org. */
export const horarioSchema = empresa.horario.map((tramo) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: tramo.dias.map((d) => DIAS_SCHEMA[d]),
  opens: tramo.desde,
  closes: tramo.hasta,
}));
