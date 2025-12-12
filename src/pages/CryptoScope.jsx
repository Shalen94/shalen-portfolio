import React from "react";
import "./Project.css";

const CryptoScope = () => {
  return (
    <div className="project-container neon-fade">

      {/* Title */}
      <h1 className="project-title">🪙 CryptoScope - Cryptocurrency Tracking App (MERN)</h1>
      <p className="project-tagline">Real-Time Crypto Insights with Interactive Charts</p>

      {/* Section */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Project Description</h2>
        <p className="project-text">
          CryptoScope is a modern MERN-based crypto dashboard that helps users track live prices, 
          market trends, and historical performance with three visually rich, interactive charts.
          The application fetches real-time data from public APIs and presents it in a user-friendly 
          UI built for speed and responsiveness.
        </p>
      </section>

      {/* Key Features */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Key Features</h2>
        <ul className="feature-list">
          <li>Live price updates for global cryptocurrencies</li>
          <li>Three interactive charts: Line (7-day), Candle Chart, Pie Chart</li>
          <li>Searchable and filterable coin list</li>
          <li>Dedicated coin details page</li>
          <li>Responsive UI with cached API results for fast loading</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Tech Stack</h2>
        <ul className="feature-list">
          <li><strong>Frontend:</strong> React.js, TailwindCSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>API:</strong> CoinGecko API</li>
          <li><strong>Charts:</strong> React Chart.js</li>
        </ul>
      </section>

      {/* Roles */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Roles & Responsibilities</h2>
        <ul className="feature-list">
          <li>Developed UI/UX using React + TailwindCSS</li>
          <li>Integrated real-time API calls using CoinGecko</li>
          <li>Built reusable chart components</li>
          <li>Implemented dynamic filtering and searching</li>
          <li>Created backend caching logic to optimize loading speed</li>
        </ul>
      </section>

      {/* Outcome */}
      <section className="project-section fade-in">
        <h2 className="section-heading">Outcome</h2>
        <p className="project-text">
          CryptoScope delivers a visually appealing, real-time crypto dashboard that enables users 
          to easily analyze market trends and make informed decisions.
        </p>
      </section>
    </div>
  );
};

export default CryptoScope;
