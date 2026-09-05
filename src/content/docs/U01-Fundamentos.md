---
title: Fundamentos
slug: U01-Fundamentos
description: Entender una LAN antes de empezar a configurarla 🌐
---

# U01 — Fundamentos, componentes y topologías

> 🗺️ **Ruta del curso:** 🌐 **AQUÍ ESTÁS — U01 Fundamentos** → 🦺 U02 Riesgos → 🔌 U03 Medios → 🧰 U04 Despliegue → 🖧 U05 Interconexión → 🔀 U06 Conmutación → 🧮 U07 IPv4 → 🚀 U08 IPv6 → 🏢 U09 VLAN → 📡 U10 WLAN → 🧭 U11 Routing y NAT → 🩺 U12 Diagnóstico → 📈 U13 Monitorización → 🗂️ U14 Mantenimiento

Esta unidad es el punto de partida. Antes de calcular direcciones, configurar switches o buscar averías, necesitas construir una imagen mental clara de **qué es una red local, qué elementos la forman, cómo se organizan y cómo representarla**.

La idea es sencilla: primero entender el mapa; después aprenderemos a conducir por él.

---

## 1. 📚 Contenidos

La unidad se desarrolla mediante los siguientes apartados:

1. `U01.01.Que_es_una_red_local.md` — **Qué es una red local**
2. `U01.02.Componentes_basicos_de_una_red.md` — **Componentes básicos de una red**
3. `U01.03.Tipos_de_red_y_alcance.md` — **Tipos de red y alcance**
4. `U01.04.Otras_formas_de_clasificar_una_red.md` — **Otras formas de clasificar una red**
5. `U01.05.Cliente_servidor_y_P2P.md` — **Cliente-servidor y P2P**
6. `U01.06.Topologia_fisica_y_logica.md` — **Topología física y lógica**
7. `U01.07.Estrella_bus_y_anillo.md` — **Estrella, bus y anillo**
8. `U01.08.Arbol_malla_e_hibridas.md` — **Árbol, malla e híbridas**
9. `U01.09.Dispositivos_finales_e_intermedios.md` — **Dispositivos finales e intermedios**
10. `U01.10.Switch_router_y_punto_de_acceso.md` — **Switch, router y punto de acceso**
11. `U01.11.Medios_de_transmision_primera_aproximacion.md` — **Medios de transmisión: primera aproximación**
12. `U01.12.Introduccion_practica_a_Cisco_Packet_Tracer.md` — **Introducción práctica a Cisco Packet Tracer**
13. `U01.13.Comunicacion_y_protocolos_como_viaja_la_informacion.md` — **Comunicación y protocolos: cómo viaja la información**
14. `U01.14.Modelos_OSI_y_TCP_IP_para_que_sirven.md` — **Modelos OSI y TCP/IP: para qué sirven**
15. `U01.15.MAC_IP_nombre_e_interfaz_identificadores_diferentes.md` — **MAC, IP, nombre e interfaz: identificadores diferentes**
16. `U01.16.Mapas_y_representacion_de_una_LAN.md` — **Mapas y representación de una LAN**
17. `U01.17.Caso_integrador_comprender_y_representar_una_LAN.md` — **Caso integrador: comprender y representar una LAN**

> 📌 **Idea de fondo:** no tienes que memorizar una colección de siglas. Debes terminar siendo capaz de mirar una red sencilla y explicar **qué hay, cómo está conectado, para qué sirve cada elemento y cómo representarías esa red para que otra persona la entienda**.

---

## 2. ⭐ Sé el Paquete

> Un PC del aula quiere enviar un documento a una impresora de red situada en la misma LAN. Los dos equipos están conectados por cable al mismo switch. También existe un router que comunica la LAN con otras redes.

### Primera decisión: ¿qué recorrido tiene más sentido?

1. `PC → switch → impresora`
2. `PC → router → Internet → router → impresora`
3. `PC → punto de acceso → switch → impresora`
4. `PC → impresora`, ignorando completamente los dispositivos de interconexión

<details>
<summary>🔄 Solución</summary>

La opción correcta es la **1: `PC → switch → impresora`**.

Los dos dispositivos pertenecen a la misma red local y están conectados al mismo switch. El switch es el dispositivo encargado de facilitar la comunicación entre equipos de esa LAN.

El router será necesario cuando el destino esté **en otra red**.

</details>

