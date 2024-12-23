

import React from 'react';
import { MenuIcon, LogoutIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import logo from './Images/company_logo.jpg';

const NavBar = ({ toggleSidebar }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Define the logout handler
  const handleLogout = () => {
    navigate('/'); // Redirect to the admin login page after logout
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-20 shadow-md">
      <div className="flex items-center">
        <div className="md:hidden mr-4">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <img src={logo} alt="Company Logo" className="h-10 w-40 mr-2" />
      </div>
      <button onClick={handleLogout} className="flex items-center space-x-2 focus:outline-none">
        <LogoutIcon className="h-6 w-6 text-gray-700" />
        <span className="hidden md:inline text-gray-700">Logout</span>
      </button>
    </nav>
  );
};

export default NavBar;
