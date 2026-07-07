
import React from "react";
import "./Docu.css";

function Docu() {
  return (
    <div className="docs-page">
      <h1>Required Documents for Admission</h1>
      <p className="subtitle">
        Punjab Medical Institute – Make sure you prepare all documents before applying.
      </p>

      <ul className="docs-list">
        <li>Matric | Inter Result Card (Original + Copy)</li>
        <li>ICS, I.Com, FSc and Pre-Medical Result Card (Original + Copy)</li>
        <li>Student CNIC / B-Form</li>
        <li>Father / Guardian CNIC Copy</li>
        <li>Recent Passport Size Photographs</li>
        <li>Domicile Certificate (Optional) </li>
        <li>Medical Fitness Certificate (Optional) </li>
        <li>Admission Application Form</li>
      </ul>

      <p className="note">
        ⚠ All documents must be complete and verified before submission.
      </p>
    </div>
  );
}

export default Docu;