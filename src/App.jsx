import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import BusEasy from "./pages/BusEasy.jsx";
import CryptoScope from "./pages/CryptoScope.jsx";
import Taskify from "./pages/Taskify.jsx";
import SkyPulse from "./pages/SkyPulse.jsx";
import EducationDetails from "./pages/EducationDetails.jsx";
import SkillsOrbit from "./pages/SkillsOrbit.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";

const App = () => {
  return (
    <div className="appJSX">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects/busEasy" element={<BusEasy/>} />
        <Route path="/projects/cryptoScope" element={<CryptoScope/>} />
        <Route path="/projects/taskify" element={<Taskify/>} />
        <Route path="/projects/skypulse" element={<SkyPulse/>} />
      </Routes>
    </div>
  );
};

export default App;
