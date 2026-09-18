---
title: "U03 — Infraestructura física y despliegue del cableado de red"
---

**Módulo:** Redes Locales  
**Resultado de aprendizaje:** RA2 — Despliega el cableado de una red local interpretando especificaciones y aplicando técnicas de montaje.

---

# 1. La infraestructura física de una red local

Una red local necesita una infraestructura física capaz de transportar información entre dispositivos.

Aunque en un esquema lógico una conexión pueda representarse con una simple línea:

```text
PC ───────── SWITCH
```

en una instalación real intervienen:

- interfaces de red;
- señales físicas;
- medios de transmisión;
- conectores;
- latiguillos;
- tomas;
- cableado fijo;
- paneles de parcheo;
- armarios de comunicaciones;
- canalizaciones;
- herramientas;
- sistemas de etiquetado;
- instrumentos de comprobación.

El despliegue físico de una LAN consiste en convertir unas necesidades de comunicación en una instalación:

- adecuada al entorno;
- organizada;
- segura;
- comprobable;
- mantenible;
- documentada.

La idea central de esta unidad puede expresarse así:

```text
COMPRENDER
    ↓
SELECCIONAR
    ↓
DISEÑAR
    ↓
DESPLEGAR
    ↓
TERMINAR
    ↓
COMPROBAR
    ↓
DIAGNOSTICAR
    ↓
DOCUMENTAR
```

Una instalación no está correctamente resuelta únicamente porque funcione en un momento determinado. También debe ser comprensible y mantenible por otras personas.

---

# 2. Señal, medio y enlace

Para que la información pueda desplazarse entre dos dispositivos debe convertirse en una señal física.

## 2.1. Señal

Una **señal** es la representación física de la información durante la transmisión.

Según el medio utilizado, puede adoptar distintas formas:

| Medio | Forma física de la señal |
|---|---|
| Cobre | Señales eléctricas |
| Fibra óptica | Luz |
| Radio | Ondas electromagnéticas |

La información digital que maneja un equipo no “viaja” directamente. Necesita ser representada mediante una señal compatible con el medio.

---

## 2.2. Medio de transmisión

El **medio** es el soporte por el que se propaga la señal.

Las tres familias principales utilizadas en esta unidad son:

- cobre;
- fibra óptica;
- radio.

Los medios de cobre y fibra son **guiados**, porque la señal se propaga siguiendo un soporte físico.

La radio es un medio **no guiado**, porque la propagación se realiza por el espacio mediante ondas electromagnéticas.

---

## 2.3. Enlace

Un **enlace** es la comunicación física establecida entre dos puntos.

Por ejemplo:

```text
INTERFAZ DEL PC
      ↕
CABLE DE COBRE
      ↕
PUERTO DEL SWITCH
```

El enlace no es únicamente el cable: incluye los extremos entre los que se establece la comunicación y las condiciones físicas necesarias para que la señal pueda propagarse.

---

# 3. Capacidad, ancho de banda y velocidad útil

En redes aparecen distintas formas de expresar capacidad y rendimiento.

## 3.1. Capacidad nominal

Una interfaz o tecnología puede anunciar una determinada capacidad nominal.

Por ejemplo:

```text
1 Gbit/s
```

Ese dato expresa una capacidad asociada al enlace o a la tecnología.

No significa necesariamente que una aplicación vaya a recibir exactamente esa cantidad de datos útiles cada segundo.

---

## 3.2. Velocidad útil o throughput

El **throughput** es la cantidad de información útil que realmente se consigue transferir.

Puede ser inferior a la capacidad nominal por distintos motivos:

- protocolos utilizados;
- carga de la red;
- errores y retransmisiones;
- limitaciones de los equipos;
- características del medio;
- perturbaciones;
- condiciones del entorno.

Por tanto:

```text
CAPACIDAD NOMINAL
        ≠
VELOCIDAD ÚTIL GARANTIZADA
```

---

## 3.3. Ancho de banda

En sentido general, el término **ancho de banda** se utiliza para expresar la capacidad de un sistema de transmisión.

En el trabajo inicial con redes conviene distinguir:

- capacidad teórica o nominal;
- rendimiento útil realmente obtenido.

La terminología concreta puede variar según el contexto, pero la idea importante es que una cifra anunciada por una tecnología no equivale automáticamente al rendimiento real de una aplicación.

---

# 4. Tipos de transmisión según la dirección de la comunicación

La transmisión puede clasificarse según la dirección en la que circula la información.

## 4.1. Simplex

La comunicación se produce en un único sentido.

```text
A ─────────▶ B
```

Un extremo transmite y el otro recibe.

---

## 4.2. Semidúplex

La comunicación puede producirse en ambos sentidos, pero no simultáneamente.

```text
A ◀────────▶ B
   uno cada vez
```

También se utiliza el término **half-duplex**.

---

## 4.3. Dúplex completo

La comunicación puede producirse simultáneamente en ambos sentidos.

```text
A ◀════════▶ B
```

También se utiliza el término **full-duplex**.

En redes Ethernet modernas conmutadas, las conexiones habituales entre un equipo y un switch trabajan normalmente en dúplex completo cuando las interfaces y la negociación lo permiten.

---

# 5. Perturbaciones físicas de una señal

Una señal puede deteriorarse durante la transmisión.

---

## 5.1. Atenuación

La **atenuación** es la pérdida de intensidad de una señal conforme recorre el medio.

Cuanto mayor es el recorrido, más importante resulta comprobar que la tecnología y el medio elegidos son adecuados.

