import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./myScore.css";
import { useLoginContext } from "../../context/LoginContext";

export default function MyScore() {
  const [mark, setMark] = useState([]);
  const { userLogged, setUserLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/showscore/my-score`, {
        mode: "cors",
      });
      const json = await response.json();
      setMark(json);
    }
    fetchData();
  }, []);

  return (
    <div className="align-text-center">
      <h1 className="title-score">My Score</h1>

      {mark.map((item) => (
        <div key={userLogged.id}>
          <ul className="collection">
            <li className="collection-item avatar">
              <img src={item.avatar} className="circle" />
              <h6 className="title-nameScore">
                {item.name} {item.surname}
              </h6>
              <h7 className="subtitle-optScore">
                <b>
                  {item.level} {item.type}
                </b>
              </h7>
              <h5 className="title-nameScore">{item.score}</h5>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
