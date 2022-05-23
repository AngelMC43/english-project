import "./guide.css";

export default function About() {
  return (
    <div>
      <div className="container-guide">
        <div>
          <h1 className="title-guide">
            <span className="purple-letter">G</span>uía de{" "}
            <span className="green-letter">J</span>uegos
          </h1>

          <div className="box-bases">
            <p className="font-guideHorizont">
              <span className="purple-letter">B</span>ase
              <span className="green-letter">s</span>
            </p>
            <p className="font-paragraphBases">
              Encontraremos tres niveles de juegos con cuatro juegos diferentes
              en cada uno. Explicaremos la forma de jugar y el contenido de cada
              juego. Todos los juegos en todos los niveles están compuestos por
              diez preguntas en cada uno, las cuales debes responder según las
              casillas de respuesta que figurarán debajo del título o
              pregunta. Debes pulsar el que creas que es la opción correcta,. Si
              pulsas en el correcto se te sumará un punto en tu cuenta final y
              saltará a la siguiente pregunta, si no, saltará a la siguiente
              pregunta sin sumar puntos.
            </p>
          </div>
          <div className="d-flex">
            <div className="box-basic">
              <p className="font-guide">
                <span className="purple-letter">N</span>ivel{" "}
                <span className="green-letter">B</span>ásico
              </p>{" "}
              <p className="font-paragraph">
                El nivel básico se compone de ejercicios de un nivel de 1º de
                Primaria, ejercicios simples para empezar a tener una toma de
                contacto con el idioma.
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Vocabulary</span> <br />
                Aquí nos encontramos con un título inicial que te hará una
                pregunta en referencia a la imagen que sale en el recuadro en el
                centro de la pantalla. Mas abajo tendrás dos recuadros de
                opciones donde debes pulsar la que creas que es correcta. La
                temática está orientada a palabras simples como colores, frutas
                etc.
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Choose de correct</span>
                <br />
                El título está formado simplemente por una palabra sobre
                animales u objetos y las casillas a modo de respuesta serán los
                dibujos que figaran debajo de este. Pulsa en la opción que creas
                que es correcta.
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Grammar</span> <br />
                Este apartado está compuesto por el verbo "to be", estará
                formado por un nivel muy básico de su forma en presente. En el
                título saldrá un espacio vacio para rellenar con la opción que
                creas correcta del recuadro de respuestas.
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Can you find?</span>{" "}
                <br />
                En este ejercicio encontramos una imagen fija, la cual ha sido
                rellenada con diez figuras. Deberas pulsar la que creas que es
                correcta en relacion al título que, por lo general, está formado
                por un sustantivo y un adjetivo que le acompaña en inglés.
              </p>
            </div>
            {/* -----------------------------------------------------------------------------INTERMEDIO----------------------- */}

            <div className="box-intermediate">
              <p className="font-guide">
                <span className="purple-letter">N</span>ivel{" "}
                <span className="green-letter">I</span>ntermedio
              </p>{" "}
              <p className="font-paragraph">
                El nivel está formado por una serie de ejercicios de nivel de
                entre 1º y 2º de la ESO, entraremos en temas más complejos.
                <br />
                <br />
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Vocabulary</span> <br />
                Tenemos un título el cual nos hará preguntas de vocabulario
                sobre temas relacionados con el colegio, hemos destacado este
                tema al profundizar en este nivel en temas concretos. Nos
                encontramos con cuatro posibles respuestas todas relacionadas
                con el mismo tema.
              </p>
              <br />
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Verbs</span>
                <br />
                Este apartado está relacionado con las formas verbales, entran
                en juego las formas de verbos en pasado regulares, irregulares y
                tambien formas en presente. También nos encontraremos con cuatro
                posibles respuestas para pulsar.
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Grammar</span> <br />
                Aquí tenemos una imagen donde debemos responder a las preguntas
                con respecto a los dibujos en ella. La gramática está
                relacionada con las formas de preposiciones de lugar. Nos
                encontramos con dos posibles opciones.
              </p>
              <p className="font-paragraph">
                <span className="font-subtitlesGuide">Can you find?</span>{" "}
                <br />
                Al igual que en el nivel básico aquí tenemos una imagen fija
                donde hay diez elementos escondidos entre la imagen. Debemos
                pulsarlos en relación a la pregunta sugerida, pero aquí, en lugar
                de decir que es, te pregunta por lo que puede ser.
              </p>
            </div>
          </div>
          {/* -----------------------------------------------------------------------------AVANZADO----------------------- */}

          <div className="box-advanced">
            <p className="font-guideHorizont">
              <span className="purple-letter">N</span>ivel{" "}
              <span className="green-letter">A</span>vanzado
            </p>{" "}
            <p className="font-paragraph">
              En el último nivel nos encontramos con ejercicios algo más
              complejos, donde tenemos un nivel de 2º de Bachillerato.
              <br />
            </p>
            <p className="font-paragraph">
              <span className="font-subtitlesGuide">Vocabulary</span> <br />
              En primer lugar, nos encontramos con un ejercicio de escritura
              sobre vocabulario. Te hará una pregunta y debajo de esta tienes
              diez opciones de respuesta, debes seleccionar la que pienses que
              es correcta y escribirla en el recuadro de mas abajo y pulsar en
              la flecha para saltar a la siguiente pregunta.
            </p>
            <p className="font-paragraph">
              <span className="font-subtitlesGuide">Phrasal verbs</span>
              <br />
              Aquí haremos un ejercicio relacionado con los verbos frasales. Nos
              encontramos con una frase la cual hay que introducir una de las
              dos opciones que reflejan en los recuadros de abajo, deberas
              pulsar en la que creas que es correcta.
            </p>
            <p className="font-paragraph">
              <span className="font-subtitlesGuide">Grammar</span> <br />
              En el apartado de gramática también tendremos una frase donde hay
              un hueco vacío, debemos escoger la opción que creamos más
              conveniente tratando diversos temas de gramática.
            </p>
            <p className="font-paragraph">
              <span className="font-subtitlesGuide">Guess what</span> <br />
              Fiel al Can you find? aquí nos encontramos con una imagen real
              fija donde el método a seguir es el mismo. Trás la pregunta
              deberás pulsar en las imagenes unidas a la principal. Aquí no
              tendrás cursor de opción de respuesta y habrá más posibles
              respuestas incorrectas.
            </p>
          </div>
        </div>
        <h1 className="title-about">
          <span className="purple-letter">A</span>nge
          <span className="green-letter">L</span>ingo
        </h1>
      </div>
    </div>
  );
}
