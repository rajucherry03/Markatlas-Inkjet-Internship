


import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white w-48 p-4 fixed top-16 left-0 md:left-64 h-[calc(100vh-4rem)] z-10 hidden md:block shadow-md border border-gray-200">
      <ul className="space-y-4">
        <li>
          <Link
            to="/profile/user-profile/personal-info"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Personal Information
          </Link>
        </li>
        <li>
          <Link
            to="/profile/user-profile/employee-info"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Employee Information
          </Link>
        </li>
        <li>
          <Link
            to="/profile/user-profile/job-info"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Job Information
          </Link>
        </li>
        <li>
          <Link
            to="/profile/user-profile/organization-info"
            onClick={toggleSidebar}
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-3 border-b border-gray-200"
          >
            Organization Information
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
