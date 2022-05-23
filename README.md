# english-project

App english game

Game where you can learn english while you enjoy.

He decidido crear una app de juegos en inglés.

Montada con MySQL como bade de datos, Node con librería Express como back-end y React para front-end con ayuda de Bootstrap y Materialize.

La forma usada es llamar a la API para traer preguntas, respuestase e imagenes que se originarán a modo aleatorio. Saldrá la primera por pantalla y a partir de aquí, al pulsar una de las posibles soluciones, saltará a la siguiente pregunta en base de datos. Según si la respuesta pulsada ha sido la correcta, o no, también hará un contador de puntos que se sumarán al final de cada juego.
Al final de este, al pulsar la respuesta de la pregunta 10, saltará una nueva interfaz que te dará la puntuación obtenida, te dirá si has pasado, o no, y según este, te dará acceso al siguiente juego/nivel o te dará opción de reintentar. También te dará links de acceso al ranking puntuación sobre ese mismo juego, y acceso al menu inicial del menú del nivel donde te encuentras.
Si la nota final es inferior a 5 el jugador deberá reintentar el juego, si es igual o superior, pasará al siguiente juego o nivel.
(también podrá acceder al resto de juegos por medio del menú inicial)
Está dividida en tres niveles y cuatro juegos en cada uno. 

Para poder jugar, el usuario debe estar registrado y logueado.
Las categorías van orientadas a temas relacionados con el aprendizaje. 

En el nivel básico nos encontramos con ejercicios sencillos para una primera toma de 
contacto con el idioma, equivaldrá a un nivel de 1º de Primaria, donde habrá una práctica sobre sustantivos, adjetivos, to be y alguna frase a modo pregunta. Con una temática generalizada orientada a colores, animales y objetos.

En el menú intermedio la temática será el ámbito escolar, para ya entrar en temas concretos. Tendrá una relación con un nivel de 1º de la ESO. Las preguntas tendrán cuatro respuestas y la función será la misma que en el básico. 

En el nivel avanzado entramos en un nivel de 2º de Bachiller donde se hará más complejo, las categorias serán las mismas que en las anteriores pero con una mayor dificultad.

Dentro del NavBar, sin estar logueado, podremos ver el ranking y obtener un top 5 de las máximas puntuaciones de cada juego, o ver la "guía de juego". Si el usuario está loguedo, además de esto, también aparecerá una pestaña de "juegos", el nombre de perfil del usuario que dará acceso a su perfil y un botón de logout. En la pestaña de "home" el icono del logotipo será clicable y dará acceso al "menú índice".

En el footer y siempre accesible sin logueo encontraremos: 
Mapa de ideas: El cual está compuesto por el recorrido sobre la página, vistas, componentes en cada vista y end-points de estos.
Contacto: Sección donde explica los posibles modo de contacto.
Sobre nosotros: donde se explica la utilidad de la app y del creador.

