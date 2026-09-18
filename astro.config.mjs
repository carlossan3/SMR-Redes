import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/SMR-Redes',

  integrations: [
    starlight({
      title: 'Redes Locales',

      description:
        'Apuntes de Redes Locales de 1º SMR',

      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },

      defaultLocale: 'root',

      sidebar: [
        {
          slug: 'index',
          label: '🏠 Inicio',
        },
        {
          label: '📚 Unidades de trabajo',
          items: [
            {
              slug: 'U01-Fundamentos',
              label: '🌐 U1 · Fundamentos de redes',
            },
            {
              slug: 'U02-Prevencion',
              label: '🦺 U2 · Prevención de riesgos',
            },
            {
              slug: 'U03-Infraestructura_fisica',
              label: '🔌 U3 · Infraestructura física',
            },
          ],
        },
      ],
    }),
  ],
});