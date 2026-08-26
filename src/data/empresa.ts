// Fuente única de los datos de contacto. De aquí salen todos los tel:, los
// wa.me, el pie, la barra móvil, el aviso legal y el JSON-LD.
// Los TODO son marcadores pendientes de los datos reales.

type Telefono = { display: string; e164: string };

export const empresa = {
  nombre: 'ElectroSat TV',
  razonSocial: 'ElectroSat TV S.L.',
  reclamo: 'Instalador de telecomunicaciones en Tenerife',
  descripcion:
    'Instalacion y mantenimiento de TDT y satelite, videovigilancia, porteros y videoporteros e internet comunitario para comunidades, hoteles y viviendas en toda la isla de Tenerife.',

  // TODO: teléfono fijo real.
  telefono: { display: '922 00 00 00', e164: '+34922000000' } satisfies Telefono,
  // TODO: móvil real. Es el mismo número que se usa para WhatsApp.
  movil: { display: '600 00 00 00', e164: '+34600000000' } satisfies Telefono,
  // TODO: WhatsApp en formato internacional, sin + ni espacios.
  whatsapp: '34600000000',
  // TODO: correo real.
  email: 'info@electrosattv.es',

  direccion: {
    // TODO: dirección completa.
    calle: 'Calle pendiente de confirmar, 0',
    cp: '38000',
    municipio: 'Santa Cruz de Tenerife',
    provincia: 'Santa Cruz de Tenerife',
    comunidad: 'Canarias',
    pais: 'ES',
  },

  // TODO: enlace de Google Maps de la ubicación real.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tenerife',

  /** Tramos de atención. `dias` usa el índice de Date#getDay: 0 domingo, 1 lunes. */
  horario: [
    { dias: [1, 2, 3, 4, 5], desde: '08:30', hasta: '13:30' },
    { dias: [1, 2, 3, 4, 5], desde: '15:30', hasta: '18:00' },
  ],
  horarioTexto: 'Lunes a viernes, de 8:30 a 13:30 y de 15:30 a 18:00',

  // TODO: CIF real. Obligatorio en el aviso legal (LSSI-CE).
  cif: 'B00000000',
  // TODO: inscripción en el Registro de Empresas Instaladoras de Telecomunicación.
  registroInstalador: '00000',
  // TODO: año de inicio de actividad.
  anioFundacion: 2005,

  /** Municipios donde se presta servicio. */
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

  // TODO: perfiles reales. Borrar los que no existan.
  redes: {
    facebook: '',
    instagram: '',
  },
} as const;

/** Años de actividad, calculados a partir del año de fundación. */
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

/** Horario en el formato de schema.org. */
export const horarioSchema = empresa.horario.map((tramo) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: tramo.dias.map((d) => DIAS_SCHEMA[d]),
  opens: tramo.desde,
  closes: tramo.hasta,
}));
