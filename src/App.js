


// // src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminLoginForm from './components/AdminLoginForm';
// import AdminPage from './components/AdminPage';
// import HomePage from './components/HomePage';
// import Login from './components/userpage/Login';
// import ForgotPassword from './components/userpage/ForgotPassword';
// import UserPage from './components/userpage/UserPage'

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} /> {/* Route for Home Page */}
//         <Route path="/admin-login" element={<AdminLoginForm />} /> {/* Route for Admin Login */}
//         <Route path="/login" element={<Login />} /> {/* Route for User Login */}
//         <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Route for Forgot Password */}
//         <Route path="/admin/*" element={<AdminPage />} /> {/* Route for Admin Page */}
//         <Route path="/profile/*" element={<UserPage />} /> {/* Route for User Dashboard */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLoginForm from './components/AdminLoginForm';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import Login from './components/userpage/Login';
import ForgotPassword from './components/userpage/ForgotPassword';
import UserPage from './components/userpage/UserPage';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <header className="fixed top-0 left-0 w-full text-white p-4 z-20">
          <button
            className="md:hidden"
            onClick={() => document.querySelector('.profile-sidebar').classList.toggle('hidden')}
          >
            Toggle Profile
          </button>
        </header>
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Route for Home Page */}
            <Route path="/admin-login" element={<AdminLoginForm />} /> {/* Route for Admin Login */}
            <Route path="/login" element={<Login />} /> {/* Route for User Login */}
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Route for Forgot Password */}
            <Route path="/admin/*" element={<AdminPage />} /> {/* Route for Admin Page */}
            <Route path="/profile/*" element={<UserPage />} /> {/* Route for User Dashboard */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
