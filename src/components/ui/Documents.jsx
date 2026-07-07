
import React from 'react'
import './Documents.css'
function Documents() {
  return (
    
    <div className="req-page">
      <h2>Program Requirements | Timing</h2>

      <div className="req-flex">
      {/* ADP */}
      <div className="req-box">
          <h2>ADP in all Fields</h2>
          <ul>
            <li>No age limit</li>
            <li>ICS, I.Com, FSc, Pre-Medical (Minimum 45%)</li>
            <li>Entry Test Required</li>
            <li>Matric Certificate</li>
            <li>FSc Result Card</li>
            <li>CNIC / B-Form</li>
            <li>Medical Fitness Certificate (Optional) </li>
          </ul>
        </div>

        {/* BS Medical */}
        <div className="req-box">
          <h2>BS Medical</h2>
          <ul>
            <li>No age limit</li>
            <li>ICS, I.Com, FSc, Pre-Medical (Minimum 60%)</li>
            <li>Candidate Eligibe as per PMDC Benchmark</li>
            <li>Entry Test Required</li>
            <li>Matric Certificate</li>
            <li>FSc Result Card</li>
            <li>CNIC / B-Form</li>
            <li>Medical Fitness Certificate (Optional) </li>
          </ul>
        </div>

        {/* BS Computer Science */}
        <div className="req-box">
          <h2>BS Computer Science</h2>
          <ul>
            <li>No age limit</li>
            <li>FSc Pre-Engineering / ICS / Pre-Medical / I.Com</li>
            <li>Minimum 50% Marks</li>
            <li>Matric Certificate</li>
            <li>FSc Result Card</li>
            <li>CNIC / B-Form</li>
            <li>Basic Computer Knowledge Preferred (Optional) </li>
          </ul>
        </div>

        {/* BBA */}
        <div className="req-box">
          <h2>BBA (Business Administration)</h2>
          <ul>
            <li>No age limit</li>
            <li>I.Com / FSc / ICS / FA / A-Level Equivalent</li>
            <li>Minimum 45–50% Marks</li>
            <li>Matric Certificate</li>
            <li>Intermediate Result Card</li>
            <li>CNIC / B-Form</li>
            <li>Interview May Be Required</li>
          </ul>
        </div>
        <div className="req-box">
          <h2>Timing</h2>
          <ul>
            
             <li>Monday - Friday 08:00 AM - 05:00 PM .</li>
    <li>Weekend Batch: Saturday  02:00 PM - 08:00 PM .</li>
   <li>Weekend Batch: Sunday  08:00 AM - 5:00 PM .</li>
    <li>Flexible timing available for students .</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Documents
