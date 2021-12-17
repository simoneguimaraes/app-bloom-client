import ForumForm from "../components/Form/ForumForm";
import "../assets/styles/index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import api from "../apis/api";

//fórum entre todos os usuários do app

function Forum(props) {
  const [loading, setLoading] = useState({});
  const [response, setResponse] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    websiteLink: "",
    // pictures: "",
    tags: [],
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleTags(event) {
    setFormData({
      ...formData,
      tags: [...formData.tags, event.target.value],
    });
  }

  //renderizar todos os posts no estilo "feed"
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/forum");
        setResponse([...response.data]);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   try {
  //     const response = await api.post("/forum/create", { ...formData });
  //   } catch (err) {
  //     if (err.response) {
  //       console.error(err.response);
  //       // setErrors({ ...err.response.data.errors });
  //     }
  //   }
  // axios.get("http://localhost:4000/api/").then(async (result) => {
  //   try {
  //     const response =
  //     console.log(response);

  //   }
  // });

  return (
    <div>
      <h2 className="text-center h4 mt-4 text-top-pag">
        <strong>Fórum</strong>
      </h2>
      <div
        className="container mt-4 resg-pag-container"
        style={{ maxWidth: "800px" }}
      >
        {response.map(
          (currentPost) => {
            return (
              <div className="doctor-cards text-center" key={currentPost._id}>
                <p>
                  <strong>{currentPost.text}</strong>
                </p>
                <a href={currentPost.websiteLink}>Link enviado</a>
                <img src={currentPost.pictures} />
                <p>
                  <em>{currentPost.tags}</em>
                </p>
              </div>
            );
          }

          // "pictures":"www.google.com","tags":["Saúde Mental","Ansiedade"],"__v":0}
        )}

        <ForumForm
          handleChange={handleChange}
          loading={loading}
          setLoading={setLoading}
          formData={formData}
          setFormData={setFormData}
          isSending={isSending}
          textBtn="Enviar"
          handleTags={handleTags}
        />
      </div>
    </div>
  );
}

export default Forum;
