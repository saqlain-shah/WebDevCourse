import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const LoginForm= () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform account creation logic here
        // For example, you can send an API request to create the account
        console.log('Name:', name);
        console.log('Password:', password);
    };

    return ( 
    
        <div className = "account-form" >
        <h2> Loginfoam </h2> 
        <form onSubmit = {handleSubmit }>
        <TextField id = "name"
        label = "Name"
        value = { name }
        onChange = { handleNameChange }
        required Width = "50px"
        margin = "normal" />
        <TextField id = "password"
        label = "Password"
        type = "password"
        value = { password }
        onChange = { handlePasswordChange }
        required Width = "90px"
        margin = "normal"

        />
        <Button type = "submit"
        variant = "contained"
        color = "primary" >
        <a href = 'SucessfulMsg' > Login in </a>
         </Button>

        </form>
          </div>

    );
};

export default LoginForm;