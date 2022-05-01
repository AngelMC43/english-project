import { useState, useEffect } from "react";
import "./basic.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function BasicVocabulary() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  // const [newScore, setNewScore] = useState({
  //   idUser: "",
  //   level: "",
  //   type: "",
  //   score: "",
  // });
  console.log("count es", count);

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
          level: "basic",
          type: "vocabulary",
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

  console.log("count es", count);

  return (
    <div>
      <div className="main-vocabulary">
        <div className="inside-container-vocabulary">
          <h1 className="">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>
          <div className="div">
            <img
              src={questions.length > 0 ? questions[jump].pic_correct : ""}
              className="img-option-vocabulary"
            />
          </div>
          <h3 className="answer-vocabulary">
            <div className="button-container-vocabulary">
              <button
                onClick={handleJoined}
                className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].correct : ""}
              </button>
            </div>
            <div className="button-container-vocabulary">
              <button
                onClick={handleJump}
                className="button-push-vocabulary btn btn-outline-primary accent-4 z-depth-3 section"
              >
                {questions.length > 0 ? questions[jump].incorrect_a : ""}
              </button>

              {/* <h1 className="visually-hidden" id="correcto">
                Correcto
              </h1>

              <h1 className="visually-hidden" id="incorrecto">
                Incorrecto
              </h1> */}
            </div>
          </h3>
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
            <Link to="/games/basic/choose" className="button-completed">
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
