import { useState } from "react";
import "./Slider.css";

function Slider() {
  const [position, setPosition] = useState(0);

  const handlePositionChange = (event) => {
    setPosition(parseInt(event.target.value));
  };

  return (
    <div className="wrapper">
      <input
        type="range"
        min="0"
        max="2"
        value={position}
        onChange={handlePositionChange}
        className="slider"
      />
    </div>
  );
}

export default Slider;
