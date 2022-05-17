import intro from "../../../visual/intermediate/introIntermediateVocabulary.mp4";
import { Link } from "react-router-dom";
import "./introIntermediate.css";
import start from "../../../visual/basic/start.png";

export default function IntroIntermediateVocabulary() {
  return (
    <div className="introBasicVocabulary">
      <Link to="/games/intermediate/vocabulary">
        <img
          src={start}
          className="imageIntro-choose animate__animated animate__backInLeft animate__delay-3s"
        />{" "}
        <h4 className="titleIntro-choose animate__animated animate__backInLeft animate__delay-3s">
          Start
        </h4>
        <video autoPlay muted className="videoIntro-choose">
          <source src={intro} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