### Segunda decisión: ahora el PC quiere acceder a un servidor que está fuera de la LAN

¿Qué recorrido representa mejor la idea general?

1. `PC → switch → router → otra red`
2. `PC → switch → impresora → otra red`
3. `PC → router`, aunque el PC no esté conectado a ningún medio
4. `PC → Internet`, porque Internet está dentro del ordenador

<details>
<summary>🔄 Solución</summary>

La opción correcta es la **1: `PC → switch → router → otra red`**.

El switch organiza la comunicación dentro de la LAN. El router conecta esa LAN con otras redes.

Todavía no necesitas saber cómo toma todas sus decisiones el router. Esa parte llegará más adelante. Por ahora basta con que distingas claramente **qué papel desempeña cada dispositivo**.

</details>

---

## 3. 🔥 Fireside Chat — Switch vs router

> *Dos equipos del armario de comunicaciones discuten sobre quién manda realmente en la red.*

**Switch:** — Yo conecto los equipos de la LAN. Sin mí, tus ordenadores tendrían muchos planes, pero pocas conversaciones.

**Router:** — Muy bien. Y cuando quieran salir de esa LAN, ¿qué haces?

**Switch:** — Te los paso a ti. Eso no te convierte en protagonista de todas las escenas.

**Router:** — Yo conecto redes distintas.

**Switch:** — Y yo conecto dispositivos dentro de una red. Son trabajos diferentes.

**Router:** — También puedo llevarlos a Internet.

**Switch:** — Sí, pero deja de decir «Internet» como si fuera una habilidad mágica. Primero existe una LAN, luego alguien decide cómo conectarla con otras redes.

**Router:** — Admito que, para una vez, tienes razón.

**Switch:** — ¿Puedes repetirlo? Quiero guardarlo en la tabla MAC.

**Router:** — No abuses.

### Qué debes sacar de la discusión

- Un **switch** conecta equipos dentro de una LAN.
- Un **router** conecta redes diferentes.
- No son dos nombres para el mismo aparato.
- Un equipo doméstico puede integrar varias funciones en una sola caja, pero las **funciones siguen siendo distintas**.

---

## 4. 🕵️ ¿Quién Soy?

### Adivinanza 1

Tengo teclado, pantalla y tarjeta de red. Soy quien utiliza realmente los servicios de la red.

<details>
<summary>🔄 Respuesta</summary>

**Dispositivo final o host.** Puede ser un PC, un portátil, un servidor, una impresora de red, un móvil u otro equipo que origine o reciba información.

</details>

### Adivinanza 2

Tengo muchos puertos. Conecto equipos de una misma LAN y soy el centro habitual de una topología en estrella.

<details>
<summary>🔄 Respuesta</summary>

**Switch.**

</details>

### Adivinanza 3

No soy Internet. Mi trabajo es comunicar redes distintas y decidir hacia dónde debe continuar el tráfico.

<details>
<summary>🔄 Respuesta</summary>

**Router.**

</details>

### Adivinanza 4

Uno el mundo cableado con dispositivos que se conectan por radio. Los móviles y portátiles me buscan por el aire.

<details>
<summary>🔄 Respuesta</summary>

**Punto de acceso inalámbrico (AP).**

</details>

### Adivinanza 5

No soy un dispositivo. Soy el camino por el que se transmite la información: puedo ser cobre, fibra o radio.

<details>
<summary>🔄 Respuesta</summary>

**Medio de transmisión.**

</details>

### Adivinanza 6

Puedo mostrar cables y puertos reales o representar cómo se organiza lógicamente la comunicación. Soy el plano de la red.

<details>
<summary>🔄 Respuesta</summary>

**Topología o representación de red**, según el contexto. Conviene distinguir siempre entre **topología física** y **topología lógica**.

</details>

---

## 5. 🤬 CONRAD VS EL MUNDO — «Da igual dónde conecte el cable»

> *CONRAD, switch profesional, paciente cero.*

**Alumno:** — Conrad, he conectado el PC. El conector ha entrado, así que debería funcionar.

**CONRAD:** — Fascinante teoría. Según eso, si una llave entra en un agujero ya tenemos una cerradura.

**Alumno:** — Pero es un cable de red.

**CONRAD:** — Sí. Y yo soy un switch, no un perchero con puertos. **Importa qué dispositivo conectas, a qué elemento lo conectas y qué función tiene cada uno.**

**Alumno:** — He conectado un PC a una interfaz del router en vez de al switch.

