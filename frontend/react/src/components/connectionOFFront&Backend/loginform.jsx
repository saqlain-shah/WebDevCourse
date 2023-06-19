import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const userData = {
        username: username,
        password: password
      };

     console.log(userData)
  
      axios.post('http://localhost:8800/api/auth/sign-in', userData)
        .then(response => {
          // Handle success response
          console.log(response.data);
        })
        .catch(error => {
          // Handle error response
          console.error(error);
        });
  
    
    // Perform login logic, e.g., send data to server
    
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="username" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        
        <label htmlFor="password">Password:</label>
        <input type="pass" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const userData = {
//       email: email,
//       password: password
//     };

//     axios.post('/api/login', userData)
//       .then(response => {
//         // Handle success response
//         console.log(response.data);
//       })
//       .catch(error => {
//         // Handle error response
//         console.error(error);
//       });

//     // Reset form fields
//     setEmail('');
//     setPassword('');
//   };

//   // ... Rest of the component code
// };

// export default LoginForm;
