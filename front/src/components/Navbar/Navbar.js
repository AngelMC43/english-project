import { NavLink } from "react-router-dom";
import image from "./duo5.jpg";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand purple-text text-lighten-2" to="#">
            AngeLingo
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 purple-text text-lighten-2">
              <li className="nav-item">
                <NavLink
                  className="nav-link  lime accent-4 black-text "
                  aria-current="page "
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="App"></main>
    </div>
  );
}
