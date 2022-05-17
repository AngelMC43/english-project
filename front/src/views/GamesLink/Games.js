import { Link } from "react-router-dom";
import basic from "../../visual/main/basic.mp4";
import intermediate from "../../visual/main/intermediate.mp4";
import advanced from "../../visual/main/advanced.mp4";
import "./gamesLink.css";

export default function Games() {
  return (
    <div>
      <h1 className="title-link">Games</h1>
      <div className="container-link">
        <Link to="basic">
          <video loop autoPlay muted className="video-main">
            <source src={basic} type="video/mp4" />
          </video>
        </Link>
        <Link to="intermediate">
          <video loop autoPlay muted className="video-main">
            <source src={intermediate} type="video/mp4" />
          </video>{" "}
        </Link>
        <Link to="advanced">
          <video loop autoPlay muted className="video-main">
            <source src={advanced} type="video/mp4" />
          </video>{" "}
        </Link>
      </div>
    </div>
  );
}
