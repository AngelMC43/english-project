import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./basic.css";

export default function BasicGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/basic/grammar`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      setQuestions(json);
    }
    fetchData();
  }, []);

  const handleJump = () => {
    if (jump < 10) {
      setJump(jump + 1);
    } else {
    }
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  function handleJoined(e) {
    e.stopPropagation();
    e.preventDefault();
    handleJump();
    handleCount();
  }

  return (
    <div>
      <div className="main-grammar">
        <div className="inside-container">
          <h1 className="">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>
          <img
            src={questions.length > 0 ? questions[jump].pic_correct : ""}
            className="img-option-grammar"
          />

          <div className="button-container-grammar">
            <button
              onClick={handleJoined}
              className="button-push-grammar btn btn-outline-primary accent-4 z-depth-3 section"
            >
              {questions.length > 0 ? questions[jump].correct : ""}
            </button>

            <button
              onClick={handleJump}
              className="button-push-grammar btn btn-info z-depth-3"
            >
              {questions.length > 0 ? questions[jump].incorrect_a : ""}
            </button>
          </div>
        </div>
      </div>
      <div>
        {questions[10] === questions[jump] ? (
          <div className="final-panel">
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className="confeti"
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className="pass"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className="fail"
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser"
                />
              </div>
            )}
            <Link to="/games/basic/match" className="button-completed">
              Next Game
            </Link>
            <br />
            <Link to="/showscore" className="button-completed">
              Ranking
            </Link>
            <br />
            <Link to="/games/basic" className="button-completed">
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
