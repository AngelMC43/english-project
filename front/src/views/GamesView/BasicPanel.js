import { Link } from "react-router-dom";
import FinalPanel from "../../components/FinalPanel/FinalPanel";

export default function BasicPanel() {
  return (
    <div>
      <h1>menu basico</h1>
      <FinalPanel />
      <Link to="/games" className="btn btn-outline-info">
        Volver a empezar
      </Link>
    </div>
  );
}
