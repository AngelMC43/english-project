import Profile from "../components/Profile/Profile";
import { Link } from "react-router-dom";

export default function ProfileView() {
  return (
    <div className="App ">
      <Profile />

      <Link to="/games" className="btn btn-outline-info button-profile">
        Juegos
      </Link>
    </div>
  );
}
