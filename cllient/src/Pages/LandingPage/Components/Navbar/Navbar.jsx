import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import logo from "../../../../assets/logo.webp";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white bg-opacity-70 p-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-[100px] h-[80px] mr-4" />
      </div>

      <ul className="hidden md:flex space-x-12 text-gray-800">
        <li className="relative group">
          <a href="#" className="hover:text-gray-600">Employer</a>
          <ul className="absolute left-1/2 transform -translate-x-1/2 top-6 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg rounded-md w-56">
            <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Executive Search</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Contingency Hiring</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Retained Search</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Contractual Hiring</a></li>
            <li><a href="/hr360" className="block px-4 py-2 hover:bg-green-200">HR360</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Research & Advisory</a></li>
          </ul>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-gray-600">Candidate</a>
          <ul className="absolute left-1/2 transform -translate-x-1/2 top-6 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg rounded-md w-56">
            <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Job Board</a></li>
            <li><a href="#"
            onClick={()=>{
              window.location.href = "/signup"
            }}  className="block px-4 py-2 hover:bg-green-200">Submit your CV</a></li>
            <li><a href="#" onClick={()=>{
              window.location.href = "/elevate"
            }} className="block px-4 py-2 hover:bg-green-200">ELEVATE</a></li>
          </ul>
        </li>
        <li><a href="#about" className="hover:text-gray-600">About Us</a></li>
        <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
      </ul>

      <div className="md:hidden">
        <HiMenuAlt4 className="text-gray-800 text-2xl" onClick={() => setToggle(true)} />
        {toggle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white bg-opacity-90 w-64 p-4">
              <HiX className="text-gray-800 text-2xl mb-4" onClick={() => setToggle(false)} />
              <ul className="space-y-4 text-gray-800">
                <li className="relative group">
                  <a href="#" className="hover:text-gray-600">Employer</a>
                  <ul className="bg-white text-gray-800 mt-2 w-full shadow-lg rounded-md">
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Executive Search</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Contingency Hiring</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Retained Search</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Contractual Hiring</a></li>
                    <li><a href="/hr360" className="block px-4 py-2 hover:bg-green-200">HR360</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Research & Advisory</a></li>
                  </ul>
                </li>
                <li className="relative group">
                  <a href="#" className="hover:text-gray-600">Candidate</a>
                  <ul className="bg-white text-gray-800 mt-2 w-full shadow-lg rounded-md">
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Job Board</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">Submit your CV</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-green-200">ELEVATE</a></li>
                  </ul>
                </li>
                <li><a href="#about" onClick={() => setToggle(false)} className="hover:text-gray-600">About Us</a></li>
                <li><a href="#contact" onClick={() => setToggle(false)} className="hover:text-gray-600">Contact</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
