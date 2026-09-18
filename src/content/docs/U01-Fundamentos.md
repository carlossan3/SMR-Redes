---
title: "U01 — Fundamentos de redes"
---

**Módulo:** Redes Locales  
**Ciclo:** 1.º de Sistemas Microinformáticos y Redes  
**Resultado de aprendizaje asociado:** RA1 — Reconoce la estructura de redes locales cableadas analizando las características de entornos de aplicación y describiendo la funcionalidad de sus componentes.

---

# 1. La red local

## 1.1. Qué es una red

Una **red de ordenadores** es un conjunto de dispositivos capaces de intercambiar información y utilizar recursos o servicios comunes mediante unos medios de transmisión y unas reglas de comunicación compartidas.

Una red no es únicamente un conjunto de cables ni un único dispositivo como un router. Para que exista comunicación en red intervienen varios elementos:

- dispositivos que originan, reciben o utilizan información;
- interfaces que permiten a esos dispositivos conectarse;
- medios por los que se transmiten las señales;
- dispositivos que interconectan equipos o redes;
- reglas que permiten organizar e interpretar la comunicación.

Por tanto, una red debe entenderse como un **sistema formado por elementos que colaboran**.

## 1.2. Para qué se utilizan las redes

Las redes permiten ampliar las posibilidades de los equipos aislados.

Entre sus usos más habituales se encuentran:

- **intercambiar información**, como documentos, imágenes, mensajes o copias de seguridad;
- **compartir recursos**, como impresoras, almacenamiento o conexiones hacia otras redes;
- **utilizar servicios**, como páginas web, servidores de archivos o aplicaciones alojadas en otros equipos;
- **comunicarse**, mediante mensajería, correo, videoconferencia o aplicaciones en red;
- **centralizar recursos y administración**, especialmente en centros educativos y empresas;
- **facilitar el acceso conjunto a información y servicios** desde diferentes dispositivos.

Una red no necesita estar conectada a Internet para funcionar. Dos o más dispositivos pueden comunicarse dentro de una red local aunque no exista conexión con redes externas.

## 1.3. Qué es una LAN

Una **LAN** (*Local Area Network*) es una red que cubre un ámbito geográfico limitado y que normalmente está gestionada por una misma persona u organización.

Son ejemplos habituales:

- la red de una vivienda;
- la red de un aula;
- la red de una oficina;
- la red de una biblioteca;
- la red de una pequeña empresa;
- la red interna de un edificio.

En una LAN pueden coexistir equipos cableados, dispositivos inalámbricos, servidores, impresoras y distintos dispositivos de interconexión.

## 1.4. LAN e Internet no son lo mismo

Una **LAN** conecta dispositivos dentro de un ámbito local.

**Internet**, en cambio, es una gran interconexión mundial de redes.

Un equipo puede:

- estar correctamente conectado a su LAN;
- comunicarse con otros dispositivos locales;
- utilizar una impresora o un servidor interno;

y, al mismo tiempo, no disponer de acceso a Internet.

La comunicación local y el acceso a Internet son, por tanto, conceptos diferentes.

---

# 2. Clasificación de las redes

Una misma red puede describirse desde distintos puntos de vista. Las clasificaciones no se excluyen entre sí: una red puede ser, por ejemplo, una LAN, privada, mixta y predominantemente cliente-servidor al mismo tiempo.

## 2.1. Clasificación según el alcance

El **alcance** indica la extensión geográfica aproximada cubierta por la red.

| Tipo | Nombre | Ámbito habitual | Ejemplo |
|---|---|---|---|
| **PAN** | Personal Area Network | Entorno inmediato de una persona | Móvil y reloj inteligente |
| **LAN** | Local Area Network | Habitación, vivienda, aula, oficina o edificio | Red de un aula |
| **WLAN** | Wireless Local Area Network | Ámbito local con acceso inalámbrico | Wi-Fi de una biblioteca |
| **CAN** | Campus Area Network | Varios edificios próximos de una organización | Campus educativo |
| **MAN** | Metropolitan Area Network | Zona urbana o metropolitana | Red que conecta ubicaciones dentro de una ciudad |
| **WAN** | Wide Area Network | Grandes distancias | Red entre sedes de diferentes ciudades |

Estas categorías son referencias útiles, no fronteras matemáticas exactas.

El número de dispositivos tampoco determina por sí solo el tipo de red. Una LAN puede tener muchos equipos dentro de un único edificio, mientras que una WAN puede conectar pocas sedes separadas por grandes distancias.

### WLAN

Una **WLAN** es una red local que utiliza tecnologías inalámbricas para proporcionar conectividad a los dispositivos.

No debe entenderse como una categoría opuesta a LAN:

