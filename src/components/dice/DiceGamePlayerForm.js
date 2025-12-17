import React, { useEffect } from "react";
import { useState } from "react";

function DiceGamePlayerForm(props) {
  const [roundSum, setRoundSum] = useState(0);
  const [historyArray, setHistoryArray] = useState([]);
  const [diceOne, setDiceOne] = useState("");
  const [diceTwo, setDiceTwo] = useState("");
  const [loading, setLoading] = useState(false);
  const [ruleApplied, setRuleApplied] = useState("");
  const [rollAgain, setRollAgain] = useState(false);
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
    } else if (!rollAgain) {
      props.advanceTurn();
    }
    setRollAgain(false);
  };

  const checkForRoundEndRules = (sumValue) => {
    switch (sumValue % 10) {
      case 0:
        setRuleApplied("Total of " + sumValue + " ends with 0: Reset to 0");
        return 0;
      case 2:
        setRuleApplied("Total of " + sumValue + " ends with 2: Add 10");
        return sumValue + 10;
      case 4:
        if (sumValue > 10) {
          setRuleApplied("Total of " + sumValue + " ends with 4: Subtract 10");
          return sumValue - 10;
        }
        break;
      case 5:
        setRuleApplied("Total of " + sumValue + " ends with 5: Divide total by 2");
        return Math.floor(sumValue / 2);
          case 7:
        setRuleApplied("Total of " + sumValue + " ends with 7: Roll again!");
        setRollAgain(true);
        return sumValue;
      default:
        setRuleApplied("");
        return sumValue;
    }
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
        {ruleApplied && (
          <div style={{ padding: 10 }}>
            <em>Last Rule Applied: {ruleApplied}</em>
          </div>
        )}
        <div>
          <label htmlFor="roundSum-input">Total Score:</label>
          <input
            type="text"
            id="roundSum-input"
            name="roundSum-input"
            value={roundSum}
            onChange={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div style={{ padding: 10 }}>
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
      <div style={{ padding: 10 }}></div>
    </div>
  );
}

export default DiceGamePlayerForm;
