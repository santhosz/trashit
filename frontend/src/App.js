import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddAddress from "./components/user/AddAddress";
import Commercial from "./components/user/Commercial";
import ConvertCoins from "./components/user/ConvertCoins";
import EWaste from "./components/user/EWaste";
import Footer from "./components/common/Footer";

import ForgotPassword from "./components/auth/ForgotPassword";
import Home from "./components/static/Home";
import Login from "./components/auth/Login";
import MySubmission from "./components/user/MySubmissions";
import Navbar from "./components/common/Navbar";
import Profile from "./components/user/Profile";
import Feedback from './components/user/Feedback';
import Register from "./components/auth/Register";
import Resident from "./components/user/Resident";
import Shop from "./components/user/Shop";
import SubmitWaste from "./components/user/SubmitWaste";
import ViewCoins from "./components/user/ViewCoins";
import Card from "./components/static/Card";
import Cart from "./components/user/Cart1";
import Cart1 from "./components/user/Cart1";
import Job from "./components/user/Job";
import UserManagement from "./components/admin/UserManagement";
import WasteManagement from "./components/admin/WasteManagement";
import Feed from "./components/admin/Feed";
import AdminDashboard from "./components/admin/AdminDashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Determine if Navbar should be shown based on the current route
  const showNavbar = location.pathname !== "/admin-dashboard";

  return (
    <div>
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-coins" element={<ViewCoins totalCoins={100} transactions={[
            { date: '2023-07-28', amount: 50, type: 'Completed Challenge' },
            { date: '2023-07-27', amount: 30, type: 'Submitted Solution' },
            { date: '2023-07-26', amount: 20, type: 'Reviewed Code' },
            { date: '2023-07-25', amount: 40, type: 'Daily Login Bonus' },
            { date: '2023-07-24', amount: 10, type: 'Shared Solution' }
          ]} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mysubmission" element={<MySubmission />} />
          <Route path="/submitwaste" element={<SubmitWaste />} />
          <Route path="/resident" element={<Resident />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/ewaste" element={<EWaste />} />
          <Route path="/cart" element={<Cart1 />} />
          <Route path="/job" element={<Job />} />
          <Route path="/addaddress" element={<AddAddress />} />
        
            <Route path="/feed" element={<Feed />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/waste-management" element={<WasteManagement />} />
            <Route path="/Feedback" element={<Feedback />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/admin-dashboard" element={isLoggedIn ? <AdminDashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