La distancia forma parte del diseño de una instalación.

No puede suponerse que:

```text
si funciona a corta distancia
        ↓
funcionará exactamente igual
a cualquier distancia
```

---

## 5.2. Interferencia

Una **interferencia** es una perturbación externa que afecta a la señal.

En cableado de cobre pueden existir entornos con:

- instalaciones eléctricas;
- motores;
- maquinaria;
- otros elementos capaces de introducir perturbaciones.

Una instalación correctamente diseñada debe considerar el entorno antes de decidir el recorrido y el medio.

---

## 5.3. Diafonía

La **diafonía** es la interferencia producida entre conductores o pares próximos.

En el cable de par trenzado, la propia estructura de los pares ayuda a reducir este problema.

Por esta razón:

> el trenzado no es decorativo; forma parte del comportamiento eléctrico del medio.

Mantener los pares trenzados hasta cerca del punto de terminación forma parte de una instalación de calidad.

---

# 6. Tipos de red según la infraestructura utilizada

Desde el punto de vista del medio de acceso, una red local puede adoptar distintas formas.

---

## 6.1. LAN cableada

Los dispositivos acceden a la red mediante un medio guiado.

En una oficina o aula es habitual utilizar cable de cobre de par trenzado para puestos fijos.

Ventajas habituales:

- conexión física estable;
- infraestructura fácilmente identificable;
- buen comportamiento en puestos que no necesitan movilidad.

---

## 6.2. WLAN

Una **WLAN** es una red local que utiliza comunicación inalámbrica.

En Wi-Fi, la información se propaga mediante ondas electromagnéticas.

Su ventaja principal es la movilidad.

Su funcionamiento depende de factores como:

- distancia;
- obstáculos;
- interferencias;
- distribución del espacio;
- uso compartido del medio radioeléctrico.

---

## 6.3. Red mixta

Muchas instalaciones combinan:

- cobre para puestos fijos;
- radio para portátiles, tablets y dispositivos móviles;
- fibra para determinados enlaces entre zonas de comunicaciones.

Una red profesional no tiene por qué utilizar un único medio.

La solución debe responder a las necesidades reales de cada tramo.

---

# 7. Criterios para seleccionar un medio

No existe un medio universalmente mejor.

La selección debe realizarse a partir de requisitos.

Los principales criterios son:

1. distancia;
2. movilidad;
3. capacidad o rendimiento requerido;
4. entorno y perturbaciones;
5. coste;
6. mantenimiento.

También pueden influir:

- crecimiento previsto;
- disponibilidad de componentes;
- compatibilidad con interfaces;
- facilidad de despliegue;
- protección física;
- condiciones del edificio.

---

# 8. Cable de cobre de par trenzado

El cobre de par trenzado es uno de los medios más habituales en redes Ethernet locales.

---

## 8.1. Estructura básica

El cable utilizado habitualmente contiene:

```text
8 conductores
      ↓
4 pares
```

Cada par agrupa dos conductores trenzados.

Los grupos de color habituales son:

- azul;
- naranja;
- verde;
- marrón.

Cada par contiene normalmente:

- un conductor de color;
- un conductor blanco combinado con ese color.

---

## 8.2. Por qué se trenzan los pares

El trenzado ayuda a reducir:

- la influencia de determinadas perturbaciones externas;
- la diafonía entre pares.

Por tanto, una terminación de calidad evita destrenzar los conductores más de lo necesario.

---

# 9. Apantallamiento

No todos los cables de par trenzado tienen la misma construcción.

---

## 9.1. UTP / U-UTP

En una construcción **U/UTP** no existe apantallamiento metálico alrededor del conjunto ni alrededor de cada par.

Es una solución:

- muy habitual;
- flexible;
- relativamente sencilla;
- adecuada para muchas instalaciones LAN interiores.

El cable disponible en el centro es de esta familia, Cat6 UTP.

---

## 9.2. Soluciones apantalladas

Existen cables con elementos conductores destinados a aumentar la protección frente a determinadas perturbaciones electromagnéticas.

Su utilización puede tener sentido en determinados entornos.

Sin embargo:

- necesitan componentes compatibles;
- requieren una instalación correcta;
- pueden ser más complejos;
- no compensan un mal diseño del recorrido.

En esta unidad basta con reconocer que existen distintas construcciones y que el entorno puede influir en la elección.

---

# 10. Categorías del cableado de cobre

La **categoría** indica unas prestaciones técnicas que el componente debe cumplir.

Entre las categorías frecuentes se encuentran:

- Cat5e;
- Cat6;
- Cat6A.

---

## 10.1. Cat5e

Es muy común en instalaciones Gigabit existentes.

---

## 10.2. Cat6

Es una categoría habitual en instalaciones LAN actuales.

El material principal disponible en el centro pertenece a esta categoría.

---

## 10.3. Cat6A

Se utiliza en instalaciones con requisitos superiores y puede formar parte de sistemas preparados para 10 Gigabit cuando todo el canal es compatible.

---

## 10.4. Categoría del componente y calidad de la instalación

Una categoría superior no garantiza por sí sola una instalación mejor.

La calidad final depende también de:

- recorrido;
- estado del cable;
- terminaciones;
- conectores;
- tomas;
- paneles;
- organización;
- comprobación;
- compatibilidad entre componentes.

Por tanto:

```text
COMPONENTE CAT6A
        ≠
INSTALACIÓN COMPLETA CAT6A AUTOMÁTICAMENTE
```

