

import React from "react";
import "./HeroImage.css";

function HeroImage() {

  const medicalImages = [
    {
      name: "Medical and Healthcare Department",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0K01cgZUt3TflSKWc1DMCQ1jqnxeqkqAIvfvl7OouNA&s=10",
      alt: "Medical and healthcare education at Punjab Medical Institute, Jia Bagga Lahore"
    },
    {
      name: "Information Technology Department",
      img: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
      alt: "IT and computer science education at Punjab Medical Institute"
    },
    {
      name: "Accounting and Finance Department",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62NpkA7i7C7wRVRL_xY8kkFiIOph6A9nQGhnDtVTerQ&s=10",
      alt: "Accounting and finance academic programs at PMI Lahore"
    },
    {
      name: "Education Department",
      img: "https://career.webindia123.com/career/options/images/teaching.jpg",
      alt: "Bachelor of Education and teacher training programs at PMI"
    },
    {
      name: "Law Department",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzq4F35Yx2NTut439Zgs8x8irf6mWMM8C19KaV7nk5A&s=10",
      alt: "Law and LLB academic education at Punjab Medical Institute"
    }
  ];

  return (
    <section className="image-section" aria-label="Academic departments at Punjab Medical Institute">

      {medicalImages.map((item, index) => (

        <div className="image-card" key={index}>

          <img
            src={item.img}
            alt={item.alt}
            loading="lazy"
            decoding="async"
          />

          <h3>{item.name}</h3>

        </div>

      ))}

    </section>
  );
}

export default HeroImage;
