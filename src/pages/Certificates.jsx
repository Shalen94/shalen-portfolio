import React, { useEffect } from "react";
import mern from "../assets/mern.jpeg";
import java from "../assets/java.png";
import sql from "../assets/sql.png";
import excel from "../assets/excel.svg";
import matlab from "../assets/matlab.png";
import "./Certificates.css";

const Certificates = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
            // Add reveal with delay
            setTimeout(() => {
                entry.target.classList.add("reveal");
            }, index * 200);
            } else {
            // Remove reveal when out of view => animation resets
            entry.target.classList.remove("reveal");
            }
        });
        },
        { threshold: 0.3 }
    );

    const items = document.querySelectorAll(".certificates");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    }, []);


  return (
    <div className="main-container">

      <div className="certificates">
          <a href="https://drive.google.com/file/d/1L3UIzunAEi6Bl2zvZaVzczumxQ6-VRFg/view?usp=sharing"><img src={mern} alt="mern"/><p>MERN</p></a>
      </div>
      <div className="certificates">
        <a href="https://drive.google.com/file/d/1iWwo-vEG6VOHy1LdaE7gpEooSMukeXvW/view?usp=sharing"><img src={java} alt="java"/><p>JAVA</p></a>
      </div>
      <div className="certificates">
        <a href="https://drive.google.com/file/d/1sbq-m6e1M7d4bdxME973Qw4t9a7SLH0H/view?usp=sharing"><img src={sql} alt="sql"/><p>SQL</p></a>
      </div>
      <div className="certificates">
        <a href="https://drive.google.com/file/d/1sraw4dhgOFIhz7lZ61U4iiVEdNUGYErd/view?usp=sharing"><img src={matlab} alt="matlab"/><p>MATLAB</p></a>
      </div>
      <div className="certificates">
           <a href="https://drive.google.com/file/d/1WFFnNml-FsQ0iEUKSNSpbD6gRNzL92uO/view?usp=sharing"><img src={excel} alt="excel"/><p>MS-EXCEL</p></a>
      </div>
    </div>
  );
};

export default Certificates;
