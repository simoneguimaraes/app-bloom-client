import ArticleForm from "../components/Form/ArticleForm";
import "../assets/styles/index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import api from "../apis/api";

//artigos que os médicos podem postar

function Article(props) {
  const [loading, setLoading] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    yearPublished: 0,
    websiteLink: "",
    tags: [],
  });

  function handleChange(event) {
    props.setFormData({
      ...props.formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    axios.get("http://localhost:4000/api/");

    try {
      const response = await api.post("/articles", props.formData);
      console.log(response);
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

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

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     props.setLoading(true);

  //     const pictures = await handleFileUpload(props.formData.picture);

  //     const response = await api.post("/articles/create", {
  //       ...props.formData,
  //       pictures,
  //       tags: props.formData.tags.map((currentTagObj) => currentTagObj.value),
  //     });

  //     console.log(response);
  //     props.setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     props.setLoading(false);
  //   }
  // }
  // console.log(props);
  return (
    <div>
      <h2 className="text-center h4 mt-5 text-top-pag">
        <strong>Artigo</strong>
      </h2>
      <ArticleForm
        onChange={handleChange}
        loading={loading}
        setLoading={setLoading}
        formData={formData}
        setFormData={setFormData}
        isSending={isSending}
        textBtn="Enviar"
      />
    </div>
  );
}

export default Article;
