import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      username,
      password
    };

    // Send a POST request to your backend API endpoint
    axios.post('http://localhost:8800/api/auth/sign-in', formData)
      .then(response => {
        // Handle the response from the backend
        console.log('Login successful:', response.data);
        // Redirect or perform additional logic
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error logging in:', error);
      });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
          width="50px"
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          width="50px"
          margin="normal"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;