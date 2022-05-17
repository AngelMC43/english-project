import { useLoginContext } from "../../context/LoginContext";
import "./uploadUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const { userLogged, setUserLogged, logout } = useLoginContext();
  const navigate = useNavigate();

  function handleDelete(id) {
    fetch(`http://localhost:3001/delete/${id}`, {
      mode: "cors",
      method: "DELETE",
    });
    logout();
  }

  function handleUpload() {
    fetch(`http://localhost:3001/upload`, {
      mode: "cors",
      method: "post",
    });
    navigate("/profile");
  }

  return (
    <div className="mainContainer-profile">
      <h3 className="title ">
        {userLogged.name} {userLogged.surname}{" "}
      </h3>
      <div>
        {" "}
        <img src={userLogged.avatar} className="circle avaPic" />
      </div>
      <div className=" inside-container w-75 ">
        <div className="card-header ">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item ">
              <a className="nav-link" aria-current="true" href="/profile">
                <b>Perfil</b>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/showscore" className="nav-link  ">
                <b>Score</b>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <b>Actualizar</b>
              </a>
            </li>
          </ul>
        </div>
        <div className="insideText-profile">
          <p className="mt-5 "></p>
          <form className="row center-align">
            <div className="box-up col-12">
              Nombre
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
            <div className="box-up col-12">
              Apellidos
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
              />
            </div>{" "}
            <div className="box-up col-12 ">
              Edad
              <input type="text" className="form-control" id="age" name="age" />
            </div>
            <div className="box-up col-12 "></div>
            <div className="d-flex">
              <button
                onClick={handleUpload}
                type="submit"
                className="button-signup btn z-depth-3 lime accent-4 text-capitalize"
              >
                Actualizar
              </button>
              <button
                onClick={() => handleDelete(userLogged.id)}
                type="submit"
                className="button-delete btn z-depth-3 text-capitalize"
              >
                Elimina tu perfil
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}
