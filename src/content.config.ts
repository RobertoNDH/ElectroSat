import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    /** Titular de la pagina (h1). */
    titulo: z.string(),
    /** Nombre corto para tarjetas, menu y breadcrumb. */
    corto: z.string(),
    /** <title> del navegador. Incluye la localizacion por SEO local. */
    tituloSeo: z.string(),
    /** <meta description>. Entre 120 y 160 caracteres. */
    descripcion: z.string().min(80).max(180),
    /** Orden en las rejillas de servicio. */
    orden: z.number().int(),
    /** Clave del icono en components/Icono.astro. */
    icono: z.enum(['satelite', 'camara', 'portero', 'internet', 'red']),
    /** Frase de la tarjeta en la home. */
    resumen: z.string(),
    /** Tres vinetas de la tarjeta. Ni dos ni cuatro: la rejilla cuadra con tres. */
    puntos: z.array(z.string()).length(3),
    /** Entradilla de la pagina de servicio. */
    entradilla: z.string(),
    /** Que incluye el trabajo. */
    incluye: z.array(z.string()).min(4),
    /** Para quien es este servicio. */
    publico: z
      .array(z.object({ tipo: z.string(), texto: z.string() }))
      .min(2)
      .max(3),
    /** Marcas relevantes para este servicio. Deben existir en data/marcas.ts. */
    marcas: z.array(z.string()),
    /** FAQ especifica del servicio. */
    faq: z.array(z.object({ p: z.string(), r: z.string() })).min(2),
  }),
});

export const collections = { servicios };
