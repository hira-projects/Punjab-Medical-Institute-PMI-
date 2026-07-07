
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutNav.css";

function AboutNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);

  return (
    <div className="navbar">
      
      {/* LOGO */}
      <div className="logo-section">
        <img src="/img2.jpeg" alt="logo" />
        <div className="logo-text">PMI</div>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>

        {/* PROGRAMS */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setShowPrograms(!showPrograms)}
          >
            Programs <span className="dropdown-icon">▼</span>
          </button>

          {showPrograms && (
            <div className="dropdown-menu">
              <Link to="/Programs/adp">ADP | BS</Link>
              <Link to="/Programs/diploma">Medical Diplomas</Link>
              <Link to="/Programs/bscs">BSCS | BSIT</Link>
              <Link to="/Programs/bba">BBA | BAF</Link>
              <Link to="/Programs/short-courses">Short Courses</Link>
            </div>
          )}
        </div>

        {/* FACILITIES */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Facilities <span className="dropdown-icon">▼</span>
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/Facilities/Environment">Environment</Link>
              <Link to="/Facilities/library">Library</Link>
              <Link to="/Facilities/labs">Laboratories</Link>
              <Link to="/Facilities/cmlabs">Computer Labs</Link>
              <Link to="/Facilities/cafeteria">Cafeteria</Link>
              <Link to="/Facilities/sports">Sports Ground</Link>
            </div>
          )}
        </div>

        <Link to="/Contact">Admission</Link>
      </div>

      {/* SIMPLE WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923154017719"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        Contact
      </a>
    </div>
  );
}

export default AboutNav;