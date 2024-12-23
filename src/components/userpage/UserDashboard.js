// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import PersonalInfo from './PersonalInfo';
// import EmployeeInfo from './EmployeeInfo';
// import JobInfo from './JobInfo';
// import OrganizationInfo from './OrganizationInfo';
// import Leave from './Leave';
// import Dashboard from './Dashboard';
// import Attendance from './Attendance';
// import About from './About';

// const ProfileDashboard = () => {
//   return (
//     <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
//       <UserSidebar isOpen={true} toggleSidebar={() => {}} />
//       <div className="flex-1 p-5 overflow-auto">
//         <Routes>
//           <Route path="user-profile/personal-info" element={<PersonalInfo />} />
//           <Route path="user-profile/employee-info" element={<EmployeeInfo />} />
//           <Route path="user-profile/job-info" element={<JobInfo />} />
//           <Route path="user-profile/organization-info" element={<OrganizationInfo />} />
//           <Route path="leave" element={<Leave />} />
//           <Route path="emptab" element={<Dashboard />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default ProfileDashboard;



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import EmployeeInfo from './EmployeeInfo';
import JobInfo from './JobInfo';
import OrganizationInfo from './OrganizationInfo';
import Leave from './Leave';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import About from './About';

const ProfileDashboard = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      <UserSidebar isOpen={true} toggleSidebar={() => {}} />
      <div className="flex-1 p-5 overflow-auto">
        <Routes>
          <Route path="user-profile/personal-info" element={<PersonalInfo />} />
          <Route path="user-profile/employee-info" element={<EmployeeInfo />} />
          <Route path="user-profile/job-info" element={<JobInfo />} />
          <Route path="user-profile/organization-info" element={<OrganizationInfo />} />
          <Route path="leave" element={<Leave />} />
          <Route path="emptab" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileDashboard;
