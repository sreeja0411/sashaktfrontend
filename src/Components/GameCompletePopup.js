import React from "react";
import { useNavigate } from "react-router-dom";

function GameCompletePopup({ moves, timer }) {
  const navigate = useNavigate();

  const handleNextClick = () => {
    // You can perform any necessary logic before navigating, if needed
    // For example, sending data to ChildRightsInfo component
    // navigate("/child-rights-info", { state: { moves, timer } });

    // Navigate to ChildRightsInfo component
    navigate("/quiz");
  };

  const textStyle = {
    fontSize: "45px",
    color: "222",
  };

  const text2Style = {
    fontSize: "25px",
    color: "222",
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 style={textStyle}>Congratulations!</h2>
        <p style={text2Style}>You won in {moves} moves and {timer} seconds!</p>
        <button className="button26" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default GameCompletePopup;