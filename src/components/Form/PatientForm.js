import "../../assets/styles/index.css";
import FormField from "./FormField";
import InputSelect from "../Inputs/InputSelect";
import InputTexto from "../Inputs/InputTexto";
import InputCheckbox from "../Inputs/InputCheckbox";
import Navbar from "../Navbar/Navbar";

//form para usar no registration do paciente
// {
//     birthdate: "",
//     weight: 0,
//     height: 0,
//     gender: "",
//     treatmentStartDate: "",
//     motiveForTreatment: "",
//     medicationFrequency: "",
//     sleepHours: 0,
//     weeklyExerciseHours: 0,
//     profession: "",
//     acceptedTerms: false,
//   }
function PatientForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="width-form d-flex flex-column"
      style={{ minWidth: "60%" }}
    >
      {/* Data de Nascimento */}
      <InputTexto
        label="Qual é a sua data de nascimento?"
        name="birthdate"
        onChange={props.handleChange}
        value={props.formData.birthdate}
        required={true}
      />

      {/* Peso */}
      <InputTexto
        label="Qual é o seu peso?"
        name="weight"
        onChange={props.handleChange}
        value={props.formData.weight}
        required={true}
      />

      {/* Altura */}
      <InputTexto
        label="Qual é a sua altura?"
        name="height"
        onChange={props.handleChange}
        value={props.formData.height}
        required={true}
      />

      {/* Gênero */}
      <InputSelect
        label="Como gostaria de ser chamado?"
        id="gender"
        name="gender"
        onChange={props.handleChange}
        value={props.formData.gender}
      >
        <option value="" disabled></option>
        <option value="Mulher">Sra.</option>
        <option value="Homem">Sr.</option>
        <option value="Outro">Prefiro não dizer</option>
      </InputSelect>

      {/* Data de Início do Tratamento */}
      <InputTexto
        label="Quando você começou o tratamento com Canabidiol?"
        name="treatmentStartDate"
        onChange={props.handleChange}
        value={props.formData.treatmentStartDate}
        required={true}
      />

      {/* Motivo do Tratamento */}
      <InputSelect
        label="Qual é o principal motivo de buscar tratamento?"
        id="motiveForTreatment"
        name="motiveForTreatment"
        onChange={props.handleChange}
        value={props.formData.motiveForTreatment}
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
        onChange={props.handleChange}
        value={props.formData.medicationFrequency}
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
        onChange={props.handleChange}
        value={props.formData.sleepHours}
        required={true}
      />

      {/* Horas de Exercício por Semana */}
      <InputTexto
        label="Quantas horas costuma se exercitar na semana? (em média?)"
        name="weeklyExerciseHours"
        onChange={props.handleChange}
        value={props.formData.weeklyExerciseHours}
        required={true}
      />

      {/* Profissão */}
      <InputTexto
        label="Quantas horas costuma se exercitar na semana? (em média?)"
        name="weeklyExerciseHours"
        onChange={props.handleChange}
        value={props.formData.weeklyExerciseHours}
        required={true}
      />
      {/* Input Termos e Condições  */}
      {/* <InputCheckbox
        label="Eu aceito os Termos e Condições."
        id="acceptedTerms"
        name="acceptedTerms"
        onChange={(event) =>
          props.setFormData({
            ...props.formData,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.formData.acceptedTerms}
        required={true}
      /> */}

      <div className="width-max btn-container">
        <button className="btn-green" disabled={props.isSending} type="submit">
          {props.isSending ? (
            <span role="status" aria-hidden="true"></span>
          ) : null}
          {props.textBtn}
        </button>
      </div>
    </form>
  );
}

export default PatientForm;

//    Input Email
//   <FormField
//     label="Digite o seu e-mail:"
//     id="exampleInputEmail1"
//     type="email"
//     name="email"
//     onChange={props.handleChange}
//     value={props.formData.email}
//     required={true}
//   />
// //   {/* Input senha */}
//   <FormField
//     label="Defina a sua senha:"
//     id="exampleInputPassword1"
//     type="password"
//     name="password"
//     onChange={props.handleChange}
//     value={props.formData.password}
//     required={true}
//   />
