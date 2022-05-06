import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLoginContext } from "../../context/LoginContext";
import "./navbar.css";
import logoutImg from "../../visual/main/logout.png";
import logoWhite from "../../visual/main/logoWhite.png";

export default function Navbar() {
  const [user, setUser] = useState([]);
  const { userLogged, logout } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/allusers`, {
        mode: "cors",
      });
      const json = await response.json();
      setUser(json);
    }
    fetchData();
  }, []);
  //-----------------------------------------------poner la id para sacar el usuario
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand purple-text text-lighten-3" to="#">
            AngeLingo
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 purple-text text-lighten-2">
              <li className="nav-item lime accent-4">
                <NavLink
                  className="nav-link black-text "
                  aria-current="page "
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/guide">
                  Guide
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <img src={logoWhite} className="logoCentral" />
              </li>
            </ul>
            {userLogged ? (
              <div className="userNav-navbar">
                <Link to={`/profile`} className="name-navbar">
                  {userLogged.name} {userLogged.surname}
                </Link>
                <a onClick={() => logout()} className="button-navbar">
                  <img src={logoutImg} className="buttonLog-navbar" />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <h5>{user[49].name}</h5> */}
      </nav>
      <main className="App"></main>
    </div>
  );
}
