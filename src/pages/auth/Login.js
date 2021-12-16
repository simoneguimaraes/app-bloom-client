import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import "../../assets/styles/index.css";
import { AuthContext } from "../../contexts/authContext";
import FormField from "../../components/Form/FormField";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      if (response.data.user.role === "PATIENT") {
        navigate("/patient-info");
      } else {
        navigate("/doctor-info");
      }
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        setErrors({ ...err.response.data.errors });
      } else {
        console.error(err);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center h4 mt-4 text-top-pag">
        <strong>Login</strong>
      </h2>
      <div
        className="container mt-3 resg-pag-container"
        style={{ maxWidth: "800px" }}
      >
        <label htmlFor="signupFormEmail">E-mail</label>
        <FormField
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
        <label htmlFor="signupFormPassword">Senha</label>
        <FormField
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div className="width-max btn-container mb-3">
        <button className="btn-green btn-middle mt-3" type="submit">
          Entrar
        </button>
      </div>
      <div className="cadastro">
        <span>Ainda não tem uma conta? </span>
        <Link to="/signup">Clique aqui para fazer o cadastro!</Link>
      </div>
    </form>
  );
}

export default Login;
