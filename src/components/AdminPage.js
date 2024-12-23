// src/components/AdminRoutes.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Main from './Main';
import AddProfile from './AddProfile';
import EmployeeData from './EmployeeData';
import About from './About';

const AdminRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16"> {/* Add padding-top here to avoid overlap */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add-profile/*" element={<AddProfile />} />
            <Route path="/employee-data" element={<EmployeeData />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
