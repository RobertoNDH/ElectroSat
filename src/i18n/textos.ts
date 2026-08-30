import type { Idioma } from './config';

/**
 * Textos de la interfaz y de la home en los tres idiomas.
 * El español es el original; inglés y alemán son su traducción.
 */
export const TEXTOS = {
  es: {
    datos: {
      horario: 'Lunes a viernes, de 8:00 a 14:00',
      zona: 'Sur de Tenerife',
    },
    nav: {
      servicios: 'Servicios',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
      todosServicios: 'Todos los servicios',
      inicio: 'Inicio',
      abrirMenu: 'Abrir el menú',
      cerrarMenu: 'Cerrar el menú',
      irAlInicio: 'Ir al inicio',
      saltar: 'Saltar al contenido',
      idioma: 'Idioma',
      cambiarIdioma: 'Cambiar de idioma',
      migas: 'Estás aquí',
    },
    acciones: {
      llamanos: 'Llámanos',
      llamarAhora: 'Llamar ahora',
      llamarA: (n: string) => `Llamar al ${n}`,
      whatsapp: 'WhatsApp',
      escribirWhatsapp: 'Escribir por WhatsApp',
      escribirCorreo: 'Escribir un correo',
      verServicio: 'Ver servicio',
      abrirMapa: 'Ver cómo llegar',
      anterior: 'Ver los anteriores',
      siguiente: 'Ver los siguientes',
      conocernos: 'Conócenos mejor',
      verTodos: 'Ver todos los servicios',
      correoCopiado: (correo: string) => `Correo copiado: ${correo}`,
    },
    hero: {
      titulo: 'Especialistas en telecomunicaciones en Tenerife Sur',
      texto:
        'Antenas, cámaras, porteros e internet para tu casa, tu comunidad o tu negocio. Una sola empresa para todo.',
      alt: 'Antenas de televisión instaladas en la azotea de un edificio del sur de Tenerife',
    },
    servicio: {
      incluye: 'Qué incluye el trabajo',
      publico: 'Según tu caso',
      material: 'Material que montamos',
      otros: 'Otros servicios',
      ayudaTitulo: '¿Lo vemos juntos?',
      ayudaTexto: 'Te decimos qué hace falta y cuánto cuesta antes de tocar nada.',
      diagramaAlt: 'Sección de un edificio con la instalación de internet comunitario',
      diagramaDesc:
        'Una cabecera situada en la cubierta alimenta una única línea vertical que recorre el edificio y llega a una toma en cada una de las cuatro viviendas.',
      diagramaRotulos: ['Cabecera en cubierta', 'El cable que ya existe', 'Una toma por vivienda'],
      diagramaTitulo: 'Así llega a cada vivienda',
      diagramaTexto:
        'Desde la azotea baja una sola línea por el edificio y de ahí sale una toma a cada vivienda. Es el cable que ya está puesto, así que no hay obra.',
    },
    servicios: {
      eyebrow: 'Qué hacemos',
      titulo: 'Telecomunicaciones de principio a fin',
      prosa:
        'Televisión, cámaras, portero e internet comparten instalación en un edificio. Llevarlo todo con la misma empresa evita que una cosa estropee la otra.',
      ctaTitulo: '¿No sabes cuál te toca?',
      ctaTexto:
        'Cuéntanos qué te pasa y te decimos si es una avería, una mejora o una instalación nueva. Sin compromiso.',
    },
    pasos: {
      eyebrow: 'Cómo trabajamos',
      titulo: 'Cuatro pasos y ya está',
      prosa:
        'Ni letra pequeña ni visitas que no llevan a nada. Así va cada trabajo, desde que descuelgas el teléfono hasta el papel que te dejamos al terminar.',
      items: [
        { titulo: 'Llamas', texto: 'Te atiende alguien que conoce el trabajo.' },
        { titulo: 'Vamos a verlo', texto: 'Gratis y sin compromiso, en el sur de la isla.' },
        { titulo: 'Te damos el precio', texto: 'Cerrado y por escrito, sin sorpresas.' },
        { titulo: 'Lo montamos', texto: 'En la fecha acordada, y te dejamos el papel.' },
      ],
    },
    pruebas: {
      eyebrow: 'Por qué fiarte',
      titulo: 'Esto lo puedes comprobar',
      prosa:
        'No hace falta que nos creas. Todo lo que decimos aquí se puede pedir por escrito antes de contratar nada.',
      sello: 'años en el sur de la isla',
      altPrincipal: 'Técnico instalando una antena parabólica subido a una escalera',
      altSecundaria: 'Instalador junto a su furgoneta con la caja de herramientas',
      items: [
        {
          titulo: 'Empresa registrada',
          texto: 'Estamos dados de alta como instaladores de telecomunicaciones.',
        },
        {
          titulo: 'Seguro en vigor',
          texto: 'Cubrimos los trabajos. Te enseñamos la póliza si la pides.',
        },
        {
          titulo: 'Papeles al terminar',
          texto: 'Te dejamos el certificado de la instalación y las mediciones.',
        },
        {
          titulo: 'Precio cerrado',
          texto: 'Si aparece algo no previsto, paramos y te consultamos.',
        },
      ],
    },
    marcas: {
      eyebrow: 'Material',
      titulo: 'Trabajamos con las mejores marcas',
      prosa:
        'Fabricantes con repuesto durante años. Es lo que permite arreglar una instalación en lugar de tener que rehacerla entera.',
    },
    cobertura: {
      eyebrow: 'Dónde trabajamos',
      titulo: 'Todo el sur de Tenerife',
      prosa:
        'Estamos en Valle San Lorenzo y nos movemos por toda la comarca sur. Vamos nosotros a verlo, sin coste ni compromiso.',
      nota: '¿No ves tu municipio? Llámanos igual: si está en la comarca sur, lo normal es que lleguemos.',
      alt: 'Vista aérea de la costa del sur de Tenerife',
    },
    faq: {
      eyebrow: 'Dudas frecuentes',
      titulo: 'Lo que más nos preguntan',
      prosa: 'Si tu duda no está aquí, llámanos y te la resolvemos en un minuto.',
    },
    contacto: {
      eyebrow: 'Contacto directo',
      titulo: 'Cuéntanos qué necesitas',
      texto:
        'Te atendemos por teléfono y, si hace falta, pasamos a verlo. Ir a mirarlo y darte precio no te cuesta nada.',
      horario: 'Horario',
      movil: 'Móvil y WhatsApp',
      correo: 'Correo',
      donde: 'Dónde estamos',
      zona: 'Zona de trabajo',
      datosEmpresa: 'Datos de la empresa',
    },
    estado: {
      abierto: 'Abierto ahora',
      cerrado: 'Cerrado ahora',
      abrimos: (cuando: string, hora: string) => `Cerrado ahora. Abrimos ${cuando} a las ${hora}`,
      hoy: 'hoy',
      dias: [
        'el domingo',
        'el lunes',
        'el martes',
        'el miércoles',
        'el jueves',
        'el viernes',
        'el sábado',
      ],
    },
    pie: {
      lema: 'Antenas, cámaras, porteros e internet en el sur de Tenerife.',
      servicios: 'Servicios',
      empresa: 'Empresa',
      contacto: 'Contacto',
      cobertura: 'Zona de trabajo',
      marcas: 'Marcas',
      registro: 'Empresa instaladora registrada',
      avisoLegal: 'Aviso legal',
      privacidad: 'Política de privacidad',
      cookies: 'Política de cookies',
    },
    legalOtroIdioma: null as string | null,
    error404: {
      eyebrow: 'Error 404',
      titulo: 'Aquí no llega la señal',
      texto:
        'Esta página no existe o ha cambiado de sitio. Si buscabas algo concreto, lo más rápido es llamarnos.',
      volver: 'Volver al inicio',
      oVeA: 'O ve directamente a un servicio',
    },
  },

  en: {
    datos: {
      horario: 'Monday to Friday, 8:00 to 14:00',
      zona: 'South Tenerife',
    },
    nav: {
      servicios: 'Services',
      nosotros: 'About us',
      contacto: 'Contact',
      todosServicios: 'All services',
      inicio: 'Home',
      abrirMenu: 'Open menu',
      cerrarMenu: 'Close menu',
      irAlInicio: 'Go to homepage',
      saltar: 'Skip to content',
      idioma: 'Language',
      cambiarIdioma: 'Change language',
      migas: 'You are here',
    },
    acciones: {
      llamanos: 'Call us',
      llamarAhora: 'Call now',
      llamarA: (n: string) => `Call ${n}`,
      whatsapp: 'WhatsApp',
      escribirWhatsapp: 'Message on WhatsApp',
      escribirCorreo: 'Send an email',
      verServicio: 'View service',
      abrirMapa: 'Get directions',
      anterior: 'See previous',
      siguiente: 'See next',
      conocernos: 'Get to know us',
      verTodos: 'See all services',
      correoCopiado: (correo: string) => `Email copied: ${correo}`,
    },
    hero: {
      titulo: 'Telecommunications specialists in Tenerife South',
      texto:
        'Aerials, cameras, door entry and internet for your home, your building or your business. One company for everything.',
      alt: 'Television aerials installed on the roof of a building in southern Tenerife',
    },
    servicio: {
      incluye: 'What the job includes',
      publico: 'Depending on your case',
      material: 'Equipment we install',
      otros: 'Other services',
      ayudaTitulo: 'Shall we take a look?',
      ayudaTexto: 'We tell you what is needed and what it costs before touching anything.',
      diagramaAlt: 'Cross-section of a building with the shared internet installation',
      diagramaDesc:
        'A headend on the roof feeds a single vertical line that runs down the building and reaches one socket in each of the four flats.',
      diagramaRotulos: ['Headend on the roof', 'The cabling already there', 'One socket per flat'],
      diagramaTitulo: 'How it reaches every flat',
      diagramaTexto:
        'A single line runs down from the roof through the building, feeding one socket in each flat. It uses the cabling already in place, so there is no building work.',
    },
    servicios: {
      eyebrow: 'What we do',
      titulo: 'Telecoms from end to end',
      prosa:
        'Television, cameras, door entry and internet share the same wiring in a building. Having one company handle all of it stops one job from breaking another.',
      ctaTitulo: 'Not sure which one you need?',
      ctaTexto:
        'Tell us what is happening and we will say whether it is a fault, an upgrade or a new installation. No obligation.',
    },
    pasos: {
      eyebrow: 'How we work',
      titulo: 'Four steps and done',
      prosa:
        'No small print and no visits that lead nowhere. This is how every job goes, from the moment you pick up the phone to the paperwork we hand over at the end.',
      items: [
        { titulo: 'You call', texto: 'You speak to someone who knows the job.' },
        { titulo: 'We come and look', texto: 'Free and with no obligation, across the south.' },
        { titulo: 'You get the price', texto: 'Fixed and in writing, no surprises.' },
        { titulo: 'We install it', texto: 'On the agreed date, paperwork included.' },
      ],
    },
    pruebas: {
      eyebrow: 'Why trust us',
      titulo: 'You can check all of this',
      prosa:
        'You do not have to take our word for it. Everything on this list can be requested in writing before you commit to anything.',
      sello: 'years in the south of the island',
      altPrincipal: 'Technician fitting a satellite dish from a ladder',
      altSecundaria: 'Installer beside his van with his toolbox',
      items: [
        {
          titulo: 'Registered company',
          texto: 'We are registered as telecommunications installers.',
        },
        {
          titulo: 'Insurance in force',
          texto: 'Our work is covered. We will show you the policy if you ask.',
        },
        {
          titulo: 'Paperwork on completion',
          texto: 'You get the installation certificate and the signal readings.',
        },
        {
          titulo: 'Fixed price',
          texto: 'If something unexpected turns up, we stop and ask you first.',
        },
      ],
    },
    marcas: {
      eyebrow: 'Equipment',
      titulo: 'We work with the best brands',
      prosa:
        'Manufacturers that keep spare parts for years. That is what lets us repair an installation instead of replacing the lot.',
    },
    cobertura: {
      eyebrow: 'Where we work',
      titulo: 'All across southern Tenerife',
      prosa:
        'We are based in Valle San Lorenzo and cover the whole southern area. We come out to you, at no cost and with no obligation.',
      nota: 'Cannot see your town? Call anyway: if it is in the southern area, chances are we cover it.',
      alt: 'Aerial view of the southern coast of Tenerife',
    },
    faq: {
      eyebrow: 'Common questions',
      titulo: 'What people ask us most',
      prosa: 'If your question is not here, call us and we will answer it in a minute.',
    },
    contacto: {
      eyebrow: 'Get in touch',
      titulo: 'Tell us what you need',
      texto:
        'We answer the phone and, if needed, we come and look at it. Coming out and giving you a price costs you nothing.',
      horario: 'Opening hours',
      movil: 'Mobile and WhatsApp',
      correo: 'Email',
      donde: 'Where we are',
      zona: 'Service area',
      datosEmpresa: 'Company details',
    },
    estado: {
      abierto: 'Open now',
      cerrado: 'Closed now',
      abrimos: (cuando: string, hora: string) => `Closed now. We open ${cuando} at ${hora}`,
      hoy: 'today',
      dias: [
        'on Sunday',
        'on Monday',
        'on Tuesday',
        'on Wednesday',
        'on Thursday',
        'on Friday',
        'on Saturday',
      ],
    },
    pie: {
      lema: 'Aerials, cameras, door entry and internet in southern Tenerife.',
      servicios: 'Services',
      empresa: 'Company',
      contacto: 'Contact',
      cobertura: 'Service area',
      marcas: 'Brands',
      registro: 'Registered installation company',
      avisoLegal: 'Legal notice',
      privacidad: 'Privacy policy',
      cookies: 'Cookie policy',
    },
    legalOtroIdioma:
      'Our legal notice, privacy policy and cookie policy are published in Spanish, which is the legally binding version under Spanish law.',
    error404: {
      eyebrow: 'Error 404',
      titulo: 'No signal here',
      texto:
        'This page does not exist or has moved. If you were looking for something specific, calling us is the quickest way.',
      volver: 'Back to homepage',
      oVeA: 'Or go straight to a service',
    },
  },

  de: {
    datos: {
      horario: 'Montag bis Freitag, 8:00 bis 14:00 Uhr',
      zona: 'Süden Teneriffas',
    },
    nav: {
      servicios: 'Leistungen',
      nosotros: 'Über uns',
      contacto: 'Kontakt',
      todosServicios: 'Alle Leistungen',
      inicio: 'Startseite',
      abrirMenu: 'Menü öffnen',
      cerrarMenu: 'Menü schließen',
      irAlInicio: 'Zur Startseite',
      saltar: 'Zum Inhalt springen',
      idioma: 'Sprache',
      cambiarIdioma: 'Sprache wechseln',
      migas: 'Sie sind hier',
    },
    acciones: {
      llamanos: 'Rufen Sie an',
      llamarAhora: 'Jetzt anrufen',
      llamarA: (n: string) => `${n} anrufen`,
      whatsapp: 'WhatsApp',
      escribirWhatsapp: 'Per WhatsApp schreiben',
      escribirCorreo: 'E-Mail schreiben',
      verServicio: 'Leistung ansehen',
      abrirMapa: 'Route anzeigen',
      anterior: 'Vorherige ansehen',
      siguiente: 'Nächste ansehen',
      conocernos: 'Mehr über uns',
      verTodos: 'Alle Leistungen ansehen',
      correoCopiado: (correo: string) => `E-Mail kopiert: ${correo}`,
    },
    hero: {
      titulo: 'Fachbetrieb für Telekommunikation im Süden Teneriffas',
      texto:
        'Antennen, Kameras, Türsprechanlagen und Internet für Ihre Wohnung, Ihre Wohnanlage oder Ihren Betrieb. Ein Betrieb für alles.',
      alt: 'Fernsehantennen auf dem Dach eines Gebäudes im Süden Teneriffas',
    },
    servicio: {
      incluye: 'Was die Arbeit umfasst',
      publico: 'Je nach Fall',
      material: 'Material, das wir einbauen',
      otros: 'Weitere Leistungen',
      ayudaTitulo: 'Schauen wir es uns an?',
      ayudaTexto: 'Wir sagen Ihnen, was nötig ist und was es kostet, bevor wir anfangen.',
      diagramaAlt: 'Querschnitt eines Hauses mit der gemeinsamen Internetanlage',
      diagramaDesc:
        'Eine Kopfstation auf dem Dach speist eine einzige senkrechte Leitung, die durch das Haus führt und in jeder der vier Wohnungen eine Dose erreicht.',
      diagramaRotulos: ['Kopfstation auf dem Dach', 'Die vorhandene Verkabelung', 'Eine Dose pro Wohnung'],
      diagramaTitulo: 'So kommt es in jede Wohnung',
      diagramaTexto:
        'Vom Dach führt eine einzige Leitung durch das Haus und versorgt in jeder Wohnung eine Dose. Genutzt wird die vorhandene Verkabelung, Bauarbeiten entfallen.',
    },
    servicios: {
      eyebrow: 'Was wir machen',
      titulo: 'Telekommunikation von A bis Z',
      prosa:
        'Fernsehen, Kameras, Türsprechanlage und Internet teilen sich im Haus dieselbe Verkabelung. Wenn eine Firma alles betreut, macht ein Einbau den anderen nicht kaputt.',
      ctaTitulo: 'Sie wissen nicht, was Sie brauchen?',
      ctaTexto:
        'Beschreiben Sie uns das Problem und wir sagen Ihnen, ob es eine Störung, eine Verbesserung oder eine neue Anlage ist. Unverbindlich.',
    },
    pasos: {
      eyebrow: 'So arbeiten wir',
      titulo: 'Vier Schritte, fertig',
      prosa:
        'Kein Kleingedrucktes und keine Termine, die zu nichts führen. So läuft jeder Auftrag, vom Anruf bis zu den Unterlagen, die Sie am Ende bekommen.',
      items: [
        { titulo: 'Sie rufen an', texto: 'Sie sprechen mit jemandem vom Fach.' },
        { titulo: 'Wir sehen nach', texto: 'Kostenlos und unverbindlich, im ganzen Süden.' },
        { titulo: 'Sie bekommen den Preis', texto: 'Fest und schriftlich, ohne Überraschungen.' },
        { titulo: 'Wir bauen es ein', texto: 'Zum vereinbarten Termin, mit Unterlagen.' },
      ],
    },
    pruebas: {
      eyebrow: 'Warum uns vertrauen',
      titulo: 'Das können Sie nachprüfen',
      prosa:
        'Sie müssen uns nicht einfach glauben. Alles auf dieser Liste können Sie schriftlich verlangen, bevor Sie irgendetwas beauftragen.',
      sello: 'Jahre im Süden der Insel',
      altPrincipal: 'Techniker montiert von einer Leiter aus eine Satellitenschüssel',
      altSecundaria: 'Installateur mit Werkzeugkasten neben seinem Transporter',
      items: [
        {
          titulo: 'Eingetragener Betrieb',
          texto: 'Wir sind als Telekommunikationsinstallateure eingetragen.',
        },
        {
          titulo: 'Versicherung aktiv',
          texto: 'Unsere Arbeiten sind versichert. Die Police zeigen wir auf Wunsch.',
        },
        {
          titulo: 'Unterlagen zum Schluss',
          texto: 'Sie erhalten das Abnahmeprotokoll und die Messwerte.',
        },
        {
          titulo: 'Festpreis',
          texto: 'Taucht etwas Unvorhergesehenes auf, halten wir an und fragen nach.',
        },
      ],
    },
    marcas: {
      eyebrow: 'Material',
      titulo: 'Wir arbeiten mit den besten Marken',
      prosa:
        'Hersteller mit jahrelanger Ersatzteilversorgung. Nur so lässt sich eine Anlage reparieren, statt sie komplett zu erneuern.',
    },
    cobertura: {
      eyebrow: 'Wo wir arbeiten',
      titulo: 'Im gesamten Süden Teneriffas',
      prosa:
        'Wir sitzen in Valle San Lorenzo und sind in der ganzen Region Süd unterwegs. Wir kommen zu Ihnen, kostenlos und unverbindlich.',
      nota: 'Ihr Ort fehlt? Rufen Sie trotzdem an: liegt er im Süden, kommen wir in der Regel auch dorthin.',
      alt: 'Luftaufnahme der Südküste Teneriffas',
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      titulo: 'Was uns am häufigsten gefragt wird',
      prosa: 'Steht Ihre Frage nicht dabei, rufen Sie an. Wir klären das in einer Minute.',
    },
    contacto: {
      eyebrow: 'Direkter Kontakt',
      titulo: 'Sagen Sie uns, was Sie brauchen',
      texto:
        'Wir gehen ans Telefon und kommen bei Bedarf vorbei. Die Besichtigung und das Angebot kosten Sie nichts.',
      horario: 'Öffnungszeiten',
      movil: 'Mobil und WhatsApp',
      correo: 'E-Mail',
      donde: 'Wo Sie uns finden',
      zona: 'Einsatzgebiet',
      datosEmpresa: 'Firmendaten',
    },
    estado: {
      abierto: 'Jetzt geöffnet',
      cerrado: 'Jetzt geschlossen',
      abrimos: (cuando: string, hora: string) =>
        `Jetzt geschlossen. Wir öffnen ${cuando} um ${hora}`,
      hoy: 'heute',
      dias: [
        'am Sonntag',
        'am Montag',
        'am Dienstag',
        'am Mittwoch',
        'am Donnerstag',
        'am Freitag',
        'am Samstag',
      ],
    },
    pie: {
      lema: 'Antennen, Kameras, Türsprechanlagen und Internet im Süden Teneriffas.',
      servicios: 'Leistungen',
      empresa: 'Unternehmen',
      contacto: 'Kontakt',
      cobertura: 'Einsatzgebiet',
      marcas: 'Marken',
      registro: 'Eingetragener Installationsbetrieb',
      avisoLegal: 'Impressum',
      privacidad: 'Datenschutz',
      cookies: 'Cookie-Richtlinie',
    },
    legalOtroIdioma:
      'Impressum, Datenschutzerklärung und Cookie-Richtlinie sind auf Spanisch veröffentlicht. Nach spanischem Recht ist die spanische Fassung maßgeblich.',
    error404: {
      eyebrow: 'Fehler 404',
      titulo: 'Hier kommt kein Signal an',
      texto:
        'Diese Seite gibt es nicht oder sie wurde verschoben. Wenn Sie etwas Bestimmtes suchen, rufen Sie am besten an.',
      volver: 'Zur Startseite',
      oVeA: 'Oder direkt zu einer Leistung',
    },
  },
} as const;

export const t = (lang: Idioma) => TEXTOS[lang];
