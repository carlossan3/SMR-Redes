import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/SMR-Redes', // Borra esta línea si el repo se llama exactamente "TU-USUARIO.github.io"

    // ... lo que ya teníamos ...
  integrations: [
    d2({ 
      skipGeneration: process.env.GITHUB_ACTIONS === 'true' // Evita errores en GitHub Pages después
    }),
    starlight({
      title: 'Mi Documentación',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Inicio', link: '/' },
        { label: 'Apuntes', link: '/apuntes/ejemplo/' }
      ],
    }),
  ],
});

