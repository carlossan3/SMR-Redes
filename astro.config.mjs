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

      tableOfContents: false,
    }),
  ],
});