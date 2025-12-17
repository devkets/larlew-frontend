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
      <h3>Current Turn: Player {playerTurn}</h3>
      {winner && <h3>Winner: Player {winner}</h3>}
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
