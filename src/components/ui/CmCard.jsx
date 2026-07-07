
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CmCard.css";

function CmCard() {

  const navigate = useNavigate();

  const cards = [
    {
      title: "Computer Fundamentals",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      desc: "Basic hardware, software, and computer operations."
    },
    {
      title: "Microsoft Office",
      image: "https://img.magnific.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg",
      desc: "Learn Word, Excel, and PowerPoint skills."
    },
    {
      title: "Programming Basics",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
      desc: "Introduction to coding and programming concepts."
    }
  ];


  const handleClick = () => {
    navigate("/Programs/bscs");
  };


  return (
    <div className="cm-card">

      {cards.map((item, index) => (

        <div className="card" key={index}>

          <img 
            src={item.image} 
            alt={item.title}
          />

          <h2>{item.title}</h2>

          <p>{item.desc}</p>


          <button onClick={handleClick}>
            →
          </button>

        </div>

      ))}

    </div>
  );
}

export default CmCard;