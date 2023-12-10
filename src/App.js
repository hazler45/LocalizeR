import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import RegisterAsUser from './pages/RegisterAsUser/RegisterAsUser';
import RegisterUserAsServiceProvider from './pages/RegisterAsServiceProvider/RegisterServiceProvider';
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from './pages/Contact/ContactPage';
import MakeReservationbyUser from './pages/MakeReservation/MakeReservationbyUser';
function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/registerAsUser" element={<RegisterAsUser/>} />
        <Route path="/registerAsServiceProvider" element={<RegisterUserAsServiceProvider/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/reservation" element={<MakeReservationbyUser/>} />
      </Routes>
    </>
  );
}

export default App;
