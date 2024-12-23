import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import ProfileManagement from './ProfileManagement';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState(null);
  const [isProfileSaved, setIsProfileSaved] = useState(false);

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUid(userCredential.user.uid);
      setIsProfileSaved(false); // Ensure profile form shows up
      alert('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleProfileSaved = () => {
    setEmail('');
    setPassword('');
    setUid(null);
    setIsProfileSaved(true); // Hide profile form and show add employee form
  };

  // Style to disable scrolling
  document.body.style.overflow = 'hidden';

  return (
    <div className="container mx-auto mt-5 md:ml-16">
      {/* Adjust margin-left to avoid overlap */}
      <h2 className="mb-4 text-center text-2xl font-bold">Add Employee</h2>
      {!uid && (
        <form onSubmit={handleAddEmployee} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Add Employee
          </button>
        </form>
      )}
      {uid && !isProfileSaved && (
        <ProfileManagement uid={uid} onProfileSaved={handleProfileSaved} />
      )}
    </div>
  );
};

export default LoginForm;
