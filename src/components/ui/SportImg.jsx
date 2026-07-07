
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SportImg.css";

function SportImg() {
  const navigate = useNavigate();

  return (
    <div className="sports-container">

      <div className="sports-gallery">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl13OK0_MZSuvZ8zS8QSDnttH5-P_ZAonyAEE0LadvW9M-McraHVhfxwb&s=10" alt="Sports 1" />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0qJ614hNdYK8uA8Rs-naTMdxenh2azwCgWDLi_CIhAM8gXIBwIAJPx9X&s=10"
          alt="Sports 2"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX2kj0OIz-kEDPfS1jZIRxpYc2zKOtApPVvuaZ5u21oFbgEYPJ8lciL4&s=10"
          alt="Sports 3"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2tvH7zNzf-5LGmhDcXOe5gVf_Fxzpmq4od3RnlCTEwJSxkvMgVdBq2Y&s=10"
          alt="Sports 4"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkBUwGZg_TvjFKOYqD_-3s9zJj1bgPXsfDgBsladeRemtH6e34QsM8DU&s=10"
          alt="Sports 5"
        />
      </div>

      {/* Button at the bottom */}
      <div className="button-container">
        <p>For further info, Visit our campus.</p>
        <button className="nav-btn" onClick={() => navigate("/Contact")}>
         Visit
        </button>
      </div>

    </div>
  );
}

export default SportImg;