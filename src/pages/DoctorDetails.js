//tem que fazer um state que reebe todos os valores do schema (com os detalhes do medico, nome, especialidade, artigos) ok
//chamar o use params (id que vai na url)
//tem que clicar no card da simone e ir pro url
//use effect na rota do backend onde eu busco o medico pelo id ok
// https://github.com/AnnaRe1s/Sampa-Cultural-Front/blob/main/src/components/Productor/DetailsEvents.js

import { useState, useEffect } from "react";
import api from "../apis/api";
import { useParams } from "react-router-dom";
import React from "react";
import "../assets/styles/index.css"

export default function DoctorDetails() {
    const [articles, setArticles] = useState([])
    const [doctorDetails, setDoctorDetails] = useState({
        specialty:"",
        crmDoctor: 0,
        prescription: "",
        streetAddress: "",
        city:"",
        state: "",
        phoneNumber: 0,
        tags: [],
        userId:"",
    });

    const { id } = useParams();

  useEffect(() => {
    async function fetchDoctorDetails() {
      try {
        const response = await api.get(`/doctor/${id}`);
        //const articlesResponse = await api.get(`/articles/${id}`);
          console.log(response.data)
        setDoctorDetails({...response.data});
        //setArticles([...articlesResponse.data])
      } catch (err) {
        console.error(err);
      }
    }
    fetchDoctorDetails();
  }, []);

    return (
        <div>
            
                <div className="doctor-cards">
                  <h1>specialty: <span>{doctorDetails.specialty}</span></h1>
                  <h1>crmDoctor: <span>{doctorDetails.crmDoctor}</span></h1>
                  <h1>prescription:  <span>{doctorDetails.prescription}</span></h1>
                  <h1>streetAddress: <span>{doctorDetails.streetAddress}</span></h1>
                  <h1>city: <span>{doctorDetails.city}</span></h1>
                  <h1>state: <span>{doctorDetails.state}</span></h1>
                  <h1>phoneNumber: <span>{doctorDetails.phoneNumber}</span></h1>
                  <h1>tags: <span>{doctorDetails.tags}</span></h1>
                  <h1>userId: <span>{doctorDetails.userId._id}</span></h1>
                </div>

              {articles.map}
            
            
        </div>
    )
    }
