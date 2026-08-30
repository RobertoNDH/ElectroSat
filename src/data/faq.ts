import type { Idioma } from '../i18n/config';

export const FAQ = {
  es: [
    {
      p: '¿Cuál es el coste de una evaluación técnica inicial?',
      r: 'La visita y auditoría técnica inicial se realizan sin coste y sin compromiso. Solo se emiten cargos una vez aprobado el proyecto.',
    },
    {
      p: '¿Prestan servicios a comunidades de alto standing?',
      r: 'Sí. Diseñamos propuestas técnicas con el formato oficial requerido por los administradores de fincas, facilitando la toma de decisiones en junta.',
    },
    {
      p: '¿Es posible integrar red de datos sin impacto arquitectónico?',
      r: 'Generalmente, sí. Aprovechamos la infraestructura de canalización existente del edificio para distribuir la señal, preservando intacta la estética de la propiedad.',
    },
    {
      p: '¿Qué nivel de garantía ofrecen sus intervenciones?',
      r: 'Proporcionamos garantías integrales por escrito tanto para el equipamiento de grado profesional como para la integración, acompañadas del certificado oficial.',
    },
    {
      p: '¿Cuentan con servicio de asistencia urgente?',
      r: 'Sí. Priorizamos incidencias críticas que afecten a la operatividad completa de complejos o comunidades, acudiendo a la mayor brevedad posible.',
    },
    {
      p: '¿Sus sistemas CCTV cumplen las normativas de privacidad?',
      r: 'Absolutamente. Todas nuestras instalaciones de videovigilancia se configuran y auditan en estricto cumplimiento con la normativa vigente de protección de datos.',
    },
  ],
  en: [
    {
      p: 'What is the cost of an initial technical assessment?',
      r: 'The initial visit and technical audit are conducted completely free of charge and without obligation. Charges apply only after project approval.',
    },
    {
      p: 'Do you provide services for high-standing communities?',
      r: 'Yes. We design technical proposals in the official format required by property managers, facilitating decision-making at board meetings.',
    },
    {
      p: 'Is it possible to integrate a data network without architectural impact?',
      r: 'Generally, yes. We utilize the building’s existing conduit infrastructure to distribute the signal, preserving the pristine aesthetics of the property.',
    },
    {
      p: 'What level of warranty do your interventions offer?',
      r: 'We provide comprehensive written guarantees for both professional-grade equipment and integration, accompanied by the official installation certificate.',
    },
    {
      p: 'Do you offer an urgent assistance service?',
      r: 'Yes. We prioritize critical incidents affecting the complete operability of complexes or communities, deploying assistance as swiftly as possible.',
    },
    {
      p: 'Do your CCTV systems comply with privacy regulations?',
      r: 'Absolutely. All our video surveillance installations are configured and audited in strict compliance with current data protection regulations.',
    },
  ],
  de: [
    {
      p: 'Was kostet eine anfängliche technische Bewertung?',
      r: 'Der erste Besuch und das technische Audit werden völlig kostenlos und unverbindlich durchgeführt. Gebühren fallen erst nach Projektfreigabe an.',
    },
    {
      p: 'Bieten Sie Dienstleistungen für gehobene Wohnanlagen an?',
      r: 'Ja. Wir erstellen technische Vorschläge im von Immobilienverwaltern geforderten offiziellen Format, was die Entscheidungsfindung in Eigentümerversammlungen erleichtert.',
    },
    {
      p: 'Ist es möglich, ein Datennetzwerk ohne architektonische Auswirkungen zu integrieren?',
      r: 'In der Regel ja. Wir nutzen die vorhandene Leitungsinfrastruktur des Gebäudes zur Signalverteilung und bewahren so die makellose Ästhetik der Immobilie.',
    },
    {
      p: 'Welche Garantien bieten Ihre Interventionen?',
      r: 'Wir bieten umfassende schriftliche Garantien sowohl für professionelle Ausrüstung als auch für die Integration, zusammen mit dem offiziellen Installationszertifikat.',
    },
    {
      p: 'Bieten Sie einen Notdienst an?',
      r: 'Ja. Wir priorisieren kritische Vorfälle, die die vollständige Betriebsfähigkeit von Komplexen oder Wohnanlagen beeinträchtigen, und leisten so schnell wie möglich Hilfe.',
    },
    {
      p: 'Entsprechen Ihre CCTV-Systeme den Datenschutzbestimmungen?',
      r: 'Absolut. Alle unsere Videoüberwachungsinstallationen werden in strikter Übereinstimmung mit den geltenden Datenschutzbestimmungen konfiguriert und geprüft.',
    },
  ],
} as const;

export const faqDe = (lang: Idioma) => FAQ[lang];
