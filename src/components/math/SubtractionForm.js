import React, { useState } from "react";
import { mathService as doMath } from "../../service/mathService";

function SubtractionForm() {
  const [minuend, setMinuend] = useState("");
  const [subtrahend, setSubtrahend] = useState("");
  const [difference, setDifference] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);

    try {
      setDifference(await doMath.calculateDifference(minuend, subtrahend));
    } catch (err) {
      setError(err.message);
      setDifference("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subtraction-form">
      <p>Subtract two numbers to get their difference.</p>
      <div>
        <label htmlFor="minuend-input">Enter an Integer (A):</label>
        <input
          type="text"
          id="minuend-input"
          name="minuend-input"
          value={minuend}
          onChange={(e) => setMinuend(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="subtrahend-input">Enter an Integer (B):</label>
        <input
          type="text"
          id="subtrahend-input"
          name="subtrahend-input"
          value={subtrahend}
          onChange={(e) => setSubtrahend(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculate} disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
      <div>
        <p>Difference (A - B):</p>
        <span id="difference-output">{difference}</span>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default SubtractionForm;
