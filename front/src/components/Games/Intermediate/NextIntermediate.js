import next from "../../../visual/intermediate/nextIntermediate.mp4";
import { Link } from "react-router-dom";
import "./introIntermediate.css";

export default function NextIntermediate() {
  return (
    <div className="mainIntroNext">
      <Link to="/games/intermediate">
        <h1 className="nextFirst-intermediate animate__animated animate__backInLeft animate__delay-3s">
          Next Level
        </h1>{" "}
        <h2 className="nextSecond-intermediate animate__animated animate__backInLeft animate__delay-4s">
          Intermediate
        </h2>
        <video autoPlay muted className="videoIntro-choose">
          <source src={next} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
