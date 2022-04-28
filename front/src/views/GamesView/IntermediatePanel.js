import { Link } from "react-router-dom";
import FinalPanel from "../../components/FinalPanel/FinalPanel";

export default function IntermediatePanel() {
  return (
    <div>
      <h1>menu intermedio</h1>
      <FinalPanel />
      <Link to="/games" className="btn btn-outline-info">
        Volver a empezar
      </Link>
    </div>
  );
}
