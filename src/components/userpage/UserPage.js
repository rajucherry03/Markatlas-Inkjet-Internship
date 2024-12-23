



// src/components/AdminRoutes.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './UserNavBar';
import Sidebar from './UserSidebar';
import ProfileSidebar from './UserProfileSidebar';
import PersonalInformation from './PersonalInformation'; 
import Main from './Main';
import Userprofile from './Userprofile';
import About from './About';

const AdminRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <ProfileSidebar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:ml-48">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/user-profile/*" element={<Userprofile />} />
            <Route path="/user-profile/personal-info" element={<PersonalInformation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