**CONRAD:** — Ahí lo tienes. Querías incorporar un equipo a la LAN y has decidido saltarte el dispositivo que precisamente conecta los equipos de la LAN. Creativo, sí. Correcto, no.

**Alumno:** — Entonces, ¿primero pienso la topología y luego conecto?

**CONRAD:** — Exacto. **Dibuja, identifica, conecta y comprueba.** En ese orden. Ya estás peligrosamente cerca de trabajar como un técnico.

### La lección

Un cable conectado físicamente no garantiza que la red esté **bien diseñada**.

Antes de conectar:

1. identifica el tipo de dispositivo;
2. decide qué papel debe desempeñar;
3. comprueba a qué elemento debe conectarse;
4. representa la topología;
5. verifica después que el resultado coincide con el diseño.

---

## 6. ⚡ Laboratorio de tortura — La LAN del aula que «casi» está bien

> **Herramienta:** Cisco Packet Tracer  
> **Objetivo:** reconocer los elementos de una LAN, interpretar su topología, corregir un error de conexionado y justificar la solución.

### Escenario

Una pequeña aula dispone de:

- 3 PC: `PC-A`, `PC-B` y `PC-C`;
- 1 impresora de red;
- 1 switch;
- 1 router que representa la salida hacia otras redes.

La red prevista es:

```text
                         [Router]
                            |
                         [Switch]
                    /      |      |      \
                 PC-A    PC-B   PC-C   Impresora
```

Todos los dispositivos finales de la LAN deben quedar conectados al **switch**.

### Configuración proporcionada

No tienes que calcular direcciones. Utiliza estos valores tal como aparecen:

| Equipo | Dirección IPv4 | Máscara |
|---|---|---|
| PC-A | `192.168.10.11` | `255.255.255.0` |
| PC-B | `192.168.10.12` | `255.255.255.0` |
| PC-C | `192.168.10.13` | `255.255.255.0` |
| Impresora | `192.168.10.20` | `255.255.255.0` |

> 📌 En esta unidad no tienes que explicar todavía cómo se calcula una máscara ni cómo funciona el encaminamiento. Aquí esas direcciones sirven únicamente para **comprobar una LAN sencilla ya definida**.

### El archivo de partida

El archivo preparado contiene **un fallo intencionado de conexionado**.

Tu misión no es borrar la red y empezar otra vez. Debes comportarte como un técnico:

```text
OBSERVAR
   ↓
COMPARAR CON EL DISEÑO
   ↓
LOCALIZAR LA DIFERENCIA
   ↓
CORREGIR UNA COSA
   ↓
COMPROBAR
   ↓
EXPLICAR
```

### Tareas

1. Identifica todos los dispositivos y clasifícalos como:
   - dispositivo final;
   - dispositivo intermedio.
2. Dibuja o describe la topología que debería tener la LAN.
3. Comprueba qué equipos están realmente conectados al switch.
4. Localiza el fallo sin cambiar varias cosas a la vez.
5. Corrígelo.
6. Desde `PC-A`, comprueba la conectividad con:
   - `PC-B`;
   - `PC-C`;
   - la impresora.
7. Entrega una evidencia breve:
   - qué estaba mal;
   - qué cambiaste;
   - qué prueba demuestra que ahora funciona.

### Pistas

<details>
<summary>🧩 Pista 1</summary>

Compara la red real con el esquema de referencia. No empieces mirando direcciones: primero observa **quién está conectado a quién**.

</details>

<details>
<summary>🧩 Pista 2</summary>

En esta LAN, los dispositivos finales deberían reunirse en el switch. Revisa especialmente `PC-C`.

</details>

<details>
<summary>🐍 Solución del fallo</summary>

`PC-C` está conectado a una interfaz del **router** en lugar de estar conectado al **switch**.

La corrección consiste en retirar ese enlace y conectar `PC-C` a un puerto disponible del switch.

La evidencia final debe ser doble:

1. la topología coincide con el diseño previsto;
2. las pruebas de conectividad entre los equipos de la LAN funcionan.

La idea importante no es «mover un cable hasta que haya ping», sino **justificar por qué el switch es el lugar correcto para conectar los hosts de esa LAN**.

</details>

### Ampliación

Si terminas antes:

- añade un cuarto PC a la LAN;
- asigna una dirección siguiendo el patrón de la tabla;
- actualiza el esquema;
- explica por qué lo has conectado al switch y no directamente al router.

