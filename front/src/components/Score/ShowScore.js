import { useLoginContext } from "../../context/LoginContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="mainContainer-score">
        <div className="introTitle-score">
          <div className="rankInt">Ranking Intermediate</div>
          <div className="rankAdv">Ranking Advanced</div>
        </div>
        <div className="introTitle-score">
          <div className="classInt">
            <Link className="buttonRank-score" to="intermediate-vocabulary">
              Vocabulary
            </Link>
            <Link className="buttonRank-score" to="intermediate-verbs">
              Verbs
            </Link>
            <Link className="buttonRank-score" to="intermediate-grammar">
              Grammar
            </Link>
            <Link className="buttonRank-score" to="intermediate-match">
              Can you see?
            </Link>
          </div>

          <div className="classAdv">
            <Link className="buttonRank-score" to="advanced-vocabulary">
              Vocabulary
            </Link>
            <Link className="buttonRank-score" to="advanced-verbs">
              Verbs
            </Link>
            <Link className="buttonRank-score" to="advanced-grammar">
              Grammar
            </Link>
            <Link className="buttonRank-score" to="advanced-match">
              Can you see?
            </Link>
          </div>
        </div>
        <div>
          <h2 className="h2Choose-score">Choose one category</h2>
        </div>
      </div>
    </div>
  );
}
