import "../assets/styles/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import PatientForm from "../components/Form/PatientForm";
import api from "../apis/api";
import { useNavigate } from "react-router-dom";

function PatientProfile() {
  const navigate = useNavigate();
  const [userCreated, setUserCreated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [newRegistration, setNewRegistration] = useState(false);
  const [formData, setFormData] = useState({
    birthdate: "",
    weight: 0,
    height: 0,
    gender: "",
    treatmentStartDate: "",
    motiveForTreatment: "",
    medicationFrequency: "",
    sleepHours: 0,
    weeklyExerciseHours: 0,
    profession: "",
    acceptedTerms: false,
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/patient-info/create", formData);
      console.log(response.data);
      navigate("/forum");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {userCreated ? (
        <>
          <div className="btn-middle">
            <Link to="/">
              <button className="btn-green">Voltar para Home</button>
            </Link>
          </div>
        </>
      ) : null}
      {newRegistration ? (
        <h2 className="text-center h4 mt-5 text-top-pag">
          <strong>Sobre mim</strong>
        </h2>
      ) : null}
      <div className="container-items">
        {newRegistration ? (
          <div
            className="container mt-5 resg-pag-container"
            style={{ maxWidth: "800px" }}
          >
            <div className="w-100 m-auto d-flex justify-content-center">
              <PatientForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
                isSending={isSending}
                textBtn="Confirmar"
              />
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center mt-4">
            {/* "/daily" */}
            <div className="btn-container">
              <button type="submit" className="btn-pink">
                <Link style={{ color: "white" }} to="/daily">
                  Pesquisa diária
                </Link>
              </button>
            </div>

            {/* Preencher Cadastro */}
            <div className="btn-container">
              <button
                className="btn-green"
                onClick={() => setNewRegistration(true)}
              >
                Preencher Meu Perfil
              </button>
            </div>

            {/* Editar Cadastro */}
            <div className="btn-container">
              <button type="submit" className="btn-green">
                <Link style={{ color: "white" }} to="/patient-info/update">
                  Editar Meu Perfil
                </Link>
              </button>
            </div>

            {/* "/forum" */}
            <div className="btn-container ">
              <button type="submit" className="btn-green">
                <Link style={{ color: "white" }} to="/forum">
                  Entrar no Fórum
                </Link>
              </button>
            </div>

            {/* "/doctor-info/doctors" */}
            <div className="btn-container">
              <button type="submit" className="btn-green">
                <Link style={{ color: "white" }} to="/doctor-info/doctors">
                  Ver os Especialistas
                </Link>
              </button>
            </div>

            {/* Excluir conta */}
            <div className="btn-container">
              <button type="submit" className="btn-black">
                <Link style={{ color: "white" }} to="/">
                  Excluir conta
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientProfile;
