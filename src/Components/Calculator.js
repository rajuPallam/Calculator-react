
// ====================================
import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  // Handling button clicks
  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  // Result calculations
  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  // Clear Display
  const clearDisplay = () => {
    setDisplay("");
  };

  // Toggle positive/negative sign
  const toggleSign = () => {
    setDisplay((prevDisplay) => {
      if (prevDisplay.startsWith("-")) {
        return prevDisplay.slice(1);
      } else {
        return "-" + prevDisplay;
      }
    });
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Buttons for numbers */}
        {/* ... (existing number buttons) ... */}
        <button className="number" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="number" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="number" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="number" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="number" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="number" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="number" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="number" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="number" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="number" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="number" onClick={() => handleButtonClick(".")}>
          .
        </button>
        {/* <button className="number" onClick={() => handleButtonClick(".")}>
          .
        </button> */}

        {/* Buttons for operators */}
        <button className="operator" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button className="operator" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button className="operator" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <button className="operator" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button className="operator" onClick={() => handleButtonClick("%")}>
          %
        </button>

        
        {/* ... (existing operator buttons) ... */}
        <button className="operator" onClick={toggleSign}>
          +/- 
        </button>

        {/* Other buttons */}
        <button className="clear" onClick={clearDisplay}>
          C
        </button>
        <button className="equals" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;

