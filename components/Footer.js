import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
