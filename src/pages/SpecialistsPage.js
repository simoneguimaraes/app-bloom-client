import { useState, useEffect } from "react";
import api from "../apis/api";

function SpecialistsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const doctorData = await api.get("/doctor-info/doctors");
        console.log(doctorData);
        setDoctors([...doctorData.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDoctors();
  }, []);

  return (
    <>
      {doctors.map((currentDoctor) => {
        return (
          <div className="doctor-cards">
            <p>
              Nome: <span>{currentDoctor.userId.name}</span>
            </p>
            <p>
              Especialidade: <span>{currentDoctor.specialty}</span>
            </p>
            <p>
              Prescreve Canabidiol: <span>{currentDoctor.prescription}</span>
            </p>
            <p>
              Cidade: <span>{currentDoctor.city}</span>
            </p>
            <p>
              Estado: <span>{currentDoctor.state}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default SpecialistsPage;
