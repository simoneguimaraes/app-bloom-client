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
          value="1"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={props.handleChange}
          checked={props.formData.wellbeingToday === "1"}
          required={true}
        />
        <InputRadio
          label="2"
          value="2"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={props.handleChange}
          checked={props.formData.wellbeingToday === "2"}
          required={true}
        />
        <InputRadio
          label="3"
          value="3"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={props.handleChange}
          checked={props.formData.wellbeingToday === "3"}
          required={true}
        />
        <InputRadio
          label="4"
          value="4"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={props.handleChange}
          checked={props.formData.wellbeingToday === "4"}
          required={true}
        />
        <InputRadio
          label="5"
          value="5"
          id="wellbeingToday"
          name="wellbeingToday"
          onChange={props.handleChange}
          checked={props.formData.wellbeingToday === "5"}
          required={true}
        />

        {/* Alteração de Humor */}
        <p>Você teve alteração de humor ontem?</p>
        <InputRadio
          label="Sim"
          value="Sim"
          id="humorAlteration"
          name="humorAlteration"
          onChange={props.handleChange}
          checked={props.formData.humorAlteration === "Sim"}
          required={true}
        />
        <InputRadio
          label="Não"
          value="Não"
          id="humorAlteration"
          name="humorAlteration"
          onChange={props.handleChange}
          checked={props.formData.humorAlteration === "Não"}
          required={true}
        />

        {/* Nausea */}
        <p>Você sentiu náusea ontem?</p>
        <InputRadio
          label="Sim"
          value="Sim"
          id="nausea"
          name="nausea"
          onChange={props.handleChange}
          checked={props.formData.nausea === "Sim"}
          required={true}
        />
        <InputRadio
          label="Não"
          value="Não"
          id="nausea"
          name="nausea"
          onChange={props.handleChange}
          checked={props.formData.nausea === "Não"}
          required={true}
        />
        {/* Perda de Memória */}
        <p>Você teve perda de memória ontem?</p>
        <InputRadio
          label="Sim"
          value="Sim"
          id="memoryLoss"
          name="memoryLoss"
          onChange={props.handleChange}
          checked={props.formData.memoryLoss === "Sim"}
          required={true}
        />
        <InputRadio
          label="Não"
          value="Não"
          id="memoryLoss"
          name="memoryLoss"
          onChange={props.handleChange}
          checked={props.formData.memoryLoss === "Não"}
          required={true}
        />

        {/* Desorientação */}
        <p>Você se sentiu desorientado ontem?</p>
        <InputRadio
          label="Sim"
          value="Sim"
          id="desorientation"
          name="desorientation"
          onChange={props.handleChange}
          checked={props.formData.desorientation === "Sim"}
          required={true}
        />
        <InputRadio
          label="Não"
          value="Não"
          id="desorientation"
          name="desorientation"
          onChange={props.handleChange}
          checked={props.formData.desorientation === "Não"}
          required={true}
        />

        {/* Confusão */}

        <p>Você se confuso ontem?</p>
        <InputRadio
          label="Sim"
          value="Sim"
          id="dizziness"
          name="dizziness"
          onChange={props.handleChange}
          checked={props.formData.dizziness === "Sim"}
          required={true}
        />
        <InputRadio
          label="Não"
          value="Não"
          id="dizziness"
          name="dizziness"
          onChange={props.handleChange}
          checked={props.formData.dizziness === "Não"}
          required={true}
        />

        {/* Desinteria */}
        <p>Você teve desinteria ontem?</p>
        <InputRadio
          label="Sim"
          value="Sim"
          id="constipation"
          name="constipation"
          onChange={props.handleChange}
          checked={props.formData.constipation === "Sim"}
          required={true}
        />
        <InputRadio
          label="Não"
          value="Não"
          id="constipation"
          name="constipation"
          onChange={props.handleChange}
          checked={props.formData.constipation === "Não"}
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
