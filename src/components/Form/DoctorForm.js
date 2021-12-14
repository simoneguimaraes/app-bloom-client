import "../../assets/styles/index.css";

import InputRadio from "../Inputs/InputRadio";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputSelect from "../Inputs/InputSelect";
import InputTexto from "../Inputs/InputTexto";

//form para usar no registration do médico
// {
//     "specialty": "Psiquiatra",
//     "crmDoctor": 520015,
//     "prescription": "Sim",
//     "streetAddress": "rua costa e silva",
//     "city": "São Paulo",
//     "state": "São Paulo",
//     "phoneNumber": "1139876666",
//     "tags": ["Doença Degenerativa","Saúde Mental"]
//   }

function DoctorForm(props) {
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
      {/* tags */}
      {/* <InputCheckbox
        label="Informe seus assuntos preferenciais:"
        id="tags"
        name="tags"
        onChange={(event) =>
          props.setFormData({
            ...props.formData,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.formData.tags}
        required={true}
      /> */}

      <div className="btn-middle width-max">
        <button className="btn-pink" disabled={props.isSending} type="submit">
          {props.isSending ? (
            <span role="status" aria-hidden="true"></span>
          ) : null}
          {props.textBtn}
        </button>
      </div>
    </form>
  );
}

export default DoctorForm;

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
