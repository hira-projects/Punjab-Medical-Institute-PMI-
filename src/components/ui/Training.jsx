
import React from "react";
import "./Training.css";

function Training() {
  return (
    <div className="training">

      <div className="heading">
        <h1>Professional Training </h1>
        {/* <h3>Punjab Medical Institute (PMI)</h3> */}
        <p>
          The Punjab Medical Institute (PMI) provide practical skills with
          modern technologies, helping students build successful careers in
          IT, business, and technical fields.
        </p>
      </div>

      {/* Images */}
      <div className="image-grid">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGapGZJMHrMWkmdM5bLrFUsFmkgo7QkGEqhkfcneznQ&s=10"
          alt="Digital Marketing"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKrTrMRIw6WiEB-LJKZQpuOg2iW_D8mdP_nX5UjUPdg&s=10"
          alt="Coding"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTw3SsQn4m0Ai6gW1vmsxS6B_Q6KJj0WajXNsCH1kRg&s=10"
          alt="Graphic Designing"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUzax1xP8MjkCpDXCaGhPh9EITwdHjd0-K7G68HPflQ&s=10"
          alt="SEO Training"
        />
      </div>

      {/* Cards */}
      <div className="course-section">

        <div className="container">
          <h2> Computer & IT</h2>
          <ul>
            <li>Basic Computer Training</li>
            <li>MS Office Professional</li>
            <li>Web Development</li>
            <li>Graphic Designing</li>
            <li>Freelancing</li>
          </ul>
        </div>

        <div className="container">
          <h2> Business</h2>
          <ul>
            <li>Digital Marketing</li>
            <li>Social Media Management</li>
            <li>SEO Training</li>
            <li>Content Writing</li>
          </ul>
        </div>

        <div className="container">
          <h2>Technical</h2>
          <ul>
            <li>Computer Hardware</li>
            <li>Networking Fundamentals</li>
            <li>CCTV Installation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Training;