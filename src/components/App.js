import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import WelcomePage from "../pages/WelcomePage";

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
