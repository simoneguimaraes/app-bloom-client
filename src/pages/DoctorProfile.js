import "../assets/styles/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import DoctorForm from "../components/Form/DoctorForm";

function DoctorProfile() {
  const [userCreated, setUserCreated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [newRegistration, setNewRegistration] = useState(false);
  const [formData, setFormData] = useState({
    specialty: "",
    crmDoctor: 0,
    prescription: "",
    streetAddress: "",
    city: "",
    state: "",
    phoneNumber: "",
    tags: [],
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
     {/* https://www.consultacrm.com.br/index/api */}

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
      <NavBar pag="Meu Cadastro" backButton="/" />
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
          <strong>Cadastro</strong>
        </h2>
      ) : null}
      <div className="container-items">
        {newRegistration ? (
          <div
            className="container mt-5 resg-pag-container"
            style={{ maxWidth: "800px" }}
          >
            <div className="w-100 m-auto d-flex justify-content-center">
              <Form
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
            <div>
              <button
                className="btn-green"
                onClick={() => setNewRegistration(true)}
              >
                Criar nova conta
              </button>
            </div>
            <div className="btn-middle">
              <Link to="/editar-cadastro">
                <button className="btn-dark">Editar conta</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorProfile;
