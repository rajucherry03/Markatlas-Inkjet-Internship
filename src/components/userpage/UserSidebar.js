
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
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile" onClick={toggleSidebar}>
            <HomeIcon className="h-5 w-5 text-gray-700 mr-2" />
            Home
          </Link>
        </li>
        <li className="block md:hidden">
          <button onClick={toggleSubmenu} className="w-full text-left py-2 px-4 hover:bg-gray-200 flex justify-between">
            <span className="flex items-center">
              <UserAddIcon className="h-5 w-5 text-gray-700 mr-2" />
              My Profile
            </span>
            <svg className={`h-5 w-5 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isSubmenuOpen && (
            <ul className="pl-6 space-y-2">
              <li className="py-1 hover:bg-gray-300">
                <Link to="/profile/user-profile/personal-info" onClick={toggleSidebar} className="block text-gray-700">
                Personal Information
                </Link>
              </li>
              <li className="py-1 hover:bg-gray-300">
                <Link to="/profile/user-profile/employee-info" onClick={toggleSidebar} className="block text-gray-700">
                Employee Information
                </Link>
              </li>
              <li className="py-1 hover:bg-gray-300">
                <Link to="/profile/user-profile/job-info" onClick={toggleSidebar} className="block text-gray-700">
                Job Information
                </Link>
              </li>
              <li className="py-1 hover:bg-gray-300">
                <Link to="/profile/user-profile/organization-info" onClick={toggleSidebar} className="block text-gray-700">
                Organization Information
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="hidden md:block">
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/user-profile/personal-info" onClick={toggleSidebar}>
            <UserAddIcon className="h-5 w-5 text-gray-700 mr-2" />
            My Profile
          </Link>
        </li>
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/leave" onClick={toggleSidebar}>
            <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
            Leave
          </Link>
        </li>
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/leave" onClick={toggleSidebar}>
            <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/leave" onClick={toggleSidebar}>
            <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
            Attendance
          </Link>
        </li>
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/leave" onClick={toggleSidebar}>
            <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
            Payroll
          </Link>
        </li>
        
        <li>
          <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/about" onClick={toggleSidebar}>
            <InformationCircleIcon className="h-5 w-5 text-gray-700 mr-2" />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;




// src/components/admin/Sidebar.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { XIcon, HomeIcon, UserAddIcon, UsersIcon, InformationCircleIcon } from '@heroicons/react/outline';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

//   const toggleSubmenu = () => {
//     setIsSubmenuOpen(!isSubmenuOpen);
//   };

//   return (
//     <div className={`bg-white w-64 h-[calc(100vh-4rem)] p-4 fixed top-16 left-0 ${isOpen ? 'block' : 'hidden'} md:block shadow-md`}>
//       <div className="flex justify-end md:hidden mb-4">
//         <button onClick={toggleSidebar} className="focus:outline-none">
//           <XIcon className="h-6 w-6 text-gray-700" />
//         </button>
//       </div>
//       <ul className="space-y-2">
//         <li>
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile" onClick={toggleSidebar}>
//             <HomeIcon className="h-5 w-5 text-gray-700 mr-2" />
//             Home
//           </Link>
//         </li>
//         <li className="block md:hidden">
//           <button onClick={toggleSubmenu} className="w-full text-left py-2 px-4 hover:bg-gray-200 flex justify-between">
//             <span className="flex items-center">
//               <UserAddIcon className="h-5 w-5 text-gray-700 mr-2" />
//               My Profile
//             </span>
//             <svg className={`h-5 w-5 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {isSubmenuOpen && (
//             <ul className="pl-6 space-y-2">
//               <li className="py-1 hover:bg-gray-300">
//                 <Link to="/profile/user-profile/personal-info" onClick={toggleSidebar} className="block text-gray-700">
//                 Personal Information
//                 </Link>
//               </li>
//               <li className="py-1 hover:bg-gray-300">
//                 <Link to="/profile/user-profile/employee-info" onClick={toggleSidebar} className="block text-gray-700">
//                 Employee Information
//                 </Link>
//               </li>
//               <li className="py-1 hover:bg-gray-300">
//                 <Link to="/profile/user-profile/job-info" onClick={toggleSidebar} className="block text-gray-700">
//                 Job Information
//                 </Link>
//               </li>
//               <li className="py-1 hover:bg-gray-300">
//                 <Link to="/profile/user-profile/organization-info" onClick={toggleSidebar} className="block text-gray-700">
//                 Organization Information
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="hidden md:block">
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/user-profile/personal-info" onClick={toggleSidebar}>
//             <UserAddIcon className="h-5 w-5 text-gray-700 mr-2" />
//             My Profile
//           </Link>
//         </li>
//         <li>
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/leave" onClick={toggleSidebar}>
//             <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
//             Leave
//           </Link>
//         </li>
//         <li>
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/dashboard" onClick={toggleSidebar}>
//             <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/attendance" onClick={toggleSidebar}>
//             <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
//             Attendance
//           </Link>
//         </li>
//         <li>
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/payroll" onClick={toggleSidebar}>
//             <UsersIcon className="h-5 w-5 text-gray-700 mr-2" />
//             Payroll
//           </Link>
//         </li>
//         <li>
//           <Link className="block py-2 px-4 hover:bg-gray-200 flex items-center" to="/profile/about" onClick={toggleSidebar}>
//             <InformationCircleIcon className="h-5 w-5 text-gray-700 mr-2" />
//             About
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
