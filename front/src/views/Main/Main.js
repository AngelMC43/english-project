import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Otro from "../../Otro";
import Footer from "../../components/Footer/Footer";
import "./main.css";
import video from "../../views/Main/dd.mp4";

export default function Main() {
  return (
    <div className="App ">
      <Navbar />
      <div className="body ">
        <Link
          to="login"
          className="mr-md-3 btn btn-outline- purple  lighten-2  z-depth-3 mr-3 section"
        >
          <i class="material-icons left ">account_circle</i>
          Entra en tu perfil
        </Link>
        <Link
          to="signup"
          className="btn btn-outline-info  lime accent-4 z-depth-3 section"
        >
          <i class="material-icons left ">person_add</i>Registrate
        </Link>
        <video loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Otro />
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
