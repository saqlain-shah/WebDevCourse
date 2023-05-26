import React, { useState } from 'react';

const FightManagementSystem = () => {
  const [fighters, setFighters] = useState([]);
  const [newFighter, setNewFighter] = useState('');

  const addFighter = () => {
    if (newFighter.trim() !== '') {
      setFighters([...fighters, newFighter]);
      setNewFighter('');
    }
  };

  const removeFighter = (index) => {
    const updatedFighters = [...fighters];
    updatedFighters.splice(index, 1);
    setFighters(updatedFighters);
  };

  return (
    <div>
      <h2>Fight Management System</h2>
      <input
        type="text"
        value={newFighter}
        onChange={(e) => setNewFighter(e.target.value)}
        placeholder="Enter fighter's name"
      />
      <button onClick={addFighter}>Add Fighter</button>
      <ul>
        {fighters.map((fighter, index) => (
          <li key={index}>
            {fighter}
            <button onClick={() => removeFighter(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FightManagementSystem;
