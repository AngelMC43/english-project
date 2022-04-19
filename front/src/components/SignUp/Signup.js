import { useState, useEffect } from "react";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    age: "",
  });

  /*
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/signup`, {
        mode: "cors",
      });
      const json = await response.json();
      setUsers(json);
    }
    fetchData();
  }, []);
*/

  const handleChange = (event) => {
    event.preventDefault(); //evento que evita recargar la pagina
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event) => {
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

    /* console.log("enviando datos..." + users.name + " " + users.surname);
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/signup`, {
        method: "post",
        mode: "cors",
        body: JSON.stringify({
          name: users.name,
          surname: users.surname,
          email: users.email,
          password: users.password,
          age: users.age,
        }),
        headers: { "Content-type": "application/json" },
      });
      const json = await response.json();
      setUsers(json);
    }
    fetchData();*/
  };

  return (
    <>
      <form onSubmit={submitData} className="row">
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
        <div className="col-12 w-25">
          Surname
          <input
            type="text"
            className="form-control"
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
