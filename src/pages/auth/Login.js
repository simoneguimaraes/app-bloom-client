import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";

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
      navigate("/");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center h4 mt-5 text-top-pag">
        <strong>Login</strong>
      </h2>
      <div
        className="width-form d-flex flex-column"
        style={{ minWidth: "60%" }}
      >
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <FormField
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormPassword">Password</label>
        <FormField
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div></div>

      <div className="width-max btn-container mb-3">
        <button className="btn-green btn-middle" type="submit">
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
