import * as React from 'react';
import { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
        
           // console.log('value is:', event.target.value);
      };
      const handleClick = event => {
        event.preventDefault();
        setMessage(message);
       
    };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={message} onChange={handleChange}/>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h1>Message:{message}</h1>
      <Button variant="contained" onClick={handleClick}>show input
        </Button>
<h2>The output is :{message}</h2>
    </Box>
  );
}