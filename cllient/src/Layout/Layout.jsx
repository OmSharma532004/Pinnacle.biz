import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from '../utils/PrivateRoutes';
import HaveProfile from '../utils/HaveProfile';
import Navbar from '../components/Navbar/Navbar';
import Login from '../Pages/Auth/Login/Login';
import Signup from '../Pages/Auth/Signup/Signup';
import Profile from '../Pages/Profile/Profile';
import DashBoard from '../Pages/DashBoard/DashBoard';
import MakeProfile from '../Pages/MakeProfile/MakeProfile';
import Plans from '../Pages/Plans/Plans';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import EditProfile from '../Pages/EditProfile/EditProfile';
import OrderHistory from '../Pages/DashBoard/OrderHistory';
import ForgotPassword from '../Pages/Auth/ForgotPassword/ForgotPassword';
import NewHome from '../Pages/Home/NewHome';


const NotFound = () => (
  <div className=' flex items-center text-5xl justify-center min-h-screen flex-col'>
    <h1>404</h1>
    <p>Page not found</p>
    <Link className=' bg-[#B1C000] m-5 p-4 rounded-lg mt-[50px] text-3xl' to='/'>Go back to home</Link>
  </div>
);

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <WhatsAppButton />
      <div className='mt-[67px] lg:mt-[60.8px]'>
        <Routes>
          <Route path="/home" element={<NewHome />} />
          <Route path="/plans" element={<Plans />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<HaveProfile />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/orderhistory" element={<OrderHistory />} />
            </Route>
            <Route path="/createprofile" element={<MakeProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile/:userId" element={<EditProfile />} />
          </Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
