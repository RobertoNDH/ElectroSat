import type { Idioma } from '../i18n/config';

// Preguntas frecuentes de la home. Alimenta el bloque visible y el JSON-LD
// de tipo FAQPage.
// TODO: ajustar plazos, garantía y desplazamiento a lo que ofrece la empresa.
export const FAQ = {
  es: [
    {
      p: '¿Cuánto cuesta que vengan a verlo?',
      r: 'Nada. Vamos, lo miramos y te damos precio sin compromiso en todo el sur de la isla. Solo se cobra si aceptas el presupuesto y se hace el trabajo.',
    },
    {
      p: '¿Trabajan con comunidades de vecinos?',
      r: 'Sí, es buena parte de lo que hacemos. Preparamos el presupuesto en el formato que necesita el administrador para llevarlo a la junta, con el reparto por vivienda cuando hace falta.',
    },
    {
      p: '¿Se puede llevar internet a todo el edificio sin obra?',
      r: 'Casi siempre sí. Se aprovecha el cable que el edificio ya tiene, así que no hay que picar paredes ni pasar canaletas nuevas por la escalera.',
    },
    {
      p: '¿Qué garantía tiene el trabajo?',
      r: 'Garantía por escrito en el material y en la mano de obra. Al terminar te entregamos el certificado de la instalación.',
    },
    {
      p: '¿Cuánto tardan en venir si se cae la señal?',
      r: 'Damos prioridad a las averías que dejan sin servicio a un edificio entero. Llama y en esa misma llamada te decimos cuándo podemos pasar.',
    },
    {
      p: '¿Las cámaras cumplen la normativa?',
      r: 'Sí. Las colocamos con los ángulos permitidos, ponemos el cartel informativo obligatorio y configuramos el tiempo que se guardan las imágenes. En comunidades es algo que revisamos siempre.',
    },
  ],
  en: [
    {
      p: 'How much does it cost for you to come and look?',
      r: 'Nothing. We come, check it and give you a price with no obligation anywhere in the south of the island. You only pay if you accept the quote and the work goes ahead.',
    },
    {
      p: 'Do you work with residents associations?',
      r: 'Yes, it is a large part of what we do. We prepare the quote in the format the administrator needs for the owners meeting, broken down per flat where required.',
    },
    {
      p: 'Can internet reach the whole building without building work?',
      r: 'Almost always, yes. We use the cabling the building already has, so there is no need to chase walls or run new trunking up the stairwell.',
    },
    {
      p: 'What guarantee does the work carry?',
      r: 'A written guarantee on parts and labour. When we finish you get the installation certificate.',
    },
    {
      p: 'How quickly do you come out if the signal drops?',
      r: 'Faults that leave a whole building without service come first. Call us and we will tell you on that same call when we can come.',
    },
    {
      p: 'Do the cameras comply with the regulations?',
      r: 'Yes. We fit them within the permitted angles, put up the required notice and set how long the footage is kept. In residential buildings we always check this.',
    },
  ],
  de: [
    {
      p: 'Was kostet es, wenn Sie sich das ansehen?',
      r: 'Nichts. Wir kommen, sehen nach und nennen Ihnen unverbindlich einen Preis, im gesamten Süden der Insel. Bezahlt wird nur, wenn Sie das Angebot annehmen und die Arbeit ausgeführt wird.',
    },
    {
      p: 'Arbeiten Sie mit Eigentümergemeinschaften?',
      r: 'Ja, das ist ein großer Teil unserer Arbeit. Wir erstellen das Angebot in der Form, die der Verwalter für die Eigentümerversammlung braucht, bei Bedarf mit Aufteilung je Wohnung.',
    },
    {
      p: 'Lässt sich Internet ohne Bauarbeiten ins ganze Haus bringen?',
      r: 'Fast immer ja. Wir nutzen die Leitungen, die im Haus bereits liegen. Es müssen also keine Wände aufgestemmt oder neue Kanäle im Treppenhaus verlegt werden.',
    },
    {
      p: 'Welche Garantie gibt es auf die Arbeit?',
      r: 'Schriftliche Garantie auf Material und Arbeitsleistung. Zum Abschluss erhalten Sie das Abnahmeprotokoll der Anlage.',
    },
    {
      p: 'Wie schnell kommen Sie, wenn das Signal ausfällt?',
      r: 'Störungen, bei denen ein ganzes Haus ohne Versorgung ist, haben Vorrang. Rufen Sie an, und wir sagen Ihnen noch im selben Gespräch, wann wir kommen können.',
    },
    {
      p: 'Erfüllen die Kameras die Vorschriften?',
      r: 'Ja. Wir montieren sie in den zulässigen Blickwinkeln, bringen den vorgeschriebenen Hinweis an und stellen die Speicherdauer der Aufnahmen ein. In Wohnanlagen prüfen wir das immer.',
    },
  ],
} as const;

export const faqDe = (lang: Idioma) => FAQ[lang];
