import { useState, useEffect } from "react";
import api from "../apis/api";
import { Link } from "react-router-dom";

function PatientsData() {
  const [patients, setPatients] = useState([]);
  const [patientsData, setPatientsData] = useState({
    treatmentStartDate: "",
    medicationFrequency: "",
    profession: "",
  });

  useEffect(() => {
    async function fetchPatients() {
      try {
        const patientsData = await api.get("/patient-info/patients");
        console.log(patientsData);
        setPatients([...patientsData.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPatients();
  }, []);

  return (
    <>
      <h2 className="text-center h4 m-4 text-top-pag">
        <strong>Base de Dados de Pacientes</strong>
      </h2>
      {patients.map((currentP) => {
        return (
          <div className="doctor-cards">
            <p>
              Início do Tratamento: <span>{currentP.treatmentStartDate}</span>
            </p>
            <p>
              Frequência de Medicamento:{" "}
              <span>{currentP.medicationFrequency}</span>
            </p>
            <p>
              Profissão: <span>{currentP.profession}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default PatientsData;
