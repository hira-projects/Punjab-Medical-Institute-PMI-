
import React from "react";
import "./Enviro.css";
import { Link } from "react-router-dom";
function Enviro() {
  return (
    <div className="enviro-container">

      <div className="enviro-left">
        <h1>Campus Environment</h1>

        <p>
          Punjab Medical Institute (PMI) provides a peaceful, secure, and
          student-friendly learning environment that supports academic excellence
          and personal development. Our campus is designed to encourage learning,
          collaboration, and professional growth.
        </p>

        <h2>Modern Learning Environment</h2>
        <p>
          Our classrooms are spacious, well-equipped, and designed with modern
          teaching facilities to ensure an effective learning experience.
          Students benefit from interactive lectures, practical demonstrations,
          and technology-enhanced education.
        </p>

        <h2>Well-Equipped Laboratories</h2>
        <p>
          PMI offers advanced laboratories for Medical Laboratory Technology,
          Radiology, Computer Science, and other professional programs. These
          labs provide hands-on training to prepare students for their careers.
        </p>

        <h2>Safe & Clean Campus</h2>
        <p>
          The institute maintains a clean, green, and secure campus where
          students can study comfortably. CCTV surveillance and security staff
          help provide a safe environment.
        </p>

        <h2>Student Activities</h2>
        <p>
          Students participate in seminars, workshops, sports, cultural events,
          and awareness campaigns that develop leadership, teamwork, and
          communication skills.
        </p>

        <h2>Career Development</h2>
        <p>
          PMI supports students through career counseling, internships, and
          professional workshops to prepare them for successful careers.
        </p>
        <p1>For more info Visit Our Campus</p1>
        
        <div className="view-buttons">
  <Link to="/Facilities/library">
    <button>Visit Our Library <span>→</span></button>
  </Link>

  <Link to="/Facilities/labs">
    <button>Visit Our Laboratories <span>→</span></button>
  </Link>

  <Link to="/Facilities/cmlabs">
    <button>Visit Our Labs <span>→</span></button>
  </Link>

  <Link to="/Facilities/cafeteria">
    <button>Visit Our Cafeteria <span>→</span></button>
  </Link>

  <Link to="/Facilities/sports">
    <button>Visit Our Ground <span>→</span></button>
  </Link>
</div>
      </div>

      <div className="enviro-right">
        <img src="/img1.jpeg" alt="Punjab Medical Institute" />
      
      
    </div>
    </div>  
  );
}

export default Enviro;