La categoría de una instalación no debe deducirse únicamente de uno de sus elementos.

---

# 11. El conector modular utilizado en Ethernet sobre par trenzado

En Ethernet sobre par trenzado es habitual utilizar un conector modular de ocho posiciones conocido de forma habitual como **RJ45**.

En una terminación intervienen:

- ocho conductores;
- ocho posiciones;
- una orientación concreta;
- un orden de colores;
- una zona de inserción;
- una zona de sujeción mecánica de la cubierta.

La terminación eléctrica y la terminación mecánica deben ser correctas.

Un conector con los colores aparentemente ordenados puede seguir siendo defectuoso si:

- un conductor no llega correctamente;
- la cubierta queda fuera de la zona de sujeción;
- existe daño visible;
- el orden no corresponde a la norma prevista.

---

# 12. Fibra óptica

La fibra óptica transmite información mediante luz.

---

## 12.1. Estructura básica

Una fibra puede entenderse mediante tres partes generales:

### Núcleo

Zona por la que se guía la luz.

### Revestimiento óptico

Ayuda a mantener la propagación de la luz dentro de la fibra.

### Protección exterior

Protege mecánicamente el conjunto.

---

## 12.2. Ventajas generales

La fibra resulta especialmente interesante cuando se necesita:

- mayor distancia;
- inmunidad frente a perturbaciones electromagnéticas;
- elevada capacidad;
- interconexión entre zonas de comunicaciones.

---

## 12.3. Limitaciones generales

La fibra también presenta exigencias:

- componentes específicos;
- conectores ópticos;
- transceptores compatibles;
- técnicas de instalación diferentes;
- manipulación más especializada.

Por tanto:

> fibra no significa automáticamente “mejor”.

La elección debe responder al escenario.

---

# 13. Fibra multimodo y monomodo

A nivel introductorio se distinguen dos grandes familias.

---

## 13.1. Fibra multimodo

Se utiliza habitualmente en determinados enlaces de distancias cortas o medias.

---

## 13.2. Fibra monomodo

Se asocia especialmente a enlaces de mayores distancias.

No existe una única “distancia máxima de la fibra”.

La distancia real depende de:

- tecnología;
- transceptores;
- longitud de onda;
- componentes;
- condiciones del enlace.

---

# 14. Conectores y transceptores de fibra

Entre los conectores ópticos que pueden encontrarse aparecen:

- LC;
- SC.

También son frecuentes módulos intercambiables como los **SFP**.

Un SFP permite que un equipo compatible utilice un determinado tipo de enlace físico mediante el transceptor adecuado.

La fibra se trabaja en esta unidad principalmente desde el punto de vista de:

- reconocimiento;
- selección;
- comprensión del enlace;
- integración en una infraestructura.

---

# 15. Radio y redes inalámbricas

En una red inalámbrica, la información se transporta mediante ondas electromagnéticas.

El aire no es “ausencia de medio”. Es el espacio en el que se propaga la señal.

---

## 15.1. Cobertura

La **cobertura** es la zona en la que puede recibirse una señal utilizable.

No depende únicamente de la potencia del dispositivo.

También influyen:

- distancia;
- paredes;
- mobiliario;
- distribución de espacios;
- materiales;
- interferencias.

---

## 15.2. Obstáculos y atenuación

Las ondas pueden perder intensidad al atravesar obstáculos.

Por tanto, un punto de acceso no ofrece necesariamente las mismas condiciones en cualquier lugar de un edificio.

---

## 15.3. Medio compartido

El medio radioeléctrico es compartido.

Varios dispositivos pueden utilizar recursos de radio comunes, por lo que el rendimiento real depende también del nivel de utilización y de la competencia por esos recursos.

---

## 15.4. Banda y canal

Una **banda** es un rango de frecuencias.

Un **canal** utiliza una parte organizada de ese rango para la comunicación.

En este nivel es suficiente comprender que la planificación inalámbrica debe considerar:

- cobertura;
- interferencias;
- canales;
- obstáculos;
- densidad de dispositivos.

---

# 16. Cableado estructurado

El cableado estructurado organiza la infraestructura física para evitar instalaciones improvisadas.

La idea fundamental es separar:

- infraestructura fija;
- conexiones flexibles;
- equipos activos.

---

## 16.1. Recorrido completo desde un PC hasta el switch

Una línea típica puede representarse así:

```text
PC
 ↓
LATIGUILLO DEL USUARIO
 ↓
ROSETA / KEYSTONE
 ↓
CABLE HORIZONTAL
 ↓
PATCH PANEL
 ↓
LATIGUILLO DE RACK
 ↓
SWITCH
```

Esta secuencia constituye uno de los modelos físicos fundamentales de la unidad.

---

# 17. Latiguillo

Un **latiguillo** o *patch cord* es un cable flexible utilizado para conexiones cortas.

Se utiliza normalmente entre:

```text
PC ↔ ROSETA
```

y:

```text
PATCH PANEL ↔ SWITCH
```

Estas conexiones son flexibles porque:

- pueden cambiar;
- se sustituyen con facilidad;
- acompañan a equipos;
- no forman el tramo fijo principal del edificio.

---

# 18. Roseta, toma y keystone

La **roseta** o **toma** es el punto de conexión accesible en la zona de usuario.

Puede alojar un módulo denominado **keystone**.

El keystone RJ45 permite terminar de forma organizada el cableado horizontal.

La toma separa:

- el latiguillo manipulable del usuario;
- el cableado fijo del edificio.

