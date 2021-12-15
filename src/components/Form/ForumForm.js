import "../../assets/styles/index.css";
import InputTexto from "../Inputs/InputTexto";
import axios from "axios";

//fórum entre todos os usuários do app
// {
// text: "",
// websiteLink: "",
// pictures: "",
// tags: [],
// }

const tagsForum = [
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

function ForumForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="width-form d-flex flex-column"
      style={{ minWidth: "60%" }}
    >
      {/* Post */}
      <InputTexto
        label="Compartilhe a sua experiência..."
        name="text"
        onChange={props.handleChange}
        value={props.formData.text}
        required={true}
      />

      {/* Picture */}

      {/* Link */}

      {/* Tags */}
      <p>Assunto:</p>
      {tagsForum.map((currentTag) => {
        return (
          <>
            <InputCheckbox
              label={currentTag}
              id={currentTag}
              name="tags"
              onChange={(event) =>
                props.setFormData({
                  ...props.formData,
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

export default ForumForm;
