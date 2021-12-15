import "../assets/styles/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import PatientForm from "../components/Form/PatientForm";

function PatientProfile() {
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
  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    axios
      .post("http://localhost:4000", formData)
      .then(() => {
        setUserCreated(true);
        setIsSending(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(true);
      });
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
                textBtn="Cadastrar"
              />
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center mt-4">
            <div className="btn-container">
              <button
                className="btn-green"
                onClick={() => setNewRegistration(true)}
              >
                Criar nova conta
              </button>
            </div>
            <div className="btn-container">
              <Link to="/editar-cadastro">
                <button className="btn-green">Editar conta</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientProfile;
