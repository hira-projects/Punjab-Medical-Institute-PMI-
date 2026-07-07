
import React from "react";
import "./Features.css";
import { useNavigate } from "react-router-dom";

function Features() {

  const navigate = useNavigate();

  return (
    <div className="features-page">

      <h2>Why choose us?</h2>

      <div className="intro">
       <p>
       Punjab Medical Institute (PMI) is committed to providing high-quality medical education with a strong focus on practical learning and professional 
       development. Our institute offers experienced faculty, modern laboratories, and advanced clinical training in affiliated hospitals to ensure students 
       gain real-world medical experience. We emphasize both academic excellence and skill development, preparing students for successful careers in the healthcare field. 
       With an affordable fee structure, a safe learning environment, and continuous 
       student support, we aim to build confident and skilled medical professionals who can serve society with dedication and care.
      </p>
 </div>
      <div className="features-list">

        <div className="feature-item">
          <div>
            <h4>Advanced Medical Laboratries</h4>
            <p>Advanced Medical Laboratories at Punjab Medical Institute (PMI) are designed to provide students with modern, high-quality practical training in 
              medical sciences. Our labs are equipped with advanced diagnostic instruments,
               digital technology, and updated research tools that help students gain real-world experience in testing, analysis, and medical procedures.</p>
        <button onClick={() => navigate("/Facilities/labs")}>View More →</button>
         </div>
               
        </div>
        <div className="feature-item">
          <div>
            <h4>Advance Computer Labs</h4>
            <p>Our computer labs are well-equipped with modern systems and high-speed internet to support effective learning and practical training. 
              Students gain hands-on experience in programming, software development, and other IT tools in a professional environment.</p>
              <button onClick={() => navigate("/Facilities/cmlabs")}>View More →</button>
          </div>
          
        </div>

        <div className="feature-item">
          <div>
            <h4>Digital Learning System</h4>
            <p>The Digital Learning System  provides students with a modern and interactive learning environment.
               It includes smart classrooms, online lectures, e-learning resources, and multimedia tools that make education more engaging and effective.</p>
               <button onClick={() => navigate("/Programs/short-courses")}>View More →</button>
          </div>
         
         
        </div>
         <div className="feature-item">
          <div>
            <h4>Research Opportunities</h4>
            <p>Encourages students to participate in research projects.</p>
          </div>
          </div>
            <div className="feature-item">
          <div>
            <h4>24/7 Student Support</h4>
            <p>Punjab Medical Institute provides 24/7 Student Support to ensure that students receive help whenever they need it. 
              Students can easily connect with faculty and support staff to resolve their problems quickly. 
              This continuous support helps students stay confident, focused, and motivated throughout their academic journey, creating a smooth and stress-free learning experience..</p>
          
          <p1>Hurry Up and get admission with 50% scholarship. Limited seats are available. </p1>
             <button onClick={() => navigate("/Contact")}>Visit our campus →</button>
          </div>
        
        
        </div>
       

       

      </div>
    </div>
  );
}

export default Features;