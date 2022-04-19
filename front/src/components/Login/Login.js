import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login({ handleLogin }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  /*
  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(`http://localhost:3001/login`);
        const json = await response.json();
        setProfile(json);
      }
      fetchData();
    },
    [params.id]
  );*/

  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "pepe" && password === "1234") {
    } else {
    }
  }

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className=" d-flex justify-content-center m-0">
      <form
        onSubmit={handleSubmit}
        className="justify-content-center w-25 bg-light m-5 border"
      >
        <div class="form-group ">
          <h2 className="text-center ">Accede a tu cuenta</h2>
          <label for="exampleInputEmail1">Username</label>
          <input
            onChange={handleUsername}
            nameName="username"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={handlePassword}
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
        <button type="submit" className="btn btn-info w-100">
          <Link to="index-menu/">Accede</Link>
        </button>
      </form>
      <h3>Hacer Link a index-menu cuando se pulse el login</h3>
    </div>
  );
}
//esta funcion es para abreviar las anteriores, llamamos al apartado nombre unicamente

/*function handleInputs(e) {
  setUser({...user,[e.target.name]: e.target.value})
}*/
