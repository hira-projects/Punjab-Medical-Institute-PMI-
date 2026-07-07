
import React from "react";
import "./Cont.css";

function Cont() {
  return (
    <div className="map-container">
      <h1>For Admission Visit Our Campus</h1>

      <p className="desc">
        Punjab Medical Institute welcomes aspiring students who are passionate
        about building a career in the medical field and other programs. The
        admission process is conducted on merit and follows the guidelines set
        by the relevant educational authorities. Prospective students and their
        families are also welcome to visit the campus to explore our modern
        classrooms, laboratories, library, and learning facilities. A campus
        visit provides an excellent opportunity to experience the institute's
        academic environment, interact with faculty members, and learn more
        about the programs and student life at Punjab Medical Institute.
      </p>

      <div className="map-box">
        <iframe
          title="Campus Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.03171004341!2d74.27932207623671!3d31.330497356497325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919ab493e64835b%3A0x5967bf6e75221aab!2sAllied%20School%20Park%20Avenue%20Campus!5e0!3m2!1sen!2s!4v1783218672736!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Call Button */}
      <div className="btn-container">
        <a href="tel:+923154017719" className="call-btn">
           Contact Now
        </a>
      </div>
    </div>
  );
}

export default Cont;