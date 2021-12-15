import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import "../assets/styles/index.css";
import { AuthContext } from "../../contexts/authContext";
import FormField from "../../components/Form/FormField";

function DoctorTab(props) {
    return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center h4 mt-4 text-top-pag">
        <strong>Doctor Tab</strong>
        </h1>

      <div className="width-max btn-container mb-3">
        <button className="btn-green btn-middle mt-3" type="submit">
          Informações dos pacientes
        </button>
        <button className="btn-green btn-middle mt-3" type="submit">
          Enviar novo artigo
        </button>
      </div>
    </form>
  );
}

export default Login;