---

## 7. 🧠 Atrévete a pensar

### 1. La red del aula

Un aula tiene 24 PC, una impresora de red y un switch. Todo está dentro de la misma sala.

¿Qué tipo de red es principalmente por su alcance?

<details>
<summary>🔄 Solución</summary>

Una **LAN** (*Local Area Network*), porque conecta dispositivos dentro de un área local reducida.

</details>

### 2. El dispositivo correcto

Tienes ocho PC en la misma oficina y quieres conectarlos entre sí mediante cable.

¿Comprarías un switch, un router o un punto de acceso como elemento central?

<details>
<summary>🔄 Solución</summary>

Un **switch**. Su función principal es conectar dispositivos dentro de una misma LAN cableada.

</details>

### 3. El edificio crece

En un instituto hay un switch por planta y todos se conectan a un switch central.

¿Qué topología representa mejor esa organización?

<details>
<summary>🔄 Solución</summary>

Una topología en **árbol**, formada por varias estructuras en estrella conectadas jerárquicamente.

</details>

### 4. Físico no siempre significa lógico

Dos diagramas muestran la misma red:

- el primero indica cables, puertos y ubicación física;
- el segundo muestra cómo se organiza la comunicación.

¿Representan exactamente lo mismo?

<details>
<summary>🔄 Solución</summary>

No. El primero es una representación **física**; el segundo, **lógica**.

Los dos describen la misma red desde puntos de vista distintos.

</details>

### 5. Cliente-servidor o P2P

Un equipo central almacena los documentos y veinte ordenadores acceden a ellos.

¿Qué modelo describe mejor la situación?

<details>
<summary>🔄 Solución</summary>

**Cliente-servidor.** Los equipos solicitan un servicio y el servidor central lo proporciona.

</details>

### 6. El medio adecuado

Debes unir dos equipos que están en la misma mesa, pero uno es un portátil que se mueve constantemente.

¿Qué criterio utilizarías para decidir entre cable y conexión inalámbrica?

<details>
<summary>🔄 Solución</summary>

No existe una respuesta única solo por la distancia. Hay que valorar **movilidad, estabilidad, interferencias, seguridad y necesidades de rendimiento**.

Para un equipo fijo suele resultar natural el cable; para uno móvil, la conexión inalámbrica aporta flexibilidad.

</details>

### 7. La caja del operador

En casa hay una sola caja con Wi-Fi, varios puertos Ethernet y conexión con el operador.

¿Significa eso que «router», «switch» y «punto de acceso» son la misma función?

<details>
<summary>🔄 Solución</summary>

No.

Una caja doméstica puede **integrar varias funciones**, pero estas siguen siendo diferentes:

- routing entre redes;
- switching entre puertos Ethernet;
- acceso inalámbrico mediante Wi-Fi.

</details>

### 8. Una representación útil

Te entregan un dibujo precioso de una red, pero no aparecen nombres de equipos, conexiones ni función de los dispositivos.

¿Es suficiente como documentación técnica?

<details>
<summary>🔄 Solución</summary>

No. Una representación técnica debe permitir que otra persona **identifique elementos, conexiones y organización**.

Un dibujo decorativo puede ser atractivo, pero no sustituye a un mapa de red comprensible.

</details>

---

## 8. 🧩 Crucigrama de bits

Completa las palabras a partir de las pistas.

```text
1. _ _ _ _ _ _       Dispositivo que conecta equipos de una LAN.
2. _ _ _ _ _ _       Dispositivo que conecta redes diferentes.
3. _ _ _              Red de área local.
4. _ _ _ _            Equipo conectado que origina o recibe información.
5. _ _                 Punto de acceso inalámbrico.
6. _ _ _ _ _          Canal por el que se transmite la información.
7. _ _ _ _ _ _ _ _ _ Proceso o disposición que describe cómo se organiza una red.
8. _ _ _ _ _ _ _ _ _ Reglas que permiten que dos sistemas se comuniquen.
```

> 💡 **Pista:** algunas respuestas son términos técnicos que se mantienen en inglés porque son los que encontrarás en documentación, interfaces y equipos reales.

<details>
<summary>🔄 Solución del crucigrama</summary>

1. **SWITCH**
2. **ROUTER**
3. **LAN**
4. **HOST**
5. **AP**
6. **MEDIO**
7. **TOPOLOGÍA**
8. **PROTOCOLO**