La infraestructura disponible en el centro permite trabajar con keystones Cat6 UTP y adaptadores de montaje para roseta o panel.

---

# 19. Cable horizontal

El **cable horizontal** es el tramo fijo de cableado entre la zona de usuario y la zona de comunicaciones.

Su función puede representarse así:

```text
ROSETA / KEYSTONE
        ↕
CABLE HORIZONTAL
        ↕
PATCH PANEL
```

No debería rehacerse cada vez que cambia un PC o un latiguillo.

Puede discurrir por:

- paredes;
- canaletas;
- bandejas;
- tubos;
- falsos techos;
- recorridos previstos por la instalación.

---

# 20. Patch panel

El **patch panel** es un elemento pasivo utilizado para terminar y organizar líneas de cableado fijo en la zona de comunicaciones.

Puede permitir una correspondencia como:

```text
TOMA T-01 ↔ PP1-01
TOMA T-02 ↔ PP1-02
TOMA T-03 ↔ PP1-03
```

El patch panel:

- organiza terminaciones;
- facilita localización;
- mejora la documentación;
- permite cambios mediante latiguillos;
- evita manipular directamente el cable horizontal para cada modificación.

---

## 20.1. Patch panel y switch no son lo mismo

### Patch panel

Elemento pasivo.

No conmuta tráfico.

### Switch

Equipo activo.

Interconecta dispositivos de la LAN.

El recorrido habitual es:

```text
CABLE HORIZONTAL
        ↓
PATCH PANEL
        ↓
LATIGUILLO
        ↓
SWITCH
```

---

# 21. Espacios de una instalación

La infraestructura de red ocupa espacios reales.

En una instalación pueden distinguirse:

- zona de trabajo;
- recorridos del cableado;
- zonas de paso;
- canalizaciones;
- zona o cuarto de comunicaciones.

La disposición física debe facilitar:

- instalación;
- identificación;
- mantenimiento;
- ampliación;
- seguridad.

---

# 22. Zona de comunicaciones

La zona de comunicaciones concentra las líneas procedentes de diferentes puestos.

Puede contener:

- rack;
- patch panels;
- switches;
- organizadores;
- otros accesorios;
- otros equipos de red.

La idea general es:

```text
MUCHOS PUESTOS DISTRIBUIDOS
            ↓
PUNTO DE CONCENTRACIÓN ORGANIZADO
```

---

# 23. Armario rack

Un **rack** es una estructura normalizada destinada a organizar equipamiento y accesorios de comunicaciones.

El centro dispone de un armario rack mural:

```text
19 pulgadas
9U
600 × 450 mm
```

---

## 23.1. Formato de 19 pulgadas

La medida de **19 pulgadas** hace referencia al formato estándar de montaje del equipamiento compatible.

Permite instalar componentes como:

- patch panels;
- switches rackeables;
- organizadores;
- bandejas;
- otros accesorios de 19".

---

## 23.2. Unidad de rack: U

La altura útil se expresa mediante unidades **U**.

Un rack de **9U** dispone de nueve unidades verticales de montaje.

Un elemento de **1U** ocupa una unidad de altura.

Por ejemplo, un patch panel de 1U ocupa una de las posiciones verticales disponibles.

---

## 23.3. Organización de un rack

Una organización correcta busca:

- acceso claro a los elementos;
- latiguillos sin tensión innecesaria;
- puertos visibles;
- etiquetas legibles;
- posibilidad de mantenimiento;
- posibilidad de ampliación;
- recorrido ordenado del cableado.

Una instalación no debe diseñarse únicamente para “que quepa”.

Debe poder mantenerse posteriormente.

---

# 24. Canalizaciones

Una **canalización** es una solución utilizada para conducir y organizar físicamente el cableado a lo largo de un recorrido.

Puede servir para:

- definir el trazado;
- proteger el cable;
- evitar recorridos improvisados;
- separar el cableado de zonas de paso;
- mantener orden;
- facilitar futuras intervenciones.

Entre las soluciones que pueden encontrarse aparecen:

- canaletas;
- tubos;
- bandejas;
- recorridos por falso techo.

---

## 24.1. Selección de una canalización

La elección depende de:

- tipo de espacio;
- cantidad de cableado;
- protección necesaria;
- recorrido;
- accesibilidad;
- mantenimiento;
- crecimiento;
- condiciones del entorno.

Una ruta más corta no es automáticamente mejor.

Puede resultar preferible un recorrido algo más largo si:

- está protegido;
- evita zonas de paso;
- utiliza una canalización prevista;
- facilita mantenimiento;
- permite seguir la instalación.

---

## 24.2. Montaje de canalizaciones

El montaje debe realizarse respetando:

- el recorrido previsto;
- la estabilidad del soporte;
- la protección del cable;
- la accesibilidad necesaria;
- las condiciones de seguridad;
- la capacidad de la canalización;
- la posibilidad de mantenimiento.

La disponibilidad limitada de canalizaciones reales en el centro no cambia el principio técnico:

> el cableado fijo debe discurrir por una infraestructura prevista y mantenible, no de forma improvisada.

---

# 25. Lectura de planos

Un plano ayuda a relacionar:

- puestos;
- tomas;
- rack;
- recorridos;
- zonas;
- canalizaciones;
- distancias aproximadas.

Sin embargo, un plano solo permite afirmar lo que realmente contiene.

---

## 25.1. Hecho, inferencia y dato desconocido

Es importante distinguir:

### Hecho

Información expresamente indicada.

### Inferencia

Conclusión razonable obtenida de la representación.

