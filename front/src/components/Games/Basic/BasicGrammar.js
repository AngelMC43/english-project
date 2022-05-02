import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

import "./basic.css";

export default function BasicGrammar() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

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
          level: "basic",
          type: "grammar",
          score: count,
        }),
      });
    }
    fetchData();
  };
  console.log("count es", count);

  //preguntar como hacer el login para profile y desde ahi buscar el id para poner aqui, id = usePararm()
  //SOLO ME QUEDA ENLAZAR EL BODY DE idUser, level, type y score con los correspondientes que le envien dicha informacion
  //PONER EL PREVENT DEFAULT Y STOP PROPAGATION DONDE CORRESPONDA

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
    <div>
      <div className="main-grammar">
        <div className="insideContainer-grammar">
          <h1 className="titleBG-grammar">
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
          <div className="finalPanel-basic">
            <h2>Game completed!</h2>
            <h2>Score: {count}/10 </h2>
            {count > 4 ? (
              <div>
                <img
                  src={questions.length > 0 ? questions[10].pic_correct : ""}
                  className="confeti-basic"
                />
                <img
                  src={questions.length > 0 ? questions[10].pic_incorrect : ""}
                  className="pass-basic"
                />
              </div>
            ) : (
              <div>
                <img
                  src={questions.length > 0 ? questions[11].pic_correct : ""}
                  className="fail-basic"
                />
                <img
                  src={questions.length > 0 ? questions[11].pic_incorrect : ""}
                  className="loser-basic"
                />
              </div>
            )}
            <Link to="/games/basic/match" className="buttonCompleted-basic">
              Next Game
            </Link>
            <br />
            <Link to="/showscore" className="buttonCompleted-basic">
              Ranking
            </Link>
            <br />
            <Link to="/games/basic" className="buttonCompleted-basic">
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
