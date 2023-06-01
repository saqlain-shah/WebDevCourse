/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function CustomForm() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    function handleSubmit() {
        alert(`User Name is : ${userName}`);
        alert(`Email is : ${email}`);
        console.log(`Email is : ${userName}`);
        console.log(`Email is : ${email}`);
    }

    return (
        <>

            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="userName"
                value={userName}
                onChange={(event) => {
                    setUserName(event.target.value);
                    //console.log(event.target.value)
                    console.log(userName)
                }}
            />
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(email)
                }}


            />

            <Button
                variant="contained"
                onClick={handleSubmit}

            >Submit
            </Button>
        </>
    )
}

