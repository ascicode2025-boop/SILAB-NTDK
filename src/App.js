import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarLandingPage from "./components/NavbarLandingPage";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Profile from "./components/Profile";

// Komponen pembungkus untuk mengatur navbar
function AppLayout() {
  const location = useLocation();

  // Sembunyikan navbar di halaman login
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <NavbarLandingPage />}

      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
         <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
