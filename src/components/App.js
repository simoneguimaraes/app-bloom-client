import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import WelcomePage from "../pages/WelcomePage";
import Navbar from "../components/Navbar/Navbar";
import PatientProfile from "../pages/PatientProfile";

function App() {
  return (
    <AuthContextComponent>
      <div className="min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient-info" element={<PatientProfile />} />
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
        </Routes>
      </div>
    </AuthContextComponent>
  );
}

export default App;
