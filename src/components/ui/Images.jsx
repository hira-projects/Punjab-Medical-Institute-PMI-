
import React from 'react';
import './Images.css';

function Images() {
  return (
    <div className="cafeteria-container">

      <h1>Cafeteria Student Life</h1>

      <div className="cards-grid">

        <div className="cards-cafe">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm7bt11H_fcrx8UUbx3F0mDrJ-Y8tEx0bIkw7h8EblZykILipmWXlo8c7&s=10" />
          <h3>Students Lunch Break</h3>
        </div>

        <div className="cards-cafe">
          <img src="https://www.lancingcollege.co.uk/wp-content/uploads/2025/02/14_1.png" />
          <h3>Friends Gathering</h3>
        </div>

        <div className="cards-cafe">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*_diGq5WTW1FD8fZ1n4OgmA.jpeg" />
          <h3>Group Study & Food</h3>
        </div>

        <div className="cards-cafe">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97C_wk35949Rx7f_Haf4VZkxBDAt7s3eb_0w-saRgVbrSKuxuEBH-Fk4&s=10" />
          <h3>Cafeteria Seating Area</h3>
        </div>

        <div className="cards-cafe">
          <img src="https://media.sciencephoto.com/f0/28/51/70/f0285170-800px-wm.jpg" />
          <h3>Social Interaction</h3>
        </div>

        <div className="cards-cafe">
          <img src="https://media.istockphoto.com/id/1717414539/photo/man-in-medical-scrubs-eating-at-a-buffet-style-cafeteria.jpg?s=612x612&w=0&k=20&c=izqfBp9qGGappPdr51qABK030jCwA6ZvI-99morfirs=" />
          <h3>Campus Cafeteria Life</h3>
        </div>

      </div>

    </div>
  );
}

export default Images;