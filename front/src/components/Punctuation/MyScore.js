import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./myScore.css";
import { useLoginContext } from "../../context/LoginContext";

export default function MyScore() {
  const [mark, setMark] = useState([]);
  const { userLogged, setUserLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/my-score`, {
        mode: "cors",
      });
      const json = await response.json();
      setUserLogged(json);
    }
    fetchData();
  }, []);

  return (
    <div className="align-text-center">
      <h1 className="title-score">My Score</h1>

      <div key={userLogged.id}>
        <ul className="collection">
          <li className="collection-item avatar">
            <img src={userLogged.avatar} className="circle" />
            <h6 className="title-nameScore">
              {userLogged.name} {userLogged.surname}
            </h6>
            <h7 className="subtitle-optScore">
              <b>
                {userLogged.level} {userLogged.type}
              </b>
            </h7>
            <h5 className="title-nameScore">{userLogged.score}</h5>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
