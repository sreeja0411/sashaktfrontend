import React from "react";
import "./gamehome.css";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div className="main">
      <div className="card-container">
        <div className="card1">
          <div className="image">
            <img src="https://img.gamepix.com/games/italia-jigsaw-puzzle/icon/italia-jigsaw-puzzle.png" alt="Jigsaw Puzzle" />
          </div>
          <div className="title">
            <h1>JIGSAW PUZZLE</h1>
          </div>
          <div className="des">
            <Link to="/gamehome">
              <button>Let's Play</button>
            </Link>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1u2m-S5eBunWKmvjRq4XyC5owZrDZKtWqA&usqp=CAU" alt="Memory Game" />
          </div>
          <div className="title">
            <h1>MEMORY GAME</h1>
          </div>
          <div className="des">
            <Link to="/memory">
              <button>Let's Play</button>
            </Link>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img src="https://static.vecteezy.com/system/resources/previews/004/559/972/non_2x/background-with-gradient-and-text-maze-games-for-cover-and-banners-vector.jpg" alt="Memory Game" />
          </div>
          <div className="title">
            <h1>MAZE GAME</h1>
          </div>
          <div className="des">
            <Link to="/maze">
              <button>Let's Play</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Games;