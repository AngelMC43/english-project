import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useLoginContext } from "../../context/LoginContext";
import logo from "../../visual/main/logo4.jpg";

export default function SignUp() {
  const navigate = useNavigate();
  const { userLogged } = useLoginContext();

  const error = "No se han incluido datos";
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    age: "",
    avatar: "",
  });

  const handleChange = (event) => {
    event.preventDefault(); //evento que evita recargar la pagina
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function fetchData() {
      const response = await fetch(`http://localhost:3001/signup`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newUser.name,
          surname: newUser.surname,
          email: newUser.email,
          password: newUser.password,
          age: newUser.age,
          avatar: newUser.avatar,
        }),
      });
      navigate("/login");
    }
    fetchData();
  };

  return (
    <div className="d-flex">
      <div className="d-flex justify-content-center">
        <div className="container-signup">
          <h1 className="title-signup animate__animated animate__bounce">
            Únete a nuestro club
          </h1>
          <form onSubmit={handleSubmit} className="row center-align">
            <div className="box-signup col-12">
              Nombre
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="¿Cómo te llamas?"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="box-signup col-12">
              Apellidos
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder="¿Y tus apellidos son?"
                name="surname"
                onChange={handleChange}
              />
            </div>{" "}
            <div className="box-signup col-md-6 ">
              Edad
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                placeholder="¿Cuantos años tienes?"
                onChange={handleChange}
              />
            </div>
            <div className="boxs-signup col-12 ">
              Email
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Necesitarás un email para acceder a tu cuenta"
                onChange={handleChange}
              />
            </div>
            <div className="boxs-signup col-12 ">
              Contraseña
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Y también una clave de acceso"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="buttonBig-signup btn z-depth-3 lime accent-4 text-capitalize"
            >
              Regístrate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
