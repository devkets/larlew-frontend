import React, { useState } from "react";
import { mathService as doMath } from "../../service/mathService";

function AdditionForm() {
  const [addendOne, setAddendOne] = useState("");
  const [addendTwo, setAddendTwo] = useState("");
  const [sum, setSum] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);

    try {
      setSum(await doMath.calculateSum(addendOne, addendTwo));
    } catch (err) {
      setError(err.message);
      setSum("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addition-form">
      <p>Add two numbers together to get their sum.</p>
      <div>
        <label htmlFor="addendOne-input">Enter an Integer (A):</label>
        <input
          type="text"
          id="addendOne-input"
          name="addendOne-input"
          value={addendOne}
          onChange={(e) => setAddendOne(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="addendTwo-input">Enter an Integer (B):</label>
        <input
          type="text"
          id="addendTwo-input"
          name="addendTwo-input"
          value={addendTwo}
          onChange={(e) => setAddendTwo(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculate} disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
      <div>
        <p>Sum (A + B): </p>
        <span id="sum-output">{sum}</span>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default AdditionForm;
