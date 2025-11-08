import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarLandingPage from "./components/NavbarLandingPage";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Profile from "./components/Profile";
import DashboardPage from "./components/DashboardPage";

// Komponen pembungkus untuk halaman yang menampilkan navbar
function AppLayoutWithNavbar() {
  return (
    <>
      <NavbarLandingPage />

      <Switch>
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/Profile" component={Profile} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </>
  );
}

// Komponen pembungkus untuk halaman tanpa navbar (login, register, dashboard)
function AppLayoutWithoutNavbar() {
  return (
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        {/* Routes tanpa navbar */}
        <Route path="/dashboard" component={AppLayoutWithoutNavbar} />
        <Route path="/login" component={AppLayoutWithoutNavbar} />
        <Route path="/register" component={AppLayoutWithoutNavbar} />
        {/* Routes dengan navbar */}
        <Route component={AppLayoutWithNavbar} />
      </Switch>
    </Router>
  );
}

export default App;
