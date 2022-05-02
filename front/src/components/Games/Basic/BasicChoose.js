import { useState, useEffect } from "react";
import "./basic.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function BasicChoose() {
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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/games/basic/choose`, {
        mode: "cors",
      });
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
          type: "choose",
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
    handleJump();
    handleCount();
  }
  const handleJump = (e) => {
    if (jump < 9) {
      setJump(jump + 1);
    } else if (jump === 9) {
      setJump(jump + 1);
      setCount(count + 1);
      handleScore();
    } else {
    }
  };

  console.log("ESTO", count);

  return (
    <div>
      <div className="main-choose">
        <div className="inside-container-choose">
          <h1 className="">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>

          <h3 className="answer-choose">
            <div>
              <img
                src={questions.length > 0 ? questions[jump].pic_correct : ""}
                onClick={handleJoined}
                className="img-choose"
              />
            </div>
            <div>
              <img
                src={questions.length > 0 ? questions[jump].pic_incorrect : ""}
                onClick={handleJump}
                className="img-choose"
              />
            </div>
            {/* <h1 className="visually-hidden" id="correcto">
                Correcto
              </h1>

              <h1 className="visually-hidden" id="incorrecto">
                Incorrecto
              </h1> */}
          </h3>
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
            <Link to="/games/basic/grammar" className="buttonCompleted-basic">
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
