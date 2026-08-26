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
    },
    acciones: {
      llamanos: 'Llámanos',
      llamarAhora: 'Llamar ahora',
      llamarA: (n: string) => `Llamar al ${n}`,
      whatsapp: 'WhatsApp',
      escribirWhatsapp: 'Escribir por WhatsApp',
      escribirCorreo: 'Escribir un correo',
      verServicio: 'Ver servicio',
      verComoLoHacemos: 'Ver cómo lo hacemos',
      abrirMapa: 'Ver cómo llegar',
      verMasArriba: 'Volver al inicio',
    },
    hero: {
      eyebrow: 'Instalador registrado · Sur de Tenerife',
      titulo: 'Especialistas en telecomunicaciones en el sur de Tenerife',
      lede:
        'ElectroSat TV lleva la antena, las cámaras, el portero y el internet de tu casa, tu comunidad o tu negocio en el sur de Tenerife.',
      ventajas: [
        'Vamos a verlo gratis y sin compromiso',
        'Te decimos el precio antes de empezar',
        'Garantía por escrito en todo lo que montamos',
      ],
      sello: 'Empresa instaladora registrada',
    },
    confianza: [
      { dato: 'Sin coste', texto: 'La visita y el presupuesto no se cobran' },
      { dato: 'Precio cerrado', texto: 'Lo que te decimos es lo que pagas' },
      { dato: 'Con garantía', texto: 'Por escrito, en material y mano de obra' },
      { dato: 'Somos de aquí', texto: 'Estamos en Valle San Lorenzo, Arona' },
    ],
    publicos: {
      eyebrow: 'Por dónde empezar',
      titulo: 'Dinos qué eres y vamos al grano',
      prosa:
        'No es lo mismo una avería en una casa que una instalación para todo un edificio. Elige el caso que se parece al tuyo.',
      items: [
        {
          titulo: 'Comunidades de vecinos',
          texto:
            'Antena de todo el edificio, portero, cámaras e internet para todas las viviendas. Con un presupuesto claro para llevar a la junta.',
        },
        {
          titulo: 'Hoteles y negocios',
          texto:
            'Canales de televisión internacionales, cámaras, wifi que llega a todas las habitaciones y alguien que responde cuando algo falla.',
        },
        {
          titulo: 'Casas particulares',
          texto:
            'Antena, parabólica, cámaras, telefonillo y averías. Vamos, lo miramos y te decimos qué pasa antes de tocar nada.',
        },
      ],
    },
    servicios: {
      eyebrow: 'Qué hacemos',
      titulo: 'Todo lo que entra por el mismo cable',
      prosa:
        'Televisión, cámaras, portero e internet comparten instalación en un edificio. Llevarlo todo con la misma empresa evita que una cosa estropee la otra.',
      ctaTitulo: '¿No sabes cuál te toca?',
      ctaTexto:
        'Cuéntanos qué te pasa y te decimos si es una avería, una mejora o una instalación nueva. Sin compromiso.',
    },
    pasos: {
      eyebrow: 'Cómo trabajamos',
      titulo: 'Cuatro pasos y ya está',
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
        {
          titulo: 'Material de marca',
          texto: 'Con repuesto disponible durante años, no de usar y tirar.',
        },
        {
          titulo: 'Seguimos aquí',
          texto: 'Si algo falla después, te atiende quien lo montó.',
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
        'Estamos en Valle San Lorenzo y nos movemos por toda la comarca sur. Si tu zona está en la lista, ir a verlo no te cuesta nada.',
    },
    opiniones: {
      eyebrow: 'Clientes',
      titulo: 'Lo que dicen quienes ya nos han llamado',
      valoracion: 'Valoración de cinco estrellas',
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
    },
    acciones: {
      llamanos: 'Call us',
      llamarAhora: 'Call now',
      llamarA: (n: string) => `Call ${n}`,
      whatsapp: 'WhatsApp',
      escribirWhatsapp: 'Message on WhatsApp',
      escribirCorreo: 'Send an email',
      verServicio: 'View service',
      verComoLoHacemos: 'See how we do it',
      abrirMapa: 'Get directions',
      verMasArriba: 'Back to top',
    },
    hero: {
      eyebrow: 'Registered installer · South Tenerife',
      titulo: 'Telecommunications specialists in southern Tenerife',
      lede:
        'ElectroSat TV takes care of the aerial, the cameras, the door entry system and the internet in your home, your building or your business in the south of Tenerife.',
      ventajas: [
        'We come and look at it, free and with no obligation',
        'You get the price before we start',
        'Written guarantee on everything we install',
      ],
      sello: 'Registered installation company',
    },
    confianza: [
      { dato: 'No charge', texto: 'The visit and the quote are free' },
      { dato: 'Fixed price', texto: 'What we quote is what you pay' },
      { dato: 'Guaranteed', texto: 'In writing, parts and labour' },
      { dato: "We're local", texto: 'Based in Valle San Lorenzo, Arona' },
    ],
    publicos: {
      eyebrow: 'Where to start',
      titulo: 'Tell us who you are and we get to the point',
      prosa:
        'A fault in one home is not the same as an installation for a whole building. Pick the case that looks like yours.',
      items: [
        {
          titulo: 'Residents associations',
          texto:
            'One aerial for the whole building, door entry, cameras and internet for every flat. With a clear quote you can take to the owners meeting.',
        },
        {
          titulo: 'Hotels and businesses',
          texto:
            'International TV channels, cameras, wifi that reaches every room, and someone who answers when something goes wrong.',
        },
        {
          titulo: 'Private homes',
          texto:
            'Aerial, satellite dish, cameras, door phone and faults. We come, we check it and we tell you what is wrong before touching anything.',
        },
      ],
    },
    servicios: {
      eyebrow: 'What we do',
      titulo: 'It all runs through the same cable',
      prosa:
        'Television, cameras, door entry and internet share the same wiring in a building. Having one company handle all of it stops one job from breaking another.',
      ctaTitulo: 'Not sure which one you need?',
      ctaTexto:
        'Tell us what is happening and we will say whether it is a fault, an upgrade or a new installation. No obligation.',
    },
    pasos: {
      eyebrow: 'How we work',
      titulo: 'Four steps and done',
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
        {
          titulo: 'Proper equipment',
          texto: 'Brands that keep spare parts available for years.',
        },
        {
          titulo: 'We are still here',
          texto: 'If something fails later, you deal with the people who fitted it.',
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
        'We are based in Valle San Lorenzo and cover the whole southern area. If your town is on the list, coming to look at it costs you nothing.',
    },
    opiniones: {
      eyebrow: 'Customers',
      titulo: 'What people who called us say',
      valoracion: 'Five star rating',
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
    },
    acciones: {
      llamanos: 'Rufen Sie an',
      llamarAhora: 'Jetzt anrufen',
      llamarA: (n: string) => `${n} anrufen`,
      whatsapp: 'WhatsApp',
      escribirWhatsapp: 'Per WhatsApp schreiben',
      escribirCorreo: 'E-Mail schreiben',
      verServicio: 'Leistung ansehen',
      verComoLoHacemos: 'So gehen wir vor',
      abrirMapa: 'Route anzeigen',
      verMasArriba: 'Nach oben',
    },
    hero: {
      eyebrow: 'Eingetragener Installateur · Süden Teneriffas',
      titulo: 'Fachbetrieb für Telekommunikation im Süden Teneriffas',
      lede:
        'ElectroSat TV kümmert sich um Antenne, Kameras, Türsprechanlage und Internet in Ihrer Wohnung, Ihrer Wohnanlage oder Ihrem Betrieb im Süden Teneriffas.',
      ventajas: [
        'Wir schauen es uns kostenlos und unverbindlich an',
        'Sie kennen den Preis, bevor wir anfangen',
        'Schriftliche Garantie auf alles, was wir einbauen',
      ],
      sello: 'Eingetragener Installationsbetrieb',
    },
    confianza: [
      { dato: 'Kostenlos', texto: 'Besichtigung und Angebot berechnen wir nicht' },
      { dato: 'Festpreis', texto: 'Was wir nennen, zahlen Sie' },
      { dato: 'Mit Garantie', texto: 'Schriftlich, auf Material und Arbeit' },
      { dato: 'Aus der Gegend', texto: 'Wir sitzen in Valle San Lorenzo, Arona' },
    ],
    publicos: {
      eyebrow: 'Wo anfangen',
      titulo: 'Sagen Sie uns, worum es geht',
      prosa:
        'Eine Störung in einer Wohnung ist etwas anderes als eine Anlage für ein ganzes Haus. Wählen Sie den Fall, der zu Ihnen passt.',
      items: [
        {
          titulo: 'Wohnungseigentümer',
          texto:
            'Gemeinschaftsantenne, Türsprechanlage, Kameras und Internet für alle Wohnungen. Mit einem klaren Angebot für die Eigentümerversammlung.',
        },
        {
          titulo: 'Hotels und Betriebe',
          texto:
            'Internationale Fernsehsender, Kameras, WLAN in allen Zimmern und jemand, der ans Telefon geht, wenn etwas ausfällt.',
        },
        {
          titulo: 'Privathaushalte',
          texto:
            'Antenne, Satellitenschüssel, Kameras, Türsprechanlage und Störungen. Wir kommen, sehen nach und sagen Ihnen, was los ist.',
        },
      ],
    },
    servicios: {
      eyebrow: 'Was wir machen',
      titulo: 'Alles läuft über dasselbe Kabel',
      prosa:
        'Fernsehen, Kameras, Türsprechanlage und Internet teilen sich im Haus dieselbe Verkabelung. Wenn eine Firma alles betreut, macht ein Einbau den anderen nicht kaputt.',
      ctaTitulo: 'Sie wissen nicht, was Sie brauchen?',
      ctaTexto:
        'Beschreiben Sie uns das Problem und wir sagen Ihnen, ob es eine Störung, eine Verbesserung oder eine neue Anlage ist. Unverbindlich.',
    },
    pasos: {
      eyebrow: 'So arbeiten wir',
      titulo: 'Vier Schritte, fertig',
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
        {
          titulo: 'Markenmaterial',
          texto: 'Hersteller, die über Jahre Ersatzteile liefern.',
        },
        {
          titulo: 'Wir bleiben erreichbar',
          texto: 'Fällt später etwas aus, hilft Ihnen der Betrieb, der es eingebaut hat.',
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
        'Wir sitzen in Valle San Lorenzo und sind in der ganzen Region Süd unterwegs. Steht Ihr Ort auf der Liste, kostet Sie die Besichtigung nichts.',
    },
    opiniones: {
      eyebrow: 'Kunden',
      titulo: 'Was Kunden über uns sagen',
      valoracion: 'Fünf von fünf Sternen',
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
