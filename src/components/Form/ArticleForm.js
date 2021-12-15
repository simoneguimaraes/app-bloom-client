import "../../assets/styles/index.css";
import InputTexto from "../Inputs/InputTexto";
import axios from "axios";
import InputCheckbox from "../Inputs/InputCheckbox";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import FormField from "../Form/FormField";

const tagsArticle = [
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

function ArticleForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="width-form d-flex flex-column"
      style={{ minWidth: "60%" }}
    >
      {/* Título do Artigo */}
      <InputTexto
        label="Título do Artigo"
        name="title"
        onChange={props.handleChange}
        value={props.value}
        required={true}
        maxlength="200"
      />

      {/* Autores */}
      <InputTexto
        label="Autores do Artigo"
        name="authors"
        onChange={props.handleChange}
        value={props.value}
        required={true}
      />
      {/* Ano de Publicação */}
      <InputTexto
        label="Ano de Publicação: "
        name="yearPublished"
        onChange={props.handleChange}
        value={props.value}
        required={true}
      />

      {/* Link */}
      <InputTexto
        label="Compartilhar um link:"
        name="websiteLink"
        onChange={props.handleChange}
        value={props.value}
        required={true}
      />

      {/* Tags */}
      <p>Tema do Artigo:</p>
      <div className="forum-tags">
        {tagsArticle.map((currentTag) => {
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

export default ArticleForm;
