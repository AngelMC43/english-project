import { useLoginContext } from "../../context/LoginContext";
import "./profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const { userLogged } = useLoginContext();
  console.log(userLogged);
  return (
    <div className="mainContainer-profile">
      <h3 className="title ">
        {userLogged.name} {userLogged.surname}{" "}
      </h3>
      <div>
        {" "}
        <img src={userLogged.avatar} className="circle" />
      </div>

      <h1 className="avaPic">hola</h1>
      <div className=" inside-container w-75 ">
        <div className="card-header ">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item ">
              <a className="nav-link active " aria-current="true" href="#">
                <b>Datos</b>
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
          <p className="mt-5 ">
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
    // <div class="col mainContainer-profile">
    //   <div class="row-4">
    //     <div class="list-group " id="list-tab" role="tablist">
    //       <a
    //         class="list-group-item list-group-item-action active a-profile"
    //         id="list-home-list"
    //         data-bs-toggle="datos"
    //         href="#list-datos"
    //         role="tab"
    //         aria-controls="list-datos"
    //       >
    //         Datos
    //       </a>
    //       <a
    //         class="list-group-item list-group-item-action b-profile"
    //         id="list-profile-list"
    //         data-bs-toggle="puntuacion"
    //         href="#list-puntuacion"
    //         role="tab"
    //         aria-controls="list-puntuacion"
    //       >
    //         Puntuación
    //       </a>
    //       <a
    //         class="list-group-item list-group-item-action c-profile"
    //         id="list-messages-list"
    //         data-bs-toggle="actualizar"
    //         href="#list-actualizar"
    //         role="tab"
    //         aria-controls="list-actualizar"
    //       >
    //         Actualizar
    //       </a>
    //     </div>
    //   </div>
    //   <div class="col-8">
    //     <div class="tab-content" id="nav-tabContent">
    //       <div
    //         class="tab-pane fade show active"
    //         id="list-datos"
    //         role="tabpanel"
    //         aria-labelledby="list-datos-list"
    //       >
    //         <h3 className="title ">
    //           {userLogged.name} {userLogged.surname}
    //         </h3>
    //         <div className="inside-container w-75">
    //           <p className="">
    //             <b>Nombre: </b>
    //             {userLogged.name}
    //           </p>
    //           <p>
    //             <b>Apellidos: </b>
    //             {userLogged.surname}
    //           </p>
    //           <p>
    //             <b>Email: </b>
    //             {userLogged.email}
    //           </p>
    //           <p>
    //             <b>Edad: </b>
    //             {userLogged.age}
    //           </p>
    //           <p>eliminar perfil</p>
    //           <p>puntuacion sobre tus juegos</p>
    //           <p>puntuacion global por niveles y/o tipos</p>
    //         </div>
    //       </div>
    //       <div
    //         class="tab-pane fade"
    //         id="list-puntuacion"
    //         role="tabpanel"
    //         aria-labelledby="list-puntuacion-list"
    //       >
    //         ...
    //       </div>
    //       <div
    //         class="tab-pane fade"
    //         id="list-actualizar"
    //         role="tabpanel"
    //         aria-labelledby="list-actualizar-list"
    //       >
    //         ...
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
