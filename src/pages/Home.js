import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/index.css";

function Home() {
  return (
    <div className="text-center">
      <h2 className="logo-title">Bloom</h2>

      <div className="d-flex flex-column align-items-center">
        {/* <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup!
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
