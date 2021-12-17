import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import WelcomePage from "../pages/WelcomePage";
import Navbar from "../components/Navbar/Teste";
import PatientProfile from "../pages/PatientProfile";
import DoctorProfile from "../pages/DoctorProfile";
import DailyReviews from "../pages/DailyReviews";
import Forum from "../pages/Forum";
import Article from "../components/Form/ArticleForm";
import PatientEditProfile from "../pages/PatientEditProfile";
import SpecialistsPage from "../pages/SpecialistsPage";
import DoctorDetails from "../pages/DoctorDetails";
import React from "react";
import Button from "../components/Button";
// import ForumForm from "../components/Form/ForumForm";
// import DoctorTab from "../pages/DoctorTab";
// import PatientsInfo from "../pages/PatientsData";
function App() {
  const [formData, setFormData] = useState({
    specialty: "",
    crmDoctor: 0,
    prescription: "",
    streetAddress: "",
    city: "",
    state: "",
    phoneNumber: "",
    tags: [],
  });
  const { theme, themeColors, setTheme } = useContext(ThemeContext);
  return (
    <AuthContextComponent>
      <div className="min-vh-100">

        
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/signup"
            element={
              <Signup
                doctorFormInfo={formData}
                doctorFormInfoSetState={setFormData}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/patient-info" element={<PatientProfile />} />
          <Route
            path="/doctor-info"
            element={
              <DoctorProfile
                doctorFormInfo={formData}
                doctorFormInfoSetState={setFormData}
              />
            }
          />
          <Route
            path="/patient-info/update"
            element={
              <PatientEditProfile
                doctorFormInfo={formData}
                doctorFormInfoSetState={setFormData}
              />
            }
          />

          {/* //rotas protegidas */}
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route path="/daily" element={<DailyReviews />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/doctor-info/doctors" element={<SpecialistsPage />} />
          {/* <Route path="/forum/create" element={<Forum />} /> */}
          {/* <Route path="/doctor-tab" element={<DoctorTab />} />
          <Route path="/patients-info" element={<PatientsInfo />} /> */}

          <Route path="/doctor-details" element={<DoctorDetails />} />
          <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        </Routes>
      </div>
    </AuthContextComponent>
  );
}

export default App;
