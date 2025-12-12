import React, { useState } from "react";
import AdditionForm from "./math/AdditionForm";
import SubtractionForm from "./SubtractionForm";
import MultiplicationForm from "./MultiplicationForm";
import DivisionForm from "./math/DivisionForm";

function MathContainer() {
  const [selectedOperation, setSelectedOperation] = useState('');

  return (
    <div className="math-container">
      <h2>Math Calculator</h2>
      
      {/* Operation selector */}
      <div className="operation-buttons">
        <button onClick={() => setSelectedOperation('addition')}>Addition</button>
        <button onClick={() => setSelectedOperation('subtraction')}>Subtraction</button>
        <button onClick={() => setSelectedOperation('multiplication')}>Multiplication</button>
        <button onClick={() => setSelectedOperation('division')}>Division</button>
      </div>

      {/* Conditional rendering of child components */}
      <div className="operation-form">
        {selectedOperation === 'addition' && <AdditionForm />}
        {selectedOperation === 'subtraction' && <SubtractionForm />}
        {selectedOperation === 'multiplication' && <MultiplicationForm />}
        {selectedOperation === 'division' && <DivisionForm />}
      </div>
    </div>
  );
}

export default MathContainer;