import { useLoginContext } from "../../context/LoginContext";
import "./uploadUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Profile() {
  const { userLogged, setUserLogged, logout } = useLoginContext();
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", surname: "", age: "" });

  function handleDelete(id) {
    fetch(`http://localhost:3001/delete/${id}`, {
      mode: "cors",
      method: "DELETE",
    });
    logout();
  }

  const handleChange = (event) => {
    event.preventDefault(); //evento que evita recargar la pagina
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (id, event) => {
    event.preventDefault();

    async function fetchData() {
      const response = await fetch(`http://localhost:3001/upload/${id}`, {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          age: data.age,
        }),
      });
      let json = await response.json();
      setData(json);
      navigate("/login");
    }
    fetchData();
  };
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
          <form onSubmit={(e) => handleSubmit(e)} className="row center-align">
            <div className="box-up col-12">
              Nombre
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="box-up col-12">
              Apellidos
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                onChange={(e) => handleChange(e)}
              />
            </div>{" "}
            <div className="box-up col-12 ">
              Edad
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="box-up col-12 "></div>
            <div className="d-flex">
              <button
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
