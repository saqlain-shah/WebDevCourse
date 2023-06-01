// import React from 'react';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