> una WLAN es una LAN con acceso inalámbrico.

## 2.2. Clasificación según el medio de transmisión

Según la forma en que se transmiten las señales, una red puede ser:

### Red cableada

Utiliza medios físicos guiados, como:

- cable de cobre;
- fibra óptica.

### Red inalámbrica

Utiliza ondas electromagnéticas para transmitir información sin un cable físico hasta cada dispositivo.

Wi-Fi es una tecnología habitual para construir redes locales inalámbricas y utiliza **radio** como medio de transmisión.

### Red mixta

Combina enlaces cableados e inalámbricos.

Es una situación muy habitual en viviendas, centros educativos y empresas: los ordenadores fijos, servidores o switches pueden utilizar cable, mientras que portátiles y dispositivos móviles acceden mediante Wi-Fi.

## 2.3. Clasificación según el acceso

### Red privada

Pertenece a una persona u organización y su acceso está controlado.

Es el modelo habitual de la red interna de:

- un centro educativo;
- una empresa;
- una administración;
- una vivienda.

### Red de acceso público

Permite el acceso a personas que no forman parte necesariamente de la organización que mantiene la infraestructura.

Una red pública no significa que todos sus recursos internos deban quedar accesibles sin restricciones. El acceso a la conectividad y el acceso a los recursos son cuestiones diferentes.

## 2.4. Intranet, extranet e Internet

### Intranet

Una **intranet** es un conjunto de recursos y servicios de red destinados al uso interno de una organización.

Puede incluir, por ejemplo:

- documentación interna;
- aplicaciones de gestión;
- servidores de archivos;
- páginas web internas.

### Extranet

Una **extranet** permite ofrecer determinados recursos internos a usuarios externos autorizados, como proveedores, colaboradores o clientes.

### Internet

Internet conecta redes de muy diferentes organizaciones a escala mundial.

---

# 3. Cliente-servidor y P2P

Además de clasificar una red por alcance o por medio, podemos observar cómo se organizan los servicios entre los equipos.

## 3.1. Cliente

Un **cliente** es un dispositivo o programa que solicita un servicio o recurso.

Por ejemplo:

- un navegador que solicita una página;
- un PC que abre un archivo almacenado en un servidor;
- un equipo que envía un documento a una impresora de red;
- una aplicación que consulta información en otro sistema.

La palabra *cliente* describe el papel realizado durante una comunicación. No identifica necesariamente un tipo concreto de ordenador.

## 3.2. Servidor

Un **servidor** es un dispositivo o programa que ofrece un servicio o recurso a otros sistemas.

Puede proporcionar:

- archivos;
- páginas web;
- impresión;
- autenticación;
- almacenamiento;
- aplicaciones;
- otros servicios de red.

En muchas organizaciones existen equipos preparados específicamente para prestar servicios de forma continua, pero lo importante es distinguir la **función** de servidor.

Una comunicación cliente-servidor puede representarse de forma sencilla:

```text
CLIENTE  ─── solicitud ───>  SERVIDOR
CLIENTE  <── respuesta ────  SERVIDOR
```

## 3.3. Arquitectura cliente-servidor

En una arquitectura **cliente-servidor**, determinados sistemas ofrecen servicios y otros los solicitan.

Entre sus ventajas habituales se encuentran:

- administración más centralizada;
- mayor facilidad para organizar recursos;
- control de acceso más coherente;
- mejor capacidad para gestionar un número elevado de usuarios;
- ubicación conocida de los servicios principales.

También implica necesidades adicionales:

- administración de los servidores;
- mantenimiento;
- seguridad;
- planificación de la disponibilidad;
- dependencia de determinados servicios centrales.

El fallo de un servidor no implica necesariamente que toda la red deje de funcionar. Dependerá del servicio que prestaba y del diseño de la infraestructura.

## 3.4. P2P

**P2P** significa *peer-to-peer*, es decir, comunicación **entre iguales**.

En este modelo los equipos pueden compartir recursos directamente sin depender necesariamente de un servidor dedicado.

```text
PC-A  <──── recurso compartido ────>  PC-B
```

Un mismo equipo puede solicitar un recurso en una comunicación y ofrecer otro en una comunicación diferente.

Por ello:

> cliente y servidor son papeles dentro de un servicio, no categorías permanentes de una máquina.

P2P puede resultar útil para necesidades pequeñas o temporales, pero su administración se complica cuando aumentan el número de equipos y los recursos compartidos.

## 3.5. Redes con modelos combinados

Una red real puede utilizar ambos modelos.

Por ejemplo, en un centro educativo:

- el alumnado puede acceder a documentos almacenados en un servidor;
- los usuarios pueden autenticarse contra servicios centralizados;
- dos equipos pueden compartir de forma puntual un recurso directamente.

