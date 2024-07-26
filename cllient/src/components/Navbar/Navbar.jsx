import { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import logo from "../../assets/logo.webp";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import axios from "axios";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [employerDropdown, setEmployerDropdown] = useState(false);
  const [candidateDropdown, setCandidateDropdown] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.removeItem("user");
      localStorage.removeItem("expiresIn");
      dispatch(logout());
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      const response = await axios.get("/user/logout");

      if (!response.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("expiresIn");
        dispatch(logout());
        window.location.href="/login";
        
      }
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.removeItem("expiresIn");
      dispatch(logout());
    }
  };

  return (
    <nav className="bg-white bg-opacity-100 p-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center">
      <div className="flex items-center">
        <img onClick={() => { window.location.href = "/" }} src={logo} alt="logo" title="pinnacle" className="w-[100px] h-[75px] mr-4" />
      </div>

      <ul className="hidden md:flex items-center justify-center  space-x-8 text-gray-800">
        <li className="relative group">
          <a href="#" className="hover:text-gray-600">Employer</a>
          <ul className="absolute left-1/2 transform -translate-x-1/2 top-6 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg rounded-md w-56">
            <li><a href="/executive" className="block px-4 py-2 hover:bg-[#B1C000]">Executive Search</a></li>
            <li><a href="/contingency" className="block px-4 py-2 hover:bg-[#B1C000]">Contingency Recruiting</a></li>
            <li><a href="/contractual" className="block px-4 py-2 hover:bg-[#B1C000]">Contractual Hiring</a></li>
            <li><a href="/hr360" className="block px-4 py-2 hover:bg-[#B1C000]">HR360</a></li>
            <li><a href="/research" className="block px-4 py-2 hover:bg-[#B1C000]">Research & Advisory</a></li>
          </ul>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-gray-600">Candidate</a>
          <ul className="absolute left-1/2 transform -translate-x-1/2 top-6 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg rounded-md w-56">
            <li><a href="/jobs" className="block px-4 py-2 hover:bg-[#B1C000]">Job Board</a></li>
            <li><a href="/login" className="block px-4 py-2 hover:bg-[#B1C000]">Submit your CV</a></li>
          </ul>
        </li>
        <li><a href="/elevate" className="hover:text-gray-600">Elevate</a></li>
       <li><a href="#about" className="hover:text-gray-600">About Us</a></li>
         <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
        {isLoggedIn ? (
          <>
            <li><a href="#" onClick={handleLogout} className="hover:text-gray-600">Logout</a></li>
            <li><Link to="/dashboard" className="hover:text-gray-600 "><CgProfile style={{fontSize:"2rem"}} /></Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="hover:text-gray-600">Login</Link></li>
            <li><Link to="/signup" className="hover:text-gray-600">Signup</Link></li>
          </>
        )}
      </ul>

      <div className="md:hidden">
        <HiMenuAlt4 className="text-gray-800 text-2xl" onClick={() => setToggle(true)} />
        {toggle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white bg-opacity-90 w-64 p-4">
              <HiX className="text-gray-800 text-2xl mb-4" onClick={() => setToggle(false)} />
              <ul className="space-y-4 text-gray-800">
                <li className="relative group">
                  <a href="#" onClick={() => setEmployerDropdown(!employerDropdown)} className="hover:text-gray-600">Employer</a>
                  {employerDropdown && (
                    <ul className="bg-white text-gray-800 mt-2 w-full shadow-lg rounded-md">
                      <li><a href="/executive" className="block px-4 py-2 hover:bg-green-200">Executive Search</a></li>
                      <li><a href="/contingency" className="block px-4 py-2 hover:bg-green-200">Contingency Recruiting</a></li>
                      <li><a href="/contractual" className="block px-4 py-2 hover:bg-green-200">Contractual Hiring</a></li>
                      <li><a href="/hr360" className="block px-4 py-2 hover:bg-green-200">HR360</a></li>
                      <li><a href="/research" className="block px-4 py-2 hover:bg-green-200">Research & Advisory</a></li>
                    </ul>
                  )}
                </li>
                <li className="relative group">
                  <a href="#" onClick={() => setCandidateDropdown(!candidateDropdown)} className="hover:text-gray-600">Candidate</a>
                  {candidateDropdown && (
                    <ul className="bg-white text-gray-800 mt-2 w-full shadow-lg rounded-md">
                      <li><a href="/jobs" className="block px-4 py-2 hover:bg-green-200">Job Board</a></li>
                      <li><a href="/signup" className="block px-4 py-2 hover:bg-green-200">Submit your CV</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/elevate" className="hover:text-gray-600">Elevate</a></li>
                <li><a href="#about" onClick={() => setToggle(false)} className="hover:text-gray-600">About Us</a></li>
                <li><a href="#contact" onClick={() => setToggle(false)} className="hover:text-gray-600">Contact</a></li>
                {isLoggedIn ? (
                  <>
                    <li><a href="#" onClick={handleLogout} className="hover:text-gray-600">Logout</a></li>
                    <li><Link to="/dashboard" className="hover:text-gray-600"><CgProfile  style={{fontSize:"2rem"}} /></Link></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/login" className="hover:text-gray-600">Login</Link></li>
                    <li><Link to="/signup" className="hover:text-gray-600">Signup</Link></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
