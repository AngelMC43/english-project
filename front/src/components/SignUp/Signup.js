import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    age: "",
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
        }),
      });
    }
    fetchData();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="row center-align">
        <div className="col-12 w-25">
          Name
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Write your name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 w-25 collection">
          Surname
          <input
            type="text"
            className="form-control center-align collection-item"
            id="surname"
            placeholder="Write your surname"
            name="surname"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 w-25">
          Email
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 w-25">
          Password
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 w-25">
          Age
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-25">
          Sign in
        </button>
      </form>
    </>
  );
}
