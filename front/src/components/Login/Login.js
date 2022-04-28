import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";

export default function Login({ handleLogin }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  /* const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");*/

  const handleChange = (event) => {
    event.preventDefault(); //evento que evita recargar la pagina
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  function handleLogin() {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/login`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      const json = await response.json();
      if ("error" in json) {
        setErrorMessage(true);
      } else {
        setUser(json);
        navigate("/index-menu");
      }
    }
    console.log(user);

    fetchData();
  }

  const location = useLocation();
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (
  //     user.email === event.target.name &&
  //     user.password === event.target.name
  //   ) {
  //     handleLogin(true);
  //     setErrorMessage(false);
  //   } else {
  //     handleLogin(false);
  //     setErrorMessage(true);
  //   }
  //   console.log("esto email", event.target.email);
  //   console.log("esto es user email", user.email);
  //   console.log("esto es error", errorMessage);
  // }

  return (
    <div className="d-flex justify-content-center">
      <div className="container-login w-25 ">
        <form class="  form-group">
          <h2 className="title-login text-center">Accede a tu cuenta</h2>
          <label for="exampleInputEmail1">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Introduce tu email"
          />
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Y tu password"
            />
            {errorMessage && <p> Username or password incorrect!! </p>}
          </div>{" "}
        </form>
        <div className="">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <div className="therms-login">
          {" "}
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          <Link to="terminos-condiciones">
            Acepto los términos y condiciones
          </Link>
        </div>
        <button
          onClick={handleLogin}
          type="submit"
          className="subTitle-login btn z-depth-3 w-100 lime accent-4 text-capitalize"
        >
          Accede
        </button>
      </div>{" "}
      <h3>checkbox</h3>
    </div>
  );
}
