import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CustomForm from "./components/customForm";
// import BoxSx from "./components/calculator";
// import MyButton from "./components/counter";
// import CustomForm from "./components/customForm";
// import List from "./components/map";
// import Profile from "./components/picture";
import AccountForm from "./task/CreateAccount";
import LoginForm from "./task/LoginFoam";
// import SuccessMessage from "./task/SuccessfulMsg";
// import RegistrationForm from "./task/Registration";



function App() {
    return (

        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < AccountForm / > }
        /> <
        Route path = "/"
        element = { < LoginForm / > }
        /> < /
        Routes > <
        /BrowserRouter>


    );

};

export default App;