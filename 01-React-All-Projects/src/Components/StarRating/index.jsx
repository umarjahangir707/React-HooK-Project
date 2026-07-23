import React, { useState } from "react";
import "./style.css";

function StarRating() {
  const stars = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(0); // Changed: Better naming convention
  const [hover, setHover] = useState(0);

  // Changed: Renamed handleckick -> handleClick
  function handleClick(idx) {
    setRating(idx);
  }

  function handleMouseEnter(idx) {
    setHover(idx);
  }

  // Changed: Reset hover instead of console.log()
  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="gap-3.5">
      {stars.map((idx) => {
        return (
          <span
            key={idx}
            className={idx <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(idx)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            ★ {/* Changed: Display a star */}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;