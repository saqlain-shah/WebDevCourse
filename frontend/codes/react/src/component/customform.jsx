/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function CustomForm() {

    const [userDetail, setUserDetail] = useState({
        username : "",
        email : "",
        fathername : "",
        phonenumber : ""
       });
    // const [email, setEmail] = useState("")
    // const handleChange = (event) => {
    //     const {name , value}=event.target;
    //     setFormData=>({
    //         FormData , [name]: value,
    //     });
    //  };

    //  const handleEmailChange = (event) => {
    //     const {name , value}=event.target.value;
    //     setEmailData=>({
    //         EmailData , [name]: value,
    //     });
    //  };

    const handleUserName = (event) => {
        setUserDetail({...userDetail,username :event.target.value});
     }

     const handleEmail = (event) => {
        setUserDetail({...userDetail,email :event.target.value});
     }

     const handlefathername = (event) => {
        setUserDetail({...userDetail,fathername :event.target.value});
     }

     const handlephonenumber = (event) => {
        setUserDetail({...userDetail,phonenumber :event.target.value});
     }


    // const handleEmail = (event) => {
    //     setEmail(event.target.value);
    //  } 

    function handleSubmit() {
        const{username,email,fathername,phonenumber}= userDetail;
        alert(`User Name  is : ${username}`);
         alert(`Email is : ${email}`);
        alert(`Father name is : ${fathername}`);
         alert(`your phone number is : ${phonenumber}`);

         console.log(`user name is :${username}`)
         console.log(`email  is :${email}`)
         console.log(`father name is :${fathername}`)
         console.log(`phone number is :${phonenumber}`)
    }

    return ( 
        <>

            <TextField 
            id="outlined-basic" 
            label="Outlined"
            variant="outlined" 
            name="userName" 
            value={userDetail.username}
            onChange={handleUserName}
        //     onChange={(event) =>{
        //    setUserName(event.target.value);
        //      console.log(username)
        //     }} 
            />
            
            <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            name="email" 
            value={userDetail.email} 
            onChange={handleEmail}
            // {(event)=>{
            //     setEmail(event.target.value);
            //     console.log(email)
            // }}
            />

         <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            name="fathername" 
            value={userDetail.fathername} 
            onChange={handlefathername}
            // {(event)=>{
            //     setfathername(event.target.value);
            //     console.log(fathername)
            // }}
            />

        <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            name="phonenumber" 
            value={userDetail.phonenumber} 
            onChange={handlephonenumber}
            // {(event)=>{
            //     setphonenumber(event.target.value);
            //     console.log(phonenumber)
            // }}
            />

            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </>
    )
}

