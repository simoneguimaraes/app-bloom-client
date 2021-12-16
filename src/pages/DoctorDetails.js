//tem que fazer um state que reebe todos os valores do schema (com os detalhes do medico, nome, especialidade, artigos) ok
//chamar o use params (id que vai na url)
//tem que clicar no card da simone e ir pro url
//use effect na rota do backend onde eu busco o medico pelo id ok
// https://github.com/AnnaRe1s/Sampa-Cultural-Front/blob/main/src/components/Productor/DetailsEvents.js

import { useState, useEffect } from "react";
import api from "../apis/api";
import { useParams } from "react-router-dom";



import React from "react";

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
        const articlesResponse = await api.get(`/articles/${id}`);

        setDoctorDetails({...response.data});
        setArticles([...articlesResponse.data])
      } catch (err) {
        console.error(err);
      }
    }
    fetchDoctorDetails();
  }, []);

    return (
        <div>
            {
            articles.map((element) => {
              return (
                <div>
                  <h1>specialty: <span>{element.specialty}</span></h1>
                  <h1>crmDoctor: <span>{element.crmDoctor}</span></h1>
                  <h1>prescription:  <span>{element.prescription}</span></h1>
                  <h1>streetAddress: <span>{element.streetAddress}</span></h1>
                  <h1>city: <span>{element.city}</span></h1>
                  <h1>state: <span>{element.state}</span></h1>
                  <h1>phoneNumber: <span>{element.phoneNumber}</span></h1>
                  <h1>tags: <span>{element.tags}</span></h1>
                  <h1>userId: <span>{element.userId}</span></h1>
                </div>
              )
            })
            }
        </div>
    )

}