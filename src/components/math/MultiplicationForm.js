import React, { useState } from "react";
import { mathService as doMath } from "../../service/mathService";

function MultiplicationForm() {
  const [multiplicand, setMultiplicand] = useState("");
  const [multiplier, setMultiplier ] = useState("");
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);

    try {
      setProduct(await doMath.calculateProduct(multiplicand, multiplier));
    } catch (err) {
      setError(err.message);
      setProduct("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="multiplication-form">
      <p>Multiply two numbers together to get their product.</p>
      <div>
        <label htmlFor="multiplicand-input">Enter an Integer (A):</label>
        <input
          type="text"
          id="multiplicand-input"
          name="multiplicand-input"
          value={multiplicand}
          onChange={(e) => setMultiplicand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="multiplier-input">Enter an Integer (B):</label>
        <input
          type="text"
          id="multiplier-input"
          name="multiplier-input"
          value={multiplier}
          onChange={(e) => setMultiplier (e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculate} disabled={loading}>
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
      <div>
        <p>Product (A × B): </p>
        <span id="product-output">{product}</span>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default MultiplicationForm;
