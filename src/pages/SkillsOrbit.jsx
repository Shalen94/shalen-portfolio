import React, { useState } from "react";
import "./SkillsOrbit.css";

// front end
import html from "../assets/HTML5.png";
import cssIcon from "../assets/CSS3.png";
import js from "../assets/JavaScript.png";
import reactIcon from "../assets/React.png";
import nextJs from "../assets/Next.png";
import viteIcon from "../assets/Vite.png";

// backend
import node from "../assets/Node.png";
import express from "../assets/Express.png";
import java from "../assets/Java.png";
import php from "../assets/PHP.png";
import restapi from "../assets/RestAPI.png";
import jwt from "../assets/JWT.png";

// databases
import mongo from "../assets/MongoDB.png";
import psql from "../assets/PostgresSQL.png";
import mysql from "../assets/MySQL.png";

// tools
import github from "../assets/GitHub.png";
import git from "../assets/Git.png";
import postman from "../assets/Postman.png";
import vscode from "../assets/VS.png";

// soft skills
import problemSolving from "../assets/ProblemSolving.png";
import communication from "../assets/Communication.png";
import teamwork from "../assets/TeamWork.png";
import time from "../assets/TimeManagement.png";
import adaptability from "../assets/Adaptability.png";

// Grouped Data
const data = {
  frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: cssIcon },
    { name: "JAVASCRIPT", icon: js },
    { name: "React Js", icon: reactIcon },
    { name: "Next Js", icon: nextJs },
    { name: "Vite Js", icon: viteIcon },
  ],

  backend: [
    { name: "Node Js", icon: node },
    { name: "Express Js", icon: express },
    { name: "JAVA", icon: java },
    { name: "PHP", icon: php },
    { name: "REST APIs", icon: restapi },
    { name: "JWT Auth", icon: jwt },
  ],

  databases: [
    { name: "MongoDB", icon: mongo },
    { name: "PostgreSQL", icon: psql },
    { name: "MySql", icon: mysql },
  ],

  tools: [
    { name: "GitHub", icon: github },
    { name: "Postman", icon: postman },
    { name: "Git", icon: git },
    { name: "VS-Code", icon: vscode },
  ],

  soft: [
    { name: "Problem Solving", icon: problemSolving },
    { name: "Communication", icon: communication },
    { name: "Team Work", icon: teamwork },
    { name: "Time Management", icon: time },
    { name: "Adaptability", icon: adaptability },
  ],
};

const SkillsOrbit = () => {
  const [active, setActive] = useState("frontend");

  const renderOrbit = (items, title) => (
    <div className="skills-orbit-container">
      <h2 className="skills-title">My Tech Stack</h2>

      {/* MOVED BUTTONS HERE */}
      <div className="skill-buttons inner-buttons">
        <button onClick={() => setActive("frontend")} className={active === "frontend" ? "active-btn" : ""}>🟦 Frontend</button>
        <button onClick={() => setActive("backend")} className={active === "backend" ? "active-btn" : ""}>🟧 Backend</button>
        <button onClick={() => setActive("databases")} className={active === "databases" ? "active-btn" : ""}>🟩 Databases</button>
        <button onClick={() => setActive("tools")} className={active === "tools" ? "active-btn" : ""}>🟨 Tools</button>
        <button onClick={() => setActive("soft")} className={active === "soft" ? "active-btn" : ""}>🟪 Soft Skills</button>
      </div>

      {/* ORBIT */}
      <div className="orbit">
        {items.map((skill, index) => {
          const angle = (360 / items.length) * index;
          return (
            <div
              key={index}
              className={`orbit-item item-${skill.name}`}
              style={{ "--angle": `${angle}deg` }}
            >
              <div className="skill-wrap">
                <img src={skill.icon} alt={skill.name} />
                <span className="label">{skill.name}</span>
              </div>
            </div>
          );
        })}

        <div className="orbit-center">{title}</div>
      </div>
    </div>
  );

  return (
    <>
      {active === "frontend" && renderOrbit(data.frontend, "Frontend")}
      {active === "backend" && renderOrbit(data.backend, "Backend")}
      {active === "databases" && renderOrbit(data.databases, "Databases")}
      {active === "tools" && renderOrbit(data.tools, "Tools")}
      {active === "soft" && renderOrbit(data.soft, "Soft Skills")}
    </>
  );
};

export default SkillsOrbit;
