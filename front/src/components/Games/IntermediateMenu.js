import { Link } from "react-router-dom";

export default function BasicMenu() {
  return (
    <div>
      <div>
        <h1>aqui tenemos el menu de las 4 categorias</h1>
        <Link to="vocabulary">Vocabulario</Link>
        <Link to="grammar">Gramatica</Link>
        <Link to="verbs">Verbos</Link>
        <Link to="final-test">Test final</Link>
      </div>
    </div>
  );
}
