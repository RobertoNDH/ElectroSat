import type { Idioma } from './config';

/** Título y descripción de cada página fija, por idioma. */
export const SEO = {
  es: {
    home: {
      titulo: 'ElectroSat TV | Antenas, cámaras y porteros en el sur de Tenerife',
      descripcion:
        'ElectroSat TV instala y repara antenas de TDT y satélite, cámaras de seguridad, porteros automáticos e internet en Arona, Adeje, Granadilla y todo el sur de Tenerife. Presupuesto gratis.',
    },
    servicios: {
      titulo: 'Servicios | ElectroSat TV, instalador en el sur de Tenerife',
      descripcion:
        'Antenas de TDT y satélite, videovigilancia, porteros y videoporteros, internet comunitario e instalaciones de telecomunicaciones en el sur de Tenerife.',
    },
    nosotros: {
      titulo: 'Sobre ElectroSat TV | Instalador registrado en Arona',
      descripcion:
        'Quiénes somos y cómo trabajamos en ElectroSat TV, empresa instaladora de telecomunicaciones con sede en Valle San Lorenzo, Arona.',
    },
    contacto: {
      titulo: 'Contacto | ElectroSat TV en Valle San Lorenzo, Arona',
      descripcion:
        'Teléfono, WhatsApp, correo, horario y dirección de ElectroSat TV. Atendemos Arona, Adeje, Granadilla y todo el sur de Tenerife.',
    },
    error404: {
      titulo: 'Página no encontrada | ElectroSat TV',
      descripcion: 'La página que buscas no existe o ha cambiado de dirección.',
    },
  },
  en: {
    home: {
      titulo: 'ElectroSat TV | TV aerials, cameras and door entry in south Tenerife',
      descripcion:
        'ElectroSat TV installs and repairs TV aerials, satellite dishes, security cameras, door entry systems and internet in Arona, Adeje, Granadilla and all of southern Tenerife. Free quote.',
    },
    servicios: {
      titulo: 'Services | ElectroSat TV, installer in south Tenerife',
      descripcion:
        'TV aerials and satellite, CCTV, door entry and video entry systems, building-wide internet and telecom installations across southern Tenerife.',
    },
    nosotros: {
      titulo: 'About ElectroSat TV | Registered installer in Arona',
      descripcion:
        'Who we are and how we work at ElectroSat TV, a registered telecommunications installer based in Valle San Lorenzo, Arona.',
    },
    contacto: {
      titulo: 'Contact | ElectroSat TV in Valle San Lorenzo, Arona',
      descripcion:
        'Phone, WhatsApp, email, opening hours and address for ElectroSat TV. We cover Arona, Adeje, Granadilla and all of southern Tenerife.',
    },
    error404: {
      titulo: 'Page not found | ElectroSat TV',
      descripcion: 'The page you are looking for does not exist or has moved.',
    },
  },
  de: {
    home: {
      titulo: 'ElectroSat TV | Antennen, Kameras und Türsprechanlagen im Süden Teneriffas',
      descripcion:
        'ElectroSat TV installiert und repariert Antennen, Satellitenschüsseln, Überwachungskameras, Türsprechanlagen und Internet in Arona, Adeje, Granadilla und im gesamten Süden Teneriffas. Kostenloses Angebot.',
    },
    servicios: {
      titulo: 'Leistungen | ElectroSat TV, Installateur im Süden Teneriffas',
      descripcion:
        'Antennen und Satellit, Videoüberwachung, Tür- und Videosprechanlagen, Internet für ganze Gebäude und Telekommunikationsanlagen im Süden Teneriffas.',
    },
    nosotros: {
      titulo: 'Über ElectroSat TV | Eingetragener Installateur in Arona',
      descripcion:
        'Wer wir sind und wie wir arbeiten. ElectroSat TV ist ein eingetragener Telekommunikationsbetrieb mit Sitz in Valle San Lorenzo, Arona.',
    },
    contacto: {
      titulo: 'Kontakt | ElectroSat TV in Valle San Lorenzo, Arona',
      descripcion:
        'Telefon, WhatsApp, E-Mail, Öffnungszeiten und Adresse von ElectroSat TV. Wir sind in Arona, Adeje, Granadilla und im ganzen Süden Teneriffas unterwegs.',
    },
    error404: {
      titulo: 'Seite nicht gefunden | ElectroSat TV',
      descripcion: 'Die gesuchte Seite gibt es nicht oder sie wurde verschoben.',
    },
  },
} as const;

export const seo = (lang: Idioma) => SEO[lang];
