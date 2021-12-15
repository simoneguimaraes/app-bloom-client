import ForumForm from "../components/Form/ForumForm";
import "../assets/styles/index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

//fórum entre todos os usuários do app

function Forum(props) {
  const [loading, setLoading] = useState({});
  
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
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

  // function handleSubmit(event) {
  //   event.preventDefault();

  //     .catch((err) => {
  //       console.log(err);
  //     });

  return (
    <div>
      <ForumForm
        handleChange={handleChange}
        loading={loading}
        setLoading={setLoading}
        formData={formData}
        setFormData={setFormData}
        isSending={isSending}
        textBtn={textBtn}
      />
    </div>
  );
}

export default Forum;
