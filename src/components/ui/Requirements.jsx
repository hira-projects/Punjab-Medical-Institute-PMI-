import React from 'react'
import   './Requirements.css'
function Requirements() {
  return (
    <div className='criteria'>
        <h1>Eligibility Criteria</h1>
        <p>
          Punjab Medical Institute offers professional medical diploma programs
          designed for students who are passionate about healthcare and medical
          sciences.
        </p>
        <h2>1-  No age limit.</h2>
        <h2>2-  F.A, ICS, I.Com, FSC and Pre-Medical are Eligible.</h2>
        <h2>3-  Candidate Eligibe as per PMDC Benchmark.</h2>
        <h2>4-  Domicile of any district.</h2>
        
        <div className="schedule-box">
        <div className="row header">
          <div>Day</div>
          <div>Timing</div>
          <div>Program</div>
        </div>

        <div className="row">
          <div>Monday - Friday</div>
          <div>08:00 AM - 05:00 PM</div>
          <div>All Program Classes</div>
        </div>

        <div className="row">
          <div>Saturday</div>
          <div>02:00 PM - 08:00 PM</div>
          <div>Medical Diploma Classes</div>
        </div>

        <div className="row">
          <div>Sunday</div>
          <div>08:00 AM - 5:00 PM</div>
          <div>Revision & Lab Work</div>
        </div>
        
      </div>
      <div className="con-btn">
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
        
  )
}

export default Requirements
