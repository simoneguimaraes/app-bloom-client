import ForumForm from "../components/Form/ForumForm";
import "../assets/styles/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

//fórum entre todos os usuários do app

function Forum() {
  const [formData, setFormData] = useState({
    text: "",
    websiteLink: "",
    pictures: "",
    tags: [],
  });

  return <div></div>;
}

export default Forum;
