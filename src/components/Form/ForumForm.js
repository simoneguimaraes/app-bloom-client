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
  console.log(props.formData);
  // async function handleFileUpload(file) {
  //   try {
  //     const uploadData = new FormData();

  //     uploadData.append("picture", file);

  //     const response = await api.post("/upload", uploadData);

  //     console.log(response);

  //     return response.data.url;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      props.setLoading(true);

      // const pictures = await handleFileUpload(props.formData.picture);

      const response = await api.post("/forum/create", {
        ...props.formData,

        // pictures,
        // tags: props.formData.tags.map((currentTagObj) => currentTagObj.value),
      });

      console.log(props.formData);
      props.setLoading(false);
    } catch (err) {
      console.error(err);
      props.setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="width-form d-flex flex-column"
      style={{ minWidth: "60%" }}
    >
      {/* Post */}
      <InputTexto
        label="Compartilhe a sua experiência..."
        placeholder="Compartilhe a sua experiência..."
        name="text"
        onChange={props.handleChange}
        value={props.formData.text}
        required={true}
        maxlength="200"
        className="input-post"
      />

      {/* Picture */}
      <FormField
        type="file"
        label="Compartilhar uma imagem:"
        id="productFormPicture"
        name="pictures"
        onChange={props.handleChange}
        readOnly={props.loading}
      />
      {/* Link */}
      <InputTexto
        label="Compartilhar um link:"
        name="websiteLink"
        onChange={props.handleChange}
        value={props.formData.websiteLink}
        required={true}
      />

      {/* Tags */}
      <p>Assunto do post:</p>
      <div className="forum-tags">
        {tagsForum.map((currentTag) => {
          return (
            <>
              <InputCheckbox
                label={currentTag}
                id={currentTag}
                name="tags"
                value={currentTag}
                onChange={props.handleTags}
                required={true}
              ></InputCheckbox>
            </>
          );
        })}
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

export default ForumForm;
