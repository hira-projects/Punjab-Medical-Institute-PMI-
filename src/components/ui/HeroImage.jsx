
import React from "react";
import "./HeroImage.css";

function HeroImage() {

  const medicalImages = [
    {
      name: "Medical Department",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0K01cgZUt3TflSKWc1DMCQ1jqnxeqkqAIvfvl7OouNA&s=10"
    },
    {
      name: "IT Department",
      img: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png"
    },
    // {
    //   name: "E-Commerce Department",
    //   img: "https://static.vecteezy.com/system/resources/thumbnails/005/732/516/small/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-on-virtual-screen-free-photo.jpg"
    // },
    {
      name: "Accounting & Finance Department",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62NpkA7i7C7wRVRL_xY8kkFiIOph6A9nQGhnDtVTerQ&s=10"
    },
    {
      name: "B.ED Department",
      img: "https://career.webindia123.com/career/options/images/teaching.jpg"
    },
    {
      name: "LLB Department",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzq4F35Yx2NTut439Zgs8x8irf6mWMM8C19KaV7nk5A&s=10"
    }
  ];


  return (
    <div className="image-section">
        
      {
        medicalImages.map((item,index)=>(

          <div className="image-card" key={index}>

            <img 
              src={item.img} 
              alt={item.name}
            />

            <h3>
              {item.name}
            </h3>

          </div>

        ))
      }

    </div>
  );
}

export default HeroImage;