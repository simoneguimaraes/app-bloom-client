import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import { useState } from "react";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import WelcomePage from "../pages/WelcomePage";
import Navbar from "../components/Navbar/Navbar";
import PatientProfile from "../pages/PatientProfile";
import DoctorProfile from "../pages/DoctorProfile";
import DailyReviews from "../pages/DailyReviews";

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
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route path="/daily" element={<DailyReviews />} />
        </Routes>
      </div>
    </AuthContextComponent>
  );
}

export default App;
