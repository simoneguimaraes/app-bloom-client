import DailyForm from "../components/Form/DailyForm";
import "../assets/styles/index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import api from "../apis/api";

function DailyReviews() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    wellbeingToday: 0,
    humorAlteration: "",
    nausea: "",
    memoryLoss: "",
    desorientation: "",
    dizziness: "",
    constipation: "",
  });
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    async function fetchDailyReviews() {
      try {
        const response = await api.get("/daily");

        setFormData([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDailyReviews();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    //verificar

    try {
      setFormData(true);
      const response = await api.post("/daily", {
        ...formData,
      });

      setFormData(false);
    } catch (err) {
      console.error(err);
      setFormData(false);
    }
  }

  return (
    <div>
      <div className="w-100 m-auto d-flex justify-content-center">
        <DailyForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          isSending={isSending}
          textBtn="Enviar"
        />
      </div>
    </div>
  );
}

export default DailyReviews;
