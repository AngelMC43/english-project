import { useState, useEffect } from "react";
import "./basic.css";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../../context/LoginContext";

export default function BasicMatch() {
  const [questions, setQuestions] = useState([]);
  const [jump, setJump] = useState(0);
  const [count, setCount] = useState(0);
  const { userLogged } = useLoginContext();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/games/basic/match`, {
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
          type: "match",
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

  console.log("count", count);
  console.log("jump", jump);

  return (
    <div className="main-match">
      <div className="inside-container-match">
        <div>
          <h1 className="title-match d-flex justify-content-center">
            {questions.length > 0 ? questions[jump].question : ""}
          </h1>
        </div>

        <div>
          <div className="d-flex">
            {questions[jump] === questions[0] ? (
              <img
                src={questions.length > 0 ? questions[0].pic_correct : ""}
                onClick={handleJoined}
                className="bird-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[0].pic_correct : ""}
                onClick={handleJump}
                className="bird-match"
              />
            )}
            {questions[jump] === questions[1] ? (
              <img
                src={questions.length > 0 ? questions[1].pic_correct : ""}
                onClick={handleJoined}
                className="plane-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[1].pic_correct : ""}
                onClick={handleJump}
                className="plane-match"
              />
            )}
          </div>
          <div className="d-flex justify-content-between">
            {questions[jump] === questions[2] ? (
              <img
                src={questions.length > 0 ? questions[2].pic_correct : ""}
                onClick={handleJoined}
                className="apple-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[2].pic_correct : ""}
                onClick={handleJump}
                className="apple-match"
              />
            )}
            {questions[jump] === questions[3] ? (
              <img
                src={questions.length > 0 ? questions[3].pic_correct : ""}
                onClick={handleJoined}
                className="house-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[3].pic_correct : ""}
                onClick={handleJump}
                className="house-match"
              />
            )}
            {questions[jump] === questions[4] ? (
              <img
                src={questions.length > 0 ? questions[4].pic_correct : ""}
                onClick={handleJoined}
                className="parrot-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[4].pic_correct : ""}
                onClick={handleJump}
                className="parrot-match"
              />
            )}
          </div>
          <div className="d-flex">
            {questions[jump] === questions[5] ? (
              <img
                src={questions.length > 0 ? questions[5].pic_correct : ""}
                onClick={handleJoined}
                className="cat-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[5].pic_correct : ""}
                onClick={handleJump}
                className="cat-match"
              />
            )}
            {questions[jump] === questions[6] ? (
              <img
                src={questions.length > 0 ? questions[6].pic_correct : ""}
                onClick={handleJoined}
                className="car-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[6].pic_correct : ""}
                onClick={handleJump}
                className="car-match"
              />
            )}
          </div>
          <div className="d-flex justify-content-between">
            {questions[jump] === questions[7] ? (
              <img
                src={questions.length > 0 ? questions[7].pic_correct : ""}
                onClick={handleJoined}
                className="dog-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[7].pic_correct : ""}
                onClick={handleJump}
                className="dog-match"
              />
            )}
            {questions[jump] === questions[8] ? (
              <img
                src={questions.length > 0 ? questions[8].pic_correct : ""}
                onClick={handleJoined}
                className="chicken-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[8].pic_correct : ""}
                onClick={handleJump}
                className="chicken-match"
              />
            )}
            {questions[jump] === questions[9] ? (
              <img
                src={questions.length > 0 ? questions[9].pic_correct : ""}
                onClick={handleJoined}
                className="ball-match"
              />
            ) : (
              <img
                src={questions.length > 0 ? questions[9].pic_correct : ""}
                onClick={handleJump}
                className="ball-match"
              />
            )}
            {questions[10] == questions[jump] ? (
              <div>{questions[10] ? (count + 1, handleScore()) : ""}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>
        {questions[10] === questions[jump] ? (
          <div className="finalPanel-matchBasic">
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
            <Link to="/games/intermediate" className="buttonCompleted-basicRed">
              Next Level!
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
      </div>
    </div>
  );
}
