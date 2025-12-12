import React from "react";
import "./project.css";

const SkyPulse = () => {
  return (
    <div className="project-container neon-fade">

      {/* Title */}
      <h1 className="project-title">🌤️ SkyPulse – Weather Forecasting App</h1>
      <p className="project-tagline">Search Any City. Get Instant Weather Insights.</p>

      {/* Description */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Project Description</h2>
        <p className="project-text">
          SkyPulse is a dynamic React-based weather application that gives real-time 
          weather updates for any city. It fetches accurate meteorological data from 
          the OpenWeather API and displays temperature, humidity, wind speed, visibility, 
          and more — wrapped inside a clean and modern UI with optional animated backgrounds.
        </p>
      </section>

      {/* Key Features */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Key Features</h2>
        <ul className="feature-list">
          <li>Search weather by city name</li>
          <li>Real-time live weather updates</li>
          <li>Displays temperature, humidity, wind speed, and conditions</li>
          <li>Interactive weather cards</li>
          <li>Optional UI background effects based on weather type</li>
          <li>Fully responsive front-end design</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Tech Stack</h2>
        <ul className="feature-list">
          <li><strong>Frontend:</strong> React.js, CSS</li>
          <li><strong>API:</strong> OpenWeather API</li>
          <li><strong>Deployment:</strong> GitHub Pages </li>
        </ul>
      </section>

      {/* Roles & Responsibilities */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Roles & Responsibilities</h2>
        <ul className="feature-list">
          <li>Implemented the search system for fetching weather data</li>
          <li>Integrated OpenWeather API with live updates</li>
          <li>Designed a responsive and aesthetic UI layout</li>
          <li>Managed state for real-time API responses</li>
          <li>Added error handling for invalid or unknown city names</li>
          <li>Enhanced UX with animations and clean layout</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Outcome</h2>
        <p className="project-text">
          SkyPulse delivers a fast and modern weather-checking experience with 
          clean visuals, instant results, and smooth interactions — making daily 
          weather insights simple and enjoyable.
        </p>
      </section>

    </div>
  );
};

export default SkyPulse;
