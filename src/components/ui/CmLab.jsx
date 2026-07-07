
import React from "react";
import "./CmLab.css";

function CmLab() {
  return (
    <div className="cm">

      <h1>Computer Lab</h1>

      <p>
        The <strong>Computer Lab</strong> at <strong>Punjab Medical Institute</strong>
        provides students with a modern learning environment equipped with
        high-performance computers, internet access, and the latest educational
        software. The lab supports students in developing essential digital and
        technical skills required in the healthcare and medical fields.
      </p>

      <div className="rules">

        <div className="rule-box">
          <h2>Facilities</h2>
          <ul>
            <li>Modern desktop computers with updated hardware.</li>
            <li>High-speed internet connectivity.</li>
            <li>Medical and educational software applications.</li>
            <li>Multimedia projector for demonstrations and training.</li>
            <li>Printing and scanning facilities.</li>
            <li>Comfortable and air-conditioned learning environment.</li>
          </ul>
        </div>


        <div className="rule-box">
          <h2>Objectives</h2>
          <ul>
            <li>Develop computer literacy among students.</li>
            <li>Support online learning and research activities.</li>
            <li>Provide practical training in Microsoft Office applications.</li>
            <li>Promote digital learning in medical education.</li>
            <li>Assist students with assignments, presentations, and projects.</li>
          </ul>
        </div>


        <div className="rule-box">
          <h2>Lab Rules</h2>
          <ul>
            <li>Maintain silence and discipline inside the lab.</li>
            <li>Handle computer equipment carefully.</li>
            <li>No food or drinks are allowed.</li>
            <li>Do not install unauthorized software.</li>
            <li>Use the internet responsibly for educational purposes only.</li>
            <li>Log out after completing your work.</li>
          </ul>
        </div>


      </div>


      <div className="benefits">
        <h2>Benefits for Students</h2>
        <p>
          The Computer Lab enables students to enhance their IT skills, conduct
          medical research, prepare presentations, access online learning
          resources, and stay updated with modern healthcare technologies. It
          plays an important role in supporting academic excellence and preparing
          students for the digital healthcare environment.
        </p>
      </div>


    </div>
  );
}

export default CmLab;