### Dato desconocido

Información que no puede determinarse con precisión.

Un plano sin escala no permite conocer una longitud exacta.

---

## 25.2. Replanteo

El **replanteo** consiste en trasladar el diseño al espacio real antes de ejecutar la instalación.

Permite comprobar:

- recorridos posibles;
- obstáculos;
- ubicación de tomas;
- posición del rack;
- zonas de paso;
- canalizaciones existentes;
- distancias reales;
- accesibilidad.

La línea recta de un plano no representa necesariamente el recorrido real de un cable.

---

# 26. Etiquetado inicial de una instalación

Una infraestructura necesita identificadores coherentes.

Por ejemplo:

```text
A1-T01
A1-T02
A1-T03
```

puede identificar tomas de un Aula 1.

Y:

```text
PP1-01
PP1-02
PP1-03
```

puede identificar posiciones de un patch panel.

La convención concreta puede variar.

Debe ser:

- única;
- coherente;
- legible;
- documentada.

Etiquetas como:

```text
RED
CABLE
PUERTO
```

son demasiado ambiguas para una instalación con varios enlaces.

---

# 27. T568A y T568B

T568A y T568B son dos esquemas de terminación utilizados para organizar los ocho conductores del cable de par trenzado en conectores y terminaciones compatibles.

La orientación de referencia debe mantenerse constante.

Para el conector modular utilizado en las prácticas puede emplearse:

```text
clip hacia abajo
contactos hacia ti
pin 1 a la izquierda
```

---

## 27.1. T568B

| Pin | Color |
|---:|---|
| 1 | Blanco/Naranja |
| 2 | Naranja |
| 3 | Blanco/Verde |
| 4 | Azul |
| 5 | Blanco/Azul |
| 6 | Verde |
| 7 | Blanco/Marrón |
| 8 | Marrón |

Forma abreviada:

```text
BN - N - BV - A - BA - V - BM - M
```

---

## 27.2. T568A

| Pin | Color |
|---:|---|
| 1 | Blanco/Verde |
| 2 | Verde |
| 3 | Blanco/Naranja |
| 4 | Azul |
| 5 | Blanco/Azul |
| 6 | Naranja |
| 7 | Blanco/Marrón |
| 8 | Marrón |

---

## 27.3. Diferencia entre A y B

Los pares:

- azul;
- marrón

mantienen sus posiciones.

Los pares:

- verde;
- naranja

intercambian posiciones.

No se trata de memorizar dos listas completamente independientes.

---

# 28. Cable directo y cable cruzado

El tipo de cable puede identificarse comparando las normas utilizadas en ambos extremos.

---

## 28.1. Cable directo

Se utiliza la misma norma en ambos extremos:

```text
T568A ↔ T568A
```

o:

```text
T568B ↔ T568B
```

En las prácticas de la unidad se utiliza normalmente:

```text
T568B ↔ T568B
```

---

## 28.2. Cable cruzado

Se utilizan normas diferentes:

```text
T568A ↔ T568B
```

El cable conserva físicamente esa terminación aunque equipos modernos puedan adaptar automáticamente determinadas funciones mediante Auto MDI-X.

---

# 29. Auto MDI-X

**Auto MDI-X** permite que determinados equipos adapten automáticamente las funciones de transmisión y recepción según la conexión.

Esto no modifica físicamente el cable.

Por tanto:

> un cable cruzado sigue siendo un cable cruzado aunque una interfaz moderna consiga utilizarlo.

Comprender el tipo de cable sigue siendo importante para:

- interpretar instalaciones;
- documentar;
- diagnosticar;
- reconocer terminaciones.

---

# 30. Cable de consola o rollover

Existe también un tipo de cable cuya asignación puede invertirse de un extremo al otro.

De forma simplificada:

```text
1 ↔ 8
2 ↔ 7
3 ↔ 6
4 ↔ 5
```

Se conoce como **rollover** o cable de consola en determinados contextos.

En esta unidad su importancia es principalmente de reconocimiento.

El núcleo del trabajo práctico se centra en:

- cable directo;
- T568A/T568B;
- terminación;
- comprobación.

---

# 31. Herramientas de trabajo

Para terminar cableado de cobre pueden emplearse:

- crimpadora;
- pelacables;
- alicates;
- herramientas de corte;
- herramientas específicas para terminaciones en keystone o panel, según el componente.

El centro dispone de:

- crimpadora;
- alicate de boca recta;
- conectores RJ45;
- cable Cat6 UTP;
- keystones;
- tester básico.

La herramienta debe:

- ser adecuada a la tarea;
- estar en buen estado;
- utilizarse según el procedimiento;
- no emplearse para funciones distintas.

---

# 32. Preparación de un extremo RJ45

Una terminación correcta no comienza con la crimpadora.

El proceso general es:

```text
DECIDIR NORMA
      ↓
PELAR
      ↓
ORDENAR
      ↓
ALINEAR Y CORTAR
      ↓
INSERTAR
      ↓
INSPECCIONAR
      ↓
CRIMPAR
      ↓
VOLVER A INSPECCIONAR
      ↓
COMPROBAR
```

---

# 33. Retirada de la cubierta

La cubierta exterior debe retirarse sin dañar los conductores internos.

Después del pelado debe comprobarse:

- ausencia de cortes;
- ausencia de daños;
- conservación suficiente del trenzado.

Si existe un daño importante, el extremo debe rehacerse antes de continuar.

---

# 34. Orden de conductores

Los ocho conductores deben colocarse según la norma prevista.

