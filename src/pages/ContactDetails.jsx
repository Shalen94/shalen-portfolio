import React from 'react'
import './Contact.css'
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <section className="anime-contact" id='contact'>
      
      {/* Your Name */}
      <h1 className="ct-name">Shalen Katta</h1>
      <p className="ct-tag">Full-Stack Developer • MERN • PERN • JAVA  • PHP </p>


      <div className="ct-card">

        <div className="ct-item">
          <div className="icon-wrap"><FaPhoneAlt className="icon" /></div>
          <span className="label">Phone</span>
          <p className="value">+91 80084 32165</p>
        </div>

        <div className="divider"></div>

        <div className="ct-item">
          <div className="icon-wrap"><FaEnvelope className="icon" /></div>
          <span className="label">Email</span>
          <p className="value">shalenkatta@gmail.com</p>
        </div>

        <div className="divider"></div>

        <div className="ct-item">
          <div className="icon-wrap"><FaLinkedin className="icon" /></div>
          <span className="label">LinkedIn</span>
          <a className="value link" href="https://www.linkedin.com/in/shalen-katta#" target="_blank">linkedin.com/in/you</a>
        </div>

        <div className="divider"></div>

        <div className="ct-item">
          <div className="icon-wrap"><FaGithub className="icon" /></div>
          <span className="label">GitHub</span>
          <a className="value link" href="https://github.com/Shalen94" target="_blank">github.com/you</a>
        </div>

        <div className="divider"></div>

        <div className="ct-item">
          <div className="icon-wrap"><FaMapMarkerAlt className="icon" /></div>
          <span className="label">Location</span>
          <p className="value">Chirala, India</p>
        </div>

      </div>
    </section>
  );
}
