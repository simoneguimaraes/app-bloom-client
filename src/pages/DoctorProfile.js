import "../assets/styles/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import DoctorForm from "../components/Form/DoctorForm";
import api from "../apis/api";
import { useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";

function DoctorProfile(props) {
  const [userCreated, setUserCreated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [newRegistration, setNewRegistration] = useState(false);
  const [errors, setErrors] = useState(false);

  function handleChange(event) {
    props.doctorFormInfoSetState({
      ...props.doctorFormInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);

    axios
      .get(
        `https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=&q=${props.doctorFormInfo.crmDoctor}&chave=1611662959&destino=json`
      )
      .then(async (result) => {
        if (result.data.total > 0) {
          try {
            const response = await api.post(
              "/doctor-info",
              props.doctorFormInfo
            );
            console.log(response);
          } catch (err) {
            if (err.response) {
              console.error(err.response);
              setErrors({ ...err.response.data.errors });
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post("http://localhost:4000", props.doctorFormInfo)
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
    <>
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
            <strong>Sobre o especialista</strong>
          </h2>
        ) : null}
        <div className="container-items">
          {newRegistration ? (
            <div
              className="container mt-5 resg-pag-container"
              style={{ maxWidth: "800px" }}
            >
              <div className="w-100 m-auto d-flex justify-content-center">
                <DoctorForm
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  doctorFormInfo={props.doctorFormInfo}
                  doctorFormInfoSetState={props.doctorFormInfoSetState}
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
                <Link to="/doctor/editar-cadastro">
                  <button className="btn-green">Editar conta</button>
                </Link>
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
      <div>
        {errors ? (
          <ErrorAlert>
            <span>CRM inválido</span>
          </ErrorAlert>
        ) : null}
      </div>
    </>
  );
}

export default DoctorProfile;
