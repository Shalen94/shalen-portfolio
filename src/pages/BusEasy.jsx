import React from "react";
import "./project.css";

export default function BusEasy() {
  return (
    <div className="project-container neon-fade">
      <h1 className="project-title">🚍 BusEasy – Bus Management System</h1>
      <p className="project-tagline">A Seamless Ticket Booking & Bus Management Platform</p>

      <section className="project-section">
        <h2 className="section-heading">📌 Project Description</h2>
        <p className="section-text">
          BusEasy is a full-stack bus ticket booking and management system designed to simplify
          public transport operations in villages and towns. It includes modules for users,
          drivers, and admins—supporting ticket booking, regional passes, parcel registration,
          and advanced admin controls. 
          <br /><br />
          The system automates manual tasks like seat tracking, bus approvals, 
          and payment handling to provide a smooth, real-time experience.
        </p>
      </section>

      <section className="project-section">
        <h2 className="section-heading">✨ Key Features</h2>

        <ul className="feature-list">
          <li>Online ticket booking (General, Lux, Deluxe)</li>
          <li>Regional pass generation with automated pricing formula</li>
          <li>Parcel registration system</li>
          <li>Driver dashboard with bus request submissions</li>
          <li>Admin dashboard (Add buses, manage bookings, payments, driver requests)</li>
          <li>Stripe-ready payment integration</li>
          <li>Session-based user authentication</li>
          <li>Email notifications for approvals/rejections</li>
          <li>Real-time seat availability</li>
        </ul>
      </section>

      <section className="project-section">
        <h2 className="section-heading">🛠 Tech Stack</h2>

        <ul className="feature-list">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap</li>
          <li><strong>Backend:</strong> PHP</li>
          <li><strong>Database:</strong> MySQL (XAMPP)</li>
          <li><strong>Other:</strong> Stripe API (planned), SMTP mail</li>
        </ul>
      </section>

      <section className="project-section">
        <h2 className="section-heading">🧑‍💻 Roles & Responsibilities</h2>

        <ul className="feature-list">
          <li>Designed the full project architecture (frontend + backend)</li>
          <li>Built authentication system (login, registration, sessions)</li>
          <li>Developed booking workflow & payment routing</li>
          <li>Created admin & driver dashboards (CRUD operations)</li>
          <li>Designed database schema for buses, tickets, payments, passes</li>
          <li>Optimized UX for villagers using Pallevelugu buses</li>
          <li>Implemented real-time validations & seat updates</li>
        </ul>
      </section>

      <section className="project-section">
        <h2 className="section-heading">🎯 Outcome</h2>
        <p className="section-text">
          Reduced manual work for drivers and admins while enabling villagers
          to book tickets digitally—making transport accessible, modern,
          and efficient.
        </p>
      </section>
    </div>
  );
}
