import React from "react";
import "./Project.css";

const Taskify = () => {
  return (
    <div className="project-container neon-fade">

      {/* Title */}
      <h1 className="project-title">📝 Taskify – To-Do / Task Manager (PERN Stack)</h1>
      <p className="project-tagline">Minimal, Fast, and Real-Time Task Management</p>

      {/* Project Description */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Project Description</h2>
        <p className="project-text">
          Taskify is a productivity-focused task manager built with the PERN stack. 
          It enables users to create, update, complete, and delete tasks with fast API 
          responses and a clean, distraction-free UI. The platform prioritizes minimalism, 
          efficiency, and a smooth task workflow.
        </p>
      </section>

      {/* Key Features */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Key Features</h2>
        <ul className="feature-list">
          <li>Add, Edit, Delete, and Complete tasks</li>
          <li>Real-time updates with auto-refresh</li>
          <li>JWT-based user authentication</li>
          <li>Clean and fully responsive UI</li>
          <li>Sorting and filtering for efficient task handling</li>
          <li>PostgreSQL-backed persistent data storage</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Tech Stack</h2>
        <ul className="feature-list">
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> PostgreSQL</li>
          <li><strong>Authentication:</strong> JWT Tokens</li>
          <li><strong>Deployment (optional):</strong> GitHub Pages</li>
        </ul>
      </section>

      {/* Roles & Responsibilities */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Roles & Responsibilities</h2>
        <ul className="feature-list">
          <li>Designed a clean and minimal UI for distraction-free productivity</li>
          <li>Developed REST APIs for full task CRUD operations</li>
          <li>Implemented secure authentication using JWT</li>
          <li>Designed relational PostgreSQL database schemas</li>
          <li>Integrated frontend with backend using Axios</li>
          <li>Added validations and loading states for smooth UX</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Outcome</h2>
        <p className="project-text">
          Taskify delivers a lightweight, fast, and modern to-do management system that 
          boosts productivity with a clean and intuitive workflow.
        </p>
      </section>

    </div>
  );
};

export default Taskify;
