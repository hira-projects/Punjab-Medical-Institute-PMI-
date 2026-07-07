
import React from 'react';
import './Expla.css';
import { Link } from 'react-router-dom';
function Expla() {
  return (
    <div className="expla-container">
      <h1>Programs Overview</h1>

      <p>
        Punjab Medical Institute (PMI) offers career-focused ADP programs in
        Medical, IT, and Business fields with practical training.
      </p>

      {/* Medical */}
      <h2>Medical Programs</h2>
      <div className="item">
        <h3>MLT (Medical Laboratory Technology)</h3>
        <p>MLT (Medical Laboratory Technology) is a healthcare-based program that focuses on laboratory testing and medical diagnostics. In this program, 
            students learn how to analyze blood, urine, and other body samples to help doctors detect diseases and monitor patient health.</p>
      </div>

      <div className="item">
        <h3>Radiology & Imaging Technology</h3>
        <p>Radiology & Imaging Technology is a medical program that focuses on using advanced imaging equipment to diagnose and treat diseases. In this field, students learn how to
             operate machines such as X-rays, CT scans, and MRI systems to capture clear 
            images of the human body. These images help doctors identify injuries, internal problems, and medical conditions.</p>
      </div>

      <div className="item">
        <h3>Operation Theater Technology</h3>
        <p>Operation Theater Technology is a medical program that trains students to assist in surgical procedures and manage operation theater equipment. In this field, 
            students learn how to prepare the operating room, sterilize instruments, and support surgeons during operations. The program also focuses on patient care before, during, 
            and after surgery, along with maintaining hygiene and safety standards. 
            After completing this program, graduates can work in hospitals and surgical centers as operation theater technologists.</p>
      <div className="button-wrapper">
  <Link to="/Programs/diploma">
    <button>For more info</button>
  </Link>
</div>
      </div>
           

      {/* IT */}
      <h2>IT Programs</h2>
      <div className="item">
        <h3>Web Development</h3>
        <p>Web Development is an IT program that teaches students how to create and maintain websites and web applications. In this field, 
            students learn core technologies such as HTML, CSS, and JavaScript, along with modern frameworks like React. The program also includes training in responsive design, 
            user interface (UI) development, and basic backend concepts. After completing this program, 
            students can work as front-end developers, web designers, or full-stack developers in software companies and IT industries.</p>
      </div>

      <div className="item">
        <h3>Cyber Security</h3>
        <p>Cyber Security is an IT program that focuses on protecting computer systems, networks, and data from digital attacks and unauthorized access. 
            In this field, students learn how hackers operate and how to defend against cyber threats such as viruses, malware, phishing, and data breaches. 
            The program includes training in network security, ethical hacking, encryption techniques, and risk management. 
            After completing this program, students can work as cybersecurity analysts, ethical hackers, or security specialists in IT companies and organizations.</p>
      </div>

      <div className="item">
        <h3>Data Science</h3>
        <p>Data Science is an IT program that focuses on collecting, analyzing, and interpreting large sets of data to help organizations make better decisions. 
            In this field, students learn statistics, programming, data visualization, and machine learning techniques. The program includes training in tools such as Python, 
            SQL, and data analysis libraries to extract meaningful insights from raw data. After completing this program, 
            students can work as data analysts, data scientists, or business intelligence specialists in IT companies, research organizations, and industries.</p>
       <div className="button-wrapper">
  <Link to="/Programs/bscs">
    <button>For more info</button>
  </Link>
</div>
      </div>
           
      {/* Business */}
      <h2>Business Programs</h2>
      <div className="item">
        <h3>BBA (Business Administration)</h3>
        <p>BBA (Business Administration) is a business program that focuses on developing management, leadership, and organizational skills. 
            In this field, students learn key areas such as marketing, finance, human resources, and business communication. The program helps students understand 
            how businesses operate, make decisions, and grow in competitive markets.
             After completing BBA, students can work in corporate offices, banks, marketing agencies, or start their own business as entrepreneurs or managers.</p>
      </div>

      <div className="item">
        <h3>Accounting & Finance</h3>
        <p>Accounting & Finance is a business program that focuses on managing financial records, budgets, and economic activities of organizations. 
            In this field, students learn accounting principles, bookkeeping, financial reporting, taxation, and investment analysis. The program helps students understand 
            how money flows in businesses and how financial decisions are made. 
            After completing this program, students can work as accountants, financial analysts, auditors, or banking professionals in companies and financial institutions.</p>
      </div>

      <div className="item">
        <h3>Marketing</h3>
        <p>
            Marketing is a business program that focuses on promoting products and services to attract customers and increase sales. 
            In this field, students learn about market research, advertising, branding, consumer behavior, and digital marketing strategies. 
            The program also develops communication and creative thinking skills to understand customer needs and build strong brand identity. After completing this program, 
            students can work in advertising agencies, corporate marketing departments, or start careers in digital marketing and brand management.
        </p>
        <div className="button-wrapper">
  <Link to="/Programs/bba">
    <button>For more info</button>
  </Link>
</div>
      </div>
      
    </div>
  );
}

export default Expla;