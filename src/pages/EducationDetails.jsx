import { useEffect, useRef } from "react";
import "./Education.css";

export default function EducationDetails() {
  const boxes = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = entry.target.dataset.index;

          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            line.classList.add(`glow-${index}`);
            entry.target.classList.add(`glow-${index}`);
          } else {
            entry.target.classList.remove("show");
            line.classList.remove(`glow-${index}`);
            entry.target.classList.remove(`glow-${index}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    boxes.current.forEach(box => observer.observe(box));
    return () => observer.disconnect();
  }, []);

  // PARALLAX (Safe on Zoom)
  useEffect(() => {
    const handleParallax = () => {
      boxes.current.forEach((box, i) => {
        const speed = (i + 1) * 0.12;
        const capped = Math.min(window.scrollY, 2000);
        box.style.transform = `translateY(${capped * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div className="crazy-container">
      <div className="vertical-line" ref={lineRef}></div>

      {/* Box 1 */}
      <div
        className="fade-box left"
        data-index="1"
        ref={el => (boxes.current[0] = el)}
      >
        <div className="education-card">
          <h2 className="edu-title first">DEGREE</h2>

          <div className="edu-content">
            <h3 className="degree first">B.Tech in Computer Science & Engineering</h3>
            <h4 className="college first">VIT-AP University</h4>

            <p className="edu-details first">
              <span>2021 – 2025</span> • 
              <span>Amaravati, Andhra Pradesh</span>
            </p>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div
        className="fade-box right"
        data-index="2"
        ref={el => (boxes.current[1] = el)}
      >
        <div className="education-card">
          <h2 className="edu-title second">Intermediate (Class 12)</h2>

          <div className="edu-content">
            <h3 className="degree second">MPC – Maths, Physics, Chemistry</h3>
            <h4 className="college second">Narayana Junior College</h4>

            <p className="edu-details second">
              <span>2019 – 2021</span> • 
              <span>Percentage: 95.4%</span> • 
              <span>Chirala, Andhra Pradesh</span>
            </p>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div
        className="fade-box left"
        data-index="3"
        ref={el => (boxes.current[2] = el)}
      >
        <div className="education-card">
          <h2 className="edu-title third">Class 10 (SSC)</h2>

          <div className="edu-content">
            <h3 className="degree third">Secondary School Certificate</h3>
            <h4 className="college third">Bhashyam High School</h4>

            <p className="edu-details third">
              <span>2018 – 2019</span> • 
              <span>GPA: 10/10</span> • 
              <span>Chirala, Andhra Pradesh</span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
