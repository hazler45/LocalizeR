import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import RegisterAsUser from './pages/RegisterAsUser/RegisterAsUser';
import RegisterAsServiceProvider from './pages/RegisterAsServiceProvider/RegisterServiceProvider';
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from './pages/Contact/ContactPage';
import ListRequest from './pages/Dashboard/ServiceProviderDashboard/ListRequest';
import ReviewAllowPage from "./pages/Dashboard/ServiceProviderDashboard/ReviewAllowPage";
import MakeReservationbyUser from './pages/MakeReservation/MakeReservationbyUser';
import MakeReview from './pages/Dashboard/UserDashboard/MakeReview';
import ReviewRequest from "./pages/Dashboard/UserDashboard/ReviewRequest";
function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/registerAsUser" element={<RegisterAsUser/>} />
        <Route path="/registerAsServiceProvider" element={<RegisterAsServiceProvider /> } />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/reservation" element={<MakeReservationbyUser/>} />
        {/* serviceprovider dashboard  */}
        <Route path="/listRequest" element={<ListRequest/>} />
        <Route path="/reviewAllowPage" element={<ReviewAllowPage/>}/>
        {/* user dashboard */}
        <Route path="/reviewRequest" element={<ReviewRequest/>}/>
        <Route path="/makeReview" element={<MakeReview/>}/>
      </Routes>
    </>
  );
}

export default App;