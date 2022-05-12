import next from "../../../visual/intermediate/nextIntermediate.mp4";
import { Link } from "react-router-dom";
// import "./introbasic.css";
import start from "../../../visual/basic/start.png";

export default function NextIntermediate() {
  return (
    <div className="mainIntro-choose">
      <Link to="/games/intermediate">
        <h1 className="imageIntro-choose nextFirst-intermediate animate__animated animate__backInLeft animate__delay-3s">
          Next Level
        </h1>{" "}
        <h2 className="titleIntro-choose nextSecond-intermediate animate__animated animate__backInLeft animate__delay-4s">
          Intermediate
        </h2>
        <video autoPlay muted className="videoIntro-choose">
          <source src={next} type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}
