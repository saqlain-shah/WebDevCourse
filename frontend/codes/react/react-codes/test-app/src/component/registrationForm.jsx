// // export default function CompB(){
// //     return(

// //         <h1>component 2</h1>
// //     )
// // }

// import React, { useState } from 'react';
// // import { TextField, Button, Container } from '@material-ui/core';

// const RegistrationForm = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform validation and registration logic here
//     console.log('Registration form submitted!');
//     console.log('Full Name:', fullName);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//          <h2>Online Registration Form</h2>
//       <label>
//         Full Name:
//         <input
//           type="text"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Confirm Password:
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <p>By signing up for Online admission Account , you agree to the Trem and Policy and Services</p>
//       <button type="submit">Create Account</button>  <span>Have an Account ?</span>
//     </form>
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
 import { TextField, Button, Container } from '@material-ui/core';
import { SomeMaterialUIComponent } from '@material-ui/core';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation and registration logic here

    // Reset form fields
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return ( 
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
      <center><h2>Online Registration Form</h2></center>
        <TextField
          label="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
        />
        <TextField
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
        />
        <TextField
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
        />
        <p>By signing up for Online admission Account,you agree to our <u>Privacy Policy</u> and <u>Terms and Services</u></p>
        <br></br>
        <Button type="submit" variant="contained" color="primary">
          Create Account
        </Button><a href='loginPage'><span>Have an Account ?</span></a>
      </form>
    </Container>
  );
};

export default RegistrationForm;