import React from "react";
import { useState } from "react";
import DiceGamePlayerForm from "./DiceGamePlayerForm";

function DiceGameContainer() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setPlayerTurn(1);
    setResetTrigger((prev) => !prev);
    setWinner(null);
  };

  const advanceTurn = () => {
    setPlayerTurn((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <div
      name="dice-game-container"
      style={{
        padding: "20px",
        border: "1px solid #000000ff",
        borderRadius: "5px",
        backgroundColor: "#f7eaffff",
      }}
    >
      <h2>Multiply Up - A Dice Game</h2>
      {!winner && (
        <>
          <p>
            Each player rolls two six-sided dice. The resulting numbers are
            multiplied and added to that players total score. However, special
            rules apply at the end of each round based on the last digit of the
            total score:
          </p>
          <ul>
            <li>
              If the total score ends with a 0, the player's score resets to 0.
            </li>
            <li>
              If the total score ends with a 4 and is greater than 10, subtract
              10 from the score.
            </li>
            <li>If the total score ends with a 2, add 10 to the score.</li>
            <li>
              If the total score ends with a 5, divide the score by 2 (rounding
              down).
            </li>
            <li>If the total score ends with a 7, the player gets to roll again.</li>
          </ul>
          <p>First to 100 Wins!</p>
          <h4>Current Turn: Player {playerTurn}</h4>
        </>
      )}

      {winner && <h3 style={{color: "green"}}>Winner: Player {winner}</h3>}
      <div style={{ display: "flex", gap: "2rem", justifyContent: "left" }}>
        <DiceGamePlayerForm
          playerNumber={1}
          resetTrigger={resetTrigger}
          playerTurn={playerTurn}
          advanceTurn={advanceTurn}
          winner={winner}
          setWinner={setWinner}
        />
        <DiceGamePlayerForm
          playerNumber={2}
          resetTrigger={resetTrigger}
          playerTurn={playerTurn}
          advanceTurn={advanceTurn}
          winner={winner}
          setWinner={setWinner}
        />
      </div>
      <div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default DiceGameContainer;
