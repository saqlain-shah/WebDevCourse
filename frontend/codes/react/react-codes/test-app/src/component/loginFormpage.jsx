// export default function LoginPage(){
//     return(

//         <h1>component 1</h1>
//     )
// }
// import React, { useState } from 'react';
// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can add your login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div>
//       <h2>Sign Up Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//         <p>Forgot Your Password? <u>Click Here!</u></p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

//import { TextField, Button, Container } from '@material-ui/core';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm">
    <center><form>
      <h1>LOGIN</h1>
        {/* <br></br> */}
      <TextField 
        label="Username"
        variant="outlined"
        value={username}
        margin="normal"
        onChange={handleUsernameChange}
        fullWidth
      />
      <br />
      <br></br>
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
      />
      <br />
      <br></br>
      <Button variant="contained" color="primary" onClick={handleLogin}>
      <a href='successfulPage'>Login</a></Button>
      <br></br>
      <p>Forgot Your Password?<a>Click Here</a></p>
    </form>
    </center>
       </Container>
  );
};

export default LoginForm;