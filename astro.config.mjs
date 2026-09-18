import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/SMR-Redes',

  integrations: [
    starlight({
      title: 'Redes Locales',

      description:
        'Apuntes de Redes Locales de 1.º SMR',

      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },

      defaultLocale: 'root',
      tableOfContents: false,

      components: {
        ThemeProvider: './src/components/Accesibilidad.astro',
      },
    }),
  ],
});