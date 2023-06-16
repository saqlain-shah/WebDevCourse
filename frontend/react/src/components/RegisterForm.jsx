import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from "axios"
const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create an object with the form data
        const formData = {
            username,
            email,
            phone,
            password,
        };

        // Handle registration logic here
        try {
            const response = await axios.post('http://localhost:8800/api/auth/sign-up', formData);
            // Handle successful registration response here
            console.log(response.data);
        } catch (error) {
            // Handle error here
            console.error(error);
        }

    };




    return (

        <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Register
            </Typography>
            <TextField
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Phone"
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>


    );
};

export default RegisterForm;
