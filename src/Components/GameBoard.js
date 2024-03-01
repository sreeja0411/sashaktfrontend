import React, { useState, useEffect, useCallback } from "react";
import Data from "./data";
import Card from "./Card";
import GameCompletePopup from "./GameCompletePopup";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function GameBoard() {
  const [cardsArray, setCardsArray] = useState([]);
  const [moves, setMoves] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [won, setWon] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const removeSelection = useCallback(() => {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);

    if (won === 5) {
      setShowPopup(true);
    }
  }, [setFirstCard, setSecondCard, setStopFlip, setMoves, setShowPopup, won]);

  function newGame() {
    const randomOrderArray = Data.sort(() => 0.5 - Math.random());
    setCardsArray(randomOrderArray);
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
    setWon(0);
    setTimer(0);
    setStopFlip(false);
    setShowPopup(false);
  }

  function handleSelectedCards(item) {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) =>
          prevArray.map((unit) =>
            unit.name === firstCard.name ? { ...unit, matched: true } : unit
          )
        );
        setWon((prevVal) => prevVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard, removeSelection]);

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    let interval;
    if (won < 6) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [won]);

  const textStyle = {
    fontSize: "45px",
    color: "rgb(255, 255, 255)",
  };

  return (
    <div className="gameboardbody">
      <div className="back-container">
                <Link to="/games" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
      </div>
      <div className="container26">
        <div className="header26 text-center">
          <h3 style={textStyle}>Memory Game</h3>
          <div className="timer">Timer: {timer} seconds</div>
        </div>
        <div className="board26 row justify-content-center">
          {cardsArray.map((item) => (
            <Card
              item={item}
              key={item.id}
              handleSelectedCards={handleSelectedCards}
              toggled={item === firstCard || item === secondCard || item.matched}
              stopflip={stopFlip}
              style={item.style}
            />
          ))}
        </div>

        <div className="comments text-center mb-3">
          {won !== 6 ? `Moves: ${moves}` : `HURRAY!!! You Won in ${moves} moves and ${timer} seconds!!!`}
        </div>

        {showPopup && (
          <GameCompletePopup
            moves={moves}
            timer={timer}
            onNewGameClick={newGame}
          />
        )}

        <button className="button26" onClick={newGame}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default GameBoard;
