import Profile from "../components/Profile/Profile";

import { Link } from "react-router-dom";

export default function ProfileView() {
  return (
    <div className="App ">
      <Profile />

      <h1> Profile </h1>
      <p>mostrar datos de la ficha del usuario, score etc</p>
      <Link to="/games" className="btn btn-outline-info">
        Juegos
      </Link>
    </div>
  );
}
