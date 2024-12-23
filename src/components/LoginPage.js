import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  const handleUserLogin = () => {
    navigate('/user');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleAdminLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Admin Login
          </button>
          <button
            onClick={handleUserLogin}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            User Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
