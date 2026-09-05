# Apuntes de Redes Locales — 1.º SMR

> **Comprende la red, móntala, compruébala y aprende a descubrir por qué falla.**  
> 8 unidades de trabajo · teoría explícita + práctica progresiva · enfoque profesional

**Módulo:** 0225 — Redes Locales  
**Ciclo:** 1.º de Sistemas Microinformáticos y Redes  
**Licencia:** CC BY-SA 4.0 — [Carlos Sánchez y Virginia Zornoza](https://github.com/carlossan3)

---

## 🌐 Web

La versión web de los apuntes puede publicarse con **Astro + Starlight + GitHub Pages**.

> La URL concreta dependerá del repositorio utilizado para esta versión de **Redes Locales de SMR**.

---

## 🗺️ El recorrido de aprendizaje

El curso no se organiza como una colección de temas independientes. Cada unidad prepara la siguiente y aumenta progresivamente la autonomía.

```text
UT1  🌐 Entender una red
 ↓
UT2  🦺 Trabajar con seguridad
 ↓
UT3  🔌 Desplegar la infraestructura física
 ↓
UT4  🔀 Interconectar y comprender la conmutación
 ↓
UT5  🏷️ Direccionar con IPv4 e IPv6
 ↓
UT6  🏢 Segmentar y proporcionar acceso LAN/WLAN
 ↓
UT7  🧭 Comunicar redes y acceder al exterior
 ↓
UT8  🩺 Mantener, diagnosticar y resolver incidencias
```

La progresión general del módulo es:

```text
ENTIENDO QUÉ ES
↓
SÉ UTILIZARLO
↓
SÉ COMPROBARLO
↓
SÉ QUÉ DEBERÍA OCURRIR
↓
OBSERVO QUÉ OCURRE
↓
PUEDO EXPLICAR LA DIFERENCIA
↓
PUEDO CORREGIRLA
↓
PUEDO DEMOSTRAR QUE FUNCIONA
```

---

## 📚 Unidades

| # | Título | Nombre didáctico | RA | Proyecto |
|---|---|---|---|---|
| U01 | Fundamentos, estructura y representación de redes locales | La red que existe aunque Internet no funcione 🌐 | RA1 | Comprender, identificar y representar una LAN |
| U02 | Prevención de riesgos y protección ambiental en redes | Que la incidencia no seas tú 🦺 | RA6 | Preparar y ejecutar trabajos de red con seguridad |
| U03 | Infraestructura física y despliegue del cableado de red | El cable traicionero 🔌 | RA2 | Diseñar, montar, etiquetar y verificar el cableado de una pequeña instalación |
| U04 | Interconexión, conmutación y verificación de redes locales cableadas | CONRAD aprende quién está conectado 🔀 | RA3 | Montar y comprobar una LAN cableada con varios equipos y switches |
| U05 | Arquitecturas TCP/IP y direccionamiento IPv4/IPv6 | La calculadora maldita vuelve en 128 bits 🧮 | RA4 | Diseñar, configurar y verificar el direccionamiento de una red |
| U06 | Segmentación y acceso a redes locales: VLAN y WLAN | La red dividida... y sin cables 🏢📶 | RA4 | Diseñar una LAN mixta segmentada con VLAN y Wi-Fi |
| U07 | Encaminamiento, NAT e introducción a IoT | Cómo salir de tu red sin perderte 🧭 | RA4 | Comunicar redes, acceder al exterior e integrar dispositivos IoT |
| U08 | Mantenimiento y resolución de incidencias en redes locales | Apágalo y vuelve a encenderlo no es un método 🩺 | RA5 | Diagnosticar, corregir, verificar y documentar averías de red |


---

## 🎯 Resultados de aprendizaje

| RA | Organización |
|---|---|
| **RA1** | UT1 |
| **RA6** | UT2 |
| **RA2** | UT3 |
| **RA3** | UT4 |
| **RA4** | UT5 + UT6 + UT7 |
| **RA5** | UT8 |

---

## 🧩 Recursos didácticos recurrentes

| Recurso | ¿Qué aporta? |
|---|---|
| ⭐ **Sé el Paquete** | Te pones en la piel del paquete y tomas decisiones para seguir o interpretar una comunicación. |
| 🔥 **Fireside Chat** | Dos conceptos o tecnologías contrastan sus funciones mediante una conversación breve. |
| 🕵️ **¿Quién Soy?** | Adivina el concepto de red por su descripción. |
| 🤬 **CONRAD VS EL MUNDO** | CONRAD, el switch cascarrabias, señala errores típicos con humor. |
| ⚡ **Laboratorio de tortura** | Prácticas con fallos intencionados. |
| 🧠 **Atrévete a pensar** | Problemas, decisiones y preguntas con soluciones. |
| 🧩 **Crucigrama de bits** | Repaso de vocabulario mediante puzzle. |
| 💬 **Entrevista de trabajo** | Preguntas técnicas formuladas como situaciones profesionales de procesos de selección. |
| 🤷 **No hay preguntas tontas** | FAQ sobre errores y dudas habituales. |
| 🏆 **Logros** | Gamificación: Hitos de progreso y consolidación. |
| 🎬 **Poscréditos** | Cierre ligero de la unidad y transición hacia el siguiente bloque. |

Las soluciones de actividades se ocultan normalmente mediante:

```html
<details>
<summary>🔄 Solución</summary>

Respuesta...

</details>
```

---

## 🛠️ Stack tecnológico

Si se conserva la infraestructura del proyecto original, la publicación puede utilizar:

| Capa | Tecnología |
|---|---|
| **Framework** | [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) |
| **Tema** | Personalización CSS sobre Starlight |
| **Idioma** | Español |
| **Buscador** | Pagefind integrado en Starlight |
| **Diagramas** | D2 (Terrastruct) → SVG vectorial |
| **Despliegue** | GitHub Actions → GitHub Pages |


---

## 📦 Scripts

```bash
npm run diagrams  # Generar diagramas D2 → SVG
npm run dev       # Servidor local
npm run build     # Generar build estático
npm run preview   # Previsualizar build
npm run pdf       # Generar PDF completo
npm run pdf:local # Generar PDF desde servidor local
npm run epub      # Generar EPUB
npm run export    # PDF + EPUB
```

### Exportación

| Formato | Uso |
|---|---|
| **Web** | Navegación por unidades y apartados |
| **PDF** | Documento completo o material imprimible |
| **EPUB** | Lectura en dispositivos compatibles |
| **Ctrl+P** | Impresión o PDF de una página concreta |

---

## 📁 Estructura del proyecto

```text
src/
├── content/
│   ├── docs/
│   │   ├── index.md
│   │   ├── 01-fundamentos/
│   │   ├── 02-prevencion/
│   │   ├── 03-infraestructura-fisica/
│   │   ├── 04-interconexion-conmutacion/
│   │   ├── 05-tcp-ip-direccionamiento/
│   │   ├── 06-vlan-wlan/
│   │   ├── 07-routing-nat-iot/
│   │   ├── 08-mantenimiento-diagnostico/
│   │   └── actividades/
│   └── config.ts
├── styles/
│   └── custom.css
├── assets/
│   └── logo.svg
├── scripts/
│   ├── generate-diagrams.mjs
│   ├── pdf-cover.html
│   ├── pdf-header.html
│   ├── pdf-footer.html
│   ├── epub.css
│   └── generate-epub.ps1
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🧪 ¿Cómo contribuir / usar?

1. Clona el repo: `git clone https://github.com/carlossan3/SMR-Redes.git`
2. Instala dependencias: `npm install`
3. Edita los `.md` en `src/content/docs/`
4. Visualiza cambios: `npm run dev`
5. Genera build: `npm run build`


---

## 📄 Licencia

[![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

**CC BY-SA 4.0** — Creative Commons Attribution-ShareAlike 4.0 International

Eres libre de:

- **Compartir** — copiar y redistribuir el material en cualquier medio.
- **Adaptar** — remezclar, transformar y crear a partir del material.

Bajo los siguientes términos:

- **Atribución** — debes dar crédito adecuado y proporcionar un enlace a la licencia.
- **CompartirIgual** — si remezclas, transformas o creas a partir del material, debes distribuir tu contribución bajo la misma licencia.

Basado en el proyecto de Redes para ASIR de Sergi Garcia Barea [sergarb1.github.io/ApuntesRedes](https://sergarb1.github.io/ApuntesRedes). 

---
