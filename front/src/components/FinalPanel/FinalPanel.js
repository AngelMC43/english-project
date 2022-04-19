import Score from "../Score/Score";
import IndexMenu from "../../views/IndexMenu";

export default function FinalPanel() {
  return (
    <div className="border border-dark w-50">
      <h1>Puntuacion final</h1>
      <p>
        (Puntuacion final saltara cuando el user pulse la pregunta 10 con un
        onclick, posiblemente sea un custom hook, por ahora lo gusardo en
        componentes)
      </p>
      <p>
        traera: puntuacion, boton volver a empezar, juego siguiente, boton
        clasificacion, menu inicial
      </p>
      <Score />
      <IndexMenu />
    </div>
  );
}
