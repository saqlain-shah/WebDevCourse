// import React from 'react';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here
    // Validate inputs, check for password match, etc.
    // You can make an API call to register the user or perform any other necessary actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        type="password"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Create an Account
      </Button>
    </form>
  );
};

export default RegistrationPage;