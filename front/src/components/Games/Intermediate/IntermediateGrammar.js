import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";
import "./intermediate.css";

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
    setJump(jump + 1);
  };

  const random = Math.floor(Math.random() * 2);

  return (
    <div className="main-intermediateGrammar">
      <h1 className="title-intermediateGrammar animate__animated animate__pulse">
        {questions.length > 0 ? questions[jump].question : ""}
      </h1>

      {random == 0 ? (
        <div>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-intermediateGrammar animate__animated animate__pulse"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-intermediateGrammar animate__animated animate__pulse"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}

          <button
            onClick={handleJump}
            className="button-intermediateGrammar animate__animated animate__pulse"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleJump}
            className="button-intermediateGrammar animate__animated animate__pulse"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-intermediateGrammar animate__animated animate__pulse"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-intermediateGrammar animate__animated animate__pulse"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}
        </div>
      )}

      <div>
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
                  src={questions.length > 0 ? questions[11].correct : ""}
                  className="wasted-intermediate animate__animated animate__fadeIn animate__delay-1s"
                />
                <img
                  src={questions.length > 0 ? questions[11].incorrect_a : ""}
                  className="mission-intermediate animate__animated animate__fadeIn animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[11].incorrect_b : ""}
                  className="failed-intermediate animate__animated animate__fadeIn animate__delay-3s"
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
      </div>
    </div>
  );
}
