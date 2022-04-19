import { Link } from "react-router-dom";

export default function Games() {
  return (
    <div className="App ">
      <h1>Games</h1>
      <Link to="basic" className="btn btn-outline-info">
        Infantil
      </Link>
      <Link to="intermediate" className="btn btn-outline-info">
        Medio
      </Link>
      <Link to="advanced" className="btn btn-outline-info">
        Avanzado
      </Link>
    </div>
  );
}
