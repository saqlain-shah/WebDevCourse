import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const AccountForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create an object with the form data
    const formData = {
      username,
      email,
      phone,
      password
    };

    // Send a POST request to your backend API endpoint
    axios.post('http://localhost:8800/api/auth/sign-up', formData)
      .then(response => {
        // Handle the response from the backend
        console.log('Account created successfully:', response.data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error creating account:', error);
      });
  };

  return (
    <div className="account-form">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          value={username}
          onChange={handleUsernameChange}
          required
          width="50px"
          margin="normal"
        />
        <br />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          width="50px"
          margin="normal"
        />
        <br />
        <TextField
          id="phone"
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          width="70px"
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
          width="90px"
          margin="normal"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default AccountForm;
