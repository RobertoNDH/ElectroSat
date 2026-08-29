import type { Idioma } from './config';

// TODO: sustituir la historia por la real de la empresa. Cuándo empezó, quién
// la fundó y cómo llegó a hacer las cinco cosas que hace hoy.
export const NOSOTROS = {
  es: {
    eyebrow: 'Nosotros',
    titulo: 'Somos de aquí y trabajamos aquí',
    lede:
      'ElectroSat TV está en Valle San Lorenzo, en Arona. Montamos y mantenemos antenas, cámaras, porteros e internet en el sur de Tenerife.',
    cifras: {
      anios: 'años trabajando aquí',
      areas: 'áreas de trabajo',
      municipios: 'municipios del sur',
    },
    historiaTitulo: 'Conocemos estos edificios de memoria',
    altTorre: 'Técnico subido a una torre de telecomunicaciones ajustando una antena parabólica',
    historia: [
      'Empezamos con antenas de televisión, que es de donde viene el nombre. Con los años, los mismos edificios nos fueron pidiendo cámaras, porteros y, más tarde, internet para todas las viviendas.',
      'Hoy hacemos las cinco cosas, porque en un portal comparten el mismo cable y el mismo cuarto. Cuando lo lleva una sola empresa, no hay dos instalaciones peleándose ni nadie a quien echarle la culpa.',
      'Casi todos los trabajos nos llegan porque alguien nos recomienda: un administrador, un presidente de comunidad o un vecino al que ya le resolvimos algo. Por eso cuidamos tanto el remate y el papel que se entrega al final.',
    ],
    compromisosTitulo: 'Cuatro cosas que no se negocian',
    compromisos: [
      {
        titulo: 'El precio se dice antes',
        texto:
          'Presupuesto detallado, con el material que lleva. Si en obra sale algo que no estaba previsto, paramos y te consultamos.',
      },
      {
        titulo: 'Todo queda por escrito',
        texto:
          'Mediciones, certificado y garantía. En una comunidad ese papel es lo que permite al administrador justificar el gasto.',
      },
      {
        titulo: 'Se monta para durar',
        texto:
          'Material de marca con repuesto y cable bien rematado. Lo barato que hay que rehacer en tres años no ha ahorrado nada.',
      },
      {
        titulo: 'Seguimos cogiendo el teléfono',
        texto:
          'Después de instalar seguimos siendo los mismos. Si llamas por una incidencia, te atiende quien sabe qué se montó en tu edificio.',
      },
    ],
  },

  en: {
    eyebrow: 'About us',
    titulo: 'We are from here and we work here',
    lede:
      'ElectroSat TV is based in Valle San Lorenzo, Arona. We install and maintain aerials, cameras, door entry systems and internet across southern Tenerife.',
    cifras: {
      anios: 'years working here',
      areas: 'areas of work',
      municipios: 'towns in the south',
    },
    historiaTitulo: 'We know these buildings inside out',
    altTorre: 'Technician up a telecommunications tower adjusting a satellite dish',
    historia: [
      'We started with television aerials, which is where the name comes from. Over the years the same buildings began asking us for cameras, door entry and, later on, internet for every flat.',
      'Today we do all five, because in a building they share the same cabling and the same services room. With one company handling it, there are no two installations fighting each other and nobody to pass the blame to.',
      'Almost all our work comes through recommendation: an administrator, a residents association president or a neighbour whose problem we solved. That is why we care so much about the finish and the paperwork we hand over.',
    ],
    compromisosTitulo: 'Four things we do not negotiate',
    compromisos: [
      {
        titulo: 'The price comes first',
        texto:
          'An itemised quote, including the materials. If something unexpected turns up during the work, we stop and ask you.',
      },
      {
        titulo: 'Everything in writing',
        texto:
          'Readings, certificate and guarantee. In a residential building that paperwork is what lets the administrator justify the spend.',
      },
      {
        titulo: 'Built to last',
        texto:
          'Branded equipment with spares available and cabling finished properly. Something cheap that needs redoing in three years has saved nothing.',
      },
      {
        titulo: 'We still answer the phone',
        texto:
          'After the installation we are still the same people. If you call about a problem, you speak to someone who knows what was fitted in your building.',
      },
    ],
  },

  de: {
    eyebrow: 'Über uns',
    titulo: 'Wir sind von hier und arbeiten hier',
    lede:
      'ElectroSat TV sitzt in Valle San Lorenzo, Arona. Wir montieren und warten Antennen, Kameras, Türsprechanlagen und Internet im Süden Teneriffas.',
    cifras: {
      anios: 'Jahre hier tätig',
      areas: 'Arbeitsbereiche',
      municipios: 'Orte im Süden',
    },
    historiaTitulo: 'Wir kennen diese Häuser in- und auswendig',
    altTorre: 'Techniker auf einem Sendemast beim Ausrichten einer Satellitenschüssel',
    historia: [
      'Angefangen haben wir mit Fernsehantennen, daher der Name. Mit den Jahren fragten dieselben Häuser nach Kameras, Sprechanlagen und später nach Internet für alle Wohnungen.',
      'Heute machen wir alle fünf Bereiche, denn im Haus teilen sie sich dieselbe Verkabelung und denselben Technikraum. Wenn ein Betrieb alles betreut, behindern sich zwei Anlagen nicht und niemand schiebt die Schuld weiter.',
      'Fast alle Aufträge kommen über Empfehlung: von einem Verwalter, einem Beirat oder einem Nachbarn, dem wir schon geholfen haben. Deshalb achten wir so auf saubere Ausführung und auf die Unterlagen am Schluss.',
    ],
    compromisosTitulo: 'Vier Dinge, über die wir nicht verhandeln',
    compromisos: [
      {
        titulo: 'Der Preis steht vorher fest',
        texto:
          'Aufgeschlüsseltes Angebot samt Material. Taucht während der Arbeit etwas Unvorhergesehenes auf, halten wir an und fragen nach.',
      },
      {
        titulo: 'Alles schriftlich',
        texto:
          'Messwerte, Abnahmeprotokoll und Garantie. In einer Wohnanlage sind das die Unterlagen, mit denen der Verwalter die Ausgabe belegt.',
      },
      {
        titulo: 'Gebaut, um zu halten',
        texto:
          'Markenmaterial mit Ersatzteilversorgung und sauber verlegte Leitungen. Was billig ist und nach drei Jahren erneuert werden muss, hat nichts gespart.',
      },
      {
        titulo: 'Wir gehen weiterhin ans Telefon',
        texto:
          'Nach der Montage sind wir dieselben Leute. Wer wegen einer Störung anruft, spricht mit jemandem, der weiß, was in seinem Haus verbaut wurde.',
      },
    ],
  },
} as const;

export const nosotros = (lang: Idioma) => NOSOTROS[lang];
