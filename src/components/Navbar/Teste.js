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
          {/* 
        class="navbar navbar-light"
        style={{ backgroundColor: "hsl(0, 27%, 80%)" }} */}
          <Link to="/" className="nav-link link-secondary active">
            Home
          </Link>

          {!loggedInUser.user.name ? (
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
          ) : (
            <>
              <div className="nav-link link-success">
                <span>
                  <strong>Olá, {loggedInUser.user.name}</strong>{" "}
                </span>
              </div>
              {loggedInUser.user.role === "PATIENT" ? (
                <>
                  <Link to="/patient-info" className="nav-link link-secondary">
                    Meu Perfil de Paciente
                  </Link>
                  <Link to="/forum" className="nav-link link-secondary">
                    Fórum
                  </Link>
                  <Link
                    to="/doctor-info/doctors"
                    className="nav-link link-secondary"
                  >
                    Ver os Especialistas
                  </Link>
                  <Link
                    to="/login"
                    onClick={logout}
                    className="nav-link link-secondary"
                  >
                    Sair
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/doctor-info" className="nav-link link-secondary">
                    Meu Perfil de Médico
                  </Link>
                  <Link to="/forum" className="nav-link link-secondary">
                    Fórum
                  </Link>
                  <Link
                    to="/login"
                    onClick={logout}
                    className="nav-link link-secondary"
                  >
                    Sair
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <nav
        class="navbar navbar-light"
        style={{ backgroundColor: "hsl(0, 27%, 80%)" }}
      >
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
