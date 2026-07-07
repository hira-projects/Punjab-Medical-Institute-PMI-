
import React from 'react';
import './ContentBba.css';

function ContentBba() {

  const handleNavigate = () => {
    window.location.href = '/Programs/bba';
  };

  return (
    <div className="layout-container">

      <div className="left-content">

        <h1>BBA | Accounting and Finance Practical Labs</h1>

        <p>
          The Punjab Medical Institute (PMI) provides practical labs for BBA and
          Accounting and Finance departments. Students gain hands-on experience
          in bookkeeping, financial reporting, budgeting, taxation, auditing,
          and business management using modern tools and real-life case studies.
        </p>


        {/* IMAGE BLOCK */}

        <div className="image-row">

          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
            alt="Business students" 
          />

          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" 
            alt="Finance work" 
          />

          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
            alt="Accounting lab" 
          />

        </div>


        {/* Departments */}

        <div className="departments">

          <h2>Department of Business Administration (BBA)</h2>
          <p>
            Provides knowledge of management, marketing, entrepreneurship,
            business communication, and organizational skills.
          </p>


          <h2>Department of Accounting & Finance</h2>
          <p>
            Students learn financial accounting, auditing, taxation,
            investment management, and financial analysis.
          </p>


          <h2>Department of Economics</h2>
          <p>
            Focuses on economic concepts, market analysis, business policies,
            and decision-making skills.
          </p>


          <h2>Department of Commerce</h2>
          <p>
            Develops understanding of trade, business operations,
            banking systems, and commercial practices.
          </p>


          <h2>Department of Management Sciences</h2>
          <p>
            Covers leadership, human resource management, project planning,
            and professional development.
          </p>

        </div>



        {/* Flex Section */}

        <div className="info-flex">


          {/* Practical Labs */}

          <div className="lab-section">

            <h2>Practical Lab Facilities</h2>

            <ul>
              <li>Computerized accounting practice environment.</li>
              <li>Financial analysis and reporting activities.</li>
              <li>Business case studies and presentations.</li>
              <li>MS Office and professional software training.</li>
              <li>Research and project development support.</li>
            </ul>

          </div>



          {/* Skills / Facilities */}

          <div className="skills-section">

            <h2>Facilities & Skills Developed</h2>

            <ul>
              <li>Financial management skills.</li>
              <li>Accounting and auditing knowledge.</li>
              <li>Business communication skills.</li>
              <li>Problem-solving and decision making.</li>
              <li>Professional workplace skills.</li>
            </ul>

          </div>


        </div>



        {/* Career */}

        <div className="career-section">

          <h2>Career Opportunities</h2>

          <p>
            After completing BBA and Accounting & Finance programs, students can
            pursue careers in banking, business organizations, financial firms,
            management sectors, and entrepreneurship.
          </p>

        </div>



        <button 
          className="nav-button" 
          onClick={handleNavigate}
        >
          For Further Detail →
        </button>


      </div>

    </div>
  );
}

export default ContentBba;