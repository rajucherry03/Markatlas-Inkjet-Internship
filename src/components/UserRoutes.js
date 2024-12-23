// src/components/UserRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserPage from './UserPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      {/* Add more user routes here if needed */}
    </Routes>
  );
};

export default UserRoutes;
