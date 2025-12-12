import React from "react";
import "./orbit.css";
import { Routes,Route } from "react-router-dom";

// Import your local icons\
import reactIcon from "../assets/React.png";
import nodeIcon from "../assets/Node.png";
import mongoIcon from "../assets/MongoDB.png";
import jsIcon from "../assets/JavaScript.png";
// import expressIcon from "../assets/express.png";
import htmlIcon from "../assets/HTML5.png";
import cssIcon from "../assets/CSS3.png";
//import gitIcon from "../assets/git.png";

export default function Orbit() {
  const icons = [
    reactIcon,
    nodeIcon,
    mongoIcon,
    jsIcon,
    htmlIcon,
    cssIcon
  ];

  return (
    <div className="orbit-wrapper">
      <div className="center-text">
        <h2>Tech Stack</h2>
      </div>

      <div className="orbit-circle">
        {icons.map((icon, i) => (
          <div
            className="orbit-icon"
            key={i}
            style={{ "--i": i }}
          >
            <img src={icon} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
