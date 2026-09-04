import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

export default defineConfig({
  // Si tu repo se llama "apuntes-web" y tu usuario es "Kanenas"
  site: 'https://TU-USUARIO.github.io', 
  base: '/NOMBRE-DEL-REPOSITORIO', // Borra esta línea si el repo se llama exactamente "TU-USUARIO.github.io"

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

