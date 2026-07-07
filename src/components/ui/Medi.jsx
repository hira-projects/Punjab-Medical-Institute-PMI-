
import React from "react";
import "./Medi.css";

const backgroundImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgp9BWw-w3qJzovtpqtvD7VH0F5W0XjMWRhmoTgb6Mg&s=10";

const diplomas = [
  {
    title: "Medical Laboratory Technology",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600",
  },
  {
    title: "Operation Theater Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fOuiihH2SPcU4gi_2u9Ruvva93GtvNYYwp3WNvBmTg&s=10",
  },
  {
    title: "Anesthesia Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgHkM8t3RoczSaw-etouw-I-PJ-Dop-XT2rLUl7PI0w&s=10",
  },
  {
    title: "Dental Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8O4RxW5V749bJXx3wRMb-NAc3g_-1YRZmCKzCQVcMfg&s=10",
  },
  
  {
    title: "Cardiac Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFVwpX5Om3NlMM3G9gGAIaaQynWh2Mx9N8Tf0RyUyyQ&s=10",
  },
  
  
];

function Medi() {
  return (
    <div
      className="medi-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h1>Medical Diploma Programs</h1>
        <div className="cards">
          {diplomas.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="content">
                <h3>{item.title}</h3>                             
              </div>
            </div>
            
          ))}
          <div className="programs-info">
        <h1>Central Sterile Surgery :</h1>
        <p>Central Sterile Surgery Technology at Punjab Medical Institute (PMI) is designed to prepare students for an essential role in modern healthcare. This diploma program provides comprehensive training in the cleaning, 
          sterilization, packaging, storage, and distribution of surgical instruments and medical equipment used in hospitals and operating theaters.</p>
         </div>
          <div className="img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ppJ8lfqFqY190NtCZXKSu9ykBn97MfBrUXLNtLQ3QQ&s=10"></img>
          <h3>Central Sterile Surgery</h3>
      </div>
           <div className="programs-info">
        <h1>Endoscopy Technology :</h1>
        <p>Endoscopy Technology at Punjab Medical Institute (PMI) is a specialized diploma program designed to train students in modern diagnostic and minimally invasive medical procedures. 
          This program focuses on the use, handling, cleaning, and maintenance of endoscopy equipment used to examine internal organs of the human body.</p>
         </div>
          <div className="img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB84YaL2JP9gLcGZnxocMfbkbX9IEohn9uVgxHfgjrZA&s=10"></img>
          <h3>Endoscopy Technology</h3>
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default Medi;