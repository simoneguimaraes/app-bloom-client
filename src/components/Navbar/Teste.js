import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "../../assets/styles/index.css";

function Navbar(props) {
  const { logout, loggedInUser } = useContext(AuthContext);

  return (
    <>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          {/* <h5 class="text-white h4">Collapsed content</h5>
          <h2
          className={`${
            props.pag === "Home" ? "d-none" : null
          } navbar-brand text-white navbar-toggler border-0 mb-0`}
        >
          {props.pag}
        </h2> */}
          <Link to="/" className="nav-link link-secondary active">
            Home
          </Link>
          {loggedInUser.user ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link link-secondary">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link link-secondary">
                  Cadastrar
                </Link>
              </li>
            </>
          ) : null}
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