</details>

---

## 9. 💬 Entrevista de trabajo

Imagina una entrevista para realizar prácticas en una pequeña empresa de soporte informático.

### Pregunta 1

**«Explícame con tus palabras qué es una LAN.»**

### Pregunta 2

**«¿Qué diferencia básica hay entre un switch y un router?»**

### Pregunta 3

**«¿Qué topología esperarías encontrar hoy en una oficina con varios PC cableados?»**

### Pregunta 4

**«¿Qué diferencia existe entre topología física y lógica?»**

### Pregunta 5

**«¿Qué elementos mínimos buscarías al revisar una red local que no conoces?»**

### Pregunta 6

**«¿Wi-Fi e Internet son lo mismo?»**

### Pregunta 7

**«¿Qué diferencia básica hay entre un modelo cliente-servidor y uno P2P?»**

### Pregunta 8

**«Si te entrego una red que no funciona, ¿empezarías cambiando cosas o comparando primero la situación con un diseño?»**

<details>
<summary>🧑‍💼 Qué debería aparecer en buenas respuestas</summary>

1. **LAN:** dispositivos conectados dentro de un área local para comunicarse y compartir recursos.
2. **Switch vs router:** el switch conecta equipos dentro de la LAN; el router comunica redes diferentes.
3. **Topología habitual:** estrella, normalmente con un switch central.
4. **Física vs lógica:** cableado/conexiones reales frente a organización o flujo lógico de la comunicación.
5. **Elementos:** hosts, interfaces, dispositivos intermedios, medios, conexiones y organización de la red.
6. **Wi-Fi ≠ Internet:** Wi-Fi es una tecnología de acceso inalámbrico; Internet es una red de redes.
7. **Cliente-servidor vs P2P:** en el primero hay roles diferenciados; en P2P los equipos pueden compartir recursos entre iguales.
8. **Diagnóstico:** primero observar, recoger información y comparar; después cambiar una sola cosa y verificar.

No hace falta recitar definiciones de memoria. Una buena respuesta es **clara, técnicamente correcta y acompañada de un ejemplo sencillo**.

</details>

---

## 10. 🤷 No hay preguntas tontas

### «¿Una LAN necesita Internet para existir?»

No.

Dos equipos conectados dentro de una red local pueden comunicarse y compartir recursos aunque esa red no tenga ninguna salida a Internet.

> **CONRAD:** — «Internet no es el certificado de nacimiento de una LAN. Puedo trabajar perfectamente sin ver una sola página web, gracias.»

---

### «¿Wi-Fi es una red distinta de la LAN cableada?»

No necesariamente.

Wi-Fi describe una forma de acceso inalámbrico. Un punto de acceso puede integrar esos dispositivos inalámbricos en la misma red local en la que están los equipos cableados.

> **CONRAD:** — «El aire no convierte mágicamente a un portátil en ciudadano de otro planeta.»

---

### «¿Un router doméstico es solo un router?»

A menudo no.

La caja del operador suele integrar varias funciones: router, switch Ethernet, punto de acceso inalámbrico y otras funciones adicionales.

> **CONRAD:** — «Una caja puede hacer cuatro trabajos. Eso no significa que los cuatro trabajos tengan el mismo nombre.»

---

### «¿Switch y hub son lo mismo?»

No.

Los dos pueden parecer cajas con varios puertos, pero su comportamiento es distinto. El switch toma decisiones de reenvío y es el dispositivo habitual en las LAN actuales. El hub es una tecnología antigua y mucho más limitada.

> **CONRAD:** — «Compararme con un hub debería contar como falta de respeto al material informático.»

---

### «¿La topología es solo un dibujo?»

No.

El dibujo es una **representación** de la topología. La topología describe cómo se organizan las conexiones o el flujo lógico de la red.

Un buen esquema ayuda a instalar, mantener, explicar y diagnosticar.

---

### «¿Tengo que aprender ya todas las capas OSI de memoria?»

No es el objetivo principal de esta unidad.

Debes comprender **para qué sirve un modelo por capas** y empezar a situar conceptos básicos. La profundidad llegará cuando el curso necesite utilizar esas capas para explicar configuraciones o diagnosticar.

> **CONRAD:** — «Memorizar siete palabras sin entender para qué sirven es una actividad excelente si tu objetivo profesional es ganar concursos de siete palabras.»

---

### «¿Packet Tracer sustituye a una red real?»

