import { useLoginContext } from "../../context/LoginContext";
import { useEffect, useState } from "react";
import "./showScore.css";

export default function ShowScore() {
  const { userLogged } = useLoginContext();
  const [mark, setMark] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/showscore`, {
        mode: "cors",
      });
      const json = await response.json();
      setMark(json);
    }
    fetchData();
  }, []);

  return (
    <div className="align-text-center">
      <h1 className="title-score">SCORE</h1>

      <div className="container-score">
        {mark.map((item) => (
          <div key={item.id}>
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
    </div>
  );
}
