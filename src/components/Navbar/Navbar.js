import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "../../assets/styles/index.css";

function Navbar(props) {
  const [userName, setUserName] = useState("");
  const { logout, loggedInUser } = useContext(AuthContext);
  const params = useLocation();

  const json = localStorage.getItem("loggedInUser");
  const storedUser = JSON.parse(json || '""');

  useEffect(() => {
    if (storedUser !== "") {
      setUserName(storedUser.user.name.split(" ")[0]);
    }
  }, [storedUser, params]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bgColor">
      <div className="container-fluid">
        <h2
          className={`${
            props.pag === "Home" ? "d-none" : null
          } navbar-brand text-white navbar-toggler border-0 mb-0`}
        >
          {props.pag}
        </h2>
        {/* <p className="m-auto h5 text-light">Bloom</p> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            {loggedInUser.user.name ? (
              <>
                <li className="nav-item">
                  <Link to="/create-item" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/list-item" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : null}

            {!loggedInUser.user.name ? (
              <>
                <li className="nav-item border-start ms-2 ps-2">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Cadastrar
                  </Link>
                </li>
              </>
            ) : (
              <>
                <div className="dropdown ms-3 ps-3 border-start">
                  <span
                    className="nav-link dropdown-toggle me-3"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Bem vindo, {userName}
                  </span>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link to="/edit-user" className="dropdown-item">
                        Editar cadastro
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        onClick={logout}
                        className="dropdown-item"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
