import { useState, useEffect } from "react";
import "./basic.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function BasicVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/basic/vocabulary`,
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
          level: "Basic",
          type: "Vocabulary",
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
    <div>
      <div className="main-vocabulary">
        <div className="inside-container-vocabulary">
          <h1 className="animate__animated animate__pulse">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>
          <div className="div">
            <img
              src={questions.length > 0 ? questions[jump].pic_correct : ""}
              className="img-option-vocabulary"
            />
          </div>

          {random == 0 ? (
            <div className="button-container-vocabulary">
              {questions[10] == questions[jump] ? (
                <button
                  onClick={handleJoined}
                  className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
                >
                  {questions.length > 0 ? questions[jump].correct : ""}
                  {questions[10] ? (count + 1, handleScore()) : ""}
                </button>
              ) : (
                <button
                  onClick={handleJoined}
                  className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
                >
                  {questions.length > 0 ? questions[jump].correct : ""}
                </button>
              )}
              <button
                onClick={handleJump}
                className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].incorrect_a : ""}
              </button>
            </div>
          ) : (
            <div className="button-container-vocabulary">
              <button
                onClick={handleJump}
                className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].incorrect_a : ""}
              </button>

              {questions[10] == questions[jump] ? (
                <button
                  onClick={handleJoined}
                  className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
                >
                  {questions.length > 0 ? questions[jump].correct : ""}
                  {questions[10] ? (count + 1, handleScore()) : ""}
                </button>
              ) : (
                <button
                  onClick={handleJoined}
                  className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
                >
                  {questions.length > 0 ? questions[jump].correct : ""}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-basic">
            {" "}
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className="confeti-basic animate__animated animate__bounceIn "
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className="pass-basic animate__animated animate__backInDown animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[10].correct : ""}
                  className="goodJob-basic animate__animated animate__lightSpeedInLeft animate__delay-1s"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className="fail-basic animate__animated animate__zoomInDown animate__delay-1s"
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser-basic animate__animated animate__jackInTheBox"
                />
              </div>
            )}
            <Link to="/games/basic/choose" className="buttonCompleted-basic">
              Next Game
            </Link>
            <br />
            <Link to="/showscore" className="buttonCompleted-basic">
              Ranking
            </Link>
            <br />
            <Link to="/games/basic" className="buttonCompleted-basic">
              Menu
            </Link>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
