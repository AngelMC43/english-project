import "./about.css";
import retos from "../../visual/main/retos.png";
import accesibilidad from "../../visual/main/accesibilidad.png";
import metodos from "../../visual/main/metodos.png";
import equipo from "../../visual/main/equipo.png";

export default function About() {
  return (
    <div>
      <div className="container-about">
        <h1 className="title-about">
          <span className="purple-letter">A</span>nge
          <span className="green-letter">L</span>ingo
        </h1>
        <div className="boxRetos-about">
          <h4 className="paragraphHead-about">
            <span className="purple-letter">R</span>etos
          </h4>
          <img src={retos} className="reto-about" />
          <p className="paragraph">
            Desde Angelingo nos interesamos por la enseñanza que vivimos hoy en
            dia, adaptandonos a las nuevas tecnologias para que asi aprender no
            sea algo tedioso. Sabemos el estres que se vive con la enseñanza
            escolar, asi que qué mejor forma de aprender mientras juegan, por
            medio de dibujos ilustrativos conseguirán llamar su atención y asi
            entender mejor el contexto de lo enseñado.
          </p>
        </div>
        <div className="boxAccesibilidad-about">
          <img src={accesibilidad} className="accesibilidad-about" />
          <h4 className="paragraphHead-about">
            <span className="green-letter">A</span>ccesibilidad
          </h4>{" "}
          <p className="paragraph">
            Podrás jugar desde cualquier parte del mundo a través de nuesra
            plataforma Web. Cualquier persona podrá enriquecer sus conocimientos
            desde un nivel más básico hasta lo más avanzado, y...totalmente
            Gratis!!!
          </p>
        </div>
        <div className="boxMetodos-about">
          <img src={metodos} className="metodos-about" />

          <h4 className="paragraphHead-about">
            <span className="purple-letter">M</span>étodos
          </h4>
          <p className="paragraph">
            Gracias a sus contenidos la enseñanza se hará mas fácil, nos hemos
            basado en un aprendizaje en base a elección sobre preguntas con
            opciones entre ellas para así tener presente la opción correcta.
            También ejercicios de escritura con las posibles respuestas
            correctas y otro tipo con elección sobre dibujos que tendrás que
            señalar.
          </p>
        </div>{" "}
        <div className="boxEquipo-about">
          <img src={equipo} className="equipo-about" />

          <h4 className="paragraphHead-about">
            <span className="green-letter">E</span>quipo
          </h4>
          <p className="paragraph">
            Nuestro equipo está formado en idiomas, al pasar ya por este
            aprendizaje han sadido llevar a cabo esta app con las mismas
            inquietudes que en su momento se encontraban. <br />
            Dirigido por Don Ángel Muñoz Caballero, realizado con: Base de
            datos: MySQL. Back-end: Node- express, Front-end: React, Bootstrap,
            Materialize.
          </p>
        </div>
      </div>
    </div>
  );
}