La red no necesita encajar de forma absoluta en una única categoría.

---

# 4. Elementos de una red local

## 4.1. Dispositivos finales

Los **dispositivos finales** son los extremos en los que se origina o termina una comunicación.

También reciben con frecuencia el nombre de **hosts**.

Son ejemplos:

- ordenadores;
- portátiles;
- smartphones;
- tablets;
- impresoras de red;
- servidores;
- cámaras IP;
- teléfonos IP;
- determinados dispositivos IoT.

Un dispositivo final puede:

- generar datos;
- recibirlos;
- utilizar servicios;
- ofrecer servicios;
- almacenar información.

Un servidor sigue siendo un dispositivo final desde el punto de vista de la infraestructura de comunicación: constituye uno de los extremos en los que termina u origina información.

## 4.2. Interfaces de red

Para participar en una red, un dispositivo necesita al menos una **interfaz de red**.

La interfaz es el punto mediante el que el dispositivo se conecta a una red.

Puede ser:

- Ethernet;
- Wi-Fi;
- virtual;
- de otras tecnologías.

Un mismo dispositivo puede tener varias interfaces.

```text
PORTÁTIL
├── interfaz Ethernet
└── interfaz Wi-Fi
```

Cada interfaz puede participar en una conexión diferente y disponer de sus propios identificadores.

## 4.3. Dispositivos intermedios

Los **dispositivos intermedios** forman parte de la infraestructura que conecta los extremos y permite que la información pueda circular.

Entre los más importantes para una LAN se encuentran:

- switch;
- router;
- punto de acceso.

### Diferencia general

| Tipo | Papel principal |
|---|---|
| Dispositivo final | Origina, recibe, utiliza u ofrece información o servicios |
| Dispositivo intermedio | Conecta dispositivos o redes y permite que la comunicación circule |

Un mismo equipo físico puede integrar varias funciones. Las cajas utilizadas habitualmente en viviendas, por ejemplo, pueden incorporar funciones de router, switch y punto de acceso.

---

# 5. Switch, router y punto de acceso

## 5.1. Switch

Un **switch** es el dispositivo central más habitual de una LAN Ethernet cableada.

Su función general es **interconectar dispositivos dentro de la red local**.

```text
PC-01 ──┐
PC-02 ──┼── SWITCH
PC-03 ──┤
PRN-01 ─┘
```

Cada conexión utiliza un puerto del switch.

En esta primera aproximación es suficiente comprender que el switch recibe información y la reenvía dentro de la red local hacia el lugar adecuado. El funcionamiento interno detallado de la conmutación se estudiará posteriormente.

Un switch no proporciona por sí solo conexión con Internet. Puede existir una LAN completamente funcional formada por varios equipos y un switch sin conexión con redes externas.

## 5.2. Router

Un **router** comunica **redes diferentes**.

En un escenario sencillo:

```text
LAN ─── ROUTER ─── OTRA RED
```

El router permite que la información pueda pasar desde una red hacia otra.

En redes domésticas suele hablarse de “el router” para referirse a una caja que en realidad integra varias funciones. El trabajo específico de routing consiste en comunicar redes distintas.

## 5.3. Punto de acceso

Un **punto de acceso** o **AP** (*Access Point*) permite incorporar dispositivos inalámbricos a una red local.

```text
PORTÁTIL )))
MÓVIL    ))) AP ─── LAN
TABLET   )))
```

El AP suele estar conectado a la infraestructura cableada y proporciona acceso inalámbrico a los clientes.

Un punto de acceso no es sinónimo de Internet. Puede proporcionar acceso Wi-Fi a una LAN aunque esa LAN no tenga conexión con redes externas.

## 5.4. Funciones diferenciadas

| Dispositivo | Función principal |
|---|---|
| **Switch** | Interconectar dispositivos dentro de una LAN |
| **Router** | Comunicar redes diferentes |
| **AP** | Incorporar clientes inalámbricos a una LAN |

La selección del dispositivo depende de la necesidad que se quiera resolver.

---

# 6. Topologías de red

## 6.1. Qué es una topología

La **topología** describe cómo se organizan los elementos de una red.

Puede analizarse desde dos perspectivas principales:

- **topología física**;
- **topología lógica**.

## 6.2. Topología física

La **topología física** describe las conexiones reales entre dispositivos.

Permite identificar:

- qué equipo está conectado a cuál;
- qué enlaces existen;
- dónde se encuentra un elemento central;
- de qué equipo o enlace depende físicamente una zona;
- qué medio se utiliza, si el plano incluye ese nivel de detalle.

Ejemplo:

```text
PC-A ─────┐
PC-B ─────┼── SWITCH
PC-C ─────┘
```

