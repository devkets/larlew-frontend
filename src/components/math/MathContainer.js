import React, { useState } from "react";
import AdditionForm from "./AdditionForm";
import SubtractionForm from "./SubtractionForm";
import MultiplicationForm from "./MultiplicationForm";
import DivisionForm from "./DivisionForm";

function MathContainer() {
  const [selectedOperation, setSelectedOperation] = useState("");

  return (
    <div
      className="math-container"
      style={{
        padding: "20px",
        border: "1px solid #000000ff",
        borderRadius: "5px",
        backgroundColor: "#eaffffff",
      }}
    >
      <h2>Math Calculator</h2>

      {/* Operation selector */}
      <div className="operation-buttons">
        <button 
          onClick={() => setSelectedOperation('addition')} 
          style={{backgroundColor: selectedOperation === 'addition' ? '#aacbffff' : '#cfcfcfff'}}
        >
          Addition
        </button>
        <button 
          onClick={() => setSelectedOperation('subtraction')} 
          style={{backgroundColor: selectedOperation === 'subtraction' ? '#aacbffff' : '#cfcfcfff'}}
        >
          Subtraction
        </button>
        <button 
          onClick={() => setSelectedOperation('multiplication')} 
          style={{backgroundColor: selectedOperation === 'multiplication' ? '#aacbffff' : '#cfcfcfff'}}
        >
          Multiplication
        </button>
        <button 
          onClick={() => setSelectedOperation('division')} 
          style={{backgroundColor: selectedOperation === 'division' ? '#aacbffff' : '#cfcfcfff'}}
        >
          Division
        </button>
      </div>

      {/* Conditional rendering of child components */}
      <div className="operation-form">
        {selectedOperation === "addition" && <AdditionForm />}
        {selectedOperation === "subtraction" && <SubtractionForm />}
        {selectedOperation === "multiplication" && <MultiplicationForm />}
        {selectedOperation === "division" && <DivisionForm />}
      </div>
    </div>
  );
}

export default MathContainer;
