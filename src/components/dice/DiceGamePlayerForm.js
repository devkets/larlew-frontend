import React, { useEffect } from "react";
import { useState } from "react";

function DiceGamePlayerForm(props) {
  const [roundSum, setRoundSum] = useState(0);
  const [historyArray, setHistoryArray] = useState([]);
  const [diceOne, setDiceOne] = useState("");
  const [diceTwo, setDiceTwo] = useState("");
  const [loading, setLoading] = useState(false);
  const [ruleApplied, setRuleApplied] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setRoundSum(0);
    setHistoryArray([]);
    setDiceOne("");
    setDiceTwo("");
    setLoading(false);
    setError(null);
    setRuleApplied("");
  }, [props.resetTrigger]);

  const rollDice = () => {
    setRuleApplied("");
    setLoading(true);
    setError(null);
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    setDiceOne(die1);
    setDiceTwo(die2);
    const roundTotal = die1 * die2;
    const endOfRoundSum = roundTotal + roundSum;
    const adjustedSum = checkForRoundEndRules(endOfRoundSum);
    setRoundSum(adjustedSum);
    setHistoryArray([...historyArray, roundTotal]);
    setLoading(false);
    if (adjustedSum >= 100) {
      props.setWinner(props.playerNumber);
    } else {
      props.advanceTurn();
    }
  };

  const checkForRoundEndRules = (sumValue) => {
    // Check if the number ends with a zero
    if (sumValue % 10 === 0) {
      setRuleApplied(sumValue + " Ends with 0: Reset to 0");
      return 0;
    }
    // Check if the number ends with a 4
    if (sumValue % 10 === 4 && sumValue > 10) {
      setRuleApplied(sumValue + " Ends with 4: Subtract 10");
      return sumValue - 10;
    }
    // Check if the number ends with a 4
    if (sumValue % 10 === 2) {
      setRuleApplied(sumValue + " Ends with 2: Add 10");
      return sumValue + 10;
    }
    return sumValue;
  };

  return (
    <div name="dice-game-player-form">
      <p>Player {props.playerNumber}</p>
      <div>
        <label htmlFor="diceOne-input">Dice One:</label>
        <input
          type="text"
          id="diceOne-input"
          name="diceOne-input"
          value={diceOne}
          onChange={(e) => e.preventDefault()}
        />
      </div>
      <div>
        <label htmlFor="diceTwo-input">Dice Two:</label>
        <input
          type="text"
          id="diceTwo-input"
          name="diceTwo-input"
          value={diceTwo}
          onChange={(e) => e.preventDefault()}
        />
        <div>
          <label htmlFor="historyArray-display">Round History:</label>
          <input
            type="text"
            id="historyArray-display"
            name="historyArray-display"
            value={historyArray.join(", ")}
            onChange={(e) => e.preventDefault()}
            style={{ width: "24ch", minWidth: "180px", flex: 1 }}
          />
        </div>
        <div>
          <label htmlFor="ruleApplied-input">Rule applied:</label>
          <input
            type="text"
            id="ruleApplied-input"
            name="ruleApplied-input"
            value={ruleApplied}
            onChange={(e) => e.preventDefault()}
          />
        </div>
        <div>
          <label htmlFor="roundSum-input">Round Sum:</label>
          <input
            type="text"
            id="roundSum-input"
            name="roundSum-input"
            value={roundSum}
            onChange={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div>
        <button
          onClick={rollDice}
          disabled={
            props.playerTurn !== props.playerNumber ||
            loading ||
            props.winner !== null
          }
        >
          {loading ? "Rolling..." : "Roll the Dice"}
        </button>
      </div>
    </div>
  );
}

export default DiceGamePlayerForm;
