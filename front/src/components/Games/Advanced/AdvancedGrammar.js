import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function AdvancedGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/games/advanced/grammar`,
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
          level: "Advanced",
          type: "Grammar",
          score: count,
        }),
      });
    }
    fetchData();
  };
  console.log("count es", count);

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
      <div className="main-advancedGrammar">
        <h1 className="title-advancedGrammar">
          {questions.length > 0 ? questions[jump].question : ""}
        </h1>
        {random == 0 ? (
          <div className="insideContainer-advancedGrammar">
            {questions[10] == questions[jump] ? (
              <button
                onClick={handleJoined}
                className="button-left-advancedGrammar "
              >
                <b>{questions.length > 0 ? questions[jump].correct : ""}</b>
                {questions[10] ? (count + 1, handleScore()) : ""}
              </button>
            ) : (
              <button
                onClick={handleJoined}
                className="button-left-advancedGrammar "
              >
                <b>{questions.length > 0 ? questions[jump].correct : ""}</b>
              </button>
            )}
            <button
              onClick={handleJump}
              className="button-rigth-advancedGrammar "
            >
              <b> {questions.length > 0 ? questions[jump].incorrect_a : ""}</b>
            </button>
          </div>
        ) : (
          <div className="insideContainer-advancedGrammar">
            <button
              onClick={handleJump}
              className="button-left-advancedGrammar "
            >
              <b>{questions.length > 0 ? questions[jump].incorrect_a : ""}</b>
            </button>

            {questions[10] == questions[jump] ? (
              <button
                onClick={handleJoined}
                className="button-rigth-advancedGrammar "
              >
                <b>{questions.length > 0 ? questions[jump].correct : ""}</b>
                {questions[10] ? (count + 1, handleScore()) : ""}
              </button>
            ) : (
              <button
                onClick={handleJoined}
                className="button-rigth-advancedGrammar "
              >
                <b> {questions.length > 0 ? questions[jump].correct : ""}</b>
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-advanced">
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className="confeti-basic animate__animated animate__bounceIn"
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className="pass-basic animate__animated animate__fadeInUpBig animate__delay-2s"
                />
                <img
                  src={questions.length > 0 ? questions[10].correct : ""}
                  className="wellDone-basic animate__animated animate__lightSpeedInLeft animate__delay-1s"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className="fail-basic animate__animated animate__fadeInRightBig animate__delay-1s"
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser-basic animate__animated animate__jackInTheBox"
                />
              </div>
            )}
            {count < 5 ? (
              <Link
                to="/games/advanced/intro-grammar"
                className="buttonCompleted-basic"
              >
                Try again
              </Link>
            ) : (
              <Link
                to="/games/advanced/intro-match"
                className="buttonCompleted-basic"
              >
                Next Game
              </Link>
            )}
            <br />
            <Link to="/showscore" className="buttonCompleted-advanced">
              Ranking
            </Link>
            <br />
            <Link to="/games/advanced" className="buttonCompleted-advanced">
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
