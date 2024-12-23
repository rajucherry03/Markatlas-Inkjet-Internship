

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import UserProfileSidebar from './UserProfileSidebar';
// import About from './About';
// import Employee from './Employee';
// import PersonalInfo from './PersonalInformation'; // Import new component
// import EmployeeInfo from './EmployeeInformation'; // Import new component
// import JobInfo from './Job Information'; // Import new component
// import OrganizationInfo from './OrganizationInformation'; // Import new component

// const AddProfile = () => {
//   return (
//     <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
//       {/* Sidebar container */}
//       <div className="hidden md:block w-48">
//         <UserProfileSidebar />
//       </div>
//       {/* Main content area */}
//       <div className="flex-1 p-5 overflow-auto">
//         <Routes>
//           <Route path="personal-info" element={<PersonalInfo />} />
//           <Route path="employee-info" element={<EmployeeInfo />} />
//           <Route path="job-info" element={<JobInfo />} />
//           <Route path="organization-info" element={<OrganizationInfo />} />
//           <Route path="about" element={<About />} />
//           {/* Add more routes for different pages within the user profile here */}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AddProfile;



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileSidebar from './UserProfileSidebar';
import PersonalInfo from './PersonalInformation';
import EmployeeInfo from './EmployeeInformation';
import JobInfo from './Job Information';
import OrganizationInfo from './OrganizationInformation';
import About from './About';

const AddProfile = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      <ProfileSidebar />
      <div className="flex-1 p-5 overflow-auto">
        <Routes>
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="employee-info" element={<EmployeeInfo />} />
          <Route path="job-info" element={<JobInfo />} />
          <Route path="organization-info" element={<OrganizationInfo />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default AddProfile;
