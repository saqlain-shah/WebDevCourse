import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/loginForm';
import MyButton from "./components/button";
import LoginForm from './components/connectionOFFront&Backend/loginform';
import RegistrationForm from './components/connectionOFFront&Backend/Registrationform';

function App() {
  return (
<BrowserRouter>
       <Routes>
    <Route path="/" element={ <MyButton/>}/>
        <Route path="sign-in" element={<LoginForm/>} />
           <Route path="sign-up" element={<RegistrationForm />} />
      
      </Routes>
   </BrowserRouter>
    // <div>
    //   {/* <h1>My App</h1> */}
    //   <RegistrationForm />
    //   <LoginForm />
    //   {/* <RegistrationForm/>
    //   <LoginForm/> */}
    // </div>
  );
}

export default App;

// import RegistrationForm from "./component/RegistrationForm";
// import LoginForm from "./component/loginForm";
//   return (
//  <BrowserRouter>
// //       <Routes>

// //         <Route path="/" element={ <h1>React App</h1>}/>
// //         <Route path="sign-in" element={<LoginForm />} />
// //           <Route path="sign-up" element={<RegistrationForm />} />
      
// //       </Routes>
// //     </BrowserRouter>
//   );
// }

// export default App;