Antes de cortar debe comprobarse:

- orientación;
- ocho conductores presentes;
- orden correcto;
- alineación;
- destrenzado limitado.

---

# 35. Corte uniforme

Los conductores deben quedar alineados para favorecer una inserción uniforme.

Un conductor claramente más corto puede provocar:

- falta de contacto;
- terminación defectuosa;
- fallo de continuidad.

---

# 36. Inserción en el conector

Antes de crimpar debe comprobarse:

- que los ocho conductores conservan el orden;
- que todos llegan correctamente al frente;
- que no existe un conductor retraído;
- que la cubierta exterior entra en la zona de sujeción prevista.

Este punto es importante porque el crimpado es una operación difícil de revertir sin sustituir el conector.

---

# 37. Crimpado

Una vez inspeccionado el extremo:

1. el conector se coloca correctamente en la crimpadora;
2. se aplica la herramienta de forma completa;
3. se retira el conector sin forzarlo;
4. se realiza una nueva inspección visual.

La operación debe ejecutarse con la herramienta adecuada y con el puesto organizado.

---

# 38. Calidad mecánica y calidad eléctrica

Una terminación puede fallar de distintas maneras.

---

## 38.1. Defecto eléctrico

Ejemplos:

- conductor sin contacto;
- orden incorrecto;
- conductor abierto;
- pares o conductores intercambiados.

---

## 38.2. Defecto mecánico

Ejemplos:

- cubierta fuera de la zona de sujeción;
- conector mal fijado;
- cable dañado;
- tensión excesiva;
- doblez forzado.

Una terminación no debe aceptarse únicamente porque “haya contacto”.

Debe ser eléctricamente coherente y mecánicamente razonable.

---

# 39. Terminación del cable horizontal en keystone

El cable horizontal puede terminar en un keystone situado en la zona de usuario.

Muchos keystones incorporan guías de color correspondientes a:

- T568A;
- T568B.

La colocación de conductores debe seguir:

- la guía correspondiente del propio componente;
- la norma elegida para la instalación.

No debe suponerse que la disposición física de las ranuras del keystone coincide visualmente con el orden de los pines de un conector macho.

---

# 40. Terminación en patch panel

En la zona de comunicaciones, el cable horizontal termina en un patch panel.

Cada línea debe mantener una correspondencia identificable entre:

```text
TOMA
  ↕
CABLE HORIZONTAL
  ↕
PUERTO DEL PATCH PANEL
```

La terminación debe conservar:

- orden;
- trenzado razonable;
- sujeción;
- identificación;
- coherencia con la documentación.

El panel de parcheo disponible puede utilizarse como referencia de organización física de estas líneas.

---

# 41. El tester básico de cableado

Un tester básico permite obtener evidencias sobre:

- continuidad;
- correspondencia de conductores;
- determinados errores de conexión.

Un resultado típico puede representarse como un **wire-map** o mapa de conductores.

---

# 42. Wire-map de un cable directo

Para un cable directo correctamente terminado se espera:

```text
1 → 1
2 → 2
3 → 3
4 → 4
5 → 5
6 → 6
7 → 7
8 → 8
```

Esto indica que cada posición de un extremo corresponde con la misma posición del otro.

---

# 43. Conductor abierto

Un resultado como:

```text
1 → 1
2 → 2
3 → X
4 → 4
5 → 5
6 → 6
7 → 7
8 → 8
```

indica ausencia de continuidad asociada al conductor o pin 3.

Las causas pueden estar en:

- terminación;
- contacto;
- conductor;
- daño físico.

La línea debe revisarse, corregirse y volver a comprobarse.

---

# 44. Conductores intercambiados

Un resultado como:

```text
1 → 1
2 → 2
3 → 6
4 → 4
5 → 5
6 → 3
7 → 7
8 → 8
```

no coincide con el wire-map esperado para un cable directo.

Puede indicar intercambio de conductores en la terminación.

La interpretación siempre debe compararse con:

```text
RESULTADO ESPERADO
        ↕
RESULTADO OBTENIDO
```

---

# 45. Inspección, comprobación y certificación

Estos tres conceptos no deben confundirse.

---

## 45.1. Inspección visual

Permite observar:

- orden;
- colores;
- inserción;
- estado;
- trenzado;
- sujeción;
- defectos visibles.

---

## 45.2. Comprobación básica

Un tester básico puede comprobar:

- continuidad;
- correspondencia;
- algunos fallos de conexión.

---

## 45.3. Certificación

La **certificación** utiliza instrumentación profesional para verificar que una instalación cumple unas prestaciones determinadas.

Un tester básico correcto no demuestra automáticamente:

- categoría real de todo el enlace;
- rendimiento a cualquier velocidad;
- ausencia de diafonía;
- ausencia de interferencias;
- certificación de la instalación.

Por tanto:

```text
WIRE-MAP CORRECTO
        ≠
CERTIFICACIÓN COMPLETA
```

---

# 46. Aceptar, corregir o volver a comprobar

Una línea puede encontrarse en distintos estados.

### Aceptada en comprobación básica

Cuando el resultado observado coincide con el esperado para la prueba realizada y no se detectan defectos relevantes.

### Revisar o corregir

Cuando existe una discrepancia, daño o resultado incompatible.

### Volver a comprobar

Después de cualquier corrección importante debe repetirse la prueba.

No debe suponerse que una reparación ha funcionado sin verificarla.

---

# 47. Etiquetado

El **etiquetado** identifica físicamente un elemento.

