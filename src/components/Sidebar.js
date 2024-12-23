

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XIcon, HomeIcon, UserAddIcon, UsersIcon, InformationCircleIcon } from '@heroicons/react/outline';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className={`bg-white w-64 h-[calc(100vh-4rem)] p-4 fixed top-16 left-0 ${isOpen ? 'block' : 'hidden'} md:block shadow-md`}>
      <div className="flex justify-end md:hidden mb-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <XIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <ul className="space-y-2">
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/admin" onClick={toggleSidebar}>
            <HomeIcon className="h-5 w-5 text-gray-700 mr-2" />
            Home
          </Link>
        </li>
        <li className="block md:hidden">
          <button onClick={toggleSubmenu} className="w-full text-left py-2 px-4 hover:bg-gray-200 flex justify-between">
            <span className="flex items-center">
              <UserAddIcon className="h-5 w-5 text-gray-700 mr-2" />
              Add Profile
            </span>
            <svg className={`h-5 w-5 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isSubmenuOpen && (
            <ul className="pl-6 space-y-2">
              <li className="py-1 hover:bg-gray-300">
                <Link to="/admin/add-profile/details" onClick={toggleSidebar} className="block text-gray-700">
                  Singel Employee
                </Link>
              </li>
              <li className="py-1 hover:bg-gray-300">
                <Link to="/admin/add-profile/multi" onClick={toggleSidebar} className="block text-gray-700">
                  Multiple Employee
                </Link>
              </li>
              <li className="py-1 hover:bg-gray-300">
                <Link to="/admin/add-profile/employee" onClick={toggleSidebar} className="block text-gray-700">
                  Display Employee
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="hidden md:block">
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/admin/add-profile/details" onClick={toggleSidebar}>
            <UserAddIcon className="h-5 w-5 text-gray-700 mr-2" />
            Add Profile
          </Link>
        </li>
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/admin/employee-data" onClick={toggleSidebar}>
            <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
            Employee Data
          </Link>
        </li>
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/admin/about" onClick={toggleSidebar}>
            <InformationCircleIcon className="h-5 w-5 text-gray-700 mr-2" />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
