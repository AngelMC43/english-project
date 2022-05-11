import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./scoreRank.css";

export default function ScoreAdvGrammar() {
  const [mark, setMark] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/showscore/advanced-grammar`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setMark(json);
    }
    fetchData();
  }, []);

  return (
    <div className="align-text-center">
      <h1 className="title-score">SCORE</h1>
      <div className="container-score">
        <div className="introTitle-score">
          <div className="rankInt">Intermediate</div>
          <div className="rankAdv">Advanced</div>
        </div>
        <div className="introTitle-score">
          <div className="classInt">
            <Link
              to="/showscore/intermediate-vocabulary"
              className="buttonRank-score"
            >
              Vocabulary
            </Link>
            <Link
              to="/showscore/intermediate-verbs"
              className="buttonRank-score"
            >
              Verbs
            </Link>
            <Link
              to="/showscore/intermediate-grammar"
              className="buttonRank-score"
            >
              Grammar
            </Link>
            <Link
              to="/showscore/intermediate-match"
              className="buttonRank-score"
            >
              Can you find?
            </Link>
          </div>

          <div className="classAdv">
            <Link
              to="/showscore/advanced-vocabulary"
              className="buttonRank-score"
            >
              Vocabulary
            </Link>
            <Link to="/showscore/advanced-verbs" className="buttonRank-score">
              Phrasal verbs
            </Link>
            <Link to="/showscore/advanced-grammar" className="buttonRank-score">
              Grammar
            </Link>
            <Link to="/showscore/advanced-match" className="buttonRank-score">
              Guess what
            </Link>
          </div>
        </div>
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
