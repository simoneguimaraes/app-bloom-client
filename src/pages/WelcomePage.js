import "../assets/styles/index.css";
import { Link } from "react-router-dom";
import logoBloom from "../assets/images/logo-bloom.png";

function WelcomePage() {
  return (
    <div className="welcomepage-container">
      <p className="logo-title">bloom</p>
      <p>
        <img src={logoBloom} className="welcomepage-logo-img" />
      </p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn-green" to="/auth/signup">
          Login
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
