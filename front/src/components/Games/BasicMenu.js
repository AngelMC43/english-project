import { Link } from "react-router-dom";

export default function BasicMenu() {
  return (
    <div>
      <div>
        <h1>aqui tenemos el menu de las 3 categorias</h1>
        <Link to="match">¿Qué veo?</Link>
        <Link to="vocabulary">Vocabulario</Link>
        <Link to="grammar">Gramatica</Link>
      </div>
    </div>
  );
}
