import React from "react";

const Navbar = () => {
  return (
    <>
      <h1 className="text-4xl text-red-600 pl-4">Family Wellness</h1>
      <p className="text-xl pt-2 pb-6 pl-4">Massage Therapy</p>
      <nav className="bg-gray-500 text-white w-full">
        <div className="container mx-auto  grid grid-cols-5 text-center">
          <a href="#home" className="bg-red-800 py-3">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 py-3">
            About
          </a>
          <a href="#services" className="hover:text-gray-400 py-3">
            Services
          </a>
          <a href="#faq" className="hover:text-gray-400 py-3">
            FAQ
          </a>
          <a href="#contact" className="hover:text-gray-400 py-3">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
