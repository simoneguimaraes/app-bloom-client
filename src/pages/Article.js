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
    pictures: "",
    tags: [],
  });

  function handleChange(event) {
    props.setFormData({
      ...props.formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("http://localhost:4000/api/").then(async (result) => {
      try {
        const response = await api.post("/article", props.formData);
        console.log(response);
      } catch (err) {
        if (err.response) {
          console.error(err.response);
          // setErrors({ ...err.response.data.errors });
        }
      }
    });
  }

  return (
    <div>
      <h2 className="text-center h4 mt-5 text-top-pag">
        <strong>Artigo</strong>
      </h2>
      <ArticleForm
        handleChange={handleChange}
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
