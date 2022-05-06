import { useState, useEffect } from "react";
import "./intermediate.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function IntermediateVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/intermediate/vocabulary`,
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
          type: "vocabulary",
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

  const random = Math.floor(Math.random() * 3);
  console.log("random", random);
  console.log("count", count);
  return (
    <div className="main-intermediateVocabulary">
      <h1 className="title-intermediateVocabulary animate__animated animate__pulse">
        {questions.length > 0 ? questions[jump].question : ""}
      </h1>

      {random == 0 ? (
        <div>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-first-intermediateVocabulary"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-first-intermediateVocabulary"
            >
              {" "}
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}
          <button
            onClick={handleJump}
            className="button-second-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          <button
            onClick={handleJump}
            className="button-third-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_b : ""}
          </button>
          <button
            onClick={handleJump}
            className="button-forth-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_c : ""}
          </button>
        </div>
      ) : random == 1 ? (
        <div>
          <button
            onClick={handleJump}
            className="button-first-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_b : ""}
          </button>

          <button
            onClick={handleJump}
            className="button-second-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-third-intermediateVocabulary"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-third-intermediateVocabulary"
            >
              {" "}
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>
          )}
          <button
            onClick={handleJump}
            className="button-forth-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_c : ""}
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleJump}
            className="button-first-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_c : ""}
          </button>

          <button
            onClick={handleJump}
            className="button-second-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_a : ""}
          </button>
          <button
            onClick={handleJump}
            className="button-third-intermediateVocabulary"
          >
            {questions.length > 0 ? questions[jump].incorrect_b : ""}
          </button>
          {questions[10] == questions[jump] ? (
            <button
              onClick={handleJoined}
              className="button-forth-intermediateVocabulary"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
              {questions[10] ? (count + 1, handleScore()) : ""}
            </button>
          ) : (
            <button
              onClick={handleJoined}
              className="button-forth-intermediateVocabulary"
            >
              {" "}
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
              to="/games/intermediate/verbs"
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
