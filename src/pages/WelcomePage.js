import "../assets/styles/index.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="text-center">
      <p className="logo-title">bloom</p>

      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup!
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
