import "../../assets/styles/index.css";

import InputRadio from "../Inputs/InputRadio";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputSelect from "../Inputs/InputSelect";
import InputTexto from "../Inputs/InputTexto";

//form para as perguntas diárias
// {
//     "wellbeingToday": 6,
//     "humorAlteration": "Sim",
//     "nausea": "Não",
//     "memoryLoss": "Sim",
//     "desorientation": "Sim",
//     "dizziness": "Não",
//     "constipation": "Sim"
// }

function DailyForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="width-form d-flex flex-column"
      style={{ minWidth: "60%" }}
    >
      {/* Especialidade */}
      <InputSelect
        label="Qual é a sua especialidade?"
        id="specialty"
        name="specialty"
        onChange={props.handleChange}
        value={props.formData.specialty}
      >
        <option value="" disabled></option>
        <option value="Psiquiatra">Psiquiatra</option>
        <option value="Neurologista">Neurologista</option>
        <option value="Outro">Outro</option>
      </InputSelect>

      {/* crmDoctor */}
      <InputTexto
        label="Qual é o seu CRM?"
        name="crmDoctor"
        onChange={props.handleChange}
        value={props.formData.crmDoctor}
        required={true}
      />
      {/* https://www.consultacrm.com.br/index/api */}

      {/* prescription */}
      <InputRadio
        label="Você realiza a prescrição do Canabidiol?"
        id="prescription"
        name="prescription"
        onChange={(event) =>
          props.setFormData({
            ...props.formData,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.formData.prescription}
        required={true}
      />

      {/* streetAddress */}
      <InputTexto
        label="Qual é a rua do seu consultório?"
        name="streetAddress"
        onChange={props.handleChange}
        value={props.formData.streetAddress}
        required={true}
      />

      {/* city */}
      <InputTexto
        label="Qual é a sua cidade?"
        name="city"
        onChange={props.handleChange}
        value={props.formData.city}
        required={true}
      />

      {/* state */}
      <InputTexto
        label="Qual é o seu estado?"
        name="state"
        onChange={props.handleChange}
        value={props.formData.state}
        required={true}
      />

      {/* phoneNumber */}
      <InputTexto
        label="Qual é o seu telefone?"
        name="phoneNumber"
        onChange={props.handleChange}
        value={props.formData.phoneNumber}
        required={true}
      />
     

<div className="width-max btn-container">
        <button className="btn-green btn-middle" disabled={props.isSending} type="submit">
          {props.isSending ? (
            <span role="status" aria-hidden="true"></span>
          ) : null}
          {props.textBtn}
        </button>
      </div>
    </form>
  );
}

export default DailyForm;