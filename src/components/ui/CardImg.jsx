
import React from "react";
import "./CardImg.css";

const images = [
  {
    title: "BBA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMJFkQfptkOK5wh1zKlsZKfiYLkYOa_Uc8WGmLsRR9A&s=10",
  },
  {
    title: "Accounting & Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
  },
  {
    title: "B.Ed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZNGNgAzfm8Plf3Oosw0ZE45SvRhQxLypuWuQh43I_g&s",
  },
  {
    title: "LLB",
    image: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/06/25122100/Untitled-design-53.png",
  },
  {
    title: "Business Economics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuBdaxBlSXzfWtr5-0IiQW4hj3abUcyQqpIUcGYOAGaqaU0Jze7tDhXA&s=10",
  },
  {
    title: "Principles of Management",
    image: "https://cdn2.hubspot.net/hubfs/53/management-principles.jpg",
  },
];

function CardImg() {
  return (
    <div className="gallery">
      <h1>Our Programs</h1>

      <div className="gallery-container">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardImg;