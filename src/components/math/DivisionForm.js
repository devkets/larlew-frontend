import React, { useState } from "react";
import { mathService as doMath } from "../../service/mathService";

function DivisionForm() {
  const [dividend, setDividend] = useState("");
  const [divisor, setDivisor] = useState("");
  const [quotient, setQuotient] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);

    try {
      setQuotient(await doMath.calculateQuotient(dividend, divisor));
    } catch (err) {
      setError(err.message);
      setQuotient("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="division-form">
      <p>Divide two numbers to get their quotient.</p>
      <div>
        <label htmlFor="dividend-input">Enter an Integer (A):</label>
        <input
          type="text"
          id="dividend-input"
          name="dividend-input"
          value={dividend}
          onChange={(e) => setDividend(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="divisor-input">Enter an Integer (B):</label>
        <input
          type="text"
          id="divisor-input"
          name="divisor-input"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculate} disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
      <div>
        <p>Quotient (A ÷ B): </p>
        <span id="quotient-output">{quotient}</span>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default DivisionForm;