Puede aplicarse a:

- cable;
- toma;
- patch panel;
- puerto;
- latiguillo.

Un buen identificador debe ser:

- único;
- legible;
- coherente;
- estable.

---

# 48. Correspondencia

La **correspondencia** relaciona dos extremos de una misma infraestructura.

Por ejemplo:

```text
A1-T03 ↔ PP1-03
```

La correspondencia debe poder seguirse:

- físicamente;
- en el rack;
- en planos;
- en tablas.

---

# 49. Documentación

La documentación registra de forma organizada:

- identificadores;
- tomas;
- puertos;
- recorridos;
- resultados de prueba;
- incidencias;
- cambios;
- estado de las líneas.

Una tabla básica puede contener:

| Toma | Patch panel | Resultado | Estado |
|---|---|---|---|
| A1-T01 | PP1-01 | wire-map correcto | aceptada |
| A1-T02 | PP1-02 | pin abierto | revisar |
| A1-T03 | PP1-03 | wire-map correcto | aceptada |

La documentación debe representar la realidad.

Si la instalación cambia, la documentación debe actualizarse.

---

# 50. Trazabilidad

La **trazabilidad** permite seguir una línea desde un extremo hasta el otro.

Por ejemplo:

```text
PC
↓
A1-T03
↓
cable horizontal
↓
PP1-03
↓
latiguillo
↓
SW1-07
```

La correspondencia exacta puede cambiar según la instalación.

Lo importante es que otro técnico pueda localizar el enlace sin depender de la memoria de quien lo instaló.

---

# 51. Registro de incidencias

Una incidencia debe documentarse de forma que permita comprender:

- qué línea está afectada;
- qué problema se observó;
- qué evidencia lo demuestra;
- qué acción se realizó;
- qué resultado se obtuvo después;
- cuál es el estado final.

Una estructura habitual es:

```text
LÍNEA
PROBLEMA INICIAL
EVIDENCIA
ACCIÓN
RESULTADO POSTERIOR
ESTADO
```

Esto evita descripciones ambiguas como:

```text
“el cable azul fallaba”
```

---

# 52. Calidad del despliegue

La calidad no aparece únicamente al final.

Debe mantenerse durante todo el proceso.

---

## 52.1. Calidad del medio

Incluye:

- componente adecuado;
- categoría apropiada;
- ausencia de daños;
- compatibilidad.

---

## 52.2. Calidad del recorrido

Incluye:

- protección;
- ausencia de aplastamientos;
- ausencia de dobleces excesivos;
- accesibilidad;
- organización;
- mantenimiento.

---

## 52.3. Calidad de la terminación

Incluye:

- norma correcta;
- conductores ordenados;
- inserción completa;
- trenzado conservado;
- sujeción mecánica;
- ausencia de daños.

---

## 52.4. Calidad del rack

Incluye:

- elementos identificables;
- latiguillos sin tensión;
- puertos accesibles;
- organización comprensible;
- espacio razonable para mantenimiento;
- etiquetas legibles.

---

## 52.5. Calidad de la comprobación

Incluye:

- instrumento adecuado;
- interpretación correcta;
- separación entre evidencia e inferencia;
- nueva prueba después de una corrección.

---

## 52.6. Calidad documental

Incluye:

- identificadores únicos;
- correspondencias coherentes;
- registros actualizados;
- trazabilidad.

---

# 53. Seguridad durante el despliegue

Los principios de prevención estudiados en la U02 se aplican durante toda esta unidad.

Antes de una intervención deben comprobarse:

- espacio de trabajo;
- herramientas;
- estado del cable;
- estabilidad de los elementos;
- ausencia de obstáculos;
- ausencia de líquidos;
- ubicación de residuos.

Durante la tarea deben evitarse:

- herramientas en el borde;
- cables en zonas de paso;
- improvisaciones;
- uso de herramientas defectuosas;
- cortes innecesarios;
- residuos dispersos.

Al finalizar:

- herramientas guardadas;
- recortes retirados;
- material útil separado;
- puesto limpio;
- instalación identificada.

---

# 54. Criterio profesional de aceptación

Una instalación física no está bien resuelta únicamente porque:

```text
“funciona”
```

También debe ser:

- organizada;
- segura;
- identificable;
- mantenible;
- verificable;
- documentada.

El criterio profesional completo puede expresarse así:

```text
FUNCIONA
   +
ESTÁ BIEN TERMINADA
   +
ESTÁ COMPROBADA
   +
ESTÁ IDENTIFICADA
   +
PUEDE MANTENERSE
```

---

# 55. Visión conjunta del despliegue de una LAN

Todo el proceso puede resumirse del siguiente modo:

```text
REQUISITOS
    ↓
TIPO DE RED
    ↓
SELECCIÓN DEL MEDIO
    ↓
PLANO Y REPLANTEO
    ↓
RECORRIDO
    ↓
CANALIZACIÓN
    ↓
RACK Y ELEMENTOS
    ↓
CABLEADO HORIZONTAL
    ↓
TOMAS Y PATCH PANEL
    ↓
LATIGUILLOS
    ↓
TERMINACIÓN T568A/B
    ↓
INSPECCIÓN
    ↓
TESTER
    ↓
DIAGNÓSTICO
    ↓
ETIQUETADO
    ↓
DOCUMENTACIÓN
```

El despliegue físico de una red no es una suma de piezas independientes.

Es un sistema en el que cada decisión condiciona a las siguientes.

---

# 56. Vocabulario esencial de la U03

