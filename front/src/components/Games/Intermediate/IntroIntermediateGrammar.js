import intro from "../../../visual/intermediate/introIntermediateGrammar.mp4";
import { Link } from "react-router-dom";
import "./introIntermediate.css";
import start from "../../../visual/basic/start.png";

export default function IntroIntermediateGrammar() {
  return (
    <div className="mainIntro-choose">
      <Link to="/games/intermediate/grammar">
        <img
          src={start}
          className="imageIntro-choose animate__animated animate__backInLeft animate__delay-3s"
        />{" "}
        <h4 className="titleIntro-choose animate__animated animate__backInLeft animate__delay-3s">
          Start
        </h4>{" "}
        <h1 className="titleIntro-grammarIntermedite animate__animated animate__backInRight animate__delay-2s">
          Grammar
        </h1>
        <video autoPlay muted className="videoIntro-choose">
          <source src={intro} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