El esquema indica que los tres equipos se conectan físicamente a un elemento central.

## 6.3. Topología lógica

La **topología lógica** se centra en la forma en que se organiza la comunicación desde el punto de vista funcional.

La organización física y la lógica no tienen por qué ser exactamente la misma descripción.

La configuración de una red puede modificar determinadas relaciones lógicas sin necesidad de cambiar físicamente todos los cables.

En esta unidad interesa principalmente reconocer la diferencia entre ambas perspectivas. Los mecanismos concretos que modifican la organización lógica se estudiarán más adelante.

## 6.4. Topología en estrella

En una **estrella**, cada dispositivo dispone de un enlace hacia un elemento central.

En una LAN actual ese elemento suele ser un switch.

```text
           PC-A
            │
PC-B ──── SWITCH ──── PC-C
            │
         PRN-01
```

Características principales:

- cada extremo utiliza su propio enlace hacia el centro;
- un fallo en el cable de un equipo suele afectar únicamente a ese equipo;
- el dispositivo central constituye un punto crítico;
- resulta sencilla de ampliar, entender y documentar.

Por estas razones es la topología física habitual en muchas LAN Ethernet actuales.

## 6.5. Topología en bus

En una **topología en bus**, varios dispositivos comparten un mismo medio principal.

Representación simplificada:

```text
PC-A ───── PC-B ───── PC-C ───── PC-D
            medio compartido
```

Fue importante históricamente en determinadas redes Ethernet basadas en cable coaxial.

Sus principales limitaciones son:

- muchos equipos dependen del mismo medio;
- un problema importante en ese medio puede afectar a gran parte de la red;
- la localización de fallos puede resultar más compleja.

No es la topología física habitual de las LAN Ethernet cableadas actuales, pero sigue siendo útil para comprender la evolución de las redes y el concepto de medio compartido.

## 6.6. Topología en anillo

En una **topología en anillo**, los nodos se organizan formando un circuito.

```text
A ─── B
|     |
D ─── C
```

Cada nodo queda relacionado con sus vecinos dentro del recorrido.

Esta topología tiene importancia histórica y conceptual. Su comportamiento depende de la tecnología concreta utilizada y de cómo se gestione el anillo.

## 6.7. Topología en árbol o estrella extendida

Una **topología en árbol** puede entenderse como varias estrellas conectadas por niveles.

```text
                 SW-PRINCIPAL
                /      |      \
             SW-A     SW-B     SW-C
            / | \     /|\      /|\
           PC PC PC  PC PC PC  PC PC PC
```

Es habitual utilizar estructuras de este tipo en:

- centros educativos;
- edificios con varias plantas;
- oficinas con distintas zonas;
- redes que deben crecer de forma ordenada.

Permite organizar la infraestructura jerárquicamente, aunque los equipos situados en niveles superiores pueden convertirse en puntos críticos para varias ramas.

## 6.8. Topología en malla

En una **malla** existen varios caminos entre determinados nodos.

El objetivo principal es proporcionar **redundancia**, es decir, disponer de enlaces o caminos alternativos para reducir el impacto de determinados fallos.

### Malla total

En una malla total todos los nodos se conectan directamente entre sí.

Proporciona una gran cantidad de caminos, pero el número de enlaces aumenta rápidamente conforme crece la red.

### Malla parcial

En una malla parcial solo determinados nodos cuentan con varios caminos.

Es más habitual cuando se desea mejorar la continuidad sin multiplicar innecesariamente el coste y la complejidad.

## 6.9. Topología híbrida

Una red **híbrida** combina varias topologías.

Por ejemplo:

- estrella dentro de las aulas;
- árbol entre distintas zonas o plantas;
- malla parcial en una parte crítica de la infraestructura.

No existe contradicción en describir una red de distintas maneras si se especifica qué parte se está analizando.

## 6.10. Comparación general

| Topología | Idea principal | Situación habitual |
|---|---|---|
| Estrella | Extremos conectados a un centro | LAN Ethernet de aula u oficina |
| Bus | Medio principal compartido | Importancia histórica |
| Anillo | Nodos formando un circuito | Importancia histórica y conceptual |
| Árbol | Varias estrellas organizadas jerárquicamente | Edificios y redes por zonas |
| Malla | Varios caminos entre nodos | Infraestructuras con necesidades de redundancia |
| Híbrida | Combinación de varias topologías | Redes reales de tamaño medio o grande |

---

# 7. Medios de transmisión

Un **medio de transmisión** es el canal utilizado para transportar las señales entre los dispositivos.

En esta unidad se distinguen tres grandes familias:

- cobre;
- fibra óptica;
- radio.

El estudio detallado de cables, conectores, categorías, instalación y certificación se desarrollará posteriormente.

