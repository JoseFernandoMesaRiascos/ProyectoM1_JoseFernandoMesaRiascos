## ProyectoM1_JoseFernandoMesaRiascos

link del proyecto:
https://josefernandomesariascos.github.io/ProyectoM1_JoseFernandoMesaRiascos/

# GENERADOR DE PALETAS DE COLORES
## Descripción del proyecto


Esta es una página web que genera paletas de colores aleatorias con un solo clic. Está pensada para diseñadores, desarrolladores o cualquier persona que necesite inspiración rápida de colores para un proyecto: un sitio web, una app, una presentación, un diseño gráfico, etc.

El proyecto se construyó únicamente con HTML, CSS y JavaScript "puros" (sin frameworks ni librerías externas), como ejercicio para entender cómo se comunican estos tres lenguajes entre sí en una interfaz interactiva real.

## ¿PARA QUÉ SIRVE?

Cuando se necesita elegir colores para un diseño, suele ser difícil encontrar combinaciones que se vean bien juntas o simplemente generar variedad rápido. Esta herramienta resuelve eso generando paletas al azar, en el formato de código que la persona necesite (HSL o HEX), listas para copiar y usar directamente en cualquier proyecto.

## CÓMO FUNCIONA

La interfaz tiene tres elementos principales con los que se interactúa:

### 1. Cantidad de colores

Un grupo de opciones (6, 8 o 9) permite elegir cuántos colores tendrá la paleta generada. Solo se puede tener una cantidad seleccionada a la vez.

### 2. Formato de color

Un segundo grupo de opciones permite elegir en qué formato se muestra el código de cada color:

HSL (hsl(210, 65%, 55%)): describe el color por su matiz, saturación y luminosidad.
HEX (#4a90d9): el formato hexadecimal más usado en diseño web y CSS.

### 3. Botón "Generar paleta"

Al presionarlo, la página crea colores aleatorios en la cantidad y el formato elegidos, y los muestra como bloques de color (cada uno con su código escrito encima). Cada vez que se presiona, la paleta anterior se reemplaza por una nueva completamente distinta.

### 4. Copiar un color

Cada bloque de color de la paleta es, en realidad, un botón. Al hacer clic sobre cualquiera de ellos, su código (en el formato elegido) se copia automáticamente al portapapeles, y aparece un mensaje breve en la parte inferior de la pantalla confirmando qué se copió, así se puede pegar directamente en cualquier otro programa o archivo sin tener que escribirlo a mano.

## ¿CÓMO SE USA?

1. Abre la página y vas a ver un título, un panel con opciones y, debajo, algunos colores ya generados por defecto.

2. Arriba, en el panel de opciones, elige cuántos colores quiere ver en la paleta: 6, 8 o 9. Solo tiene que hacer clic sobre el número que prefiera.

3. Al lado, elige el formato en el que quieres ver el código de cada color: HSL o HEX. Si no sabe cuál prefiere, HEX es el más común si va a trabajar en CSS o en programas de diseño.

4. Presiona el botón "Generar paleta". Al instante van a aparecer los colores elegidos, cada uno mostrando su código.

5. Si le gusta un color en particular y quiere usarlo, simplemente hace clic sobre ese bloque de color y veras un mensaje que dice "Copiado: [código]", eso significa que ya puede pegar ese código (por ejemplo con Ctrl+V) en cualquier otro lugar: su editor de código, Photoshop, Figma, un documento, etc.

6. Si ninguno de los colores generados le convence, simplemente presiona "Generar paleta" otra vez para obtener una combinación nueva. Puede repetir esto todas las veces que quiera.

7. En cualquier momento puede cambiar la cantidad o el formato y volver a generar, sin tener que recargar la página.

8. La página también se puede usar completamente con el teclado (usando Tab para moverse entre los controles y Enter o Espacio para activarlos), y funciona en pantallas de distinto tamaño, ajustando cuántas columnas de colores se muestran según el ancho disponible.




## TECNOLOGÍAS USADAS

HTML5: estructura semántica de la página (encabezados, formularios, listas)

CSS3: estilos visuales, variables de color reutilizables, diseño en cuadrícula (grid) y adaptable a distintos tamaños de pantalla (media queries).

JavaScript: generación de colores aleatorios, conversión entre formatos de color, actualización dinámica del contenido en pantalla y copiado al portapapeles.


## AVANCES DEL DISEÑO DEL PROYECTO


A Continuación presentaré el diseño, interacciones, interfaz y la evolución de los elementos que se encuentran en la aplicación.

## Estructura principal

Como se puede observar asi es la estructura de la aplicacion wed profundizaremos sobre sus principales funciones 

![image alt](https://github.com/JoseFernandoMesaRiascos/ProyectoM1_JoseFernandoMesaRiascos/blob/4e36fc37701d86c99300fa4edb14e53301c1cb93/Screenshot%202026-09-24%20030249.png)


INTERACCIONES Y FORMATOS

Cuenta con las opciones de escoger un número determinado de colores ( 6 , 8 o 9 ), junto con el estilo de formato el cual queda en total criterio del usuario escoger cual es la que más se adapta a su necesidad, y por último y no menos importante el botón que genera la paleta de colores, al darle click se cambia de manera aleatoria todos los colores. 



PALETAS DE COLORES

Vemos las paletas de colores todas con su respectivo código, dependiendo del color cambia el tono del texto para su mayor visibilidad, también cuenta con la opción de copiar el codigo únicamente haciendo click.




USO DE IA

Para el desarrollo de este proyecto usé Claude y Chatgpt como asistente, principalmente para resolver dudas puntuales a medida que lo entendía. Estos fueron, en resumen, los prompts que utilicé durante el proceso:

Pedí que me recomendará la mejor ruta y estructura para aplicar la lógica de JavaScript para generar paletas de colores aleatorias de  cada color en formato HSL y HEX, con un botón principal de generación, feedback visual al usuario y consideraciones de accesibilidad pidiendo que me lo explicara paso a paso por ser principiante.

En esta función creamos los colores aleatorios con el formato hsl



Esta función me ayudo mucho a pasar del formato hsl a hex



La IA propuso una funcion que servia para el cambio de color automatico del codigo en los colores

 
Pedí que me corrigiera el código HTML y CSS y Pedí una explicación línea por línea del código CSS para entender qué hacía cada propiedad.

Compartí mi propio código para que se diagnosticara por qué la selección no funcionaba y por qué el JavaScript no se ejecutaba correctamente.

Cada respuesta se revisó y adaptó antes de incorporar al proyecto final.





