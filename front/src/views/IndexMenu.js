import { Link } from "react-router-dom";

export default function IndexMenu() {
  return (
    <div className="App">
      <Link to="/profile" className="btn btn-outline-info">
        Perfil
      </Link>
      <Link to="/games" className="btn btn-outline-info">
        Juegos
      </Link>
    </div>
  );
}
