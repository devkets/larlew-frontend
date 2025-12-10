import React, { useState } from "react";

function MathContainer() {
  const [addendOne, setAddendOne] = useState("");
  const [addendTwo, setAddendTwo] = useState("");
  const [sum, setSum] = useState("VALUE");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Make request to your backend service
      const response = await fetch(`http://localhost:8080/math/sum?a=${addendOne}&b=${addendTwo}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSum(data); // Adjust based on your API response structure
    } catch (err) {
      setError(err.message);
      setSum("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="math-container">
      <h2>Math Container</h2>
      <p>Your math content goes here</p>
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
          {loading ? 'Calculating...' : 'Calculate'}
        </button>
      </div>
      <div>
        <p>Sum (A + B): </p>
        <span id="sum-output">{sum}</span>
      </div>
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
    </div>
  );
}
 
export default MathContainer;
