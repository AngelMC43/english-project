import { Link } from "react-router-dom";
import Otro from "../../Otro";
import "./main.css";
import presentation from "../../visual/main/presentation.mp4";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

export default function Main() {
  const navigate = useNavigate();
  const { userLogged } = useLoginContext();

  return (
    <div className="App ">
      <div className="body ">
        {userLogged ? (
          <Link
            to="profile"
            className="button-main btn btn-outline- purple lighten-2 z-depth-3 mr-3 section"
          >
            <i className="material-icons left ">account_circle</i>
            Entra en tu perfil
          </Link>
        ) : (
          <Link
            to="login"
            className="button-main btn btn-outline- purple lighten-2 z-depth-3 mr-3 section"
          >
            <i className="material-icons left ">account_circle</i>
            Entra en tu perfil
          </Link>
        )}
        <Link
          to="signup"
          className="button-main btn btn-outline- lime accent-4 z-depth-3 section"
        >
          <i className="material-icons left ">person_add</i>Registrate
        </Link>
        {userLogged ? (
          <Link to="index-menu">
            <video loop autoPlay muted className="video-main">
              <source src={presentation} type="video/mp4" />
            </video>
          </Link>
        ) : (
          <video loop autoPlay muted className="video-main">
            <source src={presentation} type="video/mp4" />
          </video>
        )}
      </div>
      <h1 className="title-main animate__animated animate__delay-1s animate__backInRight">
        {" "}
        The English game
      </h1>
    </div>
  );
}
