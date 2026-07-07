
import React from "react";
import "./Table.css";

function Table() {
  return (
    <div className="Medi-page">
      <div className="Medi-pro">
        <h2>2 Year Medical Programs</h2>
        <p>The Punjab Medical Institute (PMI) is committed to preparing skilled healthcare professionals through high-quality diploma programs in the medical and allied health sciences.
            We offer a wide range of diploma programs, including Medical Laboratory Technology, Operation Theater Technology, Dental Technology, Anesthesia Technology, Dialysis Technology, 
            Physiotherapy Technology, Cardiac Technology, and other specialized medical fields.
        </p>
      </div>

      <div className="program-table">
        <div className="row header">
          <div>Medical Technicians</div>
          <div>Advanced Sciences</div>
        </div>

        <div className="row">
          <div>Dispensing Opticianry</div>
          <div>Dialysis Technology</div>
        </div>

        <div className="row">
          <div>Dispensing Technology</div>
          <div>Dental Technology</div>
        </div>

        <div className="row">
          <div>Dental Surgery Assistant</div>
          <div>Public Health Technology</div>
        </div>

        <div className="row">
          <div>Mortuary Assistant</div>
          <div>Dental Hygiene Technology</div>
        </div>

        <div className="row">
          <div>Central Sterile Surgery</div>
          <div>Cardiac Technology</div>
        </div>

        <div className="row">
          <div>Endoscopy Technology</div>
          <div>Physiotherapy Technology</div>
        </div>

        <div className="row">
          <div>Medical Lab Technology</div>
          <div>Ophthalmology Technology</div>
        </div>

        <div className="row">
          <div>Anesthesia Technology</div>
          <div>Operation Theater Technology</div>
        </div>
      </div>
    </div>
  );
}

export default Table;