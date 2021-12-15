import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import "../../assets/styles/index.css";
import FormField from "../../components/Form/FormField";
import InputSelect from "../../components/Inputs/InputSelect";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center h4 mt-4 text-top-pag">
        <strong>Cadastro</strong>
      </h2>

      <div
        className="container mt-3 resg-pag-container"
        style={{ maxWidth: "800px" }}
      >
        <label htmlFor="signupFormName">Nome</label>
        <FormField
          type="text"
          name="name"
          id="signupFormName"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />

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

        <InputSelect
          label="Você quer criar uma conta como médico ou paciente?"
          id="role"
          name="role"
          onChange={props.handleChange}
          value={props.doctorFormInfo.role}
        >
          <option value="" disabled></option>
          <option value="Paciente">Paciente</option>
          <option value="Médico">Médico</option>
        </InputSelect>
      </div>

      <div className="width-max btn-container mb-3">
        <button className="btn-green btn-middle mt-3" type="submit">
          Cadastrar
        </button>
      </div>
      <div className="cadastro">
        <span>Já possui uma conta? </span>
        <Link to="/login">Clique aqui para fazer login!</Link>
      </div>
    </form>
  );
}

export default Signup;
