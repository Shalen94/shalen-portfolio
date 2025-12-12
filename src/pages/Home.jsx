import React from "react";
import ModelViewer from "./ModelViewer.jsx";
import EducationDetails from "./EducationDetails.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Projects.jsx";
import SkillsOrbit from "./SkillsOrbit.jsx";
import ContactDetails from "./ContactDetails.jsx";
import ChatBot from "./Chat/ChatBot.jsx";

const Home = () => {
  return (
    <div className="homePage">
    
      <ModelViewer />

       <h1 className="section-title">Education Details</h1>
      <EducationDetails />

      <SkillsOrbit />

      <h1 className="section-title">Certificates</h1>
      <Certificates />

      <h1 className="section-title">Projects</h1>
      <Projects />

      <ContactDetails />

      <ChatBot />
  
    </div>
  );
};

export default Home;
