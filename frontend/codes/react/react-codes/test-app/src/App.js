import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './component/loginFormpage';
import RegistrationForm from './component/registrationForm';
import SuccessfulPage from "./component/successfulPage";

const App = () => {
  return (<><BrowserRouter>
    <Routes>
      <Route path="/" element={<registrationForm />} />
      <Route index element={<LoginPage />} />
      <Route path="/" element={<successfulPage />} />
      <Route path="RegistrationForm" element={<RegistrationForm />} />
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="SuccessfulPage" element={<SuccessfulPage />} />
    </Routes>
  </BrowserRouter><>
    </></>
  );
};
export default App;