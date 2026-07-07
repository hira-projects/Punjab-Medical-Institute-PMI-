
import React from 'react'
import './Hero.css'
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className='hero-con'>
        <h2>Welcome to Punjab Medical Institue (PMI) </h2>
        <h1>Intro</h1>
        <p>Punjab Medical Institute (PMI) is a modern educational institution dedicated to providing high-quality medical and healthcare education in a professional learning environment. The institute focuses on building strong academic foundations, practical skills, and ethical values in students who aim to serve the healthcare sector.
             With experienced faculty, well-equipped laboratories, and up-to-date teaching methods, PMI prepares students for real-world medical challenges. 
             Punjab Medical Institute (PMI) is committed to shaping skilled healthcare professionals who can contribute positively to society and the medical field.</p>
        <p>Punjab Medical Institute offers a range of professional academic programs designed to prepare students for successful careers in both medical and non-medical fields.
             The Medical Diploma programs focus on practical healthcare training and clinical skills for work in hospitals and medical centers, while BSCS and BSIT develop 
             strong expertise in computer science, programming, and modern IT technologies. The ADP program provides a solid academic foundation with essential skills for 
             higher studies and career growth. BBA and BAF programs focus on business, management, accounting, and finance to prepare students for corporate and financial 
             sectors. In addition, short courses are available to help students quickly gain practical, job-oriented skills for immediate career opportunities and professional
              development.
</p>     
<div className='offer'>
    <h1>Admission are now open at PMI</h1>
    <p>Get admission with 50% scholarship. Huury up get offer and visit our campus.</p>
    <Link to="/Contact" className="contact-btn">
      Apply Now
    </Link>
    <div className='programs-det-container'>
        <h2>We are offering......</h2>
        <p>The Punjab Medical Institue (PMI) offers multiple (ADP) 2 Year and (BS (HONS) ) 4 Year programs in medical diplomas, IT field and BBA, BAF, B.ED, LLB and other many programs.</p>
    </div>
</div>
    </div>
  )
}

export default Hero
