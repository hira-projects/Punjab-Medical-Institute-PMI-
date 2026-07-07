
import React from 'react'
import './Bba.css'

const Bba = () => {
  return (
    <div className='BBA'>
      <h1>Overview of all Business Programs</h1>
      <p>The Punjab Medical Institue offers BBA (Bachelor of Business Administration) and BAF (Bachelor of Accounting and Finance) other undergraduate programs like B.ED and LLB. It
        designed to build strong foundations in business, management, accounting, and financial systems</p>
        <div className='ba-info'>
          <h2>BBA</h2>
          <p>Bachelor of Business Administration (BBA) focuses on overall business operations, leadership, marketing, and organizational management, preparing students
             for diverse roles in corporate and administrative fields.BBA graduates can pursue careers in banking, finance, accounting, human resources, and marketing, or
              continue their studies by enrolling in an MBA for advanced specialization.</p>
              <div className='baf-info'>
                <h2>BAF</h2>
                <p>Bachelor of Accounting and Finance (BAF) are two closely related fields that focus on managing, recording, analyzing, and planning financial activities of individuals and organizations. Accounting deals with the systematic recording of financial transactions, preparation of financial statements, and ensuring accuracy in financial reporting. 
                  Finance focuses on managing money, investments, budgeting, and making strategic financial decisions to achieve growth and stability. </p>
              
                <div className='subjects'>
                  <h2>Core Subjects of BBA | BAF</h2>
                 
             <div className='overview'>
              {/* <h2>Business Programs</h2> */}
      <div className="item-1">
        <h3>Financial Accounting</h3>
        <p>Financial Accounting is the process of recording, classifying, and reporting a business's financial transactions in a systematic manner.
           It helps organizations prepare financial 
          statements such as the balance sheet, income statement, and cash flow statement, providing accurate information about their financial performance and position.</p>
      </div>

      <div className="item-1">
        <h3>Cost Accounting</h3>
        <p>Cost Accounting is the branch of accounting that focuses on recording, analyzing, and controlling the costs of producing goods and services. 
          It helps businesses determine the cost of materials, labor, and overhead expenses to improve efficiency and profitability. 
          By providing detailed cost information, cost accounting supports budgeting, pricing, cost control, and managerial decision-making.</p>
      </div>
<div className="item-1">
        <h3>Principles of Management</h3>
        <p>Principles of Management is a foundational subject that introduces students to the basic concepts and functions of management. 
          It covers key areas such as planning, organizing, staffing, leading, and controlling, helping students understand how organizations operate effectively. 
          The course also emphasizes leadership, decision-making, communication, teamwork, and problem-solving skills.</p>
      </div>
      <div className="item-1">
        <h3>Managerial Accounting</h3>
        <p>Managerial Accounting is the branch of accounting that provides financial information and analysis to help managers make informed business decisions.
           It focuses on budgeting, cost analysis, performance evaluation, forecasting, and financial planning rather than external financial reporting.</p>
      </div>
      <div className="item-1">
        <h3>Business Economics</h3>
        <p>Business Economics is the study of economic principles and their application to business decision-making. It helps students understand how factors 
          such as demand and supply, market structures, production, costs, pricing, inflation, and government policies influence business operations.</p>
      </div>

      <div className="item-1">
        <h3>Taxation Basics</h3>
        <p>
Taxation Basics is an introductory subject that provides students with a fundamental understanding of tax laws, regulations, and the taxation system. 
It covers different types of taxes, tax calculation methods, filing procedures, and the legal responsibilities of individuals and businesses.
        </p>
         </div>
      </div>
        <div className='other-pro'>
          <h2>Other Programs</h2>
          <div className='b.ed-info'>
          <h2>B.ED</h2>
          <p>Bachelor of Education (B.Ed) is an undergraduate professional degree program designed to prepare students for a career in teaching and education. 
            It focuses on developing strong teaching skills, classroom management, lesson planning, and understanding of educational psychology.</p>
            <div className='b.ed-info'>
          <h2>LLB</h2>
          <p>LLB (Bachelor of Laws) is an undergraduate degree program that focuses on the study of law, legal systems, and justice. 
            It provides students with knowledge of constitutional law, criminal law, civil law, and other important legal subjects. 
            The program develops skills in critical thinking, argumentation, legal research, and problem-solving, which are essential for understanding and practicing law.</p>
       </div>
              </div>
       </div>
             </div>
              </div>
 </div> 
        </div>
    
    
  )
}

export default Bba