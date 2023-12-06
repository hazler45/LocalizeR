import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import RegisterAsUser from './pages/RegisterAsUser/RegisterAsUser';
import RegisterAsServiceProvider from './pages/RegisterAsServiceProvider/RegisterServiceProvider';
import RegisterAsServiceProviderContinue from "./pages/RegisterAsServiceProvider/RegisterAsServiceProviderContinue";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/registerAsUser" element={<RegisterAsUser/>} />
         <Route path="/registerAsServiceProvider" element={<RegisterAsServiceProvider /> } />
        <Route path="/registerAsServiceProviderContinue" element={<RegisterAsServiceProviderContinue /> } />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </>
  );
}

export default App;
