


import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
      <div className="bg-amber-300 text-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-3xl font-bold mb-2">ABOUT MARKATLAS INKJET</h2>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <section className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Markatlas Inkjet, our mission is to empower businesses with innovative and reliable IT solutions. We believe in delivering cutting-edge technologies that help our clients stay ahead of the competition while maximizing their ROI.
          </p>
          <Link to="/mission" className="text-blue-500 hover:underline">LEARN MORE</Link>
        </section>

        <section className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Our Expertise</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team comprises highly skilled and experienced professionals who possess expertise in diverse areas of IT, including software development, web design, cloud computing, and cybersecurity. We stay up-to-date with the latest trends and technologies to ensure that we deliver the best solutions to our clients.
          </p>
          <Link to="/experts" className="text-blue-500 hover:underline">MEET THE EXPERTS</Link>
        </section>

        <section className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">Our Process</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We follow a streamlined and collaborative process to deliver customized IT solutions that meet the unique needs of each of our clients. Our process involves understanding the client's requirements, developing a prototype, testing, and deploying the final solution with ongoing support and maintenance.
          </p>
          <Link to="/process" className="text-blue-500 hover:underline">LEARN MORE</Link>
        </section>
      </div>
    </div>
  );
};

export default About;
