import React, { useState } from 'react';

export default function Counter({ appName, initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState(appName);

  return (
    <div>
      <input 
        onChange={(e) => setCounterName(e.target.value)}>
      </input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <input 
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input><br />

      {/* Increment Button */}
      <button 
        onClick={() => setCounter((previousState) => previousState + userInput)}>
          Increment by {userInput}
      </button>

      {/* Decrement button */}
      {counter <= 0 ? '' :  
        <button onClick={() => setCounter((previousState) => previousState - userInput)}>
          Decrement by {userInput} 
        </button>}

      {/* Reset button */}
      <button 
        onClick={() => setCounter(0)}>
          Reset
      </button>
    </div>
  );
}
