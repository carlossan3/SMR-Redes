import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

/**
 * Estructura real del proyecto SMR-Redes.
 *
 * Cada unidad tiene:
 * - un archivo principal en src/content/docs/, por ejemplo:
 *     U01-Fundamentos.md
 * - una carpeta con sus apartados, por ejemplo:
 *     1-fundamentos/
 *       U01.01.Que_es_una_red_local.md
 *       U01.02.Componentes_basicos_de_una_red.md
 *       ...
 *
 * Los valores de `slug` se escriben como la ruta relativa dentro de
 * src/content/docs/, sin la extensión `.md`.
 */

const unidades = [
  {
    code: 'U01',
    emoji: '🌐',
    slug: 'U01-Fundamentos',
    folder: '1-fundamentos',
    label: 'Fundamentos, estructura y representación de redes locales',
  },
  /*{
    code: 'U02',
    emoji: '🦺',
    slug: 'U02-Prevencion',
    folder: '2-prevencion',
    label: 'Prevención de riesgos y protección ambiental en redes',
  },
  {
    code: 'U03',
    emoji: '🔌',
    slug: 'U03-Infraestructura_fisica',
    folder: '3-infraestructura-fisica',
    label: 'Infraestructura física y despliegue del cableado de red',
  },
  {
    code: 'U04',
    emoji: '🔀',
    slug: 'U04-Interconexion_conmutacion',
    folder: '4-interconexion-conmutacion',
    label: 'Interconexión, conmutación y verificación de redes locales cableadas',
  },
  {
    code: 'U05',
    emoji: '🧮',
    slug: 'U05-TCP_IP_direccionamiento',
    folder: '5-tcp-ip-direccionamiento',
    label: 'Arquitecturas TCP/IP y direccionamiento IPv4/IPv6',
  },
  {
    code: 'U06',
    emoji: '🏢',
    slug: 'U06-VLAN_WLAN',
    folder: '6-vlan-wlan',
    label: 'Segmentación y acceso a redes locales: VLAN y WLAN',
  },
  {
    code: 'U07',
    emoji: '🧭',
    slug: 'U07-Encaminamiento_NAT_IoT',
    folder: '7-encaminamiento-nat-iot',
    label: 'Encaminamiento, NAT e introducción a IoT',
  },
  {
    code: 'U08',
    emoji: '🩺',
    slug: 'U08-Mantenimiento_incidencias',
    folder: '8-mantenimiento-incidencias',
    label: 'Mantenimiento y resolución de incidencias en redes locales',
  },*/
];

/**
 * U01 ya dispone de una secuencia cerrada de 17 apartados de desarrollo.
 *
 * IMPORTANTE:
 * Los nombres siguientes reproducen la convención real de los archivos:
 *
 *   1-fundamentos/U01.01.Que_es_una_red_local.md
 *
 * Por tanto, aquí se usa exactamente la misma ruta, eliminando únicamente
 * la extensión `.md`.
 *
 * El resto de unidades se irá expandiendo cuando existan sus archivos.
 */
const unidadesExpandidas = {
  'U01-Fundamentos': [
    {
      slug: '1-fundamentos/U01.01.Que_es_una_red_local',
      label: '1 · ¿Qué es una red local?',
    },
    {
      slug: '1-fundamentos/U01.02.Componentes_basicos_de_una_red',
      label: '2 · Componentes básicos de una red',
    },
    {
      slug: '1-fundamentos/U01.03.Tipos_de_red_y_alcance',
      label: '3 · Tipos de red y alcance',
    },
    {
      slug: '1-fundamentos/U01.04.Otras_formas_de_clasificar_una_red',
      label: '4 · Otras formas de clasificar una red',
    },
    {
      slug: '1-fundamentos/U01.05.Cliente_servidor_y_P2P',
      label: '5 · Cliente-servidor y P2P',
    },
    {
      slug: '1-fundamentos/U01.06.Topologia_fisica_y_logica',
      label: '6 · Topología física y lógica',
    },
    {
      slug: '1-fundamentos/U01.07.Estrella_bus_y_anillo',
      label: '7 · Estrella, bus y anillo',
    },
    {
      slug: '1-fundamentos/U01.08.Arbol_malla_e_hibridas',
      label: '8 · Árbol, malla e híbridas',
    },
    {
      slug: '1-fundamentos/U01.09.Dispositivos_finales_e_intermedios',
      label: '9 · Dispositivos finales e intermedios',
    },
    {
      slug: '1-fundamentos/U01.10.Switch_router_y_punto_de_acceso',
      label: '10 · Switch, router y punto de acceso',
    },
    {
      slug: '1-fundamentos/U01.11.Medios_de_transmision_primera_aproximacion',
      label: '11 · Medios de transmisión: primera aproximación',
    },
    {
      slug: '1-fundamentos/U01.12.Introduccion_practica_a_Cisco_Packet_Tracer',
      label: '12 · Introducción práctica a Cisco Packet Tracer',
    },
    {
      slug: '1-fundamentos/U01.13.Comunicacion_y_protocolos_como_viaja_la_informacion',
      label: '13 · Comunicación y protocolos: cómo viaja la información',
    },
    {
      slug: '1-fundamentos/U01.14.Modelos_OSI_y_TCP_IP_para_que_sirven',
      label: '14 · Modelos OSI y TCP/IP: para qué sirven',
    },
    {
      slug: '1-fundamentos/U01.15.MAC_IP_nombre_e_interfaz_identificadores_diferentes',
      label: '15 · MAC, IP, nombre e interfaz: identificadores diferentes',
    },
    {
      slug: '1-fundamentos/U01.16.Mapas_y_representacion_de_una_LAN',
      label: '16 · Mapas y representación de una LAN',
    },
    {
      slug: '1-fundamentos/U01.17.Caso_integrador_comprender_y_representar_una_LAN',
      label: '17 · Caso integrador: comprender y representar una LAN',
    },
  ],
};

/**
 * Generación del sidebar.
 *
 * - Si una unidad tiene apartados ya declarados, se muestra como grupo
 *   desplegable con su índice y sus páginas.
 * - Si todavía no se han creado sus apartados, se muestra únicamente el
 *   archivo principal de la unidad.
 */
const unidadesSidebar = unidades.map((unidad) => {
  const label = `${unidad.emoji} ${unidad.code} · ${unidad.label}`;
  const apartados = unidadesExpandidas[unidad.slug];

  if (apartados) {
    return {
      label,
      collapsed: true,
      items: [
        {
          slug: unidad.slug,
          label: '🏠 Índice de la unidad',
        },
        ...apartados,
      ],
    };
  }

  return {
    slug: unidad.slug,
    label,
  };
});

export default defineConfig({
  site: 'https://carlossan3.github.io',
  base: '/SMR-Redes',

  integrations: [
    starlight({
      title: 'Redes Locales',

      description:
        'Apuntes de Redes Locales de 1.º SMR — 8 unidades de trabajo. Teoría explícita, práctica progresiva y diagnóstico. CC BY-SA 4.0 — Carlos Sanchez y Virginia Zornoza',

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
          items: unidadesSidebar,
        },
      ],
    }),

    // Convierte los bloques ```d2 de Markdown en diagramas.
    d2(),
  ],
});
