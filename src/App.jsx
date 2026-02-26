import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignIn";
import AboutPage from "./pages/companyPages/About";
import OurTeamHero from "./pages/companyPages/OurTeamHero";
import CareersHero from "./pages/companyPages/CareersHero";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import ContactHero from "./pages/companyPages/ContactHero";
import PrivacyHero from "./pages/companyPages/PrivacyHero";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/team" element={<OurTeamHero />} />
  <Route path="/careers" element={<CareersHero />} />
  <Route path="/case-studies" element={<CaseStudies />} />
  <Route path="/contact" element={<ContactHero/>} />
  <Route path="/privacy-policy" element={<PrivacyHero />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
