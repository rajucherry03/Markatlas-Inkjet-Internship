// import React, { useState } from 'react';
// import ProfileSidebar from '../../components/userpage/UserProfileSidebar';
// import Sidebar from '../../components/userpage/UserSidebar';
// import UserNavBar from '../../components/userpage/UserNavBar';
// import PersonalInformation from '../../components/userpage/PersonalInformation';

// const MainLayout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <UserNavBar toggleSidebar={toggleSidebar} />
//       <div className="flex flex-1 mt-16">
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="flex flex-1 ml-64">
//           <ProfileSidebar toggleSidebar={toggleSidebar} />
//           <div className="flex-1 p-6 overflow-auto ml-48">
//             <PersonalInformation />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
