import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        module: z.string().optional(),
        course: z.string().optional(),
        unit: z.string().optional(),
        version: z.string().optional(),
      }),
    }),
  }),
};