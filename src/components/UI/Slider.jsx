import "./Slider.css";

function Slider({ position, setPosition }) {
  const handlePositionChange = (event) => {
    setPosition(parseInt(event.target.value));
  };

  return (
    <div className="wrapper">
      <input
        type="range"
        min="1"
        max="3"
        value={position}
        onChange={handlePositionChange}
        className={`${
          position === 2
            ? "slider theme2"
            : position === 3
            ? "slider theme3"
            : "slider"
        }`}
      />
    </div>
  );
}

export default Slider;
