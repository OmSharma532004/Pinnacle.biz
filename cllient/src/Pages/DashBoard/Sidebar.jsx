import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import axios from 'axios';
import { RiMenuUnfold3Line2, RiMenuFold3Line2 } from "react-icons/ri";

const Sidebar = ({ setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
        window.location.reload();
      }
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.removeItem("expiresIn");
      dispatch(logout());
    }
  };

  return (
    <div>
      <div className={`h-screen hidden bg-gray-800 text-white lg:flex flex-col z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isCollapsed ? 'w-16' : 'w-64'}`}>
        {!isCollapsed && (
          <nav className="flex-1 p-4 py-5">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => { setCurrentView('profile') }}
                  className="w-full text-left py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Profile
                </button>
              </li>
              {isLoggedIn ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-2 px-4 rounded-lg hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => { setCurrentView('login') }}
                      className="w-full text-left py-2 px-4 rounded-lg hover:bg-gray-700"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setCurrentView('signup') }}
                      className="w-full text-left py-2 px-4 rounded-lg hover:bg-gray-700"
                    >
                      Signup
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
