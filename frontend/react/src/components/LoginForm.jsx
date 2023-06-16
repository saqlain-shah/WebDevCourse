import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from "axios"
const LoginForm = () => {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8800/api/sign-in', values);
            // Handle successful login response here
            console.log(response.data);
        } catch (error) {
            // Handle error here
            console.error(error);
        }
    };

    return (
        <React.Fragment>

            <form onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Username"
                    type="username"
                    value={values.username}
                    onChange={(e) => setValues(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={(e) => setValues(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </React.Fragment>
    )
};




export default LoginForm;
