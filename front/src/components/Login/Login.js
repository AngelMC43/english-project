import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login({ handleLogin }) {
  const [goin, setGoin] = useState("");
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
    <div className=" d-flex justify-content-center m-0 ">
      <div className="justify-content-center w-25 bg-light m-5 border ">
        <form class="form-group ">
          <h2 className="text-center ">Accede a tu cuenta</h2>
          <label for="exampleInputEmail1">Username</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </form>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {errorMessage && <p> Username or password incorrect!! </p>}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <button
          onClick={handleLogin}
          type="submit"
          className="btn btn-info w-100 lime accent-4"
        >
          Accede
        </button>
      </div>
    </div>
  );
}
