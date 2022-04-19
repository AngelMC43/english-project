import { Link } from "react-router-dom";
import SignUp from "../components/SignUp/Signup";

export default function SignUpView() {
  return (
    <>
      <SignUp />
      <Link to="/index-menu" className="btn btn-outline-info">
        Menu
      </Link>
      <h3>Hacer un Link a index-menu cuando se pulse el boton de registro</h3>
    </>
  );
}
