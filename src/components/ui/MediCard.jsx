
import React from "react";
import "./MediCard.css";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Operation Theater Laboratory",
    img: "https://www.ctuniversity.in/storage/Infrastructure/CT-Infrastructure-1745384451.webp",
  },
  {
    id: 2,
    title: "Dental Technology Laboratory",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwf9HJf4gdB214enyHM46I--ol8Al82Qw-toohLZSu4ZVtRR6HZNeYXs&s=10",
  },
  {
    id: 3,
    title: "Public Health Technology",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0iGVTE_elBwaVRDnRwf0zUUY0_vj8pPzD6zx0wII1NNCZ6eU5TYVRDc&s=10",
  },
  {
    id: 4,
    title: "Clinical Training Unit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9sXPPewSD1Pc0DcOkM157LRSCfOji-t70NqJDkeZ997WdEbG31CVj2NA&s=10",
  },
  {
    id: 5,
    title: "Anesthesia Technology",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDO5x9NG_d9DUtcCqMvd2OUBVfDVPW0YxA4u8B_Mrl3UCyGdK9CC-OVFP&s=10",
  },
];

function MediCard() {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="medical-card" key={card.id}>
          <img src={card.img} alt={card.title} />

          <div className="card-content">
            <h3>{card.title}</h3>

            {/* Operation Theater - separate button */}
            {card.id === 1 ? (
              <Link to="/Programs/adp">
                <button className="card-btn">Learn More</button>
              </Link>
            ) : (
              <Link to="/Programs/diploma">
                <button className="card-btn">Learn More</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MediCard;