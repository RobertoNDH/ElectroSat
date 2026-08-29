// Fuente única de los datos de contacto. De aquí salen todos los tel:, los
// wa.me, el pie, la barra móvil, el aviso legal y el JSON-LD.
// Los TODO son marcadores pendientes de los datos reales.

import type { Idioma } from '../i18n/config';

type Telefono = { display: string; e164: string };

export const empresa = {
  nombre: 'ElectroSat TV',
  razonSocial: 'ElectroSat TV S.L.',
  reclamo: 'Antenas, cámaras y porteros en el sur de Tenerife',
  zona: 'Sur de Tenerife',
  descripcion:
    'ElectroSat TV instala y mantiene antenas de TDT y satélite, cámaras de seguridad, porteros y videoporteros e internet para comunidades, hoteles y viviendas del sur de Tenerife.',

  telefono: { display: '922 72 22 27', e164: '+34922722227' } satisfies Telefono,
  // TODO: móvil real. Es el mismo número que se usa para WhatsApp.
  movil: { display: '600 00 00 00', e164: '+34600000000' } satisfies Telefono,
  // TODO: WhatsApp en formato internacional, sin + ni espacios.
  whatsapp: '34600000000',
  // TODO: correo real.
  email: 'info@electrosattv.es',

  direccion: {
    calle: 'Calle Nuestra Señora de la Encarnación, 1',
    barrio: 'Valle San Lorenzo',
    cp: '38626',
    municipio: 'Arona',
    provincia: 'Santa Cruz de Tenerife',
    comunidad: 'Canarias',
    pais: 'ES',
  },

  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+Nuestra+Se%C3%B1ora+de+la+Encarnaci%C3%B3n+1+Valle+San+Lorenzo+Arona',

  /** Tramos de atención. `dias` usa el índice de Date#getDay: 0 domingo, 1 lunes. */
  horario: [{ dias: [1, 2, 3, 4, 5], desde: '08:00', hasta: '14:00' }],
  /** Solo para textos legales y datos estructurados. La web usa i18n/textos.ts. */
  horarioTexto: 'Lunes a viernes, de 8:00 a 14:00',

  // TODO: CIF real. Obligatorio en el aviso legal (LSSI-CE).
  cif: 'B00000000',
  /**
   * Valoración media en Google Maps de la ficha del negocio.
   * Actualizarla cuando cambie. Con `mostrar: false` desaparece de la web.
   */
  valoracion: { nota: 4.3, sobre: 5, mostrar: true },

  // TODO: inscripción en el Registro de Empresas Instaladoras de Telecomunicación.
  registroInstalador: '00000',
  anioFundacion: 2004,

  /** Municipios donde se presta servicio. Solo el sur de la isla. */
  cobertura: [
    'Arona',
    'Los Cristianos',
    'Playa de las Américas',
    'Adeje',
    'Costa Adeje',
    'San Miguel de Abona',
    'Granadilla de Abona',
    'El Médano',
    'Vilaflor',
    'Guía de Isora',
    'Playa San Juan',
    'Santiago del Teide',
    'Arico',
    'Fasnia',
  ],

  // TODO: perfiles reales. Borrar los que no existan.
  redes: {
    facebook: '',
    instagram: '',
  },
} as const;

/** Años de actividad, calculados a partir del año de fundación. */
export const aniosActividad = new Date().getFullYear() - empresa.anioFundacion;

export const direccionUnaLinea = `${empresa.direccion.calle}, ${empresa.direccion.barrio}, ${empresa.direccion.cp} ${empresa.direccion.municipio}`;

export const telHref = (t: Telefono = empresa.telefono) => `tel:${t.e164}`;

/** Mensaje con el que se abre WhatsApp, en el idioma de la página. */
const MENSAJE_WA: Record<Idioma, string> = {
  es: 'Hola, he visto su web y quería consultarles sobre una instalación.',
  en: 'Hello, I saw your website and would like to ask about an installation.',
  de: 'Hallo, ich habe Ihre Website gesehen und hätte eine Frage zu einer Installation.',
};

export const waHref = (lang: Idioma = 'es') =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(MENSAJE_WA[lang])}`;

/** Asunto con el que se abre el gestor de correo. */
const ASUNTO_EMAIL: Record<Idioma, string> = {
  es: 'Consulta desde la web',
  en: 'Enquiry from the website',
  de: 'Anfrage über die Website',
};

export const emailHref = `mailto:${empresa.email}`;

export const correoHref = (lang: Idioma = 'es') =>
  `mailto:${empresa.email}?subject=${encodeURIComponent(ASUNTO_EMAIL[lang])}`;

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
