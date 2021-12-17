import "../assets/styles/index.css";
import InputSelect from "../components/Inputs/InputSelect";
import InputTexto from "../components/Inputs/InputTexto";
import { useNavigate } from "react-router-dom";
import api from "../apis/api";
import { useState, useEffect } from "react";

function PatientEditProfile(props) {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.patch("/patient-info/update", formData);

      navigate("/forum");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchPatients() {
      try {
        const patientData = await api.get("/patient-info");
        console.log(patientData);
        setFormData({...patientData.data});
      } catch (err) {
        console.log(err);
      }
    }
    fetchPatients();
  }, []);


  
  return (
    <form
      onSubmit={handleSubmit}
      className="width-form d-flex flex-column"
      style={{ minWidth: "60%" }}
    >
      <h2 className="text-center h4 mt-4 text-top-pag">
        <strong>Editar meu perfil</strong>
      </h2>
      <div
        className="container mt-4 resg-pag-container"
        style={{ maxWidth: "800px" }}
      >
        {/* Gênero */}
        <InputSelect
          label="Como gostaria de ser chamado?"
          id="gender"
          name="gender"
          onChange={handleChange}
          value={formData.gender}
        >
          <option value="" disabled></option>
          <option value="Mulher">Sra.</option>
          <option value="Homem">Sr.</option>
          <option value="Outro">Prefiro não dizer</option>
        </InputSelect>

        {/* Data de Nascimento */}
        <InputTexto
          label="Qual é a sua data de nascimento?"
          name="birthdate"
          onChange={handleChange}
          value={formData.birthdate}
          required={true}
        />

        {/* Peso */}
        <InputTexto
          label="Qual é o seu peso?"
          name="weight"
          onChange={handleChange}
          value={formData.weight}
          required={true}
        />

        {/* Altura */}
        <InputTexto
          label="Qual é a sua altura?"
          name="height"
          onChange={handleChange}
          value={formData.height}
          required={true}
        />

        {/* Profissão */}
        <InputTexto
          label="Qual é a sua profissão?"
          name="profession"
          onChange={handleChange}
          value={formData.profession}
          required={true}
        />

        {/* Data de Início do Tratamento */}
        <InputTexto
          label="Quando você começou o tratamento com Canabidiol?"
          name="treatmentStartDate"
          onChange={handleChange}
          value={formData.treatmentStartDate}
          required={true}
        />

        {/* Motivo do Tratamento */}
        <InputSelect
          label="Qual é o principal motivo de buscar tratamento?"
          id="motiveForTreatment"
          name="motiveForTreatment"
          onChange={handleChange}
          value={formData.motiveForTreatment}
        >
          <option value="" disabled></option>
          <option value="Ansiedade">Ansiedade</option>
          <option value="Fibromialgia">Fibromialgia</option>
          <option value="Esclerose Múltipla">Esclerose Múltipla</option>
          <option value="Mal de Parkinson">Mal de Parkinson</option>
          <option value="Epilepsia">Epilepsia</option>
          <option value="Esquizofrenia">Esquizofrenia</option>
          <option value="Glaucoma">Glaucoma</option>
          <option value="Depressão">Depressão</option>
          <option value="Outros">Outros</option>
        </InputSelect>

        {/* Frequência da Medicação */}
        <InputSelect
          label="Qual é a frequência em que toma a medicação?"
          id="medicationFrequency"
          name="medicationFrequency"
          onChange={handleChange}
          value={formData.medicationFrequency}
        >
          <option value="" disabled></option>
          <option value="Todos os dias">Todos os dias</option>
          <option value="1 a 2 vezes por semana">1 a 2 vezes por semana</option>
          <option value="De 3 a 4 vezes por semana">
            De 3 a 4 vezes por semana
          </option>
          <option value="De 4 a 6 vezes por semana">
            De 4 a 6 vezes por semana
          </option>
          <option value="Ainda não iniciei o tratamento">
            Ainda não iniciei o tratamento
          </option>
        </InputSelect>

        {/* Horas de Sono */}
        <InputTexto
          label="Quantas horas costuma dormir por noite? (em média?)"
          name="sleepHours"
          onChange={handleChange}
          value={formData.sleepHours}
          required={true}
        />

        {/* Horas de Exercício por Semana */}
        <InputTexto
          label="Quantas horas costuma se exercitar na semana? (em média?)"
          name="weeklyExerciseHours"
          onChange={handleChange}
          value={formData.weeklyExerciseHours}
          required={true}
        />
      </div>
      <div className="width-max btn-container">
        <button className="btn-green" disabled={props.isSending} type="submit">
          {props.isSending ? (
            <span role="status" aria-hidden="true"></span>
          ) : null}
          Editar
        </button>
      </div>
    </form>
  );
}

export default PatientEditProfile;
