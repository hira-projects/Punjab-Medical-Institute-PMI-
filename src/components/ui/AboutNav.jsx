
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutNav.css";

function AboutNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Close all menus
  const closeMenus = () => {
    setShowDropdown(false);
    setShowPrograms(false);
    setMobileMenu(false);
  };

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo-section">
        <img src="/img2.jpeg" alt="logo" />
        <div className="logo-text">PMI</div>
      </div>

      {/* HAMBURGER MENU */}
      <button
        className="menu-toggle"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </button>

      {/* NAV LINKS */}
      <div className={`nav-links ${mobileMenu ? "active" : ""}`}>

        <Link to="/" onClick={closeMenus}>
          Home
        </Link>

        <Link to="/About" onClick={closeMenus}>
          About
        </Link>

        {/* PROGRAMS */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => {
              setShowPrograms(!showPrograms);
              setShowDropdown(false);
            }}
          >
            Programs <span className="dropdown-icon">▼</span>
          </button>

          {showPrograms && (
            <div className="dropdown-menu">
              <Link to="/Programs/adp" onClick={closeMenus}>
                ADP | BS
              </Link>

              <Link to="/Programs/diploma" onClick={closeMenus}>
                Medical Diplomas
              </Link>

              <Link to="/Programs/bscs" onClick={closeMenus}>
                BSCS | BSIT
              </Link>

              <Link to="/Programs/bba" onClick={closeMenus}>
                BBA | BAF
              </Link>

              <Link to="/Programs/short-courses" onClick={closeMenus}>
                Short Courses
              </Link>
            </div>
          )}
        </div>

        {/* FACILITIES */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setShowPrograms(false);
            }}
          >
            Facilities <span className="dropdown-icon">▼</span>
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/Facilities/Environment" onClick={closeMenus}>
                Environment
              </Link>

              <Link to="/Facilities/library" onClick={closeMenus}>
                Library
              </Link>

              <Link to="/Facilities/labs" onClick={closeMenus}>
                Laboratories
              </Link>

              <Link to="/Facilities/cmlabs" onClick={closeMenus}>
                Computer Labs
              </Link>

              <Link to="/Facilities/cafeteria" onClick={closeMenus}>
                Cafeteria
              </Link>

              <Link to="/Facilities/sports" onClick={closeMenus}>
                Sports Ground
              </Link>
            </div>
          )}
        </div>

        <Link to="/Contact" onClick={closeMenus}>
          Admission
        </Link>
      </div>

      {/* Desktop Contact */}
      <a
        href="https://wa.me/923154017719"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn desktop-contact"
      >
        Contact
      </a>

    </div>
  );
}

export default AboutNav;