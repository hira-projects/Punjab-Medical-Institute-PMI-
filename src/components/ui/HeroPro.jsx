import React from 'react'
import './HeroPro.css'
import { Link } from "react-router-dom";
function HeroPro() {
  return (
    
     <div className="program-wrapper">

      <div className="program-card">
        <h2> Medical Programs</h2>
        <p>MLT, OTT, Radiology, Pharmacy Assistant, Nursing Assistant and many others.</p>

        <Link to="/Programs/diploma" className="card-btn">
          View More <span>→</span>
        </Link>
      </div>

      <div className="program-card">
        <h2> IT Programs</h2>
        <p>BSCS, BSIT, Web Development, Software Engineering and many others.</p>

        <Link to="/Programs/bscs" className="card-btn">
          View More <span>→</span>
        </Link>
      </div>

      <div className="program-card">
        <h2> ADP Programs</h2>
        <p>Computer Science, Business, Commerce, Arts, Education and many others.</p>

        <Link to="/Programs/adp" className="card-btn">
          View More <span>→</span>
        </Link>
      </div>

      <div className="program-card">
        <h2> Business Programs</h2>
        <p>BBA, BAF, Marketing, HRM, Banking & Finance and many others.</p>

        <Link to="/Programs/bba" className="card-btn">
          View More <span>→</span>
        </Link>
      </div>

      <div className="program-card">
        <h2> Short Courses</h2>
        <p>Graphic Design, Freelancing, Digital Marketing, MS Office and many others.</p>

        <Link to="/Programs/short-courses" className="card-btn">
          View More <span>→</span>
        </Link>
      </div>

    </div>
  )
}

export default HeroPro
