import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "../../assets/styles/index.css";

function BottomNavbar(props) {
  const { logout, loggedInUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar-margin">
        <nav
          class="navbar fixed-bottom navbar-light"
          style={{ backgroundColor: "hsl(0, 27%, 80%)" }}
        >
          <a class="navbar-brand ml-3" href="#">
            Meu Perfil
          </a>
          <a class="navbar-brand" href="#">
            Fórum
          </a>
          <a class="navbar-brand" href="#">
            Médicos
          </a>

          {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Features
              </a>
              <a class="nav-item nav-link" href="#">
                Pricing
              </a>
              <a class="nav-item nav-link disabled" href="#">
                Disabled
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default BottomNavbar;
