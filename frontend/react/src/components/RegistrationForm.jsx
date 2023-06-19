import React, { useState } from 'react';
// import axios from 'axios';
const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form submission logic, e.g., send data to server
    
    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegistrationForm;
