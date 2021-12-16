import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../apis/api"
import "../assets/styles/index.css"

export default function DoctorTab() {
    
    return (
    <form className="details-container">
        <h1>Doctor Tab</h1>
            <div className="container-buttom-dt" >
                <button className="btn-green btn-middle mt-3" type="submit">
                    Informações dos pacientes
                </button>
               
                <button className="btn-green btn-middle mt-3" type="submit">
                    Enviar novo artigo
                </button>
            </div>
    </form>
  );
}
    


