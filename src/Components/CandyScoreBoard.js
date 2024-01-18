import React from "react";
const CandyScoreBoard = ({ scoreDisplay , timeLeft , gameResult , handlePlayAgainClick }) => {


    
    return (

          <div className="score-board9">

              <div>Score: {scoreDisplay}</div>

              <div>Time left: {timeLeft}</div>

              {timeLeft === 0 && (

              <div>
                      {gameResult}

                      <button className='start-game9' onClick={handlePlayAgainClick}>Play again</button>
              </div>
                      )}

          </div>

    )};
    
    
    export default CandyScoreBoard;