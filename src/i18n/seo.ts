import type { Idioma } from './config';

/** Título y descripción de cada página fija, por idioma. Tono Premium. */
export const SEO = {
  es: {
    home: {
      titulo: 'ElectroSat TV | Excelencia en Telecomunicaciones y Conectividad',
      descripcion:
        'ElectroSat TV diseña e integra sistemas premium de antena, circuito cerrado de televisión y conectividad avanzada para residencias exclusivas y complejos en el sur de Tenerife.',
    },
    servicios: {
      titulo: 'Nuestras Divisiones | Instalaciones de Alta Gama en Tenerife Sur',
      descripcion:
        'Soluciones a medida en televisión vía satélite, videovigilancia de alta resolución y redes de conectividad integral para propiedades exclusivas.',
    },
    nosotros: {
      titulo: 'Nuestra Firma | Ingeniería y Telecomunicaciones en Arona',
      descripcion:
        'Descubra el prestigio y la metodología de ElectroSat TV, firma certificada especialista en integraciones tecnológicas con sede en Valle San Lorenzo.',
    },
    contacto: {
      titulo: 'Contacto Exclusivo | ElectroSat TV, Valle San Lorenzo',
      descripcion:
        'Asesoría técnica y contacto corporativo. Prestamos nuestros servicios en Arona, Adeje, Granadilla y las áreas más exclusivas del sur de Tenerife.',
    },
    error404: {
      titulo: 'Ruta no encontrada | ElectroSat TV',
      descripcion: 'El contenido que busca no se encuentra disponible. Contacte con nuestra firma para recibir asistencia.',
    },
  },
  en: {
    home: {
      titulo: 'ElectroSat TV | Excellence in Telecommunications & Connectivity',
      descripcion:
        'ElectroSat TV designs and integrates premium aerial systems, CCTV, and advanced connectivity for exclusive residences and complexes in South Tenerife.',
    },
    servicios: {
      titulo: 'Our Divisions | High-End Installations in South Tenerife',
      descripcion:
        'Bespoke solutions in satellite television, high-resolution CCTV, and comprehensive networking for exclusive properties.',
    },
    nosotros: {
      titulo: 'Our Firm | Engineering and Telecommunications in Arona',
      descripcion:
        'Discover the prestige and methodology of ElectroSat TV, a certified firm specializing in technological integrations based in Valle San Lorenzo.',
    },
    contacto: {
      titulo: 'Exclusive Contact | ElectroSat TV, Valle San Lorenzo',
      descripcion:
        'Technical consultancy and corporate contact. We serve Arona, Adeje, Granadilla, and the most exclusive areas of South Tenerife.',
    },
    error404: {
      titulo: 'Route Not Found | ElectroSat TV',
      descripcion: 'The requested content is not available. Please contact our firm for assistance.',
    },
  },
  de: {
    home: {
      titulo: 'ElectroSat TV | Exzellenz in Telekommunikation & Konnektivität',
      descripcion:
        'ElectroSat TV entwickelt und integriert Premium-Antennensysteme, Videoüberwachung und fortschrittliche Konnektivität für exklusive Residenzen im Süden Teneriffas.',
    },
    servicios: {
      titulo: 'Unsere Geschäftsbereiche | High-End-Installationen im Süden Teneriffas',
      descripcion:
        'Maßgeschneiderte Lösungen für Satellitenfernsehen, hochauflösende Videoüberwachung und umfassende Netzwerke für exklusive Immobilien.',
    },
    nosotros: {
      titulo: 'Unsere Firma | Ingenieurwesen und Telekommunikation in Arona',
      descripcion:
        'Entdecken Sie das Prestige und die Methodik von ElectroSat TV, einem zertifizierten Fachbetrieb für technologische Integrationen mit Sitz in Valle San Lorenzo.',
    },
    contacto: {
      titulo: 'Exklusiver Kontakt | ElectroSat TV, Valle San Lorenzo',
      descripcion:
        'Technische Beratung und Unternehmenskontakt. Wir betreuen Arona, Adeje, Granadilla und die exklusivsten Gebiete im Süden Teneriffas.',
    },
    error404: {
      titulo: 'Route nicht gefunden | ElectroSat TV',
      descripcion: 'Der gesuchte Inhalt ist nicht verfügbar. Bitte kontaktieren Sie unsere Firma für Unterstützung.',
    },
  },
} as const;

export const seo = (lang: Idioma) => SEO[lang];