| Término | Significado |
|---|---|
| **Señal** | Representación física de la información |
| **Medio** | Soporte por el que se propaga la señal |
| **Enlace** | Comunicación física entre dos puntos |
| **Throughput** | Velocidad útil obtenida realmente |
| **Atenuación** | Pérdida de intensidad de la señal |
| **Interferencia** | Perturbación externa que afecta a la señal |
| **Diafonía** | Influencia entre conductores o pares próximos |
| **LAN cableada** | Red local cuyo acceso utiliza medios guiados |
| **WLAN** | Red local con acceso inalámbrico |
| **Red mixta** | Red que combina medios cableados e inalámbricos |
| **Par trenzado** | Medio de cobre organizado en pares de conductores trenzados |
| **UTP / U-UTP** | Par trenzado sin apantallamiento |
| **Categoría** | Nivel de prestaciones técnicas de un componente de cableado |
| **RJ45** | Nombre habitual del conector modular de ocho posiciones usado en Ethernet sobre par trenzado |
| **Fibra óptica** | Medio guiado que transmite mediante luz |
| **Monomodo** | Tipo de fibra especialmente asociado a mayores distancias |
| **Multimodo** | Tipo de fibra habitual en determinados enlaces cortos o medios |
| **SFP** | Módulo transceptor intercambiable para interfaces compatibles |
| **Cableado estructurado** | Organización normalizada de la infraestructura física de cableado |
| **Latiguillo** | Cable flexible utilizado para conexiones cortas |
| **Roseta / toma** | Punto de conexión de usuario |
| **Keystone** | Módulo de conexión instalado en rosetas o paneles |
| **Cable horizontal** | Tramo fijo entre toma y patch panel |
| **Patch panel** | Elemento pasivo de terminación y organización |
| **Rack** | Estructura normalizada para equipamiento y accesorios |
| **U** | Unidad de altura de un rack |
| **Canalización** | Sistema destinado a conducir y proteger cableado |
| **Replanteo** | Comprobación del diseño sobre el espacio real |
| **T568A** | Esquema normalizado de terminación |
| **T568B** | Esquema normalizado de terminación |
| **Cable directo** | Cable con la misma norma en ambos extremos |
| **Cable cruzado** | Cable con T568A en un extremo y T568B en el otro |
| **Auto MDI-X** | Adaptación automática de transmisión/recepción en determinados equipos |
| **Crimpado** | Operación de fijación de un conector mediante una herramienta específica |
| **Wire-map** | Mapa de correspondencia entre conductores de ambos extremos |
| **Tester** | Instrumento de comprobación básica de cableado |
| **Certificación** | Medición profesional de las prestaciones de una instalación |
| **Etiquetado** | Identificación física de elementos |
| **Correspondencia** | Relación entre extremos de una línea |
| **Trazabilidad** | Capacidad para seguir e identificar un enlace |
| **Documentación** | Registro organizado de la instalación y sus cambios |

---

# 57. Relación de contenidos con RA2

| CE | Contenidos desarrollados |
|---|---|
| **RA2.a** | Señal, medio, enlace, tipos de transmisión, capacidad nominal, throughput, atenuación, interferencia y diafonía |
| **RA2.b** | LAN cableada, WLAN y red mixta; selección de infraestructura según necesidad |
| **RA2.c** | Par trenzado, categorías, apantallamiento, fibra SM/MM, radio, conectores y selección de medio |
| **RA2.d** | Cableado estructurado, categoría, espacios, rack, patch panel, tomas, rutas, canalizaciones, planos y replanteo |
| **RA2.e** | Selección de recorridos, canalizaciones, tubos y criterios generales de montaje |
| **RA2.f** | Rack de 19", unidades U, organización, accesorios, patch panels y criterios de montaje y mantenimiento |
| **RA2.g** | T568A/B, RJ45, crimpado, keystone, tomas y patch panel; calidad de terminación |
| **RA2.h** | Tester, continuidad, wire-map, abiertos, conductores intercambiados y límites de la comprobación básica |
| **RA2.i** | Etiquetado, correspondencia toma-panel-puerto, trazabilidad y documentación |
| **RA2.j** | Calidad, seguridad, orden, inspección, aceptación, corrección, verificación y mantenimiento |

---

# 58. Principios fundamentales de la U03

1. La información necesita una señal física y un medio para desplazarse.
2. Capacidad nominal y velocidad útil no son equivalentes.
3. La distancia, el entorno y las perturbaciones influyen en el diseño.
4. No existe un medio universalmente mejor.
5. El cobre, la fibra y la radio responden a necesidades diferentes.
6. La estructura del par trenzado forma parte de su funcionamiento.
7. Una categoría alta no compensa una mala instalación.
8. El cableado estructurado separa infraestructura fija, conexiones flexibles y equipos activos.
9. El cable horizontal une la toma con el patch panel.
10. Patch panel y switch cumplen funciones diferentes.
11. La ruta más corta no es necesariamente la más mantenible.
12. Un plano no permite inventar datos que no contiene.
13. T568A y T568B organizan físicamente los ocho conductores.
14. Una terminación debe inspeccionarse antes y después del crimpado.
15. Calidad mecánica y calidad eléctrica son complementarias.
16. El tester básico proporciona evidencias, pero no equivale a un certificador.
17. Una corrección debe ir seguida de una nueva comprobación.
18. Una instalación debe etiquetarse y documentarse.
19. La documentación debe representar la realidad física.
20. Una buena instalación debe funcionar, ser segura, comprobable y poder mantenerse.
