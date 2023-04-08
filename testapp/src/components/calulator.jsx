import React, { useState } from 'react';

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  function handleFirstInput(event) {
    setFirstNumber(event.target.value);
  }
  function handleSecondInput(event) {
    setSecondNumber(event.target.value);
  }
  function handleAdd() {
    setResult(parseInt(firstNumber) +parseInt(secondNumber) );
    // setFirstNumber(0)
    // setSecondNumber(0)
  }

  function handleSubtract() {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
    setFirstNumber(0)
    setSecondNumber(0)
  }

  function handleMultiply() {
    setResult(parseInt(firstNumber) * parseInt(secondNumber));
    setFirstNumber(0)
    setSecondNumber(0)
  }

  function handleDivide() {
    setResult(parseInt(firstNumber) / parseInt(secondNumber));
    setFirstNumber(0)
    setSecondNumber(0)
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>Result: {result}</p>
      <input type="text" value={firstNumber} onChange={handleFirstInput} />
      <br />
      <input type="text" value={secondNumber} onChange={handleSecondInput} />
      <br />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
    </div>
  );
}

export default Calculator;
