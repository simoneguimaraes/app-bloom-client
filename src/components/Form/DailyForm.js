import "../../assets/styles/index.css";
import InputRadio from "../Inputs/InputRadio";

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
      <h2 className="text-center h4 mt-4 text-top-pag">
        <strong>Pesquisa diária</strong>
      </h2>
      <div
        className="container questions-container mb-3 text-center resg-pag-container"
        style={{ maxWidth: "800px" }}
      >
        {/* Bem-Estar Geral */}
        <p>Como está se sentindo hoje?</p>
        <InputRadio
          label="1"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.wellbeingToday}
          required={true}
        />
        <InputRadio
          label="2"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.wellbeingToday}
          required={true}
        />
        <InputRadio
          label="3"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.wellbeingToday}
          required={true}
        />
        <InputRadio
          label="4"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.wellbeingToday}
          required={true}
        />
        <InputRadio
          label="5"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.wellbeingToday}
          required={true}
        />

        {/* Alteração de Humor */}
        <p>Você teve alteração de humor ontem?</p>
        <InputRadio
          label="Sim"
          id="humorAlteration"
          name="humorAlteration"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.humorAlteration}
          required={true}
        />
        <InputRadio
          label="Não"
          id="humorAlteration"
          name="humorAlteration"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.humorAlteration}
          required={true}
        />

        {/* Nausea */}
        <p>Você sentiu náusea ontem?</p>
        <InputRadio
          label="Sim"
          id="nausea"
          name="nausea"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.nausea}
          required={true}
        />
        <InputRadio
          label="Não"
          id="nausea"
          name="nausea"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.nausea}
          required={true}
        />
        {/* Perda de Memória */}
        <p>Você teve perda de memória ontem?</p>
        <InputRadio
          label="Sim"
          id="memoryLoss"
          name="memoryLoss"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.memoryLoss}
          required={true}
        />
        <InputRadio
          label="Não"
          id="memoryLoss"
          name="memoryLoss"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.memoryLoss}
          required={true}
        />

        {/* Desorientação */}
        <p>Você se sentiu desorientado ontem?</p>
        <InputRadio
          label="Sim"
          id="desorientation"
          name="desorientation"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.desorientation}
          required={true}
        />
        <InputRadio
          label="Não"
          id="desorientation"
          name="desorientation"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.desorientation}
          required={true}
        />

        {/* Confusão */}

        <p>Você se confuso ontem?</p>
        <InputRadio
          label="Sim"
          id="dizziness"
          name="dizziness"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.dizziness}
          required={true}
        />
        <InputRadio
          label="Não"
          id="dizziness"
          name="dizziness"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.dizziness}
          required={true}
        />

        {/* Desinteria */}
        <p>Você teve desinteria ontem?</p>
        <InputRadio
          label="Sim"
          id="constipation"
          name="constipation"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.constipation}
          required={true}
        />
        <InputRadio
          label="Não"
          id="constipation"
          name="constipation"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              [event.target.name]: event.target.checked,
            })
          }
          checked={props.formData.constipation}
          required={true}
        />
      </div>
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

export default DailyForm;