## 7.1. Cobre

Los enlaces de cobre transportan información mediante **señales eléctricas**.

En muchas LAN se utilizan cables formados por pares de conductores trenzados para conectar:

- equipos de usuario;
- impresoras;
- switches;
- routers;
- otros dispositivos de red.

Ventajas generales:

- tecnología muy extendida;
- coste razonable;
- instalación habitual en aulas y oficinas;
- adecuada para muchos enlaces locales.

Limitaciones generales:

- la señal puede verse afectada por interferencias;
- existe una distancia máxima práctica para cada tecnología;
- requiere desplegar físicamente el cable.

## 7.2. Fibra óptica

La **fibra óptica** transporta información mediante luz.

Ventajas generales:

- permite enlaces de gran capacidad;
- resulta adecuada para distancias superiores a las habituales del cobre;
- no se ve afectada por interferencias electromagnéticas de la misma forma que los conductores eléctricos.

Limitaciones generales:

- requiere componentes y procedimientos específicos;
- su manipulación e instalación necesitan mayor especialización.

## 7.3. Radio

Las comunicaciones inalámbricas utilizan **ondas electromagnéticas**.

Wi-Fi es una tecnología habitual de red local que utiliza radio para conectar dispositivos sin un cable hasta cada cliente.

Ventajas generales:

- movilidad;
- flexibilidad;
- facilidad para incorporar dispositivos portátiles;
- menor necesidad de llevar un cable a cada posición.

Limitaciones generales:

- el medio es compartido;
- la cobertura depende del entorno;
- pueden aparecer interferencias;
- paredes, distancia y otros obstáculos pueden afectar a la señal.

## 7.4. Una LAN puede combinar medios

Las redes reales suelen combinar varias tecnologías.

Ejemplo:

```text
PC fijo ───── cobre ─────┐
                         │
Servidor ───── cobre ─── SWITCH ─── enlace hacia otras zonas
                         │
                       AP-01
                      )))  )))
                  portátil móvil
```

Los clientes inalámbricos utilizan radio hacia el AP, mientras que el AP puede estar conectado mediante cable a la infraestructura de la LAN.

## 7.5. Medio y tecnología no son lo mismo

Conviene diferenciar ambos conceptos:

- **cobre, fibra y radio** describen medios de transmisión;
- **Ethernet** es una familia de tecnologías y reglas utilizadas ampliamente en redes locales;
- **Wi-Fi** es una familia de tecnologías inalámbricas que utiliza radio.

Por tanto, decir que un dispositivo utiliza Wi-Fi aporta información sobre la tecnología de acceso; decir que utiliza radio identifica el medio físico por el que se transmiten las señales.

---

# 8. Comunicación, protocolos y estándares

## 8.1. Elementos básicos de una comunicación

Para que exista una comunicación pueden identificarse varios elementos:

| Elemento | Función |
|---|---|
| **Emisor** | Origina la información |
| **Receptor** | Recibe la información |
| **Mensaje** | Información que se intercambia |
| **Medio** | Transporta la señal |
| **Reglas** | Determinan cómo se organiza e interpreta la comunicación |

Una conexión física no garantiza por sí sola que dos sistemas puedan comunicarse correctamente.

## 8.2. Qué es un protocolo

Un **protocolo de red** es un conjunto de reglas utilizadas para que dos o más sistemas puedan comunicarse de forma compatible.

Estas reglas pueden establecer, entre otros aspectos:

- cómo se organiza la información;
- cómo se identifica el origen y el destino;
- cómo se envían los datos;
- cómo se interpretan;
- cómo se detectan determinadas situaciones durante la comunicación.

Los protocolos no son el medio de transmisión.

```text
MEDIO       → por dónde viajan las señales
PROTOCOLOS  → cómo se organiza e interpreta la comunicación
```

## 8.3. Los protocolos trabajan conjuntamente

Una comunicación moderna no suele depender de un único protocolo.

Diferentes reglas se ocupan de funciones distintas. Al utilizar un servicio de red pueden intervenir mecanismos relacionados con:

- el acceso al medio;
- la comunicación local;
- el direccionamiento;
- el transporte;
- el servicio utilizado por la aplicación.

Esta separación de funciones permite construir sistemas complejos a partir de componentes especializados.

## 8.4. Algunos protocolos y familias que aparecerán durante el módulo

En esta unidad solo es necesario reconocer su función general.

