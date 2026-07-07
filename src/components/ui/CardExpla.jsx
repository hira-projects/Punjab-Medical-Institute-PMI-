
import React from "react";
import "./CardExpla.css";

function CardExpla() {
  return (
    <div className="programs-page">
      <h1>Medical Technology Programs</h1>
      <p className="intro">
        Our medical technology programs are designed to equip students with the
        knowledge, practical skills, and professional ethics required to excel
        in today's healthcare industry. Each program combines classroom learning
        with hands-on clinical experience to prepare graduates for rewarding
        careers in hospitals, laboratories, and healthcare organizations.
      </p>

      <section className="program">
        <h2>Cardiac Technology</h2>
        <p>
          Cardiac Technology focuses on the diagnosis and monitoring of heart
          diseases using advanced medical equipment. Students learn procedures
          such as Electrocardiography (ECG), Echocardiography, Stress Testing,
          and Holter Monitoring while assisting cardiologists in providing
          quality cardiovascular care.
        </p>
      </section>

      <section className="program">
        <h2>Public Health Technology</h2>
        <p>
          Public Health Technology prepares students to improve community health
          through disease prevention, health education, epidemiology, and health
          management systems. Graduates contribute to healthier communities by
          supporting public health programs and preventive healthcare
          initiatives.
        </p>
      </section>

      <section className="program">
        <h2>Anesthesia Technology</h2>
        <p>Students learn to operate and maintain anesthesia machines,
             monitor patients' vital signs, prepare medications and equipment, and ensure patient safety throughout the surgical process.</p>
      </section>

      <section className="program">
        <h2>Dental Technology Laboratory</h2>
        <p>
          Dental Technology Laboratory trains students to design and manufacture
          dental prosthetics such as crowns, bridges, dentures, and orthodontic
          appliances. The program combines scientific knowledge with technical
          precision to support dentists in restoring patients' oral health and
          smiles.
        </p>
         </section>
        <section className="program">
        <h2>Clinical Training Unit</h2>
        <p>
          Provides hands-on training to students using real clinical samples and
          modern diagnostic instruments to prepare for hospital-based practice.
        </p>
       
      </section>
    </div>
  );
}

export default CardExpla;