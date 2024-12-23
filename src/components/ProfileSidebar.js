

import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white w-48 p-4 fixed top-16 left-64 h-[calc(100vh-4rem)] z-10 hidden md:block shadow-md border border-gray-200">
      <ul className="space-y-4">
        <li>
          <Link
            to="/admin/add-profile/details"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Single Employee
          </Link>
        </li>
        <li>
          <Link
            to="/admin/add-profile/multi"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Multiple Employees
          </Link>
        </li>
        <li>
          <Link
            to="/admin/add-profile/employee"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Display Employee
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
