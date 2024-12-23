import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md w-full p-4 fixed top-0 left-0 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Markatlas Inkjet
          </div>
        
        </div>
      </header>

      <main className="flex flex-col items-center justify-center mt-24 md:mt-32 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Welcome to Markatlas Inkjet
        </h1>
        <p className="text-base md:text-lg mb-8 text-gray-600">
          Empowering your digital transformation with cutting-edge technology to drive your business forward.
        </p>
        <div className="space-y-4 mb-12">
          <Link
            to="/admin-login"
            className="bg-blue-500 text-white py-3 px-6 rounded shadow-md hover:bg-blue-600"
          >
            Admin
          </Link>
          <Link
            to="/login"
            className="bg-green-500 text-white py-3 px-6 rounded shadow-md hover:bg-green-600"
          >
            User
          </Link>
        </div>

        <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            About Markatlas Inkjet
          </h2>
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Our Mission</h3>
            <p className="text-gray-600">
              At Markatlas Inkjet, our mission is to help businesses grow by providing innovative IT solutions. We strive to deliver the highest quality products and services that exceed our clients' expectations.
            </p>
            <h3 className="text-xl font-semibold text-gray-700">Our Expertise</h3>
            <p className="text-gray-600">
              We specialize in web development, software development, and mobile app development. Our team of experts has extensive experience in working with various technologies such as PHP, Python, JavaScript, HTML, CSS, and more.
            </p>
            <h3 className="text-xl font-semibold text-gray-700">Our Clients</h3>
            <p className="text-gray-600">
              We have worked with a diverse range of clients from startups to large corporations. Our clients come from various industries including healthcare, finance, education, and more.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} Markatlas Inkjet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