| Protocolo o familia | Función general |
|---|---|
| **Ethernet** | Tecnologías y reglas ampliamente utilizadas en LAN cableadas |
| **IP** | Direccionamiento lógico y comunicación entre redes |
| **TCP** | Transporte de información con mecanismos de control |
| **UDP** | Transporte más sencillo, con menos mecanismos de control |
| **HTTP / HTTPS** | Comunicación relacionada con servicios web |
| **DNS** | Relación entre nombres y direcciones |
| **DHCP** | Obtención automática de parámetros de red |
| **ICMP** | Mensajes de control y comprobación |

No es necesario estudiar todavía sus cabeceras, puertos, mensajes internos o configuración detallada.

## 8.5. Estándares e interoperabilidad

Una red puede incluir dispositivos de diferentes fabricantes.

Los **estándares** permiten que esos equipos utilicen especificaciones comunes y puedan trabajar conjuntamente.

La **interoperabilidad** es la capacidad de sistemas diferentes para colaborar siguiendo reglas compatibles.

Los estándares facilitan:

- conexión entre equipos de distintos fabricantes;
- sustitución de componentes;
- ampliación de infraestructuras;
- creación de redes compatibles;
- desarrollo de tecnologías comunes.

---

# 9. Modelos OSI y TCP/IP

Las comunicaciones de red son demasiado complejas para estudiarlas como una única operación.

Los modelos por capas permiten dividir el problema y asignar diferentes funciones a distintos niveles.

## 9.1. Para qué sirve trabajar por capas

Separar la comunicación en capas ayuda a:

- comprender funciones diferentes;
- utilizar estándares;
- sustituir tecnologías sin rediseñar todo el sistema;
- ordenar conceptos;
- localizar problemas de forma más sistemática.

Las capas deben entenderse como un **modelo para razonar**, no como una lista de nombres aislados.

## 9.2. Modelo OSI

**OSI** significa *Open Systems Interconnection*.

Es un modelo de referencia formado por siete capas:

```text
7  Aplicación
6  Presentación
5  Sesión
4  Transporte
3  Red
2  Enlace de datos
1  Física
```

### Función general de cada capa

| Capa | Nombre | Función general |
|---:|---|---|
| 7 | Aplicación | Servicios de red utilizados por las aplicaciones |
| 6 | Presentación | Representación y transformación de la información |
| 5 | Sesión | Organización de sesiones de comunicación |
| 4 | Transporte | Comunicación entre aplicaciones |
| 3 | Red | Direccionamiento lógico y comunicación entre redes |
| 2 | Enlace de datos | Comunicación a través del enlace local |
| 1 | Física | Transmisión de bits mediante señales |

En este módulo tendrán especial importancia las capas inferiores y medias, porque permiten relacionar conceptos como:

- medios físicos;
- Ethernet;
- direcciones MAC;
- direcciones IP;
- transporte;
- servicios de aplicación.

### Relación inicial entre conceptos y capas

| Concepto | Capa de referencia |
|---|---|
| Cable de cobre, fibra, radio, señal | 1 · Física |
| Ethernet y dirección MAC | 2 · Enlace de datos |
| Dirección IP y routing | 3 · Red |
| TCP y UDP | 4 · Transporte |
| Servicios como HTTP o DNS | 7 · Aplicación |

Esta tabla es una primera aproximación para situar conceptos.

## 9.3. Modelo TCP/IP

La familia TCP/IP constituye la base de la comunicación utilizada en Internet y en la mayoría de redes actuales.

En estos apuntes se utilizará una representación de cuatro capas:

```text
APLICACIÓN
TRANSPORTE
INTERNET
ACCESO A RED
```

## 9.4. Relación sencilla entre OSI y TCP/IP

| Modelo OSI | Modelo TCP/IP |
|---|---|
| Aplicación + Presentación + Sesión | Aplicación |
| Transporte | Transporte |
| Red | Internet |
| Enlace + Física | Acceso a red |

OSI separa las funciones con más detalle y resulta muy útil para estudiar y razonar.

TCP/IP agrupa algunas de esas funciones y se aproxima a la organización práctica de los protocolos utilizados en las redes actuales.

No son modelos rivales: pueden utilizarse con objetivos diferentes.

## 9.5. Recorrido conceptual de la información

Cuando una aplicación envía información, diferentes niveles participan antes de que la señal llegue al medio.

De forma simplificada:

```text
APLICACIÓN
    ↓
TRANSPORTE
    ↓
RED / INTERNET
    ↓
ENLACE / ACCESO A RED
    ↓
FÍSICA
```

En el receptor se produce el recorrido correspondiente en sentido inverso.

En unidades posteriores se estudiará con mayor detalle cómo cada nivel añade y procesa información.

---

# 10. Interfaces e identificadores

Un equipo de red puede tener diferentes datos asociados a su identidad y a sus conexiones.

No deben confundirse:

- hostname;
- interfaz;
- dirección MAC;
- dirección IP.

## 10.1. Interfaz

