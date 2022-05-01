import { Link } from "react-router-dom";
import Otro from "../../Otro";
import "./main.css";
import presentation from "../../visual/main/presentation.mp4";

export default function Main() {
  return (
    <div className="App ">
      <div className="body ">
        <Link
          to="login"
          className="button-main btn btn-outline- purple lighten-2 z-depth-3 mr-3 section"
        >
          <i className="material-icons left ">account_circle</i>
          Entra en tu perfil
        </Link>
        <Link
          to="signup"
          className="button-main btn btn-outline- lime accent-4 z-depth-3 section"
        >
          <i className="material-icons left ">person_add</i>Registrate
        </Link>
        <video loop autoPlay muted className="video-main">
          <source src={presentation} type="video/mp4" />
        </video>
      </div>
      <h1 className="title-main"> The English game</h1>
    </div>
  );
}
// .btn-primary,
// .btn-primary:hover,
// .btn-primary:active,
// .btn-primary:visited,
// .btn-primary:focus {
//     background-color: #8064A2;
//     border-color: #8064A2;
// }
