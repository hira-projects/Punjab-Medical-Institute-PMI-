
import React from "react";
import "./Cs.css";

function Cs() {
  return (
    <section className="cs-page">
      <div className="left-side">
        <h1>CS | IT Department</h1>
        

        <p>
          We provide 4 Year program in Computer Science & Information Technology at Punjab Medical Institute (PMI) provides
          quality education in modern computing technologies. Students receive
          practical training in programming, networking, web development, and
          software engineering to prepare them for successful careers in the IT
          industry.
        </p>

       
       <div className="btn">
        <p>For more infomrmation contact with us.</p>
  <a
    href="https://wa.me/923154017719"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact
  </a>
</div>
      </div>

      <div className="right-side">
        <div className="content-box">
          <h2>Our Vision</h2>
          <p>
            To develop innovative and skilled professionals who contribute to
            the advancement of technology and society.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide quality education through experienced faculty, modern
            laboratories, and practical learning opportunities.
          </p>

          <h2>Facilities</h2>
          <ul>
            <li>Modern Computer Labs</li>
            <li>High-Speed Internet</li>
            <li>Experienced Faculty</li>
            <li>Project-Based Learning</li>
            <li>Career Counseling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cs;