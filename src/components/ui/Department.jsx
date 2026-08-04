
import React from 'react';
import './Department.css';
import { useNavigate } from 'react-router-dom';

function Department() {

  const navigate = useNavigate();

  return (
    <div className="special-IT">

      <h3>Department of Information Technology</h3>

      {/* GRID SECTION */}
      <div className="it-grid">

        <div className="it-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZobwVG97B9B5EaJ6RKO3kit9ZL_RFT0sKljVWlEkOg&s=10" alt="Programming" />
          <h4>Programming</h4>
        </div>

        <div className="it-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YgdivKHhQU_Y1tKxu_don2gARNpaaKdfhUukbTtQzw&s=10" alt="Cyber Security" />
          <h4>Cyber Security</h4>
        </div>

        {/* <div className="it-card">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" alt="Database Systems" />
          <h4>Database Systems</h4>
        </div> */}

        <div className="it-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzVWCbPavnAgm6-gPyfPCZ3M27tXRrzF1c68m9Dfk-g&s=10" alt="AI" />
          <h4>Artificial Intelligence</h4>
        </div>

        <div className="it-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOE_WCbQY33lUdOYoDTZK-mhalFXeI7CKB7X8PJHcOQ&s=10" alt="Database" />
          <h4>Database</h4>
        </div>

        <div className="it-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEd95S_1X0BISwJMClFLYoVr8hatVV9Z3J0sDa0vujfA&s=10" alt="Software Engineering" />
          <h4>Software Engineering</h4>
        </div>

      </div>

      {/* TEXT SECTION */}
      <div className="IT-DATA">
        <h1>Artificial Intelligence</h1>
        <p>
          Artificial Intelligence (AI) is the branch of computer science that focuses on creating machines and computer systems capable of performing tasks that normally require human intelligence.
        </p>
      </div>

      <h1>Database Systems</h1>
      <p>
        A Database System is an organized collection of related data along with the software used to store, manage, retrieve, and update that data efficiently.
      </p>

      <h1>Software Engineering</h1>
      <p>
        Software Engineering is the systematic application of engineering principles to design, develop, test, and maintain software systems.
      </p>

      <h1>Programming</h1>
      <p>
        Programming is the process of writing instructions (code) that tell a computer how to perform specific tasks.
      </p>

      {/* ✅ NAVIGATION BUTTON ADDED HERE */}
      
       <div className="IT-1">
        <p>For other departments detail , visit.</p>
        <button className="arrow-btn" onClick={() => navigate('/Programs/bba')}>
          →
        </button>
      </div>

    </div>
  );
}

export default Department;