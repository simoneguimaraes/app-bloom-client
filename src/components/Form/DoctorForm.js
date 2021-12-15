import "../../assets/styles/index.css";
import { useEffect } from "react";
import InputRadio from "../Inputs/InputRadio";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputSelect from "../Inputs/InputSelect";
import InputTexto from "../Inputs/InputTexto";
import axios from "axios";

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

const tagsDoctor = [
  "Doença Degenerativa",
  "Saúde Mental",
  "Ansiedade",
  "Fibromialgia",
  "Esclerose Múltipla",
  "Mal de Parkinson",
  "Epilepsia",
  "Esquizofrenia",
  "Glaucoma",
  "Depressão",
  "Outro",
];

function DoctorForm(props) {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=&q=${props.doctorFormInfo.crmDoctor}&chave=1611662959&destino=xml`
  //     )
  //     .then((result) => {
  //       console
  //         .log
  //         // if(result.data.includes("<total>0</total>")) {
  //         //   async function handleSubmit(event) {
  //         //     event.preventDefault();

  //         //     try {
  //         //       const response = await api.post("/login", state);
  //         //       console.log(response);

  //         //     } catch (err) {
  //         //       console.error(err.response);
  //         //       setErrors({ ...err.response.data.errors });
  //         //     }
  //         //   }

  //         // }
  //         ();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [props.doctorFormInfo.crmDoctor]);

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
        value={props.doctorFormInfo.specialty}
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
        value={props.doctorFormInfo.crmDoctor}
        required={true}
      />
      {/* https://www.consultacrm.com.br/index/api */}

      {/* prescription */}
      <p>Você realiza a prescrição do Canabidiol?</p>
      <InputRadio
        label="Sim"
        id="prescription"
        name="prescription"
        onChange={(event) =>
          props.doctorFormInfoSetState({
            ...props.doctorFormInfo,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.doctorFormInfo.prescription}
        required={true}
      />
      <InputRadio
        label="Não"
        id="prescription"
        name="prescription"
        onChange={(event) =>
          props.doctorFormInfoSetState({
            ...props.doctorFormInfo,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.doctorFormInfo.prescription}
        required={true}
      />

      {/* streetAddress */}
      c

      {/* city */}
      <InputTexto
        label="Qual é a sua cidade?"
        name="city"
        onChange={props.handleChange}
        value={props.doctorFormInfo.city}
        required={true}
      />

      {/* state */}
      <InputTexto
        label="Qual é o seu estado?"
        name="state"
        onChange={props.handleChange}
        value={props.doctorFormInfo.state}
        required={true}
      />

      {/* phoneNumber */}
      <InputTexto
        label="Qual é o seu telefone?"
        name="phoneNumber"
        onChange={props.handleChange}
        value={props.doctorFormInfo.phoneNumber}
        required={true}
      />
      {/* tags */}
      <p>Informe os seus assuntos preferenciais:</p>
      {tagsDoctor.map((currentTag) => {
        return (
          <>
            <InputCheckbox
              label={currentTag}
              id={currentTag}
              name="tags"
              onChange={(event) =>
                props.doctorFormInfoSetState({
                  ...props.doctorFormInfo,
                  [event.target.name]: event.target.checked,
                })
              }
              required={true}
            ></InputCheckbox>
          </>
        );
      })}

      <div className="width-max btn-container">
        <button
          className="btn-green btn-middle"
          disabled={props.isSending}
          type="submit"
        >
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
