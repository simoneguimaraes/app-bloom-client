import "../../assets/styles/index.css";
import InputTexto from "../Inputs/InputTexto";
import axios from "axios";
import InputCheckbox from "../Inputs/InputCheckbox";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import FormField from "../Form/FormField";

//fórum entre todos os usuários do app

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
  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/upload", uploadData);

      console.log(response);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      props.setLoading(true);

      const pictures = await handleFileUpload(props.formData.picture);

      const response = await api.post("/forum/create", {
        ...props.formData,
        pictures,
        tags: props.formData.tags.map((currentTagObj) => currentTagObj.value),
      });

      console.log(response);
      props.setLoading(false);
    } catch (err) {
      console.error(err);
      props.setLoading(false);
    }
  }

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
      <FormField
        type="file"
        label="Imagem"
        id="productFormPicture"
        name="pictures"
        onChange={props.handleChange}
        readOnly={props.loading}
      />
      {/* Link */}
      <InputTexto
        label="websiteLink"
        name="websiteLink"
        onChange={props.handleChange}
        value={props.formData.websiteLink}
        required={true}
      />

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
