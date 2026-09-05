import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

const emojis = ['🌐', '🦺', '🔌', '🔀', '🧮', '🏢', '🧭', '🩺'];

const unitSlugs = [
  '01-fundamentos-estructura-representacion',
  '02-prevencion-riesgos-proteccion-ambiental',
  '03-infraestructura-fisica-cableado',
  '04-interconexion-conmutacion-verificacion',
  '05-tcp-ip-direccionamiento-ipv4-ipv6',
  '06-segmentacion-vlan-wlan',
  '07-encaminamiento-nat-iot',
  '08-mantenimiento-resolucion-incidencias',
];

const unitLabels = [
  'Fundamentos, estructura y representación de redes locales',
  'Prevención de riesgos y protección ambiental en redes',
  'Infraestructura física y despliegue del cableado de red',
  'Interconexión, conmutación y verificación de redes locales cableadas',
  'Arquitecturas TCP/IP y direccionamiento IPv4/IPv6',
  'Segmentación y acceso a redes locales: VLAN y WLAN',
  'Encaminamiento, NAT e introducción a IoT',
  'Mantenimiento y resolución de incidencias en redes locales',
];

/*
 * Los apartados se irán incorporando conforme se desarrollen los materiales.
 *
 * UT1 queda ya preparada con la secuencia definitiva de sus 17 apartados
 * de desarrollo. En el resto de UT, mientras no existan los archivos,
 * el sidebar mostrará únicamente el índice de la unidad.
 */
const unidadesExpandidas = {
  '01-fundamentos-estructura-representacion': [
    {
      slug: '01-fundamentos/01-que-es-una-red-local',
      label: '1 · ¿Qué es una red local?',
    },
    {
      slug: '01-fundamentos/02-componentes-basicos-de-una-red',
      label: '2 · Componentes básicos de una red',
    },
    {
      slug: '01-fundamentos/03-tipos-de-red-y-alcance',
      label: '3 · Tipos de red y alcance',
    },
    {
      slug: '01-fundamentos/04-otras-formas-de-clasificar-una-red',
      label: '4 · Otras formas de clasificar una red',
    },
    {
      slug: '01-fundamentos/05-cliente-servidor-y-p2p',
      label: '5 · Cliente-servidor y P2P',
    },
    {
      slug: '01-fundamentos/06-topologia-fisica-y-logica',
      label: '6 · Topología física y lógica',
    },
    {
      slug: '01-fundamentos/07-estrella-bus-y-anillo',
      label: '7 · Estrella, bus y anillo',
    },
    {
      slug: '01-fundamentos/08-arbol-malla-e-hibridas',
      label: '8 · Árbol, malla e híbridas',
    },
    {
      slug: '01-fundamentos/09-dispositivos-finales-e-intermedios',
      label: '9 · Dispositivos finales e intermedios',
    },
    {
      slug: '01-fundamentos/10-switch-router-y-punto-de-acceso',
      label: '10 · Switch, router y punto de acceso',
    },
    {
      slug: '01-fundamentos/11-medios-de-transmision',
      label: '11 · Medios de transmisión: primera aproximación',
    },
    {
      slug: '01-fundamentos/12-introduccion-packet-tracer',
      label: '12 · Introducción práctica a Cisco Packet Tracer',
    },
    {
      slug: '01-fundamentos/13-comunicacion-y-protocolos',
      label: '13 · Comunicación y protocolos',
    },
    {
      slug: '01-fundamentos/14-modelos-osi-y-tcp-ip',
      label: '14 · Modelos OSI y TCP/IP',
    },
    {
      slug: '01-fundamentos/15-mac-ip-nombre-e-interfaz',
      label: '15 · MAC, IP, nombre e interfaz',
    },
    {
      slug: '01-fundamentos/16-mapas-y-representacion-de-una-lan',
      label: '16 · Mapas y representación de una LAN',
    },
    {
      slug: '01-fundamentos/17-caso-integrador',
      label: '17 · Caso integrador: comprender y representar una LAN',
    },
  ],
};

const unidades = unitSlugs.map((slug, i) => {
  const label = `${emojis[i]} UT${i + 1} · ${unitLabels[i]}`;

  if (unidadesExpandidas[slug]) {
    return {
      label,
      collapsed: true,
      items: [
        { slug, label: '🏠 Índice de la unidad' },
        ...unidadesExpandidas[slug],
      ],
    };
  }

  return {
    slug,
    label,
  };
});

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/SMR-Redes',


  integrations: [
    starlight({
      title: 'Apuntes Redes Locales',

      description:
        'Redes Locales — 1.º SMR · 8 unidades de trabajo · teoría explícita, práctica progresiva y diagnóstico. CC BY-SA 4.0 — Carlos Sanchez y Virginia Zornoza',

      customCss: [
        './src/styles/custom.css',
        '@fontsource/geist-sans',
      ],

      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },

      defaultLocale: 'root',
      tableOfContents: false,

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/carlossan3/SMR-Redes',
        },
      ],

      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#2563eb',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/SMR-Redes/favicon.svg',
          },
        },
      ],

      sidebar: [
        {
          slug: 'index',
          label: '🏠 Inicio',
        },
        {
          label: '📚 Unidades de trabajo',
          items: unidades,
        },
      ],
    }),
  ],
});

