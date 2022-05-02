import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function IntermediateGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/intermediate/grammar`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setQuestions(json);
    }
    fetchData();
  }, []);

  const handleScore = (event) => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/score`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: userLogged.id,
          level: "intermediate",
          type: "grammar",
          score: count,
        }),
      });
    }
    fetchData();
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  function handleJoined(e) {
    handleCount();
    handleJump();
  }

  const handleJump = (e) => {
    if (jump < 9) {
      setJump(jump + 1);
    } else if (jump === 9) {
      setJump(jump + 1);
      setCount(count + 1);
      handleScore();
    }
  };

  return (
    <div className="main-intermediateGrammar">
      <h1 className="title-intermediateGrammar animate__animated animate__pulse">
        {questions.length > 0 ? questions[jump].question : ""}
      </h1>
      <button
        onClick={handleJoined}
        className="button-intermediateGrammar animate__animated animate__pulse"
      >
        {questions.length > 0 ? questions[jump].correct : ""}
      </button>
      <button
        onClick={handleJump}
        className="button-intermediateGrammar animate__animated animate__pulse"
      >
        {questions.length > 0 ? questions[jump].incorrect_a : ""}
      </button>

      <div onClick={handleJump}>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-intermediate">
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className="confeti-intermediate"
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className="pass-intermediate"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className="fail-intermediate"
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser-intermediate"
                />
              </div>
            )}
            <Link
              to="/games/intermediate/match"
              className="buttonCompleted-intermediate"
            >
              Next Game
            </Link>
            <br />
            <Link to="/showscore" className="buttonCompleted-intermediate">
              Ranking
            </Link>
            <br />
            <Link
              to="/games/intermediate"
              className="buttonCompleted-intermediate"
            >
              Menu
            </Link>
          </div>
        ) : (
          ""
        )}
        {/* <button onSubmit={handleScore}>score</button> */}
      </div>
    </div>
  );
}
