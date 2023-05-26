import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CompA from "./component/compA";
// import CompB from "./component/compB";
// import CompC from "./component/compC";
// function App() {
// return (<BrowserRouter>
//   <Routes>
//     <Route path="/" element={<CompA />}/>
//       <Route index element={<CompA />} />
//       <Route path="comp-b" element={<CompB />} /> 
//       <Route path="comp-c" element={<CompC />} /> 
//   </Routes>
// </BrowserRouter>
// import React from 'react';
import LoginPage from './component/loginFormpage';
import RegistrationForm from './component/registrationForm';
import SuccessfulPage from "./component/successfulPage";
import Header from "./header";

const App = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<registrationForm />}/>
        <Route index element={<LoginPage />} />
        <Route index element={<header />} />
        <Route path="/" element={<successfulPage />}/>
        <Route path="RegistrationForm" element={<RegistrationForm />} /> 
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="Header" element={<Header />} />
        <Route path="SuccessfulPage" element={<SuccessfulPage />} />  
    </Routes>
  </BrowserRouter>
    // <>
    //    <LoginPage />S
    //    <RegistrationForm />
    // </>
  );
};
export default App;