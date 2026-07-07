
import "./AboutFoot.css";
function AboutFoot() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
           
          <h3>Punjab Medical Institute (PMI)</h3>
          <p>
            Punjab Medical Institute is dedicated to excellence in medical education,
            research, and healthcare services. We aim to prepare skilled and professional
            healthcare experts for the future.
             Along with medical education, Punjab Medical Institute also offers training in
            modern fields such as Information Technology, Artificial Intelligence,
            Database Systems, Software Engineering, and Digital Learning Systems.
            These programs help students gain both medical and technical skills,
            preparing them for a wide range of professional careers in today’s modern world.
          </p>
        </div>
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Punjab, Pakistan</p>
          <p>📞 0315-4017719 | 0332-4017719</p>
          <p>🏫 Allied School Park Avenue Society, Main Road Jia Bagga</p>
          <div className="footer-box">   
           <h3>Follow Us</h3>
           <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    className="insta-link"
  >
    Instagram
  </a>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Punjab Medical Institute (PMI). All Rights Reserved.
      </div>
    </footer>
  );
}

export default AboutFoot;