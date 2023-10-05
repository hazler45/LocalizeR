import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import RegisterAsUser from './pages/RegisterAsUser/RegisterAsUser';
import RegisterPageAsUSerContinue from "./pages/RegisterAsUser/RegisterAsUserContinue";
import RegisterUserAsServiceProvider from './pages/RegisterAsServiceProvider/RegisterServiceProvider';

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/registerAsUserContinue" element={<RegisterPageAsUSerContinue/>} />
        <Route path="/registerAsUser" element={<RegisterAsUser/>} />
        <Route path="/registerAsServiceProvider" element={<RegisterUserAsServiceProvider/>} />
      </Routes>
    </>
  );
}

export default App;
