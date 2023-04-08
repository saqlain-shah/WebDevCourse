import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function Cal() {
  const [input, setInput] = useState('');

  function handleInput(value) {
    setInput(input + value);
  }

  function handleClear() {
    setInput('');
  }

  function handleCalculate() {
    const result = eval(input);
    setInput(result.toString());
  }

  return (

   
    <div class="box">
        <div class="smallbox">
        <input type="text" class="smallbox" value={input} readOnly />
        </div>
      
    
      <Button class="btnsize" variant="outlined" onClick={() => handleInput('1')}>1</Button>
      <Button class="btnsize" variant="outlined" onClick={() => handleInput('2')}>2</Button>
      <button class="btnsize" onClick={() => handleInput('3')}>3</button>
      <button class="btnsize" onClick={() => handleInput('+')}>+</button>
      <br />
      <button class="btnsize" onClick={() => handleInput('4')}>4</button>
      <button class="btnsize" onClick={() => handleInput('5')}>5</button>
      <button class="btnsize" onClick={() => handleInput('6')}>6</button>
      <button class="btnsize" onClick={() => handleInput('-')}>-</button>
      <br />
      <button class="btnsize" onClick={() => handleInput('7')}>7</button>
      <button class="btnsize" onClick={() => handleInput('8')}>8</button>
      <button class="btnsize" onClick={() => handleInput('9')}>9</button>
      <button class="btnsize" onClick={() => handleInput('*')}>*</button>
      <br />
      <button class="btnsize" onClick={() => handleInput('0')}>0</button>
      <button class="btnsize" onClick={() => handleClear()}>C</button>
      <button class="btnsize" onClick={() => handleCalculate()}>=</button>
      <button class="btnsize" onClick={() => handleInput('/')}>/</button>
    </div>
  );
}


