import Login from "../components/Login/Login";
import { Link } from "react-router-dom";
import Otro from "../Otro";

export default function Main() {
  return (
    <div className="App ">
      <Login />
      <Link to="signup" className="btn btn-outline-info">
        Registrate
      </Link>
      <Otro />
    </div>
  );
}
