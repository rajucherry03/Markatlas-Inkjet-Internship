// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import ProfileSidebar from './ProfileSidebar';
// import SingleEmployee from './LoginForm';
// import MultipleEmployees from './MultiUser';
// import DisplayEmployee from './EmployeeData';
// import About from './About';

// const AddProfile = () => {
//   return (
//     <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
//       {/* Sidebar container */}
//       <div className="hidden md:block w-64">
//         <ProfileSidebar />
//       </div>
//       {/* Main content area */}
//       <div className="flex-1 p-5 overflow-auto w-full">
//         <Routes>
//           <Route path="/" element={<p>Select an option from the sidebar.</p>} />
//           <Route path="details" element={<SingleEmployee />} />
//           <Route path="multi" element={<MultipleEmployees />} />
//           <Route path="employee" element={<DisplayEmployee />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AddProfile;



// src/components/AddProfile.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import LoginForm from './LoginForm';
import Employee from './Employee';
import MultiUser from './MultiUser';
import About from './About';  // Import the About component

const AddProfile = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar container */}
      <div className="hidden md:block w-64">
        <ProfileSidebar />
      </div>
      {/* Main content area */}
      <div className="flex-1 p-5 overflow-auto w-52">
        <Routes>
          <Route path="details" element={<LoginForm />} />
          <Route path="multi" element={<MultiUser />} />
          <Route path="employee" element={<Employee />} />
          <Route path="about" element={<About />} />  {/* Add the route for About */}
        </Routes>
      </div>
    </div>
  );
};

export default AddProfile;
