import { useLoginContext } from "../../context/LoginContext";
import "./profile.css";

export default function Profile() {
  const { userLogged } = useLoginContext();

  return (
    <div className="mainContainer-profile">
      <h3 className="title ">
        {userLogged.name} {userLogged.surname}
      </h3>
      <div className=" inside-container w-75 ">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Datos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Puntuación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Actualiza</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mt-5">
            <b>Nombre: </b>
            {userLogged.name}
          </p>
          <p>
            <b>Apellidos: </b>
            {userLogged.surname}
          </p>
          <p>
            <b>Email: </b>
            {userLogged.email}
          </p>
          <p>
            <b>Edad: </b>
            {userLogged.age}
          </p>
          <p>eliminar perfil</p>
          <p>puntuacion sobre tus juegos</p>
          <p>puntuacion global por niveles y/o tipos</p>
        </div>
      </div>
    </div>
  );
}