Una **interfaz de red** es un punto de conexión entre un dispositivo y una red.

Un equipo puede disponer de varias:

```text
PORTÁTIL
├── Ethernet
└── Wi-Fi
```

En sistemas GNU/Linux pueden aparecer nombres como:

```text
enp0s3
wlp2s0
lo
```

Los nombres concretos dependen del sistema y del hardware.

`lo` representa una interfaz especial denominada **loopback** y no corresponde a un cable físico.

## 10.2. Dirección MAC

Una **dirección MAC** (*Media Access Control*) es un identificador asociado a una interfaz en el nivel de enlace.

Un formato habitual en Ethernet es:

```text
52:54:00:12:34:56
```

Es más preciso hablar de:

> la dirección MAC de una interfaz

que de:

> la MAC del ordenador

porque un equipo puede disponer de varias interfaces y cada una puede tener su propia MAC.

Las direcciones MAC suelen estar asignadas a la interfaz, pero pueden modificarse o aleatorizarse mediante software en determinadas situaciones. Por ello no debe considerarse correcto afirmar de forma absoluta que una MAC nunca cambia.

## 10.3. Dirección IP

Una **dirección IP** es una dirección lógica utilizada en una red basada en IP.

Ejemplo de IPv4:

```text
192.168.1.25
```

Una dirección IP se asocia a una interfaz dentro de un contexto de red.

Puede cambiar cuando:

- el dispositivo se conecta a otra red;
- se modifica su configuración;
- recibe parámetros diferentes de forma automática.

En esta unidad solo es necesario reconocerla y diferenciarla de otros identificadores. El direccionamiento IPv4 e IPv6 se estudiará con profundidad posteriormente.

## 10.4. Hostname

El **hostname** es el nombre asignado a un equipo.

Ejemplos:

```text
PC-AULA-07
SRV-CENTRO
PC-ADM01
```

El hostname facilita la identificación humana del dispositivo.

No es una dirección MAC ni una dirección IP.

## 10.5. Comparación

| Elemento | Qué representa | Ejemplo |
|---|---|---|
| **Hostname** | Nombre del equipo | `PC-AULA-07` |
| **Interfaz** | Punto de conexión con una red | `enp0s3` |
| **MAC** | Identificador de una interfaz en el enlace | `A4:5E:60:12:34:56` |
| **IP** | Dirección lógica de una interfaz en una red | `192.168.1.27` |

## 10.6. Un equipo puede tener varios identificadores

Ejemplo conceptual:

```text
Hostname: PORT-01

Ethernet
  interfaz: enp3s0
  MAC:      8C:85:90:AA:10:01
  IP:       192.168.1.40

Wi-Fi
  interfaz: wlp2s0
  MAC:      8C:85:90:BB:20:02
  IP:       192.168.1.88
```

El equipo tiene un nombre, pero varias interfaces.

Cada interfaz puede disponer de:

- su propia MAC;
- su propia configuración IP.

## 10.7. Observación básica en GNU/Linux

En Debian y otros sistemas GNU/Linux pueden consultarse estos datos mediante herramientas de línea de comandos.

### Nombre del equipo

```bash
hostname
```

### Interfaces y direcciones MAC

```bash
ip link
```

### Direcciones IP

```bash
ip address
```

o de forma abreviada:

```bash
ip addr
```

Estos comandos permiten observar información. Modificar la configuración requiere otras operaciones que se estudiarán cuando corresponda.

---

# 11. Representación y documentación de una LAN

Comprender una red también implica ser capaz de representarla de forma que otra persona pueda interpretarla.

## 11.1. Qué es un diagrama de red

Un **diagrama de red** es una representación técnica de dispositivos y relaciones mediante símbolos, nombres y enlaces.

Ejemplo:

```text
PC-01 ─┐
PC-02 ─┤
PC-03 ─┼── SW-AULA ─── R-CENTRO ─── otra red
PRN-01 ┤
SRV-01 ┘
```

Este esquema permite reconocer:

- los dispositivos existentes;
- el switch;
- la topología general;
- la relación de los equipos con el switch;
- el router que conecta con otra red;
- los nombres utilizados para identificar los elementos.

## 11.2. Mapa físico

Un **mapa físico** se centra en la ubicación y las conexiones reales.

Puede mostrar:

- salas o zonas;
- equipos;
- switches;
- puntos de acceso;
- tomas;
- recorridos de cable;
- enlaces entre dispositivos.

Su finalidad es reflejar cómo está desplegada físicamente la infraestructura.

## 11.3. Mapa lógico

Un **mapa lógico** representa relaciones relevantes desde el punto de vista de la comunicación o de la organización funcional.

Puede incorporar, según el nivel de conocimientos disponible:

