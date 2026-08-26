import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const servicios = defineCollection({
  // Un subdirectorio por idioma: el id queda como "es/videovigilancia".
  loader: glob({ pattern: '*/*.md', base: './src/content/servicios' }),
  schema: z.object({
    /** Titular de la página (h1). */
    titulo: z.string(),
    /** Nombre corto para tarjetas, menú y miga de pan. */
    corto: z.string(),
    /** <title> del navegador, con la localización por SEO local. */
    tituloSeo: z.string(),
    /** <meta description>, entre 120 y 160 caracteres. */
    descripcion: z.string().min(80).max(180),
    /** Orden en las rejillas de servicio. */
    orden: z.number().int(),
    /** Clave del icono en components/Icono.astro. */
    icono: z.enum(['satelite', 'camara', 'portero', 'internet', 'red']),
    /** Frase de la tarjeta en la home. */
    resumen: z.string(),
    /** Tres viñetas para la tarjeta de la home. */
    puntos: z.array(z.string()).length(3),
    /** Entradilla de la página de servicio. */
    entradilla: z.string(),
    /** Qué incluye el trabajo. */
    incluye: z.array(z.string()).min(4),
    /** Para quién es este servicio. */
    publico: z
      .array(z.object({ tipo: z.string(), texto: z.string() }))
      .min(2)
      .max(3),
    /** Marcas de este servicio. Deben existir en data/marcas.ts. */
    marcas: z.array(z.string()),
    /** Preguntas frecuentes del servicio. */
    faq: z.array(z.object({ p: z.string(), r: z.string() })).min(2),
  }),
});

export const collections = { servicios };