No.

Es un simulador muy útil para observar, construir, modificar y diagnosticar escenarios de red sin disponer de todo el hardware físico. Pero una simulación no sustituye completamente competencias manuales como montar cableado, manipular conectores o trabajar con equipamiento real.

---

### «¿Por qué dibujar una red si puedo mirar los cables?»

Porque una red deja de ser sencilla muy rápido.

Un mapa permite saber:

- qué equipos existen;
- cómo están conectados;
- qué función tiene cada uno;
- qué debería ocurrir;
- dónde empezar a buscar cuando algo no coincide con el diseño.

> **CONRAD:** — «Cuando tengas cuarenta cables del mismo color, vuelve y me cuentas lo de “ya lo veo a simple vista”.»

---

## 11. 🎬 Poscréditos

> *El aula queda vacía. Las pantallas están apagadas. CONRAD sigue encendido en una mesa porque, naturalmente, nadie ha desconectado el switch.*

**CONRAD:** — Por fin. Ya saben distinguir un switch de un router. Creía que no viviría para verlo.

**Router:** — Tampoco exageres.

**CONRAD:** — La semana pasada alguien te llamó «la caja del Wi-Fi».

**Router:** — No quiero hablar de ello.

*Se oye el ruido de una caja de herramientas abriéndose al fondo.*

**Router:** — ¿Qué ha sido eso?

**CONRAD:** — Cables. Herramientas. Cortes. Tropiezos. Electricidad. Residuos.

**Router:** — Eso suena menos divertido.

**CONRAD:** — Lo será todavía menos si alguien empieza a manipular material sin aprender primero a trabajar con seguridad.

*Una crimpadora aparece sobre la mesa.*

**Router:** — ¿La van a usar ya?

**CONRAD:** — Ni tocarla. Primero vamos a evitar que el técnico termine siendo la primera incidencia del curso.

> **PRÓXIMAMENTE EN U02: Prevención de riesgos y protección ambiental en redes — porque arreglar una red está bien; no tener que arreglar al técnico está mejor.** 🦺

---

## 12. ✅ CEs cubiertos

Esta unidad desarrolla el **RA1: reconocimiento de la estructura de las redes locales**.

| CE | Cobertura en la unidad |
|---|---|
| **RA1.a** | Qué es una red; comunicación; reglas; recursos; protocolos introductorios; explicación de una LAN. |
| **RA1.b** | PAN, LAN, WLAN, CAN, MAN y WAN; clasificaciones y selección. |
| **RA1.c** | Hosts, NIC, switch, router, AP, servidores y otros elementos. |
| **RA1.d** | Cobre, fibra y radio como primera aproximación a los medios de transmisión. |
| **RA1.e** | Lectura de mapas físicos y correspondencia con escenarios de red. |
| **RA1.f** | Uso introductorio de Packet Tracer, diagrams.net o herramienta equivalente para representar redes. |
| **RA1.g** | Topologías físicas y lógicas. |
| **RA1.h** | Cliente-servidor, P2P, redes mixtas y estructuras alternativas. |

> ✅ **Al terminar la unidad deberías poder mirar una LAN sencilla y responder con criterio a cinco preguntas:** qué dispositivos hay, qué función cumple cada uno, cómo están conectados, qué tipo de red forman y cómo la representarías para que otra persona pudiera entenderla.

---

## 🏆 Logros

| Logro | Cómo conseguirlo |
|---|---|
| 🏅 **Ya no es “la caja del Wi-Fi”** | Distinguir correctamente switch, router y punto de acceso. |
| 🏅 **Cartógrafo de LAN** | Representar una red sencilla de forma comprensible. |
| 🏅 **Estrella consciente** | Explicar por qué la estrella es habitual en una LAN actual. |
| 🏅 **Detector de roles** | Clasificar correctamente hosts y dispositivos intermedios. |
| 🏅 **Cable con propósito** | Justificar qué dispositivos deben conectarse entre sí. |
| 🏅 **Conrad aprueba** | Encontrar el fallo del laboratorio sin cambiar cinco cosas a la vez. |
| 🏅 **Técnico, no adivino** | Explicar qué evidencia demuestra que una corrección funciona. |

---

> 🌐 **Cierre de U01:** ya tienes el mapa mental. A partir de aquí empezaremos a trabajar con el soporte físico, las herramientas y las decisiones que convierten ese mapa en una instalación real.