- redes;
- agrupaciones lógicas;
- direccionamiento;
- VLAN;
- rutas;
- servicios;
- otras relaciones lógicas.

En esta primera unidad los diagramas se centran sobre todo en la estructura general y en la correspondencia entre los dispositivos y sus conexiones.

## 11.4. Información que debe aparecer

Un diagrama debe incluir la información necesaria para comprender la red, evitando sobrecargarlo.

### Dispositivos

Deben aparecer los elementos relevantes:

- PCs;
- servidores;
- impresoras;
- switches;
- routers;
- puntos de acceso;
- otros dispositivos necesarios.

### Nombres

Los dispositivos deben tener identificadores claros.

Es preferible:

```text
PC-01
PC-02
SW-AULA
R-CENTRO
AP-01
```

a utilizar varios elementos llamados simplemente `PC`, `switch` o `router`.

### Enlaces

Las líneas deben permitir saber qué dispositivos están conectados.

Si se representan distintos medios, la simbología debe ser comprensible.

Por ejemplo:

```text
────────   enlace cableado
- - - -    enlace inalámbrico
```

La representación debe ir acompañada de una leyenda cuando sea necesaria.

### Zonas

En determinados diagramas resulta útil agrupar los elementos por ubicación o función:

```text
AULA
ADMINISTRACIÓN
ARMARIO DE COMUNICACIONES
OTRA RED
```

### Datos técnicos

Solo deben incluirse cuando aporten información relevante.

En una representación inicial pueden aparecer:

- nombre;
- tipo de dispositivo;
- medio;
- relación entre dispositivos.

En diagramas más avanzados podrán incorporarse otros datos cuando se hayan estudiado.

## 11.5. Legibilidad

Un buen diagrama técnico debe priorizar:

> claridad → relación → información → legibilidad

Para ello conviene:

- evitar cruces de líneas innecesarios;
- utilizar nombres coherentes;
- mantener una simbología consistente;
- ordenar visualmente los dispositivos;
- diferenciar zonas cuando aporte información;
- añadir una leyenda si existen distintos tipos de enlaces;
- evitar elementos decorativos que no tengan significado técnico.

Un diagrama de red no es una fotografía de la sala. No necesita representar mesas, personas, ventanas o las carcasas exactas de los dispositivos.

## 11.6. Herramientas de representación

Una red puede documentarse mediante:

- Cisco Packet Tracer;
- diagrams.net;
- otras herramientas de diagramación equivalentes.

**Cisco Packet Tracer** es un simulador de redes que permite representar dispositivos, conexiones y topologías, además de realizar posteriormente configuraciones y simulaciones.

En esta unidad debe entenderse principalmente como una herramienta para:

- representar;
- conectar;
- identificar dispositivos;
- observar la estructura;
- documentar una red.

Construir una topología visualmente correcta no significa que todos los dispositivos estén ya configurados para comunicarse. La representación física y la configuración lógica son aspectos diferentes.

---

# 12. Visión conjunta de una LAN

Los conceptos de esta unidad se relacionan entre sí.

Una red local sencilla puede contener:

```text
                             OTRA RED
                                │
                              R-01
                                │
PC-01 ───┐                      │
PC-02 ───┤                  SW-CENTRAL
PRN-01 ──┼── SW-AULA ──────────┤
PC-03 ───┘                      ├── SRV-CENTRO
                                │
                              AP-01
                            )))    )))
                         PORT-01  PORT-02
```

En esta representación pueden identificarse varias ideas de la unidad:

- constituye una **LAN** porque trabaja en un ámbito local;
- es una red **mixta** porque combina enlaces cableados e inalámbricos;
- los PCs, la impresora, el servidor y los portátiles son **dispositivos finales**;
- los switches, el router y el AP son **dispositivos intermedios**;
- los equipos cableados pueden organizarse en **estrella** alrededor de un switch;
- varias estrellas conectadas jerárquicamente pueden formar una estructura de **árbol o estrella extendida**;
- el **switch** interconecta dispositivos dentro de la LAN;
- el **router** comunica la LAN con otra red;
- el **AP** incorpora clientes inalámbricos;
- los enlaces cableados pueden utilizar cobre o, según el diseño, fibra;
- los clientes Wi-Fi utilizan radio como medio de acceso;
- la comunicación necesita **protocolos**, no únicamente conexiones físicas;
- OSI y TCP/IP permiten ordenar las funciones que intervienen;
- cada dispositivo puede tener nombre, interfaces y distintos identificadores;
- un diagrama claro permite documentar la infraestructura para que otra persona pueda interpretarla.

Comprender una LAN implica relacionar todos estos elementos y reconocer la función que cumple cada uno dentro del conjunto